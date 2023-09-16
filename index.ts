import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import env from "./env";
import app from "./app";

const { PORT } = env;
// Database connection
let mongoString = env.MONGO;
// If the database password has not already been specified, then set it.
if (env.MONGO.includes("<password>"))
  mongoString = env.MONGO.replace("<password>", env.MONGO_PASSWORD);

// This starts the server
const initializeApplication = async () => {
  // 1. Commence Database Connection
  const { connection } = await mongoose.connect(mongoString);
  // 2. Log Successful message to the console
  console.log(`Successfully connected to '${connection.name}' database`);
  // 3. Starting app on given port
  app.listen(PORT, () => console.log(`Listening for requests on port ${PORT}`));
};

initializeApplication();
