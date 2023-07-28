const mongoose = require('mongoose');

//Servicio-ip-puerto-nombreBD
const uri = process.env.MONGO_DB;

const conn = async () => {
  await mongoose.connect(uri);
  console.log('conecction mongo running');
}

conn().catch(error => console.error('Error connecting with mongo',error));
