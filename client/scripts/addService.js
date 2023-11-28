import fs from "fs";
import path from "path";
import readlineSync from "readline-sync";

// Function to prompt for user input
function promptUserInput(prompt) {
  return readlineSync.question(prompt);
}

// Prompt user for file name
const fileName = promptUserInput("Enter file name: ");

// Validate file name
if (!fileName) {
  console.error("Please provide a valid file name.");
  process.exit(1);
}

// Prompt user for type prefix
const typePrefix = promptUserInput("Enter type prefix: ");

// Validate type prefix
if (!typePrefix) {
  console.error("Please provide a valid type prefix.");
  process.exit(1);
}

// Get the directory path of the current module
const currentModulePath = new URL(import.meta.url).pathname;
const currentModuleDir = path.dirname(currentModulePath);

// Assuming the src folder is at the root level of your project
const projectRootDir = path.resolve(currentModuleDir, "../");

const servicesDirectory = path.join(projectRootDir, "src", "store", "services");

// Check if the services directory exists
if (!fs.existsSync(servicesDirectory)) {
  console.error("Services directory does not exist.");
  process.exit(1);
}

// Create the thunk file
const thunkContent = `import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from "../store";

import axios from 'axios';

import { BASE_URL } from "~/config/variables";

export const ${typePrefix} = createAsyncThunk(
  '${fileName}/${typePrefix}',
  async (_, { getState }) => {
    const state = getState() as RootState; // Get access to state variables
    try {
      const response = await axios.get(\`\${BASE_URL}/\`);
    } catch (error) {
      // handle error
    } finally {
      // handle end request
      // * store.dispatch(toggleLoading(false));
    }
  },
);
`;

const thunkFilePath = path.join(servicesDirectory, `${fileName}.tsx`);
fs.writeFileSync(thunkFilePath, thunkContent);

console.log(`Thunk '${fileName}' created successfully.`);
