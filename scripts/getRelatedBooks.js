/**
 * Get related Bible books
 * 
 * @param {string} bookName - The name of the Bible book
 * @returns {string[]} Array of related book names
 */
async function getRelatedBooks(bookName) {
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
        
        // Get the book data
        const normalizedName = bookName ? bookName.trim() : "";
        let bookData;
        
        // If we have a direct match
        if (bibleData[normalizedName]) {
            bookData = bibleData[normalizedName];
        } else {
            // Try to find a case-insensitive match
            const allBookNames = Object.keys(bibleData);
            const matchedBook = allBookNames.find(name => 
                name.toLowerCase() === normalizedName.toLowerCase()
            );
            
            if (matchedBook) {
                bookData = bibleData[matchedBook];
            }
        }
        
        // If book data isn't found, return empty array
        if (!bookData || bookData.testament === "Unknown") {
            return [];
        }
        
        // Collect related books
        const relatedBooks = [];
        
        // Search through all books
        Object.keys(bibleData).forEach(otherBookName => {
            // Skip the current book
            if (otherBookName === bookName) return;
            
            const otherBook = bibleData[otherBookName];
            
            // Check for matches on various criteria
            const sameTestament = otherBook.testament === bookData.testament;
            const sameType = otherBook.type === bookData.type;
            const sameAuthor = otherBook.author === bookData.author && bookData.author !== "Unknown";
            const sameTimePeriod = otherBook.time === bookData.time && bookData.time !== "Unknown";
            
            // Books with multiple matching criteria are related
            if ((sameTestament && sameType) || sameAuthor || sameTimePeriod) {
                relatedBooks.push(otherBookName);
            }
        });
        
        return relatedBooks;
    } catch (error) {
        console.error(`Error in getRelatedBooks: ${error.message}`);
        return [];
    }
}

module.exports = getRelatedBooks; 