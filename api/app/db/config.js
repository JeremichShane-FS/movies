import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: \t\t ${db.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
