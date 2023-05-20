const mongoose = require('mongoose');

            //Servicio-ip-puerto-nombreBD
const uri = "mongodb://127.0.0.1:27017/db_moreuse"

const conn = async () => {
  await mongoose.connect(uri);
  console.log('conecction mongo running');
}

conn().catch(error => console.error('Error connetion with mongo',error));
