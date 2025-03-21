---
tags:
  - reading-plan
  - <% tp.file.cursor(1) %>
book: <% tp.file.cursor(1) %>
chapters: <% tp.file.cursor(2) %>
start_date: <% tp.date.now("YYYY-MM-DD") %>
target_date: <% tp.date.now("YYYY-MM-DD", 7) %>
progress: 0
<%* 
// Dynamic JavaScript calculation for chapter assignments
let totalChapters = parseInt(tp.file.cursor(2)) || 10; // Default to 10 if not specified
let readingDuration = 7; // Default 7 days 
let chaptersPerDay = Math.ceil(totalChapters / readingDuration);

// Create chapter assignments dynamically
for(let i = 1; i <= readingDuration; i++) {
  let dayLabel = i <= 5 ? `day${i}_chapter` : `week2_day${i-5}_chapter`;
  let startChapter = (i-1) * chaptersPerDay + 1;
  let endChapter = Math.min(i * chaptersPerDay, totalChapters);
  
  if(startChapter <= totalChapters) {
    if(startChapter === endChapter) {
      tR += `${dayLabel}: ${startChapter}\n`;
    } else {
      tR += `${dayLabel}: ${startChapter}-${endChapter}\n`;
    }
  }
}
%>
---

# <% tp.file.title %>

## Book Information
- **Book:** [[<% tp.file.cursor(1) %>]]
- **Chapters:** `=this.chapters`
- **Start Date:** `=this.start_date` (<% moment(tp.date.now("YYYY-MM-DD")).format("dddd, MMMM D, YYYY") %>)
- **Target Completion Date:** `=this.target_date` (<% moment(tp.date.now("YYYY-MM-DD", 7)).format("dddd, MMMM D, YYYY") %>)

## Progress
```meta-bind
INPUT[slider:progress]
```

## Reading Schedule

```meta-bind-button
label: 📅 Add to Calendar
style: default
class: button-blue
actions:
- type: open
  link: https://calendar.google.com/calendar/u/0/r/eventedit?text=Bible%20Reading%20-%20<% tp.file.cursor(1) %>&dates=<% moment(tp.date.now("YYYY-MM-DD")).format("YYYYMMDD") %>/<% moment(tp.date.now("YYYY-MM-DD", 7)).format("YYYYMMDD") %>
  newTab: true
```

```meta-bind-button
label: 📊 Track Progress
style: default
class: button-green
actions:
- type: command
  command: quickadd:runQuickAdd
  payload: "Track Reading Progress"
```

```meta-bind-button
label: 📝 Set Reminder
style: default
class: button-purple
actions:
- type: command
  command: quickadd:runQuickAdd
  payload: "Set Reading Reminder"
```

<%* 
// Generate the reading schedule dynamically using JavaScript
let bookName = tp.file.cursor(1);
tR += "### Week 1\n";

for(let i = 1; i <= 5; i++) {
  let chapterField = `day${i}_chapter`;
  let date = moment(tp.date.now("YYYY-MM-DD")).add(i-1, 'days');
  let dateFormatted = date.format("dddd, MMM D");
  
  tR += `- [ ] Day ${i}: ${dateFormatted} - Chapter \`=this.${chapterField}\`\n\n`;
  
  tR += "```meta-bind-button\n";
  tR += `label: ✓ Complete Day ${i}\n`;
  tR += "style: default\n";
  tR += "class: button-green\n";
  tR += "actions:\n";
  tR += "- type: command\n";
  tR += '  command: quickadd:runQuickAdd\n';
  tR += '  payload: "Mark Complete"\n';
  tR += "```\n\n";
  
  tR += "```meta-bind-button\n";
  tR += `label: 📖 Read Chapter(s)\n`;
  tR += "style: default\n";
  tR += "class: button-blue\n";
  tR += "actions:\n";
  tR += "- type: templaterCreateNote\n";
  tR += "  templateFile: Templates/Devotional.md\n";
  tR += `  folder: Devotionals\n`;
  tR += `  notePath: Devotionals/${bookName} \`=this.${chapterField}\`\n`;
  tR += "```\n\n";
}

// Add Week 2 entries if needed
if(totalChapters > 5 * chaptersPerDay) {
  tR += "### Week 2\n";
  let remainingDays = Math.ceil((totalChapters - (5 * chaptersPerDay)) / chaptersPerDay);
  
  for(let i = 1; i <= remainingDays; i++) {
    let chapterField = `week2_day${i}_chapter`;
    let date = moment(tp.date.now("YYYY-MM-DD")).add(i+5-1, 'days');
    let dateFormatted = date.format("dddd, MMM D");
    
    tR += `- [ ] Day ${i}: ${dateFormatted} - Chapter \`=this.${chapterField}\`\n\n`;
    
    tR += "```meta-bind-button\n";
    tR += `label: ✓ Complete Week 2 Day ${i}\n`;
    tR += "style: default\n";
    tR += "class: button-green\n";
    tR += "actions:\n";
    tR += "- type: command\n";
    tR += '  command: quickadd:runQuickAdd\n';
    tR += '  payload: "Mark Complete"\n';
    tR += "```\n\n";
    
    tR += "```meta-bind-button\n";
    tR += `label: 📖 Read Chapter(s)\n`;
    tR += "style: default\n";
    tR += "class: button-blue\n";
    tR += "actions:\n";
    tR += "- type: templaterCreateNote\n";
    tR += "  templateFile: Templates/Devotional.md\n";
    tR += `  folder: Devotionals\n`;
    tR += `  notePath: Devotionals/${bookName} \`=this.${chapterField}\`\n`;
    tR += "```\n\n";
  }
}

tR += "- [ ] Day 6: Review and Reflect\n\n";
%>

```meta-bind-button
label: 📝 Record Thoughts
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/Reflection.md
  folder: Reflections
  notePath: Reflections/Reflection - <% tp.file.cursor(1) %> Week 1
```

## Study Questions
<% tp.file.cursor(9) %>

```meta-bind-button
label: ❓ Add Question
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "- "
```

## Key Themes to Watch For
<% tp.file.cursor(10) %>

```meta-bind-button
label: 📌 Add Theme
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "- "
```

## Resources for This Book
<% tp.file.cursor(11) %>

```meta-bind-button
label: 📚 Add Resource
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "- "
```

## Notes
<% tp.file.cursor(12) %>

```meta-bind-button
label: 🔄 Share Reading Plan
style: default
class: button-blue
actions:
- type: command
  command: quickadd:runQuickAdd
  payload: "Share Reading Plan"
```

```meta-bind-button
label: 📊 Update Progress
style: default
class: button-green
actions:
- type: command
  command: quickadd:runQuickAdd
  payload: "Update Reading Progress"
```

## Related Content
<% tp.file.cursor(13) %>

```meta-bind-button
label: 📝 Create Lesson Plan
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/LessonPlan.md
  folder: Lesson Plans
  notePath: Lesson Plans/Lesson - <% tp.file.cursor(1) %>
```

```meta-bind-button
label: 🔄 Share Insights
style: default
class: button-green
actions:
- type: command
  command: quickadd:runQuickAdd
  payload: "Share Reflection"
```

```meta-bind-button
label: 📚 Create Study Note
style: default
class: button-default
actions:
- type: templaterCreateNote
  templateFile: Templates/StudyNote.md
  folder: Study Notes
  notePath: Study Notes/Study Note - <% tp.file.cursor(1) %>
``` 