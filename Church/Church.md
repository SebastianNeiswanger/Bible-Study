---
tags: [homepage, church, index]
aliases: [Church Notes]
cssclass: church-home
---

# Church Notes

> [!quote] "Let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near." - Hebrews 10:24-25

## Recent Services
```dataview
TABLE WITHOUT ID
  file.link as "Service",
  speaker as "Speaker",
  sermon_theme as "Theme",
  date as "Date"
FROM "Church"
WHERE tags contains "church-notes"
SORT date DESC
LIMIT 5
```

## Sunday Morning Services
```dataview
TABLE WITHOUT ID
  file.link as "Service",
  speaker as "Speaker", 
  sermon_theme as "Theme"
FROM "Church"
WHERE tags contains "church-notes" 
AND tags contains "sunday"
AND tags contains "sunday-morning"
SORT date DESC
LIMIT 10
```

## Sunday Evening Services
```dataview
TABLE WITHOUT ID
  file.link as "Service",
  speaker as "Speaker", 
  sermon_theme as "Theme"
FROM "Church"
WHERE tags contains "church-notes" 
AND tags contains "sunday"
AND tags contains "sunday-evening"
SORT date DESC
LIMIT 10
```

## Wednesday Services
```dataview
TABLE WITHOUT ID
  file.link as "Service",
  speaker as "Speaker", 
  sermon_theme as "Theme"
FROM "Church"
WHERE tags contains "church-notes" 
AND tags contains "wednesday"
SORT date DESC
LIMIT 10
```

## Scripture References
```dataview
LIST
FROM "Church"
WHERE tags contains "church-notes"
FLATTEN bible_references as reference
GROUP BY reference
SORT length(rows) DESC
LIMIT 10
```

```meta-bind-button
label: 📝 New Church Notes
style: primary
class: button-blue
actions:
- type: templaterCreateNote
  templateFile: Templates/ChurchNotes.md
  folderPath: Church
``` 