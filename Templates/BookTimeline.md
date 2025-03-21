---
tags: [book-timeline, <% tp.file.cursor(1) %>]
book_name: <% tp.file.cursor(2) %>
time_period: <% tp.file.cursor(3) %>
date_created: <% tp.date.now("YYYY-MM-DD") %>
is_complete: false
---

# <% tp.file.title %>

## Book Information
- **Book:** `=this.book_name`
- **Time Period:** `=this.time_period`
- **Date Created:** `=this.date_created`
- **Completion Status:** `INPUT[toggle:is_complete]`

```meta-bind-button
label: 📚 Open Book Reference
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/BibleBook.md
  folder: Bible Books
  notePath: Bible Books/<% tp.file.cursor(2) %>
```

## Timeline

```timeline
id: <% tp.file.cursor(2) %>-timeline
title: <% tp.file.cursor(2) %> Timeline
dateFormat: YYYY-MM-DD
scale: auto
```

## Key Events
<% tp.file.cursor(4) %>

```meta-bind-button
label: 📅 Add Timeline Event
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/TimelineEvent.md
  folder: Timeline
  notePath: Timeline/Event - <% tp.file.cursor(5) %>
```

## Characters in Chronological Order
<% tp.file.cursor(6) %>

```meta-bind-button
label: 👤 Add Character
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/<% tp.file.cursor(7) %>
```

## Locations in Chronological Order
<% tp.file.cursor(8) %>

```meta-bind-button
label: 📍 Add Location
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/LocationNote.md
  folder: Locations
  notePath: Locations/<% tp.file.cursor(9) %>
```

## Historical Context
<% tp.file.cursor(10) %>

```meta-bind-button
label: 🔍 Research History
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/history/
  newTab: true
```

## Theological Progression
<% tp.file.cursor(11) %>

```meta-bind-button
label: 📘 Add Theological Concept
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/TheologicalConcept.md
  folder: Theological Concepts
  notePath: Theological Concepts/<% tp.file.cursor(12) %>
```

## Map
```leaflet
id: <% tp.file.cursor(2) %>-timeline-map
lat: <% tp.file.cursor(13) %>
long: <% tp.file.cursor(14) %>
defaultZoom: 8
```

```meta-bind-button
label: 🗺️ Find Coordinates
style: default
class: button-default
actions:
- type: open
  link: https://bibleatlas.org/
  newTab: true
```

## Notes
<% tp.file.cursor(15) %>

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