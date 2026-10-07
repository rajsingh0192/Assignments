const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

console.log("--- Demonstrating require.cache Deletion ---");

// 1. First require: Loads and caches data.json
let data1 = require('./data.json');
console.log("Before modification:", data1);

// 2. Modify file on disk
const updatedContent = JSON.stringify({ status: "updated", version: 2 }, null, 2);
fs.writeFileSync(filePath, updatedContent, 'utf-8');

// 3. Without clearing cache (returns old cached version)
let data2 = require('./data.json');
console.log("After modification (without clearing cache):", data2);

// 4. Clear the module from require.cache using require.resolve
const resolvedPath = require.resolve('./data.json');
delete require.cache[resolvedPath];

// 5. Require again after clearing cache (now sees the new file!)
let data3 = require('./data.json');
console.log("After clearing cache and requiring again:", data3);