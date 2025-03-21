---
tags: [lesson-plan, <% tp.file.cursor(1) %>]
title: <% tp.file.title %>
topic: <% tp.file.cursor(2) %>
scripture_references: <% tp.file.cursor(3) %>
target_audience: <% tp.file.cursor(4) %>
duration: <% tp.file.cursor(5) %>
date_created: <% tp.date.now("YYYY-MM-DD") %>
date_teaching: <% tp.file.cursor(6) %>
objectives: <% tp.file.cursor(7) %>
is_completed: false
has_handouts: false
---

# <% tp.file.title %>

## Quick Actions
```meta-bind-button
label: 📖 Read Scripture
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/passage/?search=<% tp.file.cursor(3) %>&version=NASB
  newTab: true
```

```meta-bind-button
label: 🎮 Add Ice Breaker
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/IceBreaker.md
  folder: Ice Breakers
  notePath: Ice Breakers/<% tp.file.cursor(8) %>
```

## Lesson Information
- **Title:** `=this.title`
- **Topic:** `=this.topic`
- **Scripture References:** `=this.scripture_references`
- **Target Audience:** `=this.target_audience`
- **Duration:** `=this.duration`
- **Date Created:** `=this.date_created`
- **Date of Teaching:** `=this.date_teaching`

## Objectives
`=this.objectives`

## Materials Needed
<% tp.file.cursor(9) %>
- **Has Handouts:** `INPUT[toggle:has_handouts]`

```meta-bind-button
label: 📄 Create Handout
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/Handout.md
  folder: Handouts
  notePath: Handouts/Handout - <% tp.file.title %>
```

```meta-bind-button
label: ➕ Add Material
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "- "
```

```meta-bind-button
label: 📝 Create Shopping List
style: default
class: button-green
actions:
- type: command
  command: quickadd:runQuickAdd
  payload: "Create Shopping List"
```

## Introduction (Time: <% tp.file.cursor(10) %>)
<% tp.file.cursor(11) %>

```meta-bind-button
label: 🎮 Add Ice Breaker Idea
style: default
class: button-green
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

```meta-bind-button
label: 🚀 Add Ice Breaker
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/IceBreaker.md
  folder: Ice Breakers
  notePath: Ice Breakers/Ice Breaker - <% tp.file.title %>
```

## Main Content
### Part 1: <% tp.file.cursor(12) %> (Time: <% tp.file.cursor(13) %>)
<% tp.file.cursor(14) %>

### Part 2: <% tp.file.cursor(15) %> (Time: <% tp.file.cursor(16) %>)
<% tp.file.cursor(17) %>

### Part 3: <% tp.file.cursor(18) %> (Time: <% tp.file.cursor(19) %>)
<% tp.file.cursor(20) %>

```meta-bind-button
label: ➕ Add Section
style: default
class: button-blue
actions:
- type: command
  command: editor:insert-text
  payload: "### Part 4: (Time: ) \n"
```

## Group Activities/Discussion Questions
1. <% tp.file.cursor(21) %>
2. <% tp.file.cursor(22) %>
3. <% tp.file.cursor(23) %>

```meta-bind-button
label: ➕ Add Discussion Question
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "4. "
```

```meta-bind-button
label: 📝 Create Discussion Guide
style: default
class: button-green
actions:
- type: command
  command: quickadd:runQuickAdd
  payload: "Create Discussion Guide"
```

## Scripture Study
<% tp.file.cursor(24) %>

```meta-bind-button
label: 📚 Add Study Note
style: default
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/StudyNote.md
  folder: Study Notes
  notePath: Study Notes/Study Note - <% tp.file.cursor(25) %>
```

## Visual Aids
```excalidraw
<% tp.file.cursor(26) %>
```

```meta-bind-button
label: 🖌️ Create Diagram
style: default
class: button-purple
actions:
- type: command
  command: excalidraw:create-new
```

## Historical/Cultural Context
<% tp.file.cursor(27) %>

```meta-bind-button
label: 🔍 Research Context
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/encyclopedias/
  newTab: true
```

## Map Reference
```leaflet
id: <% tp.file.cursor(28) %>-lesson-map
lat: <% tp.file.cursor(29) %>
long: <% tp.file.cursor(30) %>
minZoom: 1
maxZoom: 10
defaultZoom: 5
```

```meta-bind-button
label: 🗺️ Find Location
style: default
class: button-default
actions:
- type: open
  link: https://bibleatlas.org/
  newTab: true
```

## Application
<% tp.file.cursor(31) %>

```meta-bind-button
label: ✅ Add Application Point
style: default
class: button-green
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

## Conclusion (Time: <% tp.file.cursor(32) %>)
<% tp.file.cursor(33) %>

## Prayer Points
<% tp.file.cursor(34) %>

```meta-bind-button
label: 🙏 Add Prayer Request
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/Prayer.md
  folder: Prayers
  notePath: Prayers/Prayer - <% tp.file.cursor(35) %>
```

## Completion Status
- **Completed:** `INPUT[toggle:is_completed]` 