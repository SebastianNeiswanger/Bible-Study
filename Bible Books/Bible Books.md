---
tags: [homepage, bible-books, index]
aliases: [Bible Books]
cssclass: biblebooks-home
---

# Bible Books

> [!quote] "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart." - Hebrews 4:12

## All Bible Books

```dataview
TABLE WITHOUT ID
  file.link as "Book",
  author as "Author",
  date_written as "Date Written",
  major_themes as "Major Themes"
FROM "Bible Books"
WHERE !contains(file.name, "Home")
SORT file.name ASC
```

## Books by Testament

### Old Testament Books
```dataview
TABLE WITHOUT ID
  file.link as "Book",
  category as "Category",
  key_chapters as "Key Chapters"
FROM "Bible Books"
WHERE testament = "Old Testament"
SORT file.name ASC
```

### New Testament Books
```dataview
TABLE WITHOUT ID
  file.link as "Book",
  category as "Category",
  key_chapters as "Key Chapters"
FROM "Bible Books"
WHERE testament = "New Testament"
SORT file.name ASC
```

## Books by Category

### Law (Torah)
```dataview
LIST FROM "Bible Books"
WHERE category = "Law"
SORT file.name ASC
```

### History
```dataview
LIST FROM "Bible Books"
WHERE category = "History"
SORT file.name ASC
```

### Wisdom Literature
```dataview
LIST FROM "Bible Books"
WHERE category = "Wisdom"
SORT file.name ASC
```

### Major Prophets
```dataview
LIST FROM "Bible Books"
WHERE category = "Major Prophets"
SORT file.name ASC
```

### Minor Prophets
```dataview
LIST FROM "Bible Books"
WHERE category = "Minor Prophets"
SORT file.name ASC
```

### Gospels
```dataview
LIST FROM "Bible Books"
WHERE category = "Gospels"
SORT file.name ASC
```

### Pauline Epistles
```dataview
LIST FROM "Bible Books"
WHERE category = "Pauline Epistles"
SORT file.name ASC
```

### General Epistles
```dataview
LIST FROM "Bible Books"
WHERE category = "General Epistles"
SORT file.name ASC
```

### Apocalyptic
```dataview
LIST FROM "Bible Books"
WHERE category = "Apocalyptic"
SORT file.name ASC
```

## Book Timeline

```timeline
startDate: -1500
endDate: 100
navbar: true
---

# Torah
date: -1446
title: The Law (Torah)
---

# Historical Books
date: -1050
title: Historical Books
---

# Wisdom Literature
date: -950
title: Wisdom Literature
---

# Prophets
date: -750
title: Prophetic Books
---

# Gospels
date: 50
title: Gospels and Acts
---

# Epistles
date: 60
title: Pauline and General Epistles
---

# Revelation
date: 95
title: Apocalyptic Literature
```

```meta-bind-button
label: 📗 New Bible Book
style: primary
class: button-green
actions:
- type: templaterCreateNote
  templateFile: Templates/BibleBook.md
  folderPath: Bible Books
``` 