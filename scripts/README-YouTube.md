# YouTube Integration for Bible Study Vault

This document explains how to use the YouTube integration features in your Bible Study Obsidian vault, particularly for viewing church services from First Baptist Niles Ohio.

## Features

The YouTube integration provides the following functionality:

1. Automatically fetch the church's livestream URL
2. Embed livestreams directly in your notes
3. Add links to the church's YouTube channel
4. Support for both live and recorded videos

## Setup Instructions

To use the YouTube integration in your templates, follow these steps:

1. Make sure the script file is in the correct location:
   - `scripts/templater-youtube.js` - The self-contained Templater integration script

2. Configure Templater to use this script:
   - In Obsidian, go to Settings → Templater
   - Under "Script files location", make sure `scripts` is included
   - Under "User functions", add the path to `scripts/templater-youtube.js`
   - Restart Obsidian to ensure the script is properly loaded

3. Use the template functions in your templates:
   - `tp.user.templaterYouTube(tp)` - Gets the livestream URL (main function)
   - `tp.user.templaterYouTube.getLivestream(tp)` - Gets the livestream URL (method)
   - `tp.user.templaterYouTube.getNextScheduledStream(tp)` - Gets the next scheduled livestream URL
   - `tp.user.templaterYouTube.getChannelUrl(tp)` - Gets the channel URL
   - `tp.user.templaterYouTube.createLivestreamEmbed(tp)` - Creates an embed iframe
   - `tp.user.templaterYouTube.getCustomChannelLivestream(tp, '@ChannelHandle')` - Gets livestream for any channel
   - `tp.user.templaterYouTube.getCustomChannelScheduledStream(tp, '@ChannelHandle')` - Gets scheduled streams for any channel
   - `tp.user.templaterYouTube.createCustomChannelEmbed(tp, '@ChannelHandle')` - Creates embed for any channel

## Using in Church Notes

The Church Notes template is already configured to:

1. Automatically add the livestream URL to the frontmatter
2. Optionally embed the livestream in the note (if you select "Yes" for embed)
3. Include a button to visit the YouTube channel

### Example Usage

```markdown
---
tags: [church-notes, sermon, sunday]
date: 2023-05-28
speaker: Pastor Schuler
event: Sunday Morning
bible_references: ["John 3:16", "Romans 5:8"]
sermon_theme: God's Love
service_time: Morning Service
livestream: https://www.youtube.com/@FirstBaptistNilesOhio/live
show_embed: true
cssclass: church-notes
---

# Sunday Service (May 28, 2023) - Pastor Schuler

>[!summary] Quick Info
>- **Date:** Sunday, May 28th, 2023
>- **Speaker:** Pastor Schuler
>- **Event:** Sunday Morning
>- **Scripture:** John 3:16, Romans 5:8
>- **Service Time:** Morning Service
>- **Livestream:** [Watch Live](https://www.youtube.com/@FirstBaptistNilesOhio/live)

## Livestream
<iframe width="560" height="315" src="https://www.youtube.com/embed/@FirstBaptistNilesOhio/live" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

...rest of the note...
```

## Technical Details

### How the Integration Works

The integration uses YouTube's standard URL patterns to access livestreams without requiring an API key:

- Live URL pattern: `https://www.youtube.com/@ChannelName/live`
- Embed URL pattern: `https://www.youtube.com/embed/@ChannelName/live`

### Script Structure

The `templater-youtube.js` script is completely self-contained and doesn't require any imports. This avoids the module loading issues that can occur in Obsidian's scripting environment.

The script includes:
1. A main function that returns the livestream URL for First Baptist Niles Ohio
2. Utility methods for getting channel URLs and creating embeds
3. Methods for working with custom YouTube channels

```javascript
// Direct URL generation in the script:
function getYouTubeChannelLiveURL(channelId) {
  if (channelId.startsWith('@')) {
    return `https://www.youtube.com/${channelId}/live`;
  } else {
    return `https://www.youtube.com/channel/${channelId}/live`;
  }
}
```

### Working with Multiple YouTube Channels

The script includes utilities for working with any YouTube channel:

```javascript
// Get livestream URL for another channel
const anotherChurchLive = tp.user.templaterYouTube.getCustomChannelLivestream(tp, '@AnotherChurchChannel');

// Create embed for another channel
const anotherChurchEmbed = tp.user.templaterYouTube.createCustomChannelEmbed(tp, '@AnotherChurchChannel');
```

## Troubleshooting

If you're having issues with the YouTube integration, these tools can help:

### Debug Script

Use the included debugging script to get detailed information about your Templater environment:

1. Add this to your template: `<% tp.user.debugTemplater(tp) %>`
2. This will output detailed information about your Templater environment and YouTube integration

### Test Script

Use the test script to verify if the YouTube integration is working:

1. Add this to your template: `<% tp.user.testYouTube(tp) %>`
2. This will run tests on the YouTube functions and report the results

### Common Issues

1. **Script not found**: Make sure `scripts/templater-youtube.js` exists and is correctly configured in Templater settings
2. **Function not available**: Restart Obsidian to ensure the script is properly loaded
3. **Error in template**: Check that you're passing `tp` to the functions: `tp.user.templaterYouTube(tp)`

### Manual URL Generation

If you're still having issues, you can generate URLs directly in your templates:

```javascript
const channelHandle = '@FirstBaptistNilesOhio';
const liveUrl = `https://www.youtube.com/${channelHandle}/live`;
const embedUrl = `https://www.youtube.com/embed/${channelHandle}/live`;
```
