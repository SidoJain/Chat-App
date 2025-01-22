import User from '../models/user.model.js';
import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const getUsers = async (req, res) => {
	try {
		const loggedInUser = req.user._id;
		const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select('-password');
		res.status(200).json(allUsers);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};

export const changeName = async (req, res) => {
	try {
		let { id, fullname } = req.body;
		fullname = titleCase(fullname.trim());
		await User.updateOne({ _id: id }, { fullname });

		const user = await User.findById(id).select('-password');
		res.status(200).json({
			message: 'User logged in successfully!',
			user,
		});
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

export const deleteAccount = async (req, res) => {
	try {
		const { id } = req.body;
		await User.findByIdAndDelete(id);
		await Message.deleteMany({ $or: [{ senderId: id }, { receiverId: id }] });
        await Conversation.deleteMany({ participants: id });
		res.status(200).json({ message: 'User deleted successfully!' });
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}
