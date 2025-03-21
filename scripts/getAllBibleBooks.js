/**
 * Get all Bible book names
 * 
 * @returns {string[]} Array of all Bible book names
 */
async function getAllBibleBooks() {
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
        
        // Return all book names
        return Object.keys(bibleData);
    } catch (error) {
        console.error(`Error in getAllBibleBooks: ${error.message}`);
        return [];
    }
}

module.exports = getAllBibleBooks; 