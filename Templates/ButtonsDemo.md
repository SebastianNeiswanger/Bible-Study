# Buttons for Bible Study

This template demonstrates various ways to use the Buttons plugin to enhance your Bible study workflow.

## Navigation Buttons

```button
name Create New Devotional
type command
action Templater: Insert Templates/Devotional.md
color blue
```

```button
name Create New Church Note
type command
action Templater: Insert Templates/ChurchNotes.md
color green
```

```button
name Create New Lesson Plan
type command
action Templater: Insert Templates/LessonPlan.md
color purple
```

```button
name Create Character Profile
type command
action Templater: Insert Templates/CharacterProfile.md
color yellow
```

```button
name Create Timeline Event
type command
action Templater: Insert Templates/TimelineEvent.md
color red
```

## Bible Reference Buttons

```button
name Open Bible Gateway
type link
action https://www.biblegateway.com/
color default
```

```button
name Search Blue Letter Bible
type link
action https://www.blueletterbible.org/
color default
```

```button
name Check Bible Hub
type link
action https://biblehub.com/
color default
```

```button
name Search Step Bible
type link
action https://www.stepbible.org/
color default
```

## Study Tools

```button
name Create Bible Reading Plan
type command
action QuickAdd: Bible Reading Plan
color blue
```

```button
name Insert Bible Verse
type command
action Templater: Insert Bible Verse
color green
```

```button
name Add Prayer Request
type command
action QuickAdd: Prayer Request
color purple
```

```button
name Add Study Note
type command
action QuickAdd: Study Note
color yellow
```

## Note Templates with Prepopulated Fields

```button
name Genesis Study Note
type note(Genesis Study) template
action Templates/Devotional
color blue
templateParams {"bible_book": "Genesis", "chapter": "1", "verses": "1-31"}
```

```button
name Exodus Study Note
type note(Exodus Study) template
action Templates/Devotional
color blue
templateParams {"bible_book": "Exodus", "chapter": "1", "verses": "1-22"}
```

```button
name Psalms Study Note
type note(Psalms Study) template
action Templates/Devotional
color blue
templateParams {"bible_book": "Psalms", "chapter": "1", "verses": "1-6"}
```

## Interactive Study Features

```button
name Toggle Scripture Translations
type command
action Buttons: Toggle Scripture Translations
color default
```

```button
name Show Cross References
type command
action Buttons: Show Cross References
color default
```

```button
name Toggle Hebrew/Greek
type command
action Buttons: Toggle Hebrew/Greek
color default
```

```button
name Generate Timeline
type command
action Buttons: Generate Timeline
color default
```

## Calculated Buttons

```button
name Next Chapter
type prepend template
action Templates/DevotionalSmall
replace Chapter {{chapter}}
remove 1
color green
```

```button
name Previous Chapter
type prepend template
action Templates/DevotionalSmall
replace Chapter {{chapter}}
remove -1
color red
```

## Capture Quick Insights

```button
name Add Insight
type command
action QuickAdd: Add Insight
color purple
```

```button
name Record Question
type command
action QuickAdd: Record Question
color yellow
```

```button
name Add Application
type command
action QuickAdd: Add Application
color green
```

## Resource Access

```button
name Open Bible Dictionary
type link
action https://www.biblestudytools.com/dictionaries/
color default
```

```button
name Open Bible Atlas
type link
action https://bibleatlas.org/
color default
```

```button
name Open Bible Timeline
type link
action https://biblehub.com/timeline/
color default
```

```button
name Open Strong's Concordance
type link
action https://www.blueletterbible.org/lang/lexicon/lexicon.cfm
color default
```

## Note: 
Some of these buttons reference templates or commands that would need to be created separately. The QuickAdd plugin would need to be installed and configured for some functions. These are examples to demonstrate the possibilities. 