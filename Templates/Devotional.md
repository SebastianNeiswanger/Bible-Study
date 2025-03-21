---
tags:
  - devotional
  - scripture/${book.toLowerCase().replace(/\s+/g, "-")}
date: ${date}
scripture: "${scriptureReference}"
book: "${book}"
chapter: "${chapter}"
verse: "${verse}"
completed: false
---

# Devotional - ${displayDate}

## Scripture: ${scriptureReference}

\`\`\`button
name Read on BibleGateway (ESV)
type link
action https://www.biblegateway.com/passage/?search=${encodeURIComponent(scriptureReference)}&version=ESV
\`\`\`

\`\`\`button
name Read on BibleHub
type link
action https://biblehub.com/${book.toLowerCase()}/${chapter}${verse ? "-" + verse : ""}.htm
\`\`\`

\`\`\`button
name Add to Reading Log
type command
action Templater: Create new note from template
templater true
template ReadingLog
folder Reading Log/${tp.date.now("YYYY-MM")}
filename ${scriptureReference} Reading - ${date}
\`\`\`

### Scripture Text

> [ESV] 

## Notes

### Observations
- What does the passage say?
- What are the key words, phrases, or ideas?
- What is the context of this passage?

### Interpretation
- What does this passage mean?
- What theological truths are conveyed?
- How does this passage connect to the overall biblical narrative?

### Application
- How does this truth apply to my life?
- What action should I take based on this passage?
- How should this reshape my thinking or behavior?

## Prayer

### Adoration
_Expressing praise and worship to God for who He is_

### Confession
_Acknowledging sin and seeking forgiveness_

### Thanksgiving
_Expressing gratitude for God's blessings and work in my life_

### Supplication
_Bringing requests to God_

## Further Study

### Cross-References

### Word Study

### Commentary Insights

\`\`\`button
name Mark Complete
type command
action Templater: Create new note from template
templater true
template README
replace true
\`\`\`

<%*
// Initialize variables
const date = tp.date.now("YYYY-MM-DD");
const displayDate = tp.date.now("MMMM D, YYYY");

// Get the scripture reference from filename or prompt
let scriptureReference = tp.file.title;
if (!scriptureReference || scriptureReference === "Untitled" || scriptureReference === "Devotional") {
    scriptureReference = await tp.system.prompt("Enter scripture reference (e.g., John 3:16)", "");
}

// Extract book, chapter, verse from reference
let book = "", chapter = "", verse = "";
const referenceMatch = scriptureReference.match(/(\d?\s?[A-Za-z]+)\s*(\d+)(?::(\d+(?:-\d+)?))?/);
if (referenceMatch) {
    book = referenceMatch[1].trim();
    chapter = referenceMatch[2];
    verse = referenceMatch[3] || "";
}

try {
    // Run connection test
    const connectionTest = await tp.user.testConnection();
    if (!connectionTest.success) {
        console.error("Bible data loading issue:", connectionTest);
    }

    // Get Bible book data if available
    let bookData = {};
    if (book) {
        bookData = await tp.user.getBibleBookData(book);
    }

    // Generate template content
    tR += `---
tags:
  - devotional
  - scripture/${book.toLowerCase().replace(/\s+/g, "-")}
date: ${date}
scripture: "${scriptureReference}"
book: "${book}"
chapter: "${chapter}"
verse: "${verse}"
completed: false
---

# Devotional - ${displayDate}

## Scripture: ${scriptureReference}

\`\`\`button
name Read on BibleGateway (ESV)
type link
action https://www.biblegateway.com/passage/?search=${encodeURIComponent(scriptureReference)}&version=ESV
\`\`\`

\`\`\`button
name Read on BibleHub
type link
action https://biblehub.com/${book.toLowerCase()}/${chapter}${verse ? "-" + verse : ""}.htm
\`\`\`

\`\`\`button
name Add to Reading Log
type command
action Templater: Create new note from template
templater true
template ReadingLog
folder Reading Log/${tp.date.now("YYYY-MM")}
filename ${scriptureReference} Reading - ${date}
\`\`\`

### Scripture Text

> [ESV] 

## Notes

### Observations
- What does the passage say?
- What are the key words, phrases, or ideas?
- What is the context of this passage?

### Interpretation
- What does this passage mean?
- What theological truths are conveyed?
- How does this passage connect to the overall biblical narrative?

### Application
- How does this truth apply to my life?
- What action should I take based on this passage?
- How should this reshape my thinking or behavior?

## Prayer

### Adoration
_Expressing praise and worship to God for who He is_

### Confession
_Acknowledging sin and seeking forgiveness_

### Thanksgiving
_Expressing gratitude for God's blessings and work in my life_

### Supplication
_Bringing requests to God_

## Further Study

### Cross-References

### Word Study

### Commentary Insights

\`\`\`button
name Mark Complete
type command
action Templater: Create new note from template
templater true
template README
replace true
\`\`\`