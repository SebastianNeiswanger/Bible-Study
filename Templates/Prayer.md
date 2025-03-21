---
tags: [prayer, <% tp.file.cursor(1) %>]
prayer_name: <% tp.file.title %>
category: <% tp.file.cursor(2) %>
date_created: <% tp.date.now("YYYY-MM-DD") %>
people_involved: <% tp.file.cursor(3) %>
scripture_references: <% tp.file.cursor(4) %>
urgency: medium
is_answered: false
is_ongoing: true
---

# <% tp.file.title %>

## Prayer Information
- **Title:** `=this.prayer_name`
- **Category:** `=this.category`
- **Date Created:** `=this.date_created`
- **People Involved:** `=this.people_involved`
- **Scripture References:** `=this.scripture_references`
- **Urgency Level:** `INPUT[inlineSelect(option(low),option(medium),option(high),option(critical)):urgency]`
- **Status:** 
  - Answered: `INPUT[toggle:is_answered]`
  - Ongoing: `INPUT[toggle:is_ongoing]`

```meta-bind-button
label: 📖 Look Up Scripture
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/passage/?search=<% tp.file.cursor(4) %>&version=NASB
  newTab: true
```

## Prayer Request
<% tp.file.cursor(5) %>

## Scripture Foundation
<% tp.file.cursor(6) %>

## Specific Petitions
<% tp.file.cursor(7) %>

```meta-bind-button
label: ➕ Add Petition
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

## Updates
<% tp.file.cursor(8) %>

```meta-bind-button
label: 🔄 Add Update
style: default
class: button-green
actions:
- type: command
  command: editor:insert-text
  payload: "### Update (<% tp.date.now('YYYY-MM-DD') %>)\n"
```

## Related People
<% tp.file.cursor(9) %>

```meta-bind-button
label: 👤 Add Person Profile
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/<% tp.file.cursor(10) %>
```

## Notes
<% tp.file.cursor(11) %>

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