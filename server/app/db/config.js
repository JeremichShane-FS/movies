import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: \t\t ${db.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

export default connectDB;
