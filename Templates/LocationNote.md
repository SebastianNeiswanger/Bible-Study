---
tags: [location, <% tp.file.cursor(1) %>]
location_name: <% tp.file.title %>
region: <% tp.file.cursor(2) %>
coordinates: <% tp.file.cursor(3) %>
modern_name: <% tp.file.cursor(4) %>
is_historical: false
is_verified: false
---

# <% tp.file.title %>

## Quick Actions
```meta-bind-button
label: 🗺️ View on Bible Atlas
style: default
class: button-blue
actions:
- type: open
  link: https://bibleatlas.org/search.htm?q=<% tp.file.title %>
  newTab: true
```

```meta-bind-button
label: 🔍 Research Location
style: default
class: button-default
actions:
- type: open
  link: https://www.bibleplaces.com/search-results/?keyword=<% tp.file.title %>
  newTab: true
```

## Location Information
- **Name:** `=this.location_name`
- **Region/Territory:** `=this.region`
- **Modern Name/Location:** `=this.modern_name`
- **Coordinates:** `=this.coordinates`
- **Historical Verification:** `INPUT[toggle:is_historical]`
- **Archaeological Verification:** `INPUT[toggle:is_verified]`

## Map
```leaflet
id: <% tp.file.title %>-map
lat: <% tp.file.cursor(5) %>
long: <% tp.file.cursor(6) %>
defaultZoom: 8
```

## Description
<% tp.file.cursor(7) %>

## Biblical Significance
<% tp.file.cursor(8) %>

```meta-bind-button
label: 📚 Add Bible Reference
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/BibleBook.md
  folder: Bible Books
  notePath: Bible Books/<% tp.file.cursor(9) %>
```

## Key Events
<% tp.file.cursor(10) %>

```meta-bind-button
label: 📅 Add Timeline Event
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/TimelineEvent.md
  folder: Timeline
  notePath: Timeline/Event - <% tp.file.cursor(11) %>
```

## People Associated with this Location
<% tp.file.cursor(12) %>

```meta-bind-button
label: 👤 Add Character
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/<% tp.file.cursor(13) %>
```

## Historical Context
<% tp.file.cursor(14) %>

## Archaeological Information
<% tp.file.cursor(15) %>

```meta-bind-button
label: 🔍 Research Archaeology
style: default
class: button-default
actions:
- type: open
  link: https://www.biblicalarchaeology.org/search/?q=<% tp.file.title %>
  newTab: true
```

## Theological Significance
<% tp.file.cursor(16) %>

```meta-bind-button
label: 📘 Add Theological Concept
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/TheologicalConcept.md
  folder: Theological Concepts
  notePath: Theological Concepts/<% tp.file.cursor(17) %>
```

## Images
<% tp.file.cursor(18) %>

```meta-bind-button
label: 🖼️ Find Images
style: default
class: button-default
actions:
- type: open
  link: https://www.google.com/search?q=<% tp.file.title %>+biblical+location&tbm=isch
  newTab: true
```

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