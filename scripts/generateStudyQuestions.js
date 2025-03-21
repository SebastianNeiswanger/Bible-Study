/**
 * Generate study questions for a Bible book
 * 
 * @param {string} bookName - The name of the Bible book
 * @returns {string[]} Array of study questions appropriate for the book
 */
async function generateStudyQuestions(bookName) {
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
            return ["Error: Unable to load Bible data"];
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
        
        // Common questions for any book
        const commonQuestions = [
            "What is the main message of this book?",
            "How does this book contribute to the overall biblical narrative?",
            "What does this book teach about God's character?",
            "What key lessons can we apply from this book today?"
        ];
        
        // If book data isn't found, return common questions
        if (!bookData || bookData.testament === "Unknown") {
            return commonQuestions;
        }
        
        // Testament-specific questions
        const testamentQuestions = bookData.testament === "Old Testament" 
            ? [
                "How does this book point forward to Christ?",
                "What covenant promises are revealed or fulfilled in this book?",
                "How does this book fit into Israel's historical development?"
            ]
            : [
                "How does this book relate to Old Testament themes or prophecies?",
                "What aspects of Christ's character or work are emphasized?",
                "What does this book teach about life in God's kingdom?"
            ];
        
        // Type-specific questions
        let typeQuestions = [];
        
        switch(bookData.type) {
            case "Pentateuch":
                typeQuestions = [
                    "What laws or commandments are emphasized in this book?",
                    "How does this book establish the covenant relationship between God and Israel?",
                    "What patterns or types foreshadow Christ and the New Covenant?"
                ];
                break;
            case "Historical":
                typeQuestions = [
                    "What historical lessons can be drawn from the events in this book?",
                    "How do the leaders in this book demonstrate faith or failure?",
                    "How does God's sovereignty work through human actions in this narrative?"
                ];
                break;
            case "Poetic":
                typeQuestions = [
                    "What literary devices and imagery are used in this book?",
                    "How do the emotions expressed in this book reflect authentic faith?",
                    "What aspects of worship and spiritual life are emphasized?"
                ];
                break;
            case "Prophetic":
            case "Major Prophets":
            case "Minor Prophets":
                typeQuestions = [
                    "What sins or covenant violations does this prophet address?",
                    "What call to repentance is issued in this book?",
                    "What future hope or restoration is promised?"
                ];
                break;
            case "Gospel":
                typeQuestions = [
                    "What unique perspective does this gospel provide on Jesus' life and ministry?",
                    "Who is the intended audience, and how does that shape the presentation?",
                    "What key teachings or parables are emphasized in this gospel?"
                ];
                break;
            case "Pauline Epistle":
            case "General Epistle":
            case "Epistle":
                typeQuestions = [
                    "What specific issues or problems in the church is this letter addressing?",
                    "How does the author connect doctrine with practical Christian living?",
                    "What instructions for church life and organization are given?"
                ];
                break;
            case "Apocalyptic/Prophetic":
                typeQuestions = [
                    "What symbols are used in this book and what might they represent?",
                    "How does this book offer hope to believers facing persecution?",
                    "What future events or promises are revealed?"
                ];
                break;
        }
        
        // Combine and return questions
        return [...commonQuestions, ...testamentQuestions, ...typeQuestions];
    } catch (error) {
        console.error(`Error in generateStudyQuestions: ${error.message}`);
        return ["Error generating study questions"];
    }
}

module.exports = generateStudyQuestions; 