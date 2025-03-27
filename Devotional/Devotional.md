---
tags: [homepage, devotional, index]
aliases: [Daily Devotional]
cssclass: devotional-home
---

# Daily Devotional

> [!quote] "Your word is a lamp to my feet and a light to my path." - Psalm 119:105

## Recent Devotionals
```dataview
TABLE WITHOUT ID
  file.link as "Devotional",
  date as "Date",
  file.tags as "Topics"
FROM "Devotional"
WHERE !contains(file.name, "Home")
SORT date DESC
LIMIT 7
```

## Bible Studies by Book
```dataview
TABLE WITHOUT ID
  length(rows) as "Count",
  rows.file.link as "Studies"
FROM "Devotional"
FLATTEN file.tags as tag
WHERE contains(tag, "bible-book")
GROUP BY tag
SORT tag ASC
```

## Current Reading Plan Progress

>[!progress] Genesis
>```dataview
>LIST
>FROM "Devotional"
>WHERE contains(file.tags, "genesis")
>```

>[!progress] Exodus
>```dataview
>LIST
>FROM "Devotional"
>WHERE contains(file.tags, "exodus")
>```

## Study Themes
```dataview
LIST
FROM "Devotional"
FLATTEN file.tags as tag
WHERE !contains(tag, "devotional") 
AND !contains(tag, "bible-book") 
AND !contains(tag, "homepage")
GROUP BY tag
SORT length(rows) DESC
```

## Languages Referenced
```dataview
LIST
FROM "Devotional"
FLATTEN file.tags as tag
WHERE contains(tag, "lang-")
GROUP BY tag
SORT length(rows) DESC
```

```meta-bind-button
label: 📖 New Devotional
style: primary
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/Devotional.md
  folderPath: Devotional
``` 