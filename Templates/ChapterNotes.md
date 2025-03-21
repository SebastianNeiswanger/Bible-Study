---
tags: [chapter-notes, <% tp.file.cursor(1) %>]
book: <% tp.file.cursor(2) %>
chapter: <% tp.file.cursor(3) %>
total_verses: <% tp.file.cursor(4) %>
date_studied: <% tp.date.now("YYYY-MM-DD") %>
is_read: false
has_commentary: false
is_annotated: false
---

# <% tp.file.title %>

## Quick Actions
```meta-bind-button
label: 📖 Read Chapter
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/passage/?search=<% tp.file.cursor(2) %>+<% tp.file.cursor(3) %>&version=NASB
  newTab: true
```

```meta-bind-button
label: 📚 Study Verse
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/Devotional.md
  folder: Devotionals
  notePath: Devotionals/<% tp.file.cursor(2) %> <% tp.file.cursor(3) %>:<% tp.file.cursor(5) %>
```

## Chapter Information
- **Book:** `=this.book`
- **Chapter:** `=this.chapter`
- **Verses:** `=this.total_verses`
- **Date Studied:** `=this.date_studied`
- **Read:** `INPUT[toggle:is_read]`
- **Commentary Available:** `INPUT[toggle:has_commentary]`
- **Annotated:** `INPUT[toggle:is_annotated]`

## Summary
<% tp.file.cursor(6) %>

## Structure
<% tp.file.cursor(7) %>

## Key Verses
<% tp.file.cursor(8) %>

```meta-bind-button
label: 📖 Study Key Verse
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/Devotional.md
  folder: Devotionals
  notePath: Devotionals/<% tp.file.cursor(2) %> <% tp.file.cursor(3) %>:<% tp.file.cursor(9) %> Study
```

## Main Themes
<% tp.file.cursor(10) %>

## Characters
<% tp.file.cursor(11) %>

```meta-bind-button
label: 👤 Add Character Profile
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/<% tp.file.cursor(12) %>
```

## Key Events
<% tp.file.cursor(13) %>

```meta-bind-button
label: 📅 Add Timeline Event
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/TimelineEvent.md
  folder: Timeline
  notePath: Timeline/Event - <% tp.file.cursor(14) %>
```

## Theological Concepts
<% tp.file.cursor(15) %>

```meta-bind-button
label: 📘 Add Theological Concept
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/TheologicalConcept.md
  folder: Theological Concepts
  notePath: Theological Concepts/<% tp.file.cursor(16) %>
```

## Cross References
<% tp.file.cursor(17) %>

```meta-bind-button
label: 🔍 Find Cross References
style: default
class: button-default
actions:
- type: open
  link: https://www.openbible.info/labs/cross-references/
  newTab: true
```

## Cultural Context
<% tp.file.cursor(18) %>

## Difficult Passages
<% tp.file.cursor(19) %>

## Personal Application
<% tp.file.cursor(20) %>

```meta-bind-button
label: ✅ Add Application Point
style: default
class: button-green
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

## Questions for Further Study
<% tp.file.cursor(21) %>

## Commentary Notes
<% tp.file.cursor(22) %>

```meta-bind-button
label: 📚 Research Commentary
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/commentaries/<% tp.file.cursor(2) %>/<% tp.file.cursor(3) %>.html
  newTab: true
```

## Related Study Notes
<% tp.file.cursor(23) %>

```meta-bind-button
label: 📝 Create Study Note
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/StudyNote.md
  folder: Study Notes
  notePath: Study Notes/Study Note - <% tp.file.cursor(2) %> <% tp.file.cursor(3) %>
``` 