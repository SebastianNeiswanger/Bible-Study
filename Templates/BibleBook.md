<%*
// Initialize variables
let bookName = tp.file.title;
if (!bookName || bookName === "Untitled" || bookName === "BibleBook") {
    bookName = await tp.system.prompt("Which Bible book?");
}

try {
    // Run connection test
    const connectionTest = await tp.user.testConnection();
    if (!connectionTest.success) {
        console.error("Bible data not loaded properly:", connectionTest);
    }

    // Get book data
    const bookData = await tp.user.getBibleBookData(bookName);

    // Set up template data
    const testament = bookData.testament !== "Unknown" ? bookData.testament : "Old Testament";
    const bookType = bookData.type !== "Unknown" ? bookData.type : "";
    const author = bookData.author !== "Unknown" ? bookData.author : "";
    const time = bookData.time !== "Unknown" ? bookData.time : "";
    const audience = bookData.audience !== "Unknown" ? bookData.audience : "";
    const chapters = bookData.chapters || "";
    const verses = bookData.verses || "";
    const keyVerse = bookData.keyVerse || "";

    // Generate template content
    tR += `---
tags:
  - bible-book
  - ${testament.toLowerCase().replace(" ", "-")}
  - ${bookType.toLowerCase()}
cssclass: bible-book
testament: ${testament}
book_type: ${bookType}
author: ${author}
time_period: ${time}
audience: ${audience}
chapters: ${chapters}
total_verses: ${verses}
key_verse: ${keyVerse}
---

# ${bookName}

>[!summary] Quick Info
>- **Testament**: ${testament}
>- **Category**: ${bookType}
>- **Author**: ${author}
>- **Time Period**: ${time}
>- **Audience**: ${audience}
>- **Chapters**: ${chapters}
>- **Verses**: ${verses}
>- **Key Verse**: ${keyVerse}

## Quick Actions

\`\`\`button
name Read in BibleGateway
type link
action https://www.biblegateway.com/passage/?search=${encodeURIComponent(bookName)}&version=ESV
\`\`\`

\`\`\`button
name View Timeline
type command
action Templater: Create new note from template
templater true
template Timeline
folder Timelines
filename ${bookName} Timeline
\`\`\`

\`\`\`button
name Add Character Profile
type command
action Templater: Create new note from template
templater true
template CharacterProfile
folder Characters
\`\`\`

## Book Information

**Book**: ${bookName}
**Testament**: ${testament}
**Category**: ${bookType}
**Author**: ${author}
**Time Period**: ${time}
**Audience**: ${audience}
**Chapters**: ${chapters}
**Verses**: ${verses}
**Key Verse**: ${keyVerse}

## Historical Context

${bookData.context || "Historical context of the book..."}

## Chapters

${Array.from({length: parseInt(chapters) || 0}, (_, i) => `- [[${bookName} ${i+1}]]`).join('\n') || "List of chapters..."}

## Key Passages

- 

## Key Figures

${bookData.figures && bookData.figures.length > 0 ? bookData.figures.map(figure => `- [[${figure}]]`).join('\n') : "- List key figures in the book..."}

## Key Locations

${bookData.locations && bookData.locations.length > 0 ? bookData.locations.map(location => `- [[${location}]]`).join('\n') : "- List key locations in the book..."}

## Timeline

- 

## Themes and Theology

${bookData.themes && bookData.themes.length > 0 ? bookData.themes.map(theme => `- ${theme}`).join('\n') : "- List main themes..."}

## Resources

- `;

    // Move file to Bible Books folder if not already there
    const currentPath = tp.file.path(true);
    if (!currentPath.includes("Bible Books/")) {
        const targetFolder = "Bible Books";
        const newPath = `${targetFolder}/${tp.file.title}.md`;
        const targetFile = app.vault.getAbstractFileByPath(newPath);
        
        if (!targetFile) {
            await app.fileManager.renameFile(tp.file.find_tfile(), newPath);
        }
    }
} catch (error) {
    console.error("Error in BibleBook template:", error);
    tR += `---
tags:
  - bible-book
---

# ${bookName}

>[!error] Error Loading Bible Data
>There was an error loading Bible data. Please check the console for more information.

Error: ${error.message}`;
}
%> 