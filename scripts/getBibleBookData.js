/**
 * Get Bible book data
 * 
 * @param {string} bookName - The name of the Bible book
 * @returns {Object} Book data including testament, type, author, etc.
 */
async function getBibleBookData(bookName) {
    try {
        // Get the bibleData.json file
        const bibleDataPath = 'scripts/bibleData.json';
        const bibleDataFile = app.vault.getAbstractFileByPath(bibleDataPath);
        let bibleData = {};
        
        if (bibleDataFile) {
            const bibleDataContent = await app.vault.read(bibleDataFile);
            bibleData = JSON.parse(bibleDataContent);
        } else {
            console.error("Bible data file not found at path:", bibleDataPath);
            return {
                testament: "Unknown",
                type: "Unknown",
                author: "Unknown",
                time: "Unknown",
                audience: "Unknown",
                chapters: 0,
                verses: 0,
                keyVerse: "",
                locations: [],
                figures: [],
                themes: [],
                keyEvents: [],
                context: "",
                keyWords: [],
                theologicalConcepts: []
            };
        }
        
        // Handle inconsistent book name input
        const normalizedName = bookName ? bookName.trim() : "";
        
        // If we have a direct match
        if (bibleData[normalizedName]) {
            return bibleData[normalizedName];
        }
        
        // Try to find a case-insensitive match
        const allBookNames = Object.keys(bibleData);
        const matchedBook = allBookNames.find(name => 
            name.toLowerCase() === normalizedName.toLowerCase()
        );
        
        if (matchedBook) {
            return bibleData[matchedBook];
        }
        
        // If no match found, return default values
        return {
            testament: "Unknown",
            type: "Unknown",
            author: "Unknown",
            time: "Unknown",
            audience: "Unknown",
            chapters: 0,
            verses: 0,
            keyVerse: "",
            locations: [],
            figures: [],
            themes: [],
            keyEvents: [],
            context: "",
            keyWords: [],
            theologicalConcepts: []
        };
    } catch (error) {
        console.error(`Error in getBibleBookData: ${error.message}`);
        
        // Return default values on error
        return {
            testament: "Unknown",
            type: "Unknown",
            author: "Unknown",
            time: "Unknown",
            audience: "Unknown",
            chapters: 0,
            verses: 0,
            keyVerse: "",
            locations: [],
            figures: [],
            themes: [],
            keyEvents: [],
            context: "",
            keyWords: [],
            theologicalConcepts: []
        };
    }
}

module.exports = getBibleBookData; 