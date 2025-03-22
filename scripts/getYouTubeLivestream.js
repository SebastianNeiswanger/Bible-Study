/**
 * Script to fetch the current YouTube livestream link for First Baptist Niles Ohio
 * Used by church notes templates to embed the live service
 */

/**
 * A class to fetch YouTube livestream URLs
 * @private - Internal helper class
 */
class YouTubeLivestreamFetcher {
  /**
   * Creates a new fetcher instance
   * 
   * @param {string} channelId - YouTube channel ID or handle
   */
  constructor(channelId) {
    this.channelId = channelId;
    this.liveUrl = null;
  }

  /**
   * Gets the URL for the channel's live stream
   * 
   * @returns {string} The live stream URL
   */
  getLiveUrl() {
    // Since we can't directly query YouTube API from Obsidian without API key,
    // we'll use the standard /live URL pattern
    if (this.channelId.startsWith('@')) {
      return `https://www.youtube.com/${this.channelId}/live`;
    } else {
      return `https://www.youtube.com/channel/${this.channelId}/live`;
    }
  }

  /**
   * Gets the URL for the channel's homepage
   * 
   * @returns {string} The channel URL
   */
  getChannelUrl() {
    if (this.channelId.startsWith('@')) {
      return `https://www.youtube.com/${this.channelId}`;
    } else {
      return `https://www.youtube.com/channel/${this.channelId}`;
    }
  }
}

// Initialize a fetcher for our church
const firstBaptistFetcher = new YouTubeLivestreamFetcher('@FirstBaptistNilesOhio');

/**
 * Main export function - Gets the livestream URL for First Baptist Niles Ohio
 * 
 * @returns {string} The livestream URL
 */
function getYouTubeLivestream() {
  return firstBaptistFetcher.getLiveUrl();
}

// Add utility methods to the main function
getYouTubeLivestream.getChannelUrl = function() {
  return firstBaptistFetcher.getChannelUrl();
};

getYouTubeLivestream.getAllChurchUrls = function() {
  return {
    livestream: firstBaptistFetcher.getLiveUrl(),
    channel: firstBaptistFetcher.getChannelUrl()
  };
};

getYouTubeLivestream.createFetcher = function(channelId) {
  return new YouTubeLivestreamFetcher(channelId);
};

// Add self-identification method for debugging
getYouTubeLivestream.identify = function() {
  return {
    name: "getYouTubeLivestream",
    version: "1.0.1",
    description: "Function to get YouTube livestream URLs for church services"
  };
};

// Add direct embed code generation
getYouTubeLivestream.createEmbed = function(width = 560, height = 315) {
  const liveUrl = getYouTubeLivestream();
  const embedUrl = liveUrl.replace('/live', '/embed/live');
  
  return `<iframe width="${width}" height="${height}" src="${embedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

// Export a single function as required by CommonJS specification
module.exports = getYouTubeLivestream; 