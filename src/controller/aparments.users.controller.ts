import { RequestHandler } from "express";
import { isValidObjectId } from '../helpers'
import {Aparment, ApartmentModel} from '../schemas/apartment.model'

/**
 * @typedef StandardResponse
 * @property {boolean} 	success.required - Operation result
 * @property {string} 	error - Error (optional).
 */

/**
 * @typedef Apartment
 * @property {ObjectId} aparment_id - Apartment indentifier.
 * @property {string} 	city_id - Aparment's city ID.
 * @property {string} 	owner_user_id - Aparment's owner ID.
 * @property {integer} 	size - Aparment's size in square meters (m^2).
 * @property {integer} 	rooms_number - Aparment's rooms number.
 * @property {integer} 	baths_number - Aparment's baths number.
 * @property {string} 	address - Aparment's address.
 */


/**
 * Get all user's apartments, for an user with given id.
 * @route GET /api/user/:id_user/apartments
 * @group Apartments - Apartments and User-related operations.
 * @param {string} id_user.query.required - User identifier.
 * @returns {Array<Apartment>} 200 - Apartment array.
 * @returns {StandardResponse.model} 400 - Bad request
 * @returns {StandardResponse.model} 500 - Internal Server Error
 */

export const getApartmentsOfUserwithId:RequestHandler = async (req,res) => {
	let userID = req.params.id_user;
	if (!isValidObjectId(userID)) {
		res.status(400).json({ success: false, error: "invalid id received" })
		return;
	}

	if (userID) {
		try {
			var findOptions = {owner_user_id: userID}

			// Se comprueba si existe el path param city ID, ampliable a seguir mirando en el futuro.
			let cityID = req.params.city;
			if (cityID) { findOptions = {...findOptions, ...{city_id: cityID}} }

			console.log(findOptions)

			let aparments = await ApartmentModel.find(findOptions).exec();		
			res.status(200).json(aparments);
		} catch (error) {
			res.status(500).json({success: false, error: error })
		}
	} else {
		res.status(400).json({ success: false, error: "ID param is required" })
	}
}

/**
 * Get specific user's specific apartment, for an user with given id and an apartment with given id.
 * @route GET /api/user/:id_user/apartments
 * @group Apartments - Apartments and User-related operations.
 * @param {string} id_user.query.required - User identifier.
 * @returns {Apartment.model.} 200 - Aparment.
 * @returns {StandardResponse.model} 400 - Bad request
 * @returns {StandardResponse.model} 500 - Internal Server Error
 */

export const getApartmentWithIdOfUserwithId:RequestHandler = async (req,res) => {
	let userID = req.params.id_user;
	let apartmentID = req.params.id_apartment;
	
	if (!isValidObjectId(userID) || !isValidObjectId(apartmentID)) {
		res.status(400).json({ success: false, error: "invalid IDs received" })
		return;
	}

	if (userID && apartmentID) {
		try {
			let aparment = await ApartmentModel.find({_id: apartmentID, owner_user_id: userID}).exec();		
			res.status(200).json(aparment);
		} catch (error) {
			res.status(500).json({ success: false, error: error })
		}
	} else{
		res.status(400).json({ success: false, error: "ID params are required" })
	}
}
