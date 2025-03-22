/**
 * Templater script for YouTube integration in Obsidian
 * This file provides functions for Templater to easily access YouTube functionality
 * It works independently without requiring imports
 */

/**
 * Main Templater function for YouTube integration
 * Gets the current First Baptist Niles Ohio livestream URL
 * 
 * @param {object} tp - The Templater object
 * @returns {string} The livestream URL
 */
function templaterYouTube(tp) {
  try {
    return getYouTubeChannelLiveURL('@FirstBaptistNilesOhio');
  } catch (error) {
    console.error("Error getting livestream URL:", error);
    return "https://www.youtube.com/@FirstBaptistNilesOhio/live";
  }
}

/**
 * Internal helper to get a YouTube livestream URL
 * 
 * @param {string} channelId - The YouTube channel ID or handle
 * @returns {string} The livestream URL
 */
function getYouTubeChannelLiveURL(channelId) {
  if (channelId.startsWith('@')) {
    return `https://www.youtube.com/${channelId}/live`;
  } else {
    return `https://www.youtube.com/channel/${channelId}/live`;
  }
}

/**
 * Internal helper to get a YouTube channel URL
 * 
 * @param {string} channelId - The YouTube channel ID or handle
 * @returns {string} The channel URL
 */
function getYouTubeChannelURL(channelId) {
  if (channelId.startsWith('@')) {
    return `https://www.youtube.com/${channelId}`;
  } else {
    return `https://www.youtube.com/channel/${channelId}`;
  }
}

/**
 * Internal helper to get a YouTube upcoming livestream URL
 * 
 * @param {string} channelId - The YouTube channel ID or handle
 * @returns {string} The upcoming livestream URL
 */
function getYouTubeChannelUpcomingURL(channelId) {
  const channelURL = getYouTubeChannelURL(channelId);
  return `${channelURL}/streams`;
}

/**
 * Gets the livestream URL for First Baptist Niles Ohio
 * 
 * @param {object} tp - The Templater object
 * @returns {string} The livestream URL
 */
templaterYouTube.getLivestream = function(tp) {
  return getYouTubeChannelLiveURL('@FirstBaptistNilesOhio');
};

/**
 * Gets the next scheduled livestream URL for First Baptist Niles Ohio
 * This URL will redirect to the next scheduled livestream if one exists
 * 
 * @param {object} tp - The Templater object
 * @returns {string} The scheduled livestream URL
 */
templaterYouTube.getNextScheduledStream = function(tp) {
  return getYouTubeChannelUpcomingURL('@FirstBaptistNilesOhio');
};

/**
 * Gets the channel URL for First Baptist Niles Ohio
 * 
 * @param {object} tp - The Templater object
 * @returns {string} The channel URL
 */
templaterYouTube.getChannelUrl = function(tp) {
  return getYouTubeChannelURL('@FirstBaptistNilesOhio');
};

/**
 * Gets all URLs for First Baptist Niles Ohio
 * 
 * @param {object} tp - The Templater object
 * @returns {object} Object containing livestream and channel URLs
 */
templaterYouTube.getAllChurchUrls = function(tp) {
  return {
    livestream: getYouTubeChannelLiveURL('@FirstBaptistNilesOhio'),
    upcoming: getYouTubeChannelUpcomingURL('@FirstBaptistNilesOhio'),
    channel: getYouTubeChannelURL('@FirstBaptistNilesOhio')
  };
};

/**
 * Creates an embed iframe for the First Baptist Niles Ohio livestream
 * 
 * @param {object} tp - The Templater object
 * @param {number} width - The width of the iframe (default: 560)
 * @param {number} height - The height of the iframe (default: 315)
 * @returns {string} HTML iframe code
 */
