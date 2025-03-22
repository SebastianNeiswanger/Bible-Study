---
tags: [church-notes, sermon, <%* 
// Add dynamic day-of-week tag
tR += moment().format("dddd").toLowerCase();
%>, <%* 
// Add event tag
let event = await tp.system.suggester(["Sunday Morning", "Sunday Evening", "Wednesday Night", "Holiday"], ["Sunday Morning", "Sunday Evening", "Wednesday Night", "Holiday"]);
tR += event ? event.toLowerCase().replace(/\s+/g, "-") : "service";
%>]
date: <% tp.date.now("YYYY-MM-DD") %>
speaker: <%* tR += await tp.system.prompt("Speaker name?", "Pastor Schuler"); %>
event: <%* tR += event; %>
bible_references: [<%* 
let keyPassage = await tp.system.prompt("Key scripture passage text?", "");
if (keyPassage) {
    tR += `"${keyPassage}"`;
}
%>]
sermon_theme: <%*
let theme = await tp.system.prompt("Sermon theme?", "");
await tp.file.rename(theme);
tR += theme;
%>
service_time: <%* 
// Auto detect time of day and suggest service time
let hour = moment().hour();
if (hour < 12) {
    tR += "Morning Service";
} else {
    tR += "Evening Service";
}
%>
livestream: <%* 
// Store these values directly for later access
const saved_livestream = await getYouTubeLiveLink();
tR += saved_livestream;

// We'll add the YouTube live link if available through our script
async function getYouTubeLiveLink() {
    try {
        // Logging for debugging
        console.log("Available tp.user functions:", Object.keys(tp.user || {}));
        
        // Use our templaterYouTube functions if available
        if (tp.user && tp.user.templaterYouTube) {
            console.log("templaterYouTube found:", typeof tp.user.templaterYouTube);
            
            // First try to get a live stream
            if (typeof tp.user.templaterYouTube.getLivestream === 'function') {
                console.log("getLivestream function found");
                const liveUrl = tp.user.templaterYouTube.getLivestream(tp);
                console.log("getLivestream result:", liveUrl);
                if (liveUrl && typeof liveUrl === 'string' && liveUrl.trim() !== '') {
                    return liveUrl;
                }
            }
            
            // Then try to get a scheduled stream if available
            if (typeof tp.user.templaterYouTube.getNextScheduledStream === 'function') {
                console.log("getNextScheduledStream function found");
                const scheduledUrl = tp.user.templaterYouTube.getNextScheduledStream(tp);
                console.log("getNextScheduledStream result:", scheduledUrl);
                if (scheduledUrl && typeof scheduledUrl === 'string' && scheduledUrl.trim() !== '') {
                    return scheduledUrl;
                }
            }
            
            // If we get here, try the main function directly
            if (typeof tp.user.templaterYouTube === 'function') {
                console.log("Trying main templaterYouTube function");
                const mainUrl = tp.user.templaterYouTube(tp);
                console.log("Main function result:", mainUrl);
                if (mainUrl && typeof mainUrl === 'string' && mainUrl.trim() !== '') {
                    return mainUrl;
                }
            }
        }
        
        // Otherwise prompt for a link
        console.log("Prompting for URL");
        const result = await tp.system.prompt(
            "Add YouTube livestream link? Leave empty to auto-fetch or paste a direct link", 
            ""
        );
        
        if (result && result.trim() !== '') {
            return result.trim();
        } else {
            return "https://www.youtube.com/@FirstBaptistNilesOhio/live";
        }
    } catch (error) {
        console.error("Error fetching YouTube stream:", error);
        return "https://www.youtube.com/@FirstBaptistNilesOhio/live";
    }
}
%>
show_embed: true
cssclass: church-notes
---

# <%* 
// Initialize variables for the note
let dayOfWeek = moment().format("dddd");
let speaker = tp.frontmatter.speaker || "Pastor Schuler";
let sermonTheme = tp.frontmatter.sermon_theme || "";

// Make sure we can access livestream, key passage
window.saved_livestream = saved_livestream;
window.keyPassage = keyPassage;

// Generate note title
let noteTitle = "";
if (sermonTheme) {
    noteTitle = sermonTheme;
} else {
    noteTitle = `${dayOfWeek} Service (${moment().format("MMMM D, YYYY")})`;
    if (speaker) {
        noteTitle += ` - ${speaker}`;
    }
}

// Auto-suggest related topics based on Bible book
let bookTopics = {
    "Genesis": ["Creation", "Fall", "Covenant", "Patriarchs"],
    "Exodus": ["Deliverance", "Law", "Tabernacle", "Wilderness"],
    "Psalms": ["Worship", "Lament", "Praise", "Prayer"],
    "Isaiah": ["Prophecy", "Messiah", "Judgment", "Restoration"],
    "Matthew": ["Kingdom", "Discipleship", "Parables", "Sermon on the Mount"],
    "John": ["Belief", "Signs", "I AM statements", "Holy Spirit"],
    "Romans": ["Justification", "Grace", "Faith", "Law"],
    "Revelation": ["End Times", "Worship", "Judgment", "New Creation"]
};

// Try to extract the Bible book from the reference
let book = "";
let bibleBooks = Object.keys(bookTopics);

if (keyPassage) {
    for (let bibleBook of bibleBooks) {
        if (keyPassage.includes(bibleBook)) {
            book = bibleBook;
            break;
        }
    }
}

// Suggest topics based on the book
let relatedTopics = "";
if (book && bookTopics[book]) {
    let topics = bookTopics[book];
    // Select 2 random topics
    let selectedTopics = [];
    while (selectedTopics.length < 2 && topics.length > 0) {
        let randIndex = Math.floor(Math.random() * topics.length);
        selectedTopics.push(topics[randIndex]);
        topics.splice(randIndex, 1);
    }
    
    relatedTopics = "- " + selectedTopics.join("\n- ");
} else {
    relatedTopics = "- Topic 1\n- Topic 2";
}

// Generate questions based on day of week
let defaultQuestions = {
    "Sunday": ["1. How does this message connect to last week's sermon?", 
               "2. What one truth from this sermon can I apply this week?"],
    "Wednesday": ["1. How does this midweek message build on Sunday's teaching?", 
                  "2. What practical steps can I take based on this message?"],
    "Default": ["1. What was the main thesis of the sermon?", 
                "2. What scripture passages were most impactful?"]
};

let questionsText = "";
let questionSet = defaultQuestions[dayOfWeek] || defaultQuestions["Default"];
questionsText = questionSet.join("\n\n");

let title = tp.file.title;
let date = moment().format("YYYY-MM-DD");
tR += noteTitle;
await tp.file.cursor(1);
%>

>[!summary] Quick Info
>- **Theme:** <%* tR += theme; %>
>- **Speaker:** <%* tR += speaker; %>
>- **Event:** <%* tR += event; %>
>- **Date:** <%* tR += moment().format("dddd, MMMM Do, YYYY"); %>
>- **Scripture:** <%* tR += keyPassage || ""; %>

## :LiYoutube: Livestream
<%* 
// Make sure we have a defined livestream URL
let churchUrl = "https://www.youtube.com/@FirstBaptistNilesOhio";
let livestreamUrl = window.saved_livestream || "";

// Debug information
let debugInfo = "";
debugInfo += `Saved livestream: ${typeof window.saved_livestream}: ${JSON.stringify(window.saved_livestream)}\n`;
if (tp.frontmatter) {
    debugInfo += `Frontmatter keys: ${Object.keys(tp.frontmatter).join(", ")}\n`;
    debugInfo += `Livestream value: ${typeof tp.frontmatter.livestream}: ${JSON.stringify(tp.frontmatter.livestream)}\n`;
}
if (tp.user) {
    debugInfo += `User functions: ${Object.keys(tp.user).join(", ")}\n`;
    if (tp.user.templaterYouTube) {
        debugInfo += `templaterYouTube type: ${typeof tp.user.templaterYouTube}\n`;
        if (typeof tp.user.templaterYouTube === 'function') {
            debugInfo += `templaterYouTube methods: ${Object.keys(tp.user.templaterYouTube).join(", ")}\n`;
        }
    } else {
        debugInfo += "templaterYouTube not found\n";
    }
}

// First check if we have a valid livestream URL
if (livestreamUrl && typeof livestreamUrl === 'string' && livestreamUrl.trim() !== '') {
    // Add a note about whether it's live or scheduled
    if (livestreamUrl.includes('/streams')) {
        tR += "⏰ **Scheduled Stream** - Church has a scheduled livestream. The link will update when it goes live.\n\n";
    } else if (livestreamUrl.includes('/live')) {
        tR += "🔴 **Live Stream** - Church is currently live or will be streaming to this URL.\n\n";
    }
    
    // Create the vid code block with the URL
    tR += "```vid\n" + livestreamUrl + "\n```";
} else {
    // No livestream URL provided
    tR += "No livestream URL available. [Check the church YouTube channel](https://www.youtube.com/@FirstBaptistNilesOhio)";
    
    // Add debug info in a collapsible section
    tR += "\n\n<details><summary>Debug Information</summary>\n\n```\n" + debugInfo + "\n```\n</details>";
}
%>

## :LiNotebookPen: Notes

1. 

## :LiGitMerge: Personal Application
> [!question] How can I apply this message to my life?

```meta-bind-button
label: 🙏 Add to Prayer List
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/Prayer.md
  folderPath: Prayers
  fileName: <%* tR += "Prayers from " + date; %>
```

- [ ] 

## :LiMessageCircleQuestion: Questions for Further Study
<%* tR += questionsText; %>

```meta-bind-button
label: 📚 Start Study on Topic
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/Devotional.md
  folderPath: Devotional
  fileName: <%* tR += "Study - " + theme; %>
```

## :LiGitCompare: Related Topics
<%* tR += relatedTopics; %>

```meta-bind-button
label: 🔍 Research Topic
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/dictionary/
```

```meta-bind-button
label: 📺 Open YouTube Channel
style: default
class: button-red
actions:
- type: open
  link: https://www.youtube.com/@FirstBaptistNilesOhio
```
