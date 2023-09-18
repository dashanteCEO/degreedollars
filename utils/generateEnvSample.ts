import fs from "fs/promises";
const MAIN_DIR = __dirname + "/..";

const generateSampleEnvContent = (fileContent: string) => {
  // Trim the text
  let content: string | string[] = fileContent.trim();
  // Split by the new lines and trim line and extract the keys
  content = content
    .split("\n")
    .map((l) => {
      let [key] = l.split("=");
      key += "=";
      return key;
    })
    .join("\n");
  return content;
};

const generateEnvSample = async () => {
  // STEP 1: READ THE MAIN DIRECTORY
  const main_directory = await fs.readdir(MAIN_DIR, "utf-8");
  const hasEnvFile = main_directory.includes(".env");
  // STEP 2: READ THE ENV FILE IF PRESENT
  let envFile: string;
  if (!hasEnvFile) return console.log("NO ENV FILE DETECTED!");
  envFile = await fs.readFile(`${MAIN_DIR}/.env`, "utf-8");
  // STEP 3: READ THE SAMPLE ENV FILE IF PRESENT
  const hasSampleEnv = main_directory.includes(`${MAIN_DIR}/.env.sample`);
  let sampleEnv: string;
  sampleEnv = await fs.readFile(`${MAIN_DIR}/.env`, "utf-8");
  console.log(generateSampleEnvContent(sampleEnv));
  if (hasSampleEnv) {
    // We basically generate the markup for the file. if it matches the existing sample, then we return
  }
  // STEP 4: EXTRACT THE KEYS FROM THE ENV FILE
  // STEP 5: FORMAT THE STRING RETURNED INTO: \nKEY=
  // STEP 6: IF THE CONTENTS OF THE ENV SAMPLE ARE THE SAME, THEN EXIT THE FUNCTION
  // STEP 7: WRITE CONTENTS TO FILE
  // STEP 8: LOG SUCCESSFUL MESSAGE
};

generateEnvSample();
