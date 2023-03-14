export function makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 } 

 export function isParamValid(element?: any) {
    return !(element == null || element == undefined)
 }

 // Nota: se le tiene que añadir el punto.
 export function getFileExtension(filename: string) : string {
   return filename.substring(filename.lastIndexOf(".")+1)
 }

 import mongoose from "mongoose";
 export function isValidObjectId(element: string) {
    console.log("[isValidObjectId] Objeto "+element+" es: "+ mongoose.isValidObjectId(element))
   return mongoose.isValidObjectId(element);
 }