const tinify = require("tinify");
tinify.key = process.env.TINYPNG_API_KEY;

async function compressImage(buffer) {
  try {
    const source = tinify.fromBuffer(buffer);
    const compressedBuffer = await source.toBuffer();
    return compressedBuffer;
  } catch (error) {
    console.error("Error compressing image with TinyPNG:", error);
    throw error;
  }
}

module.exports = compressImage ;
