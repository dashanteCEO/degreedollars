import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "production"] }),
  MONGO: str(),
  MONGO_PASSWORD: str({ default: "" }),
  PORT: port({ default: 3000 }),
});
