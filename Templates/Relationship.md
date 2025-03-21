---
tags: [relationship, <% tp.file.cursor(1) %>]
relationship_name: <% tp.file.title %>
person1: <% tp.file.cursor(2) %>
person2: <% tp.file.cursor(3) %>
relationship_type: <% tp.file.cursor(4) %>
is_positive: true 
is_family: false
is_conflict: false
---

# <% tp.file.title %>

## Quick Actions
```meta-bind-button
label: 📖 Find Bible References
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/quicksearch/?quicksearch=<% tp.file.cursor(2) %>+<% tp.file.cursor(3) %>&version=NASB
  newTab: true
```

## Relationship Details
- **People Involved:** [[<% tp.file.cursor(2) %>]] and [[<% tp.file.cursor(3) %>]]
- **Relationship Type:** `=this.relationship_type`
- **Nature of Relationship:** 
  - Positive/Negative: `INPUT[toggle:is_positive]`
  - Family Relationship: `INPUT[toggle:is_family]`
  - Involves Conflict: `INPUT[toggle:is_conflict]`

## Description
<% tp.file.cursor(5) %>

## Biblical References
<% tp.file.cursor(6) %>

```meta-bind-button
label: 📚 Add Bible Reference
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/BibleBook.md
  folder: Bible Books
  notePath: Bible Books/<% tp.file.cursor(7) %>
```

## Key Events
<% tp.file.cursor(8) %>

```meta-bind-button
label: 📅 Add Timeline Event
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/TimelineEvent.md
  folder: Timeline
  notePath: Timeline/Event - <% tp.file.cursor(9) %>
```

## Dynamics
<% tp.file.cursor(10) %>

## Growth and Changes
<% tp.file.cursor(11) %>

## Impact and Influence
<% tp.file.cursor(12) %>

## Theological Implications
<% tp.file.cursor(13) %>

```meta-bind-button
label: 📘 Add Theological Concept
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/TheologicalConcept.md
  folder: Theological Concepts
  notePath: Theological Concepts/<% tp.file.cursor(14) %>
```

## Lessons for Today
<% tp.file.cursor(15) %>

## Cultural Context
<% tp.file.cursor(16) %>

## Questions for Further Study
<% tp.file.cursor(17) %>

## Notes
<% tp.file.cursor(18) %>

```meta-bind-button
label: 📝 Create Study Note
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/StudyNote.md
  folder: Study Notes
  notePath: Study Notes/Study Note - <% tp.file.title %>
``` 