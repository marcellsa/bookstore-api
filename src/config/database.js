import mongoose from "mongoose";

const connectToDatabase = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default connectToDatabase;