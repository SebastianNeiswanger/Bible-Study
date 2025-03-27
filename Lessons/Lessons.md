---
tags: [homepage, lessons, index]
aliases: [Lesson Plans]
cssclass: lessons-home
---

# Lesson Plans

> [!quote] "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness" - 2 Timothy 3:16

## Recent Lesson Plans
```dataview
TABLE WITHOUT ID
  file.link as "Lesson",
  date as "Created",
  target_audience as "Audience",
  lesson_duration as "Duration"
FROM "Lessons"
WHERE !contains(file.name, "Home")
SORT date DESC
LIMIT 5
```

## Lessons By Category
```dataview
TABLE WITHOUT ID
  length(rows) as "Count",
  rows.file.link as "Lessons"
FROM "Lessons"
FLATTEN file.tags as tag
WHERE contains(tag, "category-")
GROUP BY tag
SORT tag ASC
```

## Lessons By Age Group
```dataview
TABLE WITHOUT ID
  length(rows) as "Count",
  rows.file.link as "Lessons"
FROM "Lessons"
FLATTEN file.tags as tag
WHERE contains(tag, "age-")
GROUP BY tag
SORT tag ASC
```

## Scripture Used in Lessons
```dataview
LIST 
FROM "Lessons"
FLATTEN bible_references as reference
WHERE reference
GROUP BY reference
SORT length(rows) DESC
LIMIT 10
```

## Lesson Resources
```dataview
TABLE WITHOUT ID
  file.link as "Lesson",
  resources as "Resources"
FROM "Lessons"
WHERE resources != null
SORT file.ctime DESC
```

```meta-bind-button
label: 📚 New Lesson Plan
style: primary
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/Lesson.md
  folderPath: Lessons
``` 