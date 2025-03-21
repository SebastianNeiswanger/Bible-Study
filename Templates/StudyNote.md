# <% tp.file.title %>
**Date Created:** <% tp.date.now("YYYY-MM-DD") %>
**References:** [[<% tp.file.cursor(1) %>]]
**Topics:** <% tp.file.cursor(2) %>

## Summary
<% tp.file.cursor(3) %>

## Key Points
<% tp.file.cursor(4) %>

```button
name Add Point
type prepend
action - 
color default
```

## Scripture Analysis
<% tp.file.cursor(5) %>

```button
name Look Up Scripture
type link
action https://www.biblegateway.com/passage/?search=<% tp.file.cursor(1) %>&version=ESV
color blue
```

```button
name Study Original Language
type link
action https://www.blueletterbible.org/esv/<% tp.file.cursor(1) %>/1/1/t_concf_1001001
color purple
```

## Historical Context
<% tp.file.cursor(6) %>

```button
name Research Context
type link
action https://www.biblestudytools.com/bible-study/topical-studies/
color blue
```

## Theological Implications
<% tp.file.cursor(7) %>

```button
name Add Theological Concept
type note(Theological Concept: )
action Templater: Insert Template
templatePath Templates/TheologicalConcept.md
color green
```

## Cross-References
<% tp.file.cursor(8) %>

```button
name Add Cross-Reference
type prepend
action - [[]] - 
color default
```

## Commentaries & Scholarly Insights
<% tp.file.cursor(9) %>

```button
name Research Commentaries
type link
action https://www.biblestudytools.com/commentaries/
color blue
```

## Personal Reflection
<% tp.file.cursor(10) %>

```button
name Expand Reflection
type note(Reflection: <% tp.file.title %>)
action Templater: Insert Template
templatePath Templates/Reflection.md
color purple
```

## Related Characters
<% tp.file.cursor(11) %>

```button
name Add Character Profile
type note(Character: )
action Templater: Insert Template
templatePath Templates/CharacterProfile.md
color blue
```

## Teaching Applications
<% tp.file.cursor(12) %>

```button
name Create Lesson Plan
type note(Lesson: <% tp.file.title %>)
action Templater: Insert Template
templatePath Templates/LessonPlan.md
color green
```

## Questions for Further Study
<% tp.file.cursor(13) %>

```button
name Add Question
type prepend
action - 
color default
```

## Additional Resources
<% tp.file.cursor(14) %>

```button
name Add Resource
type prepend
action - 
color default
```

```button
name Share Study Note
type command
action QuickAdd: Share Study Note
color blue
``` 