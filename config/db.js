const mongoose = require("mongoose");

const DB = process.env.DATABASE;
console.log("bbb", DB);
console.log("POrt in DB.js: ", process.env.PORT); //ouput: undefined
console.log("DATABASE", process.env.DATABASE);

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
    });
    console.log(
      `mongooose is connected ${conn.connection.host} ${conn.connection.db}`
        .cyan.italic
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDb;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const DATABASE =
//       "mongodb://localhost:27017/NewUser" || process.env.DATABASE_LOCAL;

//     const conn = await mongoose.connect(DATABASE, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`Mongoose is connected, ${conn.connection.host}`);
//   } catch (err) {
//     console.error(`SOmething is   happend in ${err.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;
