import mongoose from 'mongoose';

const friendSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tag: {
      type: String,
    },
    yearOfJoin: {
      type: Number,
       required: true
    },
    avatar: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
  },
  { timestamps: true }
);

const Friend = mongoose.model('Friend', friendSchema);

export default Friend;