---
tags: [devotional, bible-study, <% tp.file.cursor(1) %>]
bible_book: <% tp.file.cursor(2) %>
chapter: <% tp.file.cursor(3) %>
verses: <% tp.file.cursor(4) %>
date: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.cursor(2) %> <% tp.file.cursor(3) %>

## Navigation

```button
name Previous Chapter
type command
action Templater: Create New From Template
templatePath Templates/DevotionalSmall.md
replace chapter <% Number(tp.file.cursor(3)) - 1 %>
color blue
```

```button
name Next Chapter
type command
action Templater: Create New From Template
templatePath Templates/DevotionalSmall.md
replace chapter <% Number(tp.file.cursor(3)) + 1 %>
color blue
```

```button
name Full Study
type command
action Templater: Create New From Template
templatePath Templates/Devotional.md
color green
```

## Quick Notes
<% tp.file.cursor(5) %> 