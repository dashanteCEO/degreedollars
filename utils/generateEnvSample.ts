import fs from "fs/promises";
const MAIN_DIR = __dirname + "/..";

const generateSampleEnvContent = (fileContent: string) => {
  fileContent += "This was edited";
  // Trim the text
  fileContent = fileContent.trim();
  // Split by the new lines and trim line and extract the keys
  fileContent = fileContent
    .split("\n")
    .map((l) => (l.split("=")[0] += "="))
    .join("\n");
  return fileContent;
};

const generateEnvSample = async () => {
  // STEP 1: READ THE MAIN DIRECTORY
  const main_directory = await fs.readdir(MAIN_DIR, "utf-8");
  const hasEnvFile = main_directory.includes(".env");
  if (!hasEnvFile) return console.log("NO ENV FILE FOUND");
  // STEP 2: READ THE ENV FILE IF PRESENT
  let envFile = await fs.readFile(`${MAIN_DIR}/.env`, "utf-8");
  // STEP 3: READ THE SAMPLE ENV FILE IF PRESENT
  const hasSampleEnv = main_directory.includes(`.env.sample`);
  let sampleEnv: string;
  // This only runs if the sample env file is present
  if (hasSampleEnv) {
    // Reading the contents of the sample env file
    sampleEnv = await fs.readFile(`${MAIN_DIR}/.env.sample`, "utf-8");
    // Generating the markup that will be written to the sample env file
    const sampleContent = generateSampleEnvContent(envFile);
    // Checking if the markup is the same as the sampleEnv file, if it is, then we return the function
    if (sampleContent === sampleEnv)
      return console.log("NO BLUEPRINT GENERATED. CONTENT WAS THE SAME");
  } else {
    // If it doesn't exist, we generate the markup
    const sampleContent = generateSampleEnvContent(envFile);
    // Write the markup to the file.
    await fs.writeFile(`${MAIN_DIR}/.env.sample`, sampleContent, {
      encoding: "utf-8",
    });
  }
};

export default generateEnvSample;
