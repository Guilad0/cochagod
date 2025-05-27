const service = require("../services/imgService");
const compressImage = require("../services/tinifyService");
const cloudinary = require("../utils/cloudinary");
const streamifier = require("streamifier");


module.exports = {
  async getByBusiness(req, res) {
    const data = await service.getByBusiness(req.params.businessId);
    res.json(data);
  },

  async create(req, res) {
    const data = await service.create(req.body);
    res.status(201).json(data);
  },

  async remove(req, res) {
    await service.delete(req.params.id);
    res.json({ message: "Deleted" });
  },

async  uploadImage(req, res) {
  try {
    const { business_id, titulo, descripcion, carpeta, type } = req.body;
    const file = req.file;

    if (!file || !business_id || !carpeta) {
      return res.status(400).json({ message: 'Faltan datos requeridos.' });
    }

    const compressedBuffer = await compressImage(file.buffer);

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: carpeta, resource_type: 'image' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(compressedBuffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    const savedImage = await service.create({
      business_id,
      url_image: result.secure_url,
      public_id: result.public_id,
      folder: result.folder,
      type: type || null,
      titulo: titulo || null,
      descripcion: descripcion || null,
    });

    res.status(201).json(savedImage);
  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).json({ message: 'Error al subir imagen.' });
  }
}
  
};
