import { Router } from 'express';

import {getApartmentWithIdOfUserwithId, getApartmentsOfUserwithId} from '../controller/aparments.users.controller'
import {getAllUsers, getUserInfoWithId} from '../controller/users.controller'
import {getAllCities} from '../controller/cities.controller'

const router = Router();

/*
* User
*/
router.get('/api/users', getAllUsers)
router.get('/api/users/:id_user', getUserInfoWithId)

/*
* Apartments
*/
router.get('/api/users/:id_user/apartments', getApartmentsOfUserwithId)
router.get('/api/users/:id_user/apartments/:id_apartment', getApartmentWithIdOfUserwithId)

/*
* 	Cities
*/
router.get('/api/cities', getAllCities)

export default router;