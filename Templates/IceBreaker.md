---
tags: [ice-breaker, activity, <% tp.file.cursor(1) %>]
title: <% tp.file.title %>
duration: <% tp.file.cursor(2) %>
group_size: <% tp.file.cursor(3) %>
age_range: <% tp.file.cursor(4) %>
materials_needed: <% tp.file.cursor(5) %>
preparation_time: <% tp.file.cursor(6) %>
theme: <% tp.file.cursor(7) %>
is_tested: false
is_favorite: false
difficulty: medium
---

# <% tp.file.title %>

## Quick Actions
```meta-bind-button
label: 🔍 Find Similar Activities
style: default
class: button-default
actions:
- type: open
  link: https://www.google.com/search?q=<% tp.file.title %>+ice+breaker+activity+christian
  newTab: true
```

## Activity Information
- **Title:** `=this.title`
- **Duration:** `=this.duration`
- **Group Size:** `=this.group_size`
- **Age Range:** `=this.age_range`
- **Materials Needed:** `=this.materials_needed`
- **Preparation Time:** `=this.preparation_time`
- **Theme/Focus:** `=this.theme`
- **Difficulty Level:** `INPUT[inlineSelect(option(easy),option(medium),option(hard)):difficulty]`
- **Tested:** `INPUT[toggle:is_tested]`
- **Favorite:** `INPUT[toggle:is_favorite]`

## Purpose/Objectives
<% tp.file.cursor(8) %>

## Setup/Preparation
<% tp.file.cursor(9) %>

## Instructions
<% tp.file.cursor(10) %>

```meta-bind-button
label: ➕ Add Step
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "1. "
```

## Variations
<% tp.file.cursor(11) %>

## Scripture Connection
<% tp.file.cursor(12) %>

```meta-bind-button
label: 📖 Look Up Verse
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/quicksearch/?quicksearch=<% tp.file.cursor(13) %>&version=NASB
  newTab: true
```

## Discussion Questions
<% tp.file.cursor(14) %>

```meta-bind-button
label: ❓ Add Question
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

## Tips for Success
<% tp.file.cursor(15) %>

## Follow-up Activities
<% tp.file.cursor(16) %>

```meta-bind-button
label: 🎮 Add Follow-up
style: default
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/IceBreaker.md
  folder: Ice Breakers
  notePath: Ice Breakers/<% tp.file.cursor(17) %>
```

## Notes
<% tp.file.cursor(18) %>

```meta-bind-button
label: 📝 Link to Lesson Plan
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/LessonPlan.md
  folder: Lesson Plans
  notePath: Lesson Plans/Lesson - <% tp.file.cursor(19) %>
``` 