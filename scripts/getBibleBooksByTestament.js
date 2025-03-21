/**
 * Get Bible books by testament
 * 
 * @param {string} testament - The testament to filter by ("Old Testament" or "New Testament")
 * @returns {string[]} Array of Bible book names in the specified testament
 */
async function getBibleBooksByTestament(testament) {
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
        testament = testament || "";
        
        // Return all books if no testament specified
        if (!testament.trim()) {
            return Object.keys(bibleData);
        }
        
        // Filter books by testament
        const books = [];
        
        Object.entries(bibleData).forEach(([bookName, bookData]) => {
            if (bookData.testament === testament) {
                books.push(bookName);
            }
        });
        
        return books;
    } catch (error) {
        console.error(`Error in getBibleBooksByTestament: ${error.message}`);
        return [];
    }
}

module.exports = getBibleBooksByTestament; 