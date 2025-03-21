---
tags: [timeline-event, <% tp.file.cursor(1) %>]
event_name: <% tp.file.title %>
date: <% tp.file.cursor(2) %>
book_reference: <% tp.file.cursor(3) %>
chapter: <% tp.file.cursor(4) %>
verses: <% tp.file.cursor(5) %>
event_type: <% tp.file.cursor(6) %>
is_historical: false
coordinates: <% tp.file.cursor(7) %>
---

# <% tp.file.title %>

## Event Details
- **Date/Time Period:** `=this.date`
- **Biblical Reference:** [[<% tp.file.cursor(3) %>]] `=this.chapter`:`=this.verses`
- **Event Type:** `=this.event_type`
- **Historical Verification:** `INPUT[toggle:is_historical]`

```meta-bind-button
label: 📖 Read Passage
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/passage/?search=<% tp.file.cursor(3) %>+<% tp.file.cursor(4) %>%3A<% tp.file.cursor(5) %>&version=NASB
  newTab: true
```

## Event Description
<% tp.file.cursor(8) %>

## People Involved
<% tp.file.cursor(9) %>

```meta-bind-button
label: 👤 Add Person
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/<% tp.file.cursor(10) %>
```

## Location
<% tp.file.cursor(11) %>

```meta-bind-button
label: 📍 Add Location Note
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/LocationNote.md
  folder: Locations
  notePath: Locations/<% tp.file.cursor(11) %>
```

## Map
```leaflet
id: <% tp.file.cursor(1) %>-map
lat: <% tp.file.cursor(7) %>
long: <% tp.file.cursor(12) %>
defaultZoom: 8
```

```meta-bind-button
label: 🔍 Find Coordinates
style: default
class: button-default
actions:
- type: open
  link: https://bibleatlas.org/
  newTab: true
```

## Historical Context
<% tp.file.cursor(13) %>

```meta-bind-button
label: 📚 Research Historical Context
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/bible-study/topical-studies/
  newTab: true
```

## Theological Significance
<% tp.file.cursor(14) %>

```meta-bind-button
label: 📘 Add Theological Concept
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/TheologicalConcept.md
  folder: Theological Concepts
  notePath: Theological Concepts/<% tp.file.cursor(15) %>
```

## Related Events
<% tp.file.cursor(16) %>

```meta-bind-button
label: 📅 Add Related Event
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/TimelineEvent.md
  folder: Timeline
  notePath: Timeline/Event - <% tp.file.cursor(17) %>
```

## Cultural Impact
<% tp.file.cursor(18) %>

## Notes
<% tp.file.cursor(19) %>

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