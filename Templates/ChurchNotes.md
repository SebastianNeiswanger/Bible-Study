---
tags: [church-notes, sermon, <% tp.file.cursor(1) %>, <%* 
// Add dynamic day-of-week tag
tR += moment().format("dddd").toLowerCase();
%>]
date: <% tp.date.now("YYYY-MM-DD") %>
speaker: <% tp.file.cursor(2) %>
event: <% tp.file.cursor(3) %>
bible_references: [<% tp.file.cursor(4) %>]
service_time: <%* 
// Auto detect time of day and suggest service time
let hour = moment().hour();
if (hour < 12) {
    tR += "Morning Service";
} else if (hour < 16) {
    tR += "Afternoon Service";
} else {
    tR += "Evening Service";
}
%>
attendance: <%* 
// Placeholder for attendance tracking
tR += ""; 
%>
followup_required: false
---

# <%* 
// Generate better note title with date
let title = tp.file.title;
let date = moment().format("MMMM D, YYYY");
let dayOfWeek = moment().format("dddd");
let speaker = tp.file.cursor(2);

if (speaker) {
    tR += `${dayOfWeek} Service (${date}) - ${speaker}`;
} else {
    tR += title;
}
%>

## Quick Actions
```meta-bind-button
label: 🔍 Look Up Scripture
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/passage/?search=<% tp.file.cursor(4) %>
  newTab: true
```

```meta-bind-button
label: 📖 New Devotional
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/Devotional.md
  folder: Devotional
```

```meta-bind-button
label: 📝 New Lesson from Sermon
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/LessonPlan.md
  folder: Lessons
```

## Service Details
- **Date:** <% moment().format("dddd, MMMM Do, YYYY") %>
- **Time:** `=this.service_time`
- **Speaker:** <% tp.file.cursor(2) %>
- **Event/Service:** <% tp.file.cursor(3) %>
- **Weather:** <%* 
// Simple placeholder for weather - in a real implementation, this could be a script that fetches weather
let seasons = ["Winter", "Spring", "Summer", "Fall"];
let currentMonth = moment().month();
let season = seasons[Math.floor(currentMonth / 3) % 4];
let weather = ["Sunny", "Cloudy", "Rainy", "Snowy", "Partly Cloudy", "Clear", "Stormy"];
let randomWeather = weather[Math.floor(Math.random() * weather.length)];
tR += `${randomWeather}, ${season} day`;
%>

## Main Scripture References
<% tp.file.cursor(4) %>

### Key Passage
```
<% tp.file.cursor(5) %>
```

```meta-bind-button
label: 📋 Copy to Clipboard
style: default
class: button-default
actions:
- type: command
  command: editor:copy
```

## Sermon Theme
<%* 
// Auto-suggest sermon theme based on Bible reference
let bibleRefThemes = {
    "John 3": ["God's Love", "Salvation", "Being Born Again"],
    "Romans 8": ["God's Sovereignty", "Suffering and Glory", "Life in the Spirit"],
    "Psalm 23": ["God's Provision", "Comfort in Trouble", "The Good Shepherd"],
    "Matthew 5": ["Kingdom Living", "The Beatitudes", "Salt and Light"],
    "Genesis 1": ["Creation", "God's Power", "The Beginning"],
    "Philippians 4": ["Joy", "Peace", "Contentment"],
    "1 Corinthians 13": ["Love", "Spiritual Gifts", "The Greatest Virtue"],
    "Hebrews 11": ["Faith", "Old Testament Heroes", "Perseverance"]
};

let reference = tp.file.cursor(4);
let theme = "";

// Check if the reference matches any keys
for (let ref in bibleRefThemes) {
    if (reference && reference.includes(ref)) {
        // Get a random theme from the array
        let themes = bibleRefThemes[ref];
        theme = themes[Math.floor(Math.random() * themes.length)];
        break;
    }
}

if (theme) {
    tR += theme + " (suggested)";
} else {
    tR += tp.file.cursor(6);
}
%>

## Main Points
<%* 
// Dynamic sermon points template
let mainPoints = [];
let pointCount = 3; // Default number of points

