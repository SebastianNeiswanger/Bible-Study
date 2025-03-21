/**
 * Get Bible books by type
 * 
 * @param {string} type - The book type to filter by (e.g., "Gospel", "Epistle", "Pentateuch")
 * @returns {string[]} Array of Bible book names of the specified type
 */
async function getBibleBooksByType(type) {
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
            return [];
        }
        
        // Default to empty string if not provided
        type = type || "";
        
        // Return all books if no type specified
        if (!type.trim()) {
            return Object.keys(bibleData);
        }
        
        // Filter books by type
        const books = [];
        
        Object.entries(bibleData).forEach(([bookName, bookData]) => {
            if (bookData.type === type) {
                books.push(bookName);
            }
        });
        
        return books;
    } catch (error) {
        console.error(`Error in getBibleBooksByType: ${error.message}`);
        return [];
    }
}

module.exports = getBibleBooksByType; 