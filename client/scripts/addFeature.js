import fs from "fs";
import path from "path";
import readlineSync from "readline-sync";

// Function to prompt for user input
function promptUserInput(prompt) {
  return readlineSync.question(prompt);
}

// Prompt user for feature name
const featureName = process.argv[2] || promptUserInput("Enter feature name: ");

if (!featureName) {
  console.error("Please provide a feature name.");
  process.exit(1);
}

// Get the directory path of the current module
const currentModulePath = new URL(import.meta.url).pathname;
const currentModuleDir = path.dirname(currentModulePath);

// Assuming the src folder is at the root level of your project
const projectRootDir = path.resolve(currentModuleDir, "../");

const featureDirectory = path.join(projectRootDir, "src", "store", "features", featureName);

// Check if the feature directory already exists
if (fs.existsSync(featureDirectory)) {
  console.error(`Feature '${featureName}' already exists.`);
  process.exit(1);
}

// Create the feature directory
fs.mkdirSync(featureDirectory, { recursive: true });

// Create the module file
const moduleContent = `
import { createSlice } from "@reduxjs/toolkit";

interface ${featureName}Props {}

const initialState: ${featureName}Props = {};

const ${featureName}Slice = createSlice({
  name: "${featureName}",
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export const {} = ${featureName}Slice.actions;

export default ${featureName}Slice.reducer;
`;

const moduleFilePath = path.join(featureDirectory, "module.tsx");
fs.writeFileSync(moduleFilePath, moduleContent);

console.log(`Feature '${featureName}' created successfully.`);

// Modify src/store/store.tsx
const storeFilePath = path.join(projectRootDir, "src", "store", "store.ts");
const storeContent = fs.readFileSync(storeFilePath, "utf-8");

// Add the import statement for the new module
const newImportStatement = `import ${featureName}Reducer from "./features/${featureName}/module";`;

if (!storeContent.includes(newImportStatement)) {
  const importStatementsMatch = /import .* from "\.\/features\/.*\/module";/g;
  const existingImports = storeContent.match(importStatementsMatch) || [];
  const lastImport = existingImports[existingImports.length - 1] || "";

  const modifiedStoreContent = storeContent.replace(
    lastImport,
    `${lastImport}\n${newImportStatement}`
  );

  // Add the new module to the reducer object
  const reducerObjectMatch = /reducer: {([^}]+)}/;
  const reducerObject = reducerObjectMatch.exec(modifiedStoreContent)[1];
  const newReducerObject = `${reducerObject.trimEnd()},\n    ${featureName.toLowerCase()}: ${featureName}Reducer\n  `;

  const finalStoreContent = modifiedStoreContent.replace(
    reducerObjectMatch,
    `reducer: {${newReducerObject}}`
  );

  // Write the modified content back to the store file
  fs.writeFileSync(storeFilePath, finalStoreContent);

  console.log(`Imported '${featureName}' into store.`);
} else {
  console.log(`'${featureName}' already imported in store.`);
}
