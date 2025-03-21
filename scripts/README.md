# Bible Study Scripts for Templater

This directory contains scripts for accessing and using Bible data within Obsidian via Templater.

## Overview

- **bibleData.json**: Contains comprehensive data about Bible books in JSON format
- **user-functions.js**: The central script that provides all functions for Templater

## Setup Instructions

### 1. Enable Templater Script Functions

1. Open Obsidian Settings
2. Go to Community Plugins → Templater
3. Enable "Script functions"
4. Set "Script files folder location" to point to this directory (e.g., `scripts`)

### 2. Using Functions in Templates

Call these functions in your templates using:

```js
<% await tp.user.functionName(parameters) %>
```

For example:

```js
<% await tp.user.getBibleBookData("John") %>
```

> **Note**: Always use `await` with these functions since they return promises.

### 3. Cross-Platform Compatibility

These scripts work on both desktop and mobile versions of Obsidian, including iPad. No package manager or external dependencies are required.

## How It Works

The system uses a JSON file (`bibleData.json`) to store Bible book data, which provides several advantages:

1. **Mobile/iPad Compatibility**: No module imports that can cause problems on mobile
2. **Easily Editable**: You can edit the JSON file directly in Obsidian
3. **Better Performance**: Data is loaded once and cached

The `user-functions.js` file reads this JSON data and provides functions to access it. Unlike module-based approaches, this avoids many common errors with `require()` that can happen on mobile platforms.

## Available Functions

### getBibleBookData

Returns comprehensive information about a Bible book.

```js
<% const bookData = await tp.user.getBibleBookData("John") %>
Testament: <%= bookData.testament %>
Author: <%= bookData.author %>
```

### getAllBibleBooks

Returns an array of all Bible book names.

```js
<% const allBooks = await tp.user.getAllBibleBooks() %>
Total Books: <%= allBooks.length %>
```

### getBibleBooksByTestament

Returns an array of Bible books filtered by testament.

```js
<% const ntBooks = await tp.user.getBibleBooksByTestament("New Testament") %>
New Testament Books: <%= ntBooks.join(", ") %>
```

### getBibleBooksByType

Returns an array of Bible books filtered by type.

```js
<% const gospels = await tp.user.getBibleBooksByType("Gospel") %>
Gospels: <%= gospels.join(", ") %>
```

### getRelatedBooks

Returns an array of related books based on the given book.

```js
<% const related = await tp.user.getRelatedBooks("Matthew") %>
Related Books: <%= related.join(", ") %>
```

### generateStudyQuestions

Returns an array of study questions appropriate for the given book.

```js
<% const questions = await tp.user.generateStudyQuestions("Romans") %>
<% questions.forEach(q => { %>
- <%= q %>
<% }) %>
```

### testConnection

Simple function to test if Templater can access these scripts.

```js
<% await tp.user.testConnection() %>
```

## Troubleshooting

### "Cannot Access User Functions on Mobile/iPad"

If you're having trouble accessing user functions on mobile:

1. Make sure the scripts folder is synced to your mobile device
2. In Templater mobile settings, verify the script folder path is correct
3. Try restarting Obsidian
4. Use the `testConnection()` function to verify the scripts are accessible
5. Check Obsidian's console for specific error messages

### JSON Parse Error

If you see an error about parsing JSON:

1. Make sure the `bibleData.json` file is valid JSON
2. Check for any syntax errors like missing commas or quotes
3. You can validate the JSON using an online validator if needed

## Adding More Bible Book Data

To add more Bible books, edit the `bibleData.json` file and add new entries following the existing format. You can edit this file directly in Obsidian.

## Template Usage Examples

### Basic Book Information Template

```markdown
---
tags: bible-study, <%= bookData.testament.toLowerCase() %>
---

# <%= bookName %> Study Notes

- Testament: <%= bookData.testament %>
- Author: <%= bookData.author %>
- Date: <%= bookData.time %>
- Chapters: <%= bookData.chapters %>

## Key Themes
<% bookData.themes.forEach(theme => { %>
- <%= theme %>
<% }) %>

## Study Questions
<% const questions = await tp.user.generateStudyQuestions(bookName) %>
<% questions.slice(0, 5).forEach((q, i) => { %>
<%= i+1 %>. <%= q %>
<% }) %>
```

### Related Books Component

```markdown
## Related Books
<% 
const relatedBooks = await tp.user.getRelatedBooks(tp.file.title);
if (relatedBooks.length > 0) {
%>

Books related to <%= tp.file.title %>:

<% relatedBooks.forEach(book => { %>
- [[Bible Books/<%= book %>|<%= book %>]]
<% }) %>

<% } else { %>
No closely related books found.
<% } %>
```

### Creating a Testament Filter

```markdown
## <%= testament %> Books

<% 
const books = await tp.user.getBibleBooksByTestament(testament);
books.forEach(book => {
%>
- [[Bible Books/<%= book %>|<%= book %>]]
<% }) %>
``` 