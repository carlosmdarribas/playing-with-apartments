import { RequestHandler } from "express";
import { User, UserModel } from '../schemas/user.model'

import { isValidObjectId } from '../helpers'

/**
 * @typedef User
 * @property {ObjectId} id - User's ID.
 * @property {string} username - User's username.
 * @property {string} name - User's name
 * @property {string} surname - User's surname
 * @property {string} email - User's email
*/

/**
 * Get all users information
 * @route GET /api/users
 * @group User - User-related operations.
 * @returns {Array<User>} 200 - Users array.
 * @returns {object} 500 - Internal server error
*/

export const getAllUsers:RequestHandler = async (req, res) => {
    try {
        let users = await UserModel.find({}).exec();
		res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}


/**
 * Get specific user info with given id.
 * @route GET /api/user/:id_user
 * @group User - User-related operations.
 * @param {string} id.query.required - Prayer identifier.
 * @returns {User.model} 200 - User Token.
 * @returns {object} 500 - Internal server error
*/

export const getUserInfoWithId:RequestHandler = async (req, res) => {
    let id = req.params.id;

	if (!isValidObjectId(id)) {
		res.status(400).json({ success: false, error: "invalid id received" })
		return;
	}

	if(id) {
		try {
			let place = await UserModel.find({_id: id}).exec();		
			
			if (place.length == 0) {   res.status(404).send() } 
			else {                     res.status(200).json(place[0]); }
		} catch (error) {
			res.status(500).json({ success: false, error: error })
		}
	} else{
		res.status(400).json({ success: false, error: "ID param is required" })
	}
}