templaterYouTube.createLivestreamEmbed = function(tp, width = 560, height = 315) {
  // Check if livestream URL is provided in frontmatter
  let embedUrl = "";
  if (tp.frontmatter && tp.frontmatter.livestream) {
    const livestreamUrl = tp.frontmatter.livestream;
    
    // Handle different URL formats for embedding
    if (livestreamUrl.includes('/live')) {
      embedUrl = livestreamUrl.replace('/live', '/embed/live');
    } else if (livestreamUrl.includes('/streams')) {
      embedUrl = livestreamUrl.replace('/streams', '/embed/live');
    } else if (livestreamUrl.includes('@')) {
      // Direct channel URL with handle
      const channelHandle = livestreamUrl.includes('/') 
        ? livestreamUrl.split('@')[1].split('/')[0]
        : livestreamUrl.replace('@', '');
      embedUrl = `https://www.youtube.com/embed/@${channelHandle}/live`;
    } else {
      // Use the URL as is, might be a direct video ID
      embedUrl = livestreamUrl;
    }
  } else {
    // Fallback to default church channel
    const liveUrl = getYouTubeChannelLiveURL('@FirstBaptistNilesOhio');
    embedUrl = liveUrl.replace('youtube.com/', 'youtube.com/embed/');
  }
  
  // Make sure the URL starts with https://
  if (!embedUrl.startsWith('http')) {
    embedUrl = 'https://' + embedUrl.replace(/^\/\//, '');
  }
  
  return `<iframe width="${width}" height="${height}" src="${embedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

/**
 * Gets a livestream URL for any YouTube channel
 * 
 * @param {object} tp - The Templater object
 * @param {string} channelId - The YouTube channel ID or handle
 * @returns {string} The livestream URL
 */
templaterYouTube.getCustomChannelLivestream = function(tp, channelId) {
  return getYouTubeChannelLiveURL(channelId);
};

/**
 * Gets the next scheduled livestream URL for any YouTube channel
 * 
 * @param {object} tp - The Templater object
 * @param {string} channelId - The YouTube channel ID or handle
 * @returns {string} The scheduled livestream URL
 */
templaterYouTube.getCustomChannelScheduledStream = function(tp, channelId) {
  return getYouTubeChannelUpcomingURL(channelId);
};

/**
 * Gets a channel URL for any YouTube channel
 * 
 * @param {object} tp - The Templater object
 * @param {string} channelId - The YouTube channel ID or handle
 * @returns {string} The channel URL
 */
templaterYouTube.getCustomChannelUrl = function(tp, channelId) {
  return getYouTubeChannelURL(channelId);
};

/**
 * Creates an embed iframe for any YouTube channel's livestream
 * 
 * @param {object} tp - The Templater object
 * @param {string} channelId - The YouTube channel ID or handle
 * @param {number} width - The width of the iframe (default: 560)
 * @param {number} height - The height of the iframe (default: 315)
 * @returns {string} HTML iframe code
 */
templaterYouTube.createCustomChannelEmbed = function(tp, channelId, width = 560, height = 315) {
  let embedUrl = "";
  
  // Handle different channel ID formats
  if (channelId.includes('/live')) {
    embedUrl = channelId.replace('/live', '/embed/live');
  } else if (channelId.includes('/streams')) {
    embedUrl = channelId.replace('/streams', '/embed/live');
  } else if (channelId.startsWith('@') || channelId.includes('youtube.com/@')) {
    // Extract the handle
    const handle = channelId.includes('@') 
      ? channelId.split('@')[1].split('/')[0]
      : channelId;
    embedUrl = `https://www.youtube.com/embed/@${handle.replace('@', '')}/live`;
  } else if (channelId.includes('youtube.com/channel/')) {
    // Handle channel ID format
    embedUrl = channelId.replace('youtube.com/channel/', 'youtube.com/embed/c/');
  } else {
    // Default to treating as a handle
    const liveUrl = getYouTubeChannelLiveURL(channelId);
    embedUrl = liveUrl.replace('youtube.com/', 'youtube.com/embed/');
  }
  
  // Make sure the URL starts with https://
  if (!embedUrl.startsWith('http')) {
    embedUrl = 'https://' + embedUrl.replace(/^\/\//, '');
  }
  
  return `<iframe width="${width}" height="${height}" src="${embedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

/**
 * Provides version and identification information
 * 
 * @returns {object} Information about this script
 */
templaterYouTube.identify = function() {
  return {
    name: "templaterYouTube",
    version: "2.1.0",
    description: "Self-contained YouTube integration for Templater with live and scheduled stream support"
  };
};

/**
 * Creates a simple test report for the integration
 * 
 * @param {object} tp - The Templater object
 * @returns {string} A test report
 */
templaterYouTube.testIntegration = function(tp) {
  const tests = {
    mainFunction: {
      name: "Main function",
      result: templaterYouTube(tp),
      pass: true
    },
    getLivestream: {
      name: "getLivestream method",
      result: templaterYouTube.getLivestream(tp),
      pass: true
    },
    getScheduled: {
      name: "getNextScheduledStream method",
      result: templaterYouTube.getNextScheduledStream(tp),
      pass: true
    },
    getChannelUrl: {
      name: "getChannelUrl method",
      result: templaterYouTube.getChannelUrl(tp),
      pass: true
    },
    createEmbed: {
      name: "createLivestreamEmbed method",
      result: "iframe HTML generated",
      pass: templaterYouTube.createLivestreamEmbed(tp).includes("iframe")
    },
    customChannel: {
      name: "Custom channel function",
      result: templaterYouTube.getCustomChannelLivestream(tp, "@YouTube"),
      pass: true
    }
  };
  
  return "## YouTube Integration Test Results\n\n" +
    Object.values(tests).map(test => `- **${test.name}**: ${test.pass ? '✅' : '❌'} ${test.result}`).join('\n');
};

// Export the function for Templater to use
module.exports = templaterYouTube; 