// Generate placeholders for the main points with number placeholders
for (let i = 1; i <= pointCount; i++) {
    mainPoints.push(`${i}. <% tp.file.cursor(${6 + i}) %>`);
}

tR += mainPoints.join("\n");
%>

```meta-bind-button
label: ➕ Add Point
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "4. "
```

## Illustrations/Stories Used
<% tp.file.cursor(10) %>

## Quotes
> <% tp.file.cursor(11) %>

```meta-bind-button
label: ➕ Add Quote
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "> "
```

## Personal Application
<% tp.file.cursor(12) %>

```meta-bind-button
label: 🙏 Add to Prayer List
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/Prayer.md
  folder: Prayers
```

```meta-bind-button
label: ✅ Create Action Item
style: default
class: button-green
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

## Questions for Further Study
<%* 
// Generate some default questions based on the day of the week
let defaultQuestions = {
    "Sunday": ["1. How does this message connect to last week's sermon?", 
               "2. What one truth from this sermon can I apply this week?"],
    "Wednesday": ["1. How does this midweek message build on Sunday's teaching?", 
                  "2. What practical steps can I take based on this message?"],
    "Default": ["1. What was the main thesis of the sermon?", 
                "2. What scripture passages were most impactful?"]
};

let day = moment().format("dddd");
let questionSet = defaultQuestions[day] || defaultQuestions["Default"];

tR += questionSet.join("\n\n");
%>

```meta-bind-button
label: ❓ Add Question
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "3. "
```

```meta-bind-button
label: 📚 Start Study on Topic
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/Devotional.md
  folder: Devotional
  notePath: Devotional/Study - <%* tR += tp.frontmatter["sermon_theme"] || tp.file.cursor(6); %>
```

## Related Topics
<%* 
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
let bibleRef = tp.file.cursor(4);
let book = "";

// Common Bible books to check for
let bibleBooks = Object.keys(bookTopics);
for (let bibleBook of bibleBooks) {
    if (bibleRef && bibleRef.includes(bibleBook)) {
        book = bibleBook;
        break;
    }
}

// Suggest topics based on the book
if (book && bookTopics[book]) {
    let topics = bookTopics[book];
    // Select 2 random topics
    let selectedTopics = [];
    while (selectedTopics.length < 2 && topics.length > 0) {
        let randIndex = Math.floor(Math.random() * topics.length);
        selectedTopics.push(topics[randIndex]);
        topics.splice(randIndex, 1);
    }
    
    tR += "- " + selectedTopics.join("\n- ");
} else {
    tR += tp.file.cursor(15);
}
%>

```meta-bind-button
label: 🔍 Research Topic
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/dictionary/
  newTab: true
```

## Additional Notes
<%* 
// Add a timestamp for when these notes were taken
tR += "Notes taken on " + moment().format("YYYY-MM-DD HH:mm:ss") + "\n\n";
tR += tp.file.cursor(16);
%>

```meta-bind-button
label: 🎙️ Add Voice Recording
style: default
class: button-purple
actions:
- type: command
  command: audio-recorder:start-recording
```

```meta-bind-button
label: 📅 Add to Calendar
style: default
class: button-blue
actions:
- type: open
  link: https://calendar.google.com/calendar/u/0/r/eventedit?text=<%* 
  // Format the calendar event title and details
  let eventText = encodeURIComponent(`Follow-up: ${tp.file.cursor(6) || "Sermon"} (${tp.file.cursor(2) || "Speaker"})`);
  tR += eventText;
  %>&dates=<%* 
  // Set the event for next week
  let nextWeek = moment().add(7, 'days');
  let start = nextWeek.format("YYYYMMDDTHHmmss");
  let end = nextWeek.add(1, 'hours').format("YYYYMMDDTHHmmss");
  tR += `${start}/${end}`;
  %>
  newTab: true
```

## Follow-up Actions
- **Required:** `INPUT[toggle:followup_required]`

<%* 
// Only show this section if follow-up is required
if (tp.frontmatter.followup_required) {
    tR += "- [ ] Share notes with small group\n";
    tR += "- [ ] Review sermon recording\n";
    tR += "- [ ] Discuss with family\n";
} else {
    tR += "<!-- Toggle the follow-up required switch to show actions -->";
}
%> 