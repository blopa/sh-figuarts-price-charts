const fs = require("fs");
const path = require("path");

// Load JSON data from an external file
const inputFilePath = path.join(__dirname, "figuarts_products_prices.json");
let data;
try {
    const rawData = fs.readFileSync(inputFilePath, "utf-8");
    data = JSON.parse(rawData);
} catch (err) {
    console.error("Failed to load or parse the input JSON file:", err);
    process.exit(1);
}

// Ensure the 'asin' folder exists
const outputDir = path.join(__dirname, "asin");
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Collect all ASIN codes
const asinCodes = [];

// Process each item in the array
for (const item of data) {
    const asin = item.ASIN;
    if (!asin) {
        console.error("ASIN missing for an item, skipping...");
        continue;
    }

    asinCodes.push(asin);
    const filePath = path.join(outputDir, `${asin}.json`);

    try {
        fs.writeFileSync(filePath, JSON.stringify(item, null, 2), "utf-8");
        console.log(`File created: ${filePath}`);
    } catch (err) {
        console.error(`Failed to write file for ASIN ${asin}:`, err);
    }
}

// Create the index.json file with all ASIN codes
const indexFilePath = path.join(outputDir, "index.json");
try {
    fs.writeFileSync(indexFilePath, JSON.stringify(asinCodes, null, 2), "utf-8");
    console.log(`Index file created: ${indexFilePath}`);
} catch (err) {
    console.error("Failed to write index file:", err);
}

console.log("All files processed.");
