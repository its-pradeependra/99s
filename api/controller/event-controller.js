import Event from '../models/event-model.js';
import { errorHandler } from '../utils/error.js';

export const createEvent = async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    return res.status(201).json(event);
  } catch (error) {
    next(error);
  }

};

export const deleteEvent = async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(errorHandler(404, 'Event not found!'));
  }

  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json('Event has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return next(errorHandler(404, 'Event not found!'));
    }
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

export const getAllEvent = async (req, res, next) => {
  try {
    const event = await Event.find({})

    return res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};
