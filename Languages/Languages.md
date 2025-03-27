---
tags: [homepage, languages, index]
aliases: [Biblical Languages]
cssclass: languages-home
---

# Biblical Languages

> [!quote] "For then I will change the speech of the peoples to a pure speech, that all of them may call upon the name of the LORD and serve him with one accord." - Zephaniah 3:9

## Language Study Overview

This section provides access to biblical language studies, including Hebrew, Greek, Aramaic, and translations.

```dataview
TABLE WITHOUT ID
  file.link as "Language Study",
  language as "Language",
  related_scriptures as "Related Scriptures"
FROM "Languages"
WHERE !contains(file.name, "Home")
SORT language ASC
```

## Hebrew Studies

```dataview
TABLE WITHOUT ID
  file.link as "Study",
  hebrew_word as "Hebrew Word",
  transliteration as "Transliteration",
  definition as "Definition"
FROM "Languages"
WHERE language = "Hebrew"
SORT file.ctime DESC
```

## Greek Studies

```dataview
TABLE WITHOUT ID
  file.link as "Study",
  greek_word as "Greek Word",
  transliteration as "Transliteration",
  definition as "Definition"
FROM "Languages"
WHERE language = "Greek"
SORT file.ctime DESC
```

## Important Biblical Terms

```dataview
TABLE WITHOUT ID
  file.link as "Study",
  original_word as "Original Word",
  language as "Language",
  significance as "Significance"
FROM "Languages"
WHERE significance
SORT significance DESC
```

## Translation Comparisons

```dataview
TABLE WITHOUT ID
  file.link as "Study",
  scripture_reference as "Passage",
  translations_compared as "Translations"
FROM "Languages"
WHERE contains(file.tags, "translation-comparison")
SORT file.ctime DESC
```

## Resources for Language Study

- [Bible Hub Interlinear](https://biblehub.com/interlinear/)
- [Blue Letter Bible Lexicon](https://www.blueletterbible.org/lexicon/)
- [Logos Bible Software](https://www.logos.com/)
- [NET Bible Word Study](https://netbible.org/bible/)

```meta-bind-button
label: 🔤 New Language Study
style: primary
class: button-cyan
actions:
- type: templaterCreateNote
  templateFile: Templates/Language.md
  folderPath: Languages
``` 