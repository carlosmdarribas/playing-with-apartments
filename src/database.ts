import mongoose from "mongoose";
import config from './config'

var db : any;


(async function (): Promise<void> {

	const uri : string = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`

	try {
	    db = mongoose.connect(uri, { useNewUrlParser: true });
	    console.log("Conexion correcta a DB")
	} catch (err) {
	  console.log(err);
	}

})()

export default db;