# Timeline View: <% tp.file.title %>
**Generated:** <% tp.date.now("YYYY-MM-DD") %>
**Filter:** <% tp.file.cursor(1) %> <!-- All, Book: Genesis, Period: BC, etc. -->

## Timeline Configuration

```button
name Filter Timeline
type command
action QuickAdd: Filter Timeline
color blue
```

```button
name Group By Book
type command
action QuickAdd: Group Timeline By Book
color green
```

```button
name Group By Period
type command
action QuickAdd: Group Timeline By Period
color purple
```

```button
name Sort Chronologically
type command
action QuickAdd: Sort Timeline Chronologically
color default
```

## Timeline Display

```timeline
title Biblical Timeline
dateFormat YYYY-MM-DD
scale auto
type timeline
```

## Events List

<!-- Dynamically populated -->

## Key Characters

<!-- Dynamically populated -->

## Theological Developments

<!-- Dynamically populated -->

## Map of Events

```leaflet
id: biblical-timeline-map
height: 500px
lat: 31.7683
long: 35.2137
minZoom: 1
maxZoom: 18
defaultZoom: 8
unit: kilometers
scale: 1
darkMode: false
overlayColor: #2a2a2bCC
markers:
    - location: [31.7683, 35.2137]
      title: Jerusalem
```

## Timeline Controls

```button
name Zoom to Beginning
type command
action QuickAdd: Timeline Zoom Beginning
color blue
```

```button
name Zoom to Middle
type command
action QuickAdd: Timeline Zoom Middle
color blue
```

```button
name Zoom to End
type command
action QuickAdd: Timeline Zoom End
color blue
```

```button
name Reset View
type command
action QuickAdd: Timeline Reset View
color default
```

## Export Options

```button
name Export as Image
type command
action QuickAdd: Export Timeline as Image
color green
```

```button
name Export to CSV
type command
action QuickAdd: Export Timeline to CSV
color green
```

```button
name Share Timeline
type command
action QuickAdd: Share Timeline
color blue
```

```button
name Save Custom View
type command
action QuickAdd: Save Timeline View
color purple
``` 