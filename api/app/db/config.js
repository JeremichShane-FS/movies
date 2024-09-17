import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.MONGODB_URI);

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: \t\t ${db.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
