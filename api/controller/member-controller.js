import Friend from "../models/friend-model.js";
import Member from "../models/member-model.js"

export const newMember = async (req, res, next) => {
  try {
    const { name, description, yearOfJoin, avatar, tag } = req.body;
    const member = new Member({ name, description, yearOfJoin, avatar, tag })
    await member.save();

    res.status(201).json('Member Created Successfully!!!')
  } catch (error) {
    next(error)
  }
}
export const newFriendMember = async (req, res, next) => {
  try {
    const { name, description, yearOfJoin, avatar, tag } = req.body;
    const member = new Friend({ name, description, yearOfJoin, avatar, tag })
    await member.save();

    res.status(201).json('Friend Created Successfully!!!')
  } catch (error) {
    next(error)
  }
}

export const getMembers = async (req, res, next) => {
  try {
    const members = await Member.find()

    const sortedMembers = members.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

    res.status(201).json(sortedMembers)
  } catch (error) {
    next(error)
  }
}
export const getFriends = async (req, res, next) => {
  try {
    const friend = await Friend.find()

    const sortedFriends = friend.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

    res.status(201).json(sortedFriends)
  } catch (error) {
    next(error)
  }
}


export const getMemberById = async (req, res, next) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return next(errorHandler(404, 'Member not found!'));
    }
    res.status(200).json(member);
  } catch (error) {
    next(error);
  }
};

export const getFriendsById = async (req, res, next) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      return next(errorHandler(404, 'Friend not found!'));
    }
    res.status(200).json(friend);
  } catch (error) {
    next(error);
  }
};
export const deleteMember = async (req, res, next) => {
  const member = await Member.findById(req.params.id);

  if (!member) {
    return next(errorHandler(404, 'Member not found!'));
  }

  try {
    await Member.findByIdAndDelete(req.params.id);
    res.status(200).json('Member has been deleted!');
  } catch (error) {
    next(error);
  }
};