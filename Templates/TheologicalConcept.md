---
tags: [theology, concept, <% tp.file.cursor(1) %>]
concept_name: <% tp.file.title %>
related_concepts: []
importance_level: medium
is_controversial: false
is_foundational: false
---

# <% tp.file.title %>

## Definition
<% tp.file.cursor(2) %>

## Key Scripture References
<% tp.file.cursor(3) %>

```meta-bind-button
label: 📖 Look Up Scriptures
style: default
class: button-blue
actions:
- type: open
  link: https://www.biblegateway.com/quicksearch/?quicksearch=<% tp.file.title %>&version=NASB
  newTab: true
```

## Biblical Development
<% tp.file.cursor(4) %>

## Historical Understanding
<% tp.file.cursor(5) %>

## Theological Perspectives

### Orthodox/Traditional View
<% tp.file.cursor(6) %>

### Alternative Interpretations
<% tp.file.cursor(7) %>

## Related Concepts
<% tp.file.cursor(8) %>

```meta-bind-button
label: 📘 Add Related Concept
style: default
class: button-purple
actions:
- type: templaterCreateNote
  templateFile: Templates/TheologicalConcept.md
  folder: Theological Concepts
  notePath: Theological Concepts/<% tp.file.cursor(9) %>
```

## Application
<% tp.file.cursor(10) %>

```meta-bind-button
label: ✅ Add Application Point
style: default
class: button-green
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

## Common Misconceptions
<% tp.file.cursor(11) %>

## Key Figures in Development
<% tp.file.cursor(12) %>

```meta-bind-button
label: 👤 Add Figure Profile
style: default
class: button-yellow
actions:
- type: templaterCreateNote
  templateFile: Templates/CharacterProfile.md
  folder: Characters
  notePath: Characters/<% tp.file.cursor(13) %>
```

## Questions for Further Study
<% tp.file.cursor(14) %>

```meta-bind-button
label: ❓ Add Question
style: default
class: button-default
actions:
- type: command
  command: editor:insert-text
  payload: "- [ ] "
```

## Resources for Deeper Study
<% tp.file.cursor(15) %>

```meta-bind-button
label: 🔍 Research Topic
style: default
class: button-default
actions:
- type: open
  link: https://www.biblestudytools.com/dictionary/search/?q=<% tp.file.title %>
  newTab: true
```

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

```meta-bind-button
label: 📚 Create Lesson Plan
style: default
class: button-red
actions:
- type: templaterCreateNote
  templateFile: Templates/LessonPlan.md
  folder: Lesson Plans
  notePath: Lesson Plans/Lesson - <% tp.file.title %>
``` 