---
tags: [character, <% tp.file.cursor(1) %>]
character_name: <% tp.file.title %>
alternate_names: <% tp.file.cursor(2) %>
gender: <% tp.file.cursor(3) %>
nationality: <% tp.file.cursor(4) %>
time_period: <% tp.file.cursor(5) %>
is_historical: false
fate_known: false
was_believer: false
---

# <% tp.file.title %>

## Quick Actions
```meta-bind-button
label: 📖 Look Up In Bible
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/quicksearch/?quicksearch=<% tp.file.title %>&version=NASB
  newTab: true
```

```meta-bind-button
label: 🔍 Research Character
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/dictionary/search/?q=<% tp.file.title %>
  newTab: true
```

## Character Information
- **Name:** `=this.character_name`
- **Alternate Names/Titles:** `=this.alternate_names`
- **Gender:** `=this.gender`
- **Nationality/Tribe/Group:** `=this.nationality`
- **Time Period:** `=this.time_period`
- **Historical Verification:** `INPUT[toggle:is_historical]`

## Background and Origin
<% tp.file.cursor(6) %>

## Biblical Appearances
<% tp.file.cursor(7) %>

```meta-bind-button
label: 📚 Add Book Reference
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/BibleBook.md
  folder: Bible Books
  notePath: Bible Books/<% tp.file.cursor(8) %>
```

## Family Relationships
<% tp.file.cursor(9) %>

```meta-bind-button
label: 👤 Add Family Member
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/<% tp.file.cursor(10) %>
```

```meta-bind-button
label: 🔗 Create Relationship
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/Relationship.md
  folder: Relationships
  notePath: Relationships/Relationship - <% tp.file.title %> and <% tp.file.cursor(10) %>
```

## Key Events in Life
<% tp.file.cursor(11) %>

```meta-bind-button
label: 📅 Add Timeline Event
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/TimelineEvent.md
  folder: Timeline
  notePath: Timeline/Event - <% tp.file.cursor(12) %>
```

## Character Development
<% tp.file.cursor(13) %>

## Faith Journey
- **Believer:** `INPUT[toggle:was_believer]`
- **Spiritual Transformation:** <% tp.file.cursor(14) %>
- **Key Spiritual Lessons:** <% tp.file.cursor(15) %>

## Legacy and Impact
<% tp.file.cursor(16) %>

## Cultural Depictions
<% tp.file.cursor(17) %>

## Theological Significance
<% tp.file.cursor(18) %>

```meta-bind-button
label: 📘 Add Theological Concept
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/TheologicalConcept.md
  folder: Theological Concepts
  notePath: Theological Concepts/<% tp.file.cursor(19) %>
```

## Questions for Further Study
<% tp.file.cursor(20) %>

## Resources and References
<% tp.file.cursor(21) %>

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