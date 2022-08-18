const cors = require('cors');
const exprees = require('express');
const body = require("body-parser");
const passport = require("passport")
const { connect } = require('mongoose');
const { success, error } = require("consola")
const { DB, PORT } = require("./config/index");
const app = exprees();
app.use(cors());

app.use(body.json());
app.use(passport.initialize());
require("./middleware/passport")(passport)

//user middleware
app.use("/users", require('./routes/users'))
const startApp = async () => {
  try {
    await connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => success({ message: `Successfully connection with the database \n ${DB}`, badge: true }))

    await app.listen(PORT, () => success({ message: `server started server on port ${PORT}`, badge: true }))
  } catch (error) {
    ((err) => error({ message: `unable to connection the database  \n ${err}`, badge: true }))
    startApp()
  }
}
startApp()