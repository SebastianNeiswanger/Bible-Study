# Bible Study Vault

This Obsidian vault contains my comprehensive Bible study notes and spiritual life documentation.

## Quick Actions

```meta-bind-button
label: 📖 New Devotional
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/Devotional.md
  folder: Devotional
```

```meta-bind-button
label: 🏛️ New Church Note
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/ChurchNotes.md
  folder: Church
```

```meta-bind-button
label: 📝 New Lesson Plan
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/LessonPlan.md
  folder: Lessons
```

```meta-bind-button
label: 👤 New Character
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/Character - New
```

```meta-bind-button
label: 📅 New Timeline Event
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/TimelineEvent.md
  folder: Timeline
  notePath: Timeline/Event - New
```

```meta-bind-button
label: 📚 New Book Study
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/BibleBook.md
  folder: Books
  notePath: Books/New Book Study
```

## Structure

- `/Devotional` - Daily devotional journey through the Bible
- `/Church` - Notes from church services
- `/Lessons` - Lesson plans and teaching materials
- `/Characters` - Profiles of Biblical figures
- `/Timeline` - Biblical timeline events
- `/Maps` - Geographic context using Leaflet
- `/Languages` - Bible text in multiple versions and languages

## Quick Reference

```meta-bind-button
label: 🔍 Bible Gateway
style: default
class: button-default
actions:
- type: open
  link: https://www.biblegateway.com/
```

```meta-bind-button
label: 📖 Blue Letter Bible
style: default
class: button-default
actions:
- type: open
  link: https://www.blueletterbible.org/
```

```meta-bind-button
label: 🗣️ Hebrew/Greek Lexicon
style: default
class: button-default
actions:
- type: open
  link: https://biblehub.com/interlinear/
```

```meta-bind-button
label: 🗺️ Bible Atlas
style: default
class: button-default
actions:
- type: open
  link: https://bibleatlas.org/
```

## Bible Versions

- NASB (New American Standard Bible)
- ESV (English Standard Version)
- KJV (King James Version)
- Interlinear Greek/Hebrew
- Shinkaiyaku (Japanese)

## Activity

```dataviewjs
const calendarData = {
    entries: []
};

// Get all file creation/modification dates
for (let page of dv.pages()) {
    let date = page.file.mday.toFormat('yyyy-MM-dd');
    if (calendarData[date]) {
        calendarData[date]++;
    } else {
        calendarData[date] = 1;
    }
}

renderHeatmapCalendar(this.container, calendarData);
```

## Recent Notes

```dataviewjs
// Display the 5 most recently modified notes
dv.table(["Note", "Type", "Last Modified"],
  dv.pages()
    .sort(page => page.file.mtime, 'desc')
    .limit(5)
    .map(page => [
      page.file.link,
      page.tags ? page.tags[0] : "N/A",
      page.file.mtime.toFormat('yyyy-MM-dd')
    ])
)
```

```meta-bind-button
label: 🔄 Refresh Statistics
style: default
class: button-default
actions:
- type: command
  command: Reload without saving
```

## Tags

#bible-study #devotional #church-notes #lesson-plans
