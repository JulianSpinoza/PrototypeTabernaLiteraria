import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        dbName: process.env.MONGO_DATABASE_NAME,
      }
    );
    console.log("🟢 MongoDB connected");
    console.log(
      "✅ Conectado exitosamente a la base de datos:",
      mongoose.connection.name,
    );
  } catch (error) {
    console.error("🔴 MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
