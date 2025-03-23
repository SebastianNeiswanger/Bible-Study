---
tags: [homepage, timeline, index]
aliases: [Biblical Timeline]
cssclass: timeline-home
---

# Biblical Timeline

> [!quote] "Remember the days of old; consider the years of many generations; ask your father, and he will show you, your elders, and they will tell you." - Deuteronomy 32:7

## Timeline Overview

This section serves as a central hub for all biblical timelines, organized chronologically to help visualize the sequence of biblical events, figures, and stories.

```dataview
TABLE WITHOUT ID
  file.link as "Timeline",
  time_period as "Time Period",
  biblical_era as "Biblical Era",
  key_figures as "Key Figures"
FROM "Timeline"
WHERE !contains(file.name, "Home")
SORT time_period ASC
```

## Major Biblical Eras

```timeline
startDate: -4000
endDate: 100
navbar: true
---

# Creation
date: -4000
color: green
title: Creation and Early Genesis
---

# Noah's Flood
date: -2400
color: blue
---

# Abraham
date: -1900
color: yellow
title: Abraham and the Patriarchs
---

# Exodus
date: -1446
color: red
---

# Conquest of Canaan
date: -1406
color: orange
---

# United Kingdom
date: -1050
---

# Temple Built
date: -966
color: purple
---

# Kingdom Divided
date: -930
---

# Israel Falls
date: -722
color: red
---

# Judah Falls
date: -586
color: red
---

# Return from Exile
date: -538
color: green
---

# Christ Born
date: -4
color: gold
---

# Christ Crucified
date: 30
color: red
---

# Jerusalem Destroyed
date: 70
color: red
```

## Interactive Map

```leaflet
id: biblical-map
image: [[images/bible-maps/ancient-israel-map.jpg]]
height: 500px
width: 100%
minZoom: 1
maxZoom: 10
defaultZoom: 5
unit: meters
scale: 1
```

## Bible History by Book
```dataview
TABLE WITHOUT ID
  file.link as "Timeline",
  bible_books as "Related Books",
  key_events as "Key Events"
FROM "Timeline"
WHERE bible_books
SORT file.name ASC
```

```meta-bind-button
label: 📅 New Timeline Entry
style: primary
class: button-orange
actions:
- type: templaterCreateNote
  templateFile: Templates/Timeline.md
  folderPath: Timeline
``` 