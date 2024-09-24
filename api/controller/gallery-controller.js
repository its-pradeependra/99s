import Gallery from "../models/gallery-model.js"

export const newImage = async (req, res, next) => {
  try {
    const { image } = req.body;
    const gallery = new Gallery({ image })
    await gallery.save();

    res.status(201).json('Image Created Successfully!!!')
  } catch (error) {
    next(error)
  }
}

export const getGallery = async (req, res, next) => {
  try {
    const gallery = await Gallery.find()

    res.status(201).json(gallery)
  } catch (error) {
    next(error)
  }
}

export const deleteImage = async (req, res, next) => {
  const gallery = await Gallery.findById(req.params.id);

  if (!gallery) {
    return next(errorHandler(404, 'Image not found!'));
  }

  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.status(200).json('Image has been deleted!');
  } catch (error) {
    next(error);
  }
};