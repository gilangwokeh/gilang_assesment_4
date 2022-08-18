require("dotenv").config()
  exports.DB = process.env.APP_DB,
  exports.SECRET= process.env.APP_SECRET,
  exports.PORT = process.env.APP_PORT 
