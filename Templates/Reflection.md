# <% tp.file.title %>
**Date:** <% tp.date.now("YYYY-MM-DD") %>
**Related to:** [[<% tp.file.cursor(1) %>]]

## Summary of Readings
<% tp.file.cursor(2) %>

## Key Insights
<% tp.file.cursor(3) %>

```button
name Add Insight
type prepend
action - 
color green
```

## Questions That Arose
<% tp.file.cursor(4) %>

```button
name Add Question
type prepend
action - 
color purple
```

```button
name Research Question
type link
action https://www.biblestudytools.com/search/?q=%22%22
color blue
```

## Personal Application
<% tp.file.cursor(5) %>

```button
name Add Application Point
type prepend
action - 
color green
```

## Theological Concepts Identified
<% tp.file.cursor(6) %>

```button
name Add Theological Concept
type note(Theological Concept: )
action Templater: Insert Template
templatePath Templates/TheologicalConcept.md
color blue
```

## Prayer Response
<% tp.file.cursor(7) %>

```button
name Save as Prayer
type note(Prayer: <% tp.date.now("YYYY-MM-DD") %>)
action Templater: Insert Template
templatePath Templates/Prayer.md
color purple
```

## Action Steps
<% tp.file.cursor(8) %>

```button
name Add Action Step
type prepend
action - [ ] 
color default
```

## Related Content
<% tp.file.cursor(9) %>

```button
name Create Lesson Plan
type note(Lesson: )
action Templater: Insert Template
templatePath Templates/LessonPlan.md
color blue
```

```button
name Share Insights
type command
action QuickAdd: Share Reflection
color green
```

```button
name Create Study Note
type note(Study Note: <% tp.file.cursor(1) %>)
action Templater: Insert Template
templatePath Templates/StudyNote.md
color default
``` 