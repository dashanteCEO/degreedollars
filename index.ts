import dotenv from "dotenv";
import mongoose from "mongoose";
import generateEnvSample from "./utils/generateEnvSample";
dotenv.config();
import env from "./env";
import app from "./app";

if (env.NODE_ENV === "development") generateEnvSample();
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
