# Assignment-1 
1. Why subsequent calls to require("./data.json") do not return the newly modified content:
ans =  When you modify data.json while the application is running, subsequent calls to require("./data.json") might not return the updated content because Node.js caches modules in require.cache after the first load.
2. How Node.js handles required modules:First Load (Cache Miss):
ans = When require() is called for the first time, Node.js reads the file from the disk, parses the JSON content into a JavaScript object, and stores the resulting module object in its internal memory cache (require.cache) using the absolute file path as the key.
Subsequent Loads (Cache Hit): On subsequent calls to require(), Node.js skips reading the file from the disk entirely. Instead, it instantly returns the cached reference directly from memory, which optimizes performance by avoiding repeated disk I/O.
3. How to bypass or fix this behavior:
ans = If an application needs to read dynamically updated data while running, developers can use one of the following approaches:
Use the File System module:
Use fs.readFileSync or fs.readFile combined with JSON.parse() to read and parse the file fresh from disk every time.
Clear the module cache manually: Explicitly delete the module from the cache before requiring it again using delete require.cache[require.resolve("./data.json")];
