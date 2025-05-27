const cloudinary = require('../utils/cloudinary');

async function getImagesFromFolder(folderPath) {
  try {
    const res = await cloudinary.search
      .expression(`folder:${folderPath}`)
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();

    return res.resources.map(img => ({
      url_image: img.secure_url,
      public_id: img.public_id,
      folder: img.folder,
      type: null,
      titulo: null,
      descripcion: null,
    }));
  } catch (err) {
    console.error('Error al obtener imágenes de Cloudinary:', err);
    return [];
  }
}

module.exports = { getImagesFromFolder };
