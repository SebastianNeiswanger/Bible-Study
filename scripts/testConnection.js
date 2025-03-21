/**
 * Tests if the connection to user scripts is working and provides diagnostic info
 * 
 * @returns {Object} Diagnostic information about connections and data loading
 */
async function testConnection() {
    try {
        // Get the bibleData.json file
        const bibleDataPath = 'scripts/bibleData.json';
        const bibleDataFile = app.vault.getAbstractFileByPath(bibleDataPath);
        let bibleData = {};
        let jsonExists = !!bibleDataFile;
        
        if (jsonExists) {
            try {
                const bibleDataContent = await app.vault.read(bibleDataFile);
                bibleData = JSON.parse(bibleDataContent);
                console.log("Bible data loaded successfully from JSON file");
            } catch (error) {
                console.error("Failed to load Bible data from JSON:", error);
            }
        } else {
            console.error("Bible data file not found at path:", bibleDataPath);
        }
        
        // Check if we have Bible data loaded
        const dataLoaded = Object.keys(bibleData).length > 0;
        
        // Log diagnostic information
        console.log("App root path:", app.vault.adapter.basePath);
        console.log("Bible data loaded:", dataLoaded);
        console.log("JSON file exists:", jsonExists);
        console.log("Book count:", Object.keys(bibleData).length);
        
        return {
            success: dataLoaded,
            message: dataLoaded 
                ? "Bible Data Script Connection Successful! ✅" 
                : "Bible data not loaded, but connection works ⚠️",
            details: {
                dataLoaded,
                jsonFileExists: jsonExists,
                bookCount: Object.keys(bibleData).length
            }
        };
    } catch (error) {
        console.error("Test connection error:", error);
        return {
            success: false,
            message: "Connection test failed: " + error.message
        };
    }
}

module.exports = testConnection; 