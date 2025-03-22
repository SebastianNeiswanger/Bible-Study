/**
 * Debug script for Templater
 * This can be used to diagnose module loading issues
 */

/**
 * Returns diagnostic information about the script environment
 * 
 * @param {object} tp - The Templater object
 * @returns {string} Diagnostic information
 */
function debugTemplater(tp) {
  const info = {
    tpVersion: tp.obsidian ? tp.obsidian.version : "unknown",
    userScriptsAvailable: !!tp.user,
    userFunctions: tp.user ? Object.keys(tp.user) : [],
    currentFilePath: tp.file ? tp.file.path : "unknown",
    currentDateTime: new Date().toISOString(),
    obsidianAppAvailable: typeof app !== 'undefined',
    obsidianInfo: typeof app !== 'undefined' ? {
      platform: app.platform,
      version: app.version
    } : null
  };
  
  // Check for YouTube integration
  if (tp.user && tp.user.templaterYouTube) {
    info.youtubeIntegration = {
      available: true,
      isFunction: typeof tp.user.templaterYouTube === 'function',
      methods: Object.keys(tp.user.templaterYouTube)
    };
    
    // Test main function
    try {
      const liveUrl = tp.user.templaterYouTube(tp);
      info.youtubeIntegration.mainFunctionWorks = true;
      info.youtubeIntegration.liveUrl = liveUrl;
    } catch (error) {
      info.youtubeIntegration.mainFunctionWorks = false;
      info.youtubeIntegration.mainFunctionError = error.message;
    }
    
    // Test methods
    if (typeof tp.user.templaterYouTube.getLivestream === 'function') {
      try {
        const liveUrl = tp.user.templaterYouTube.getLivestream(tp);
        info.youtubeIntegration.getLivestreamWorks = true;
        info.youtubeIntegration.getLivestreamUrl = liveUrl;
      } catch (error) {
        info.youtubeIntegration.getLivestreamWorks = false;
        info.youtubeIntegration.getLivestreamError = error.message;
      }
    }
    
    if (typeof tp.user.templaterYouTube.createLivestreamEmbed === 'function') {
      try {
        const embed = tp.user.templaterYouTube.createLivestreamEmbed(tp);
        info.youtubeIntegration.createEmbedWorks = true;
      } catch (error) {
        info.youtubeIntegration.createEmbedWorks = false;
        info.youtubeIntegration.createEmbedError = error.message;
      }
    }
  } else {
    info.youtubeIntegration = {
      available: false
    };
  }
  
  // Test if we can generate URLs directly
  info.directUrlGeneration = {
    channelHandle: '@FirstBaptistNilesOhio',
    works: true
  };
  
  try {
    const channelHandle = '@FirstBaptistNilesOhio';
    info.directUrlGeneration.liveUrl = `https://www.youtube.com/${channelHandle}/live`;
    info.directUrlGeneration.channelUrl = `https://www.youtube.com/${channelHandle}`;
    info.directUrlGeneration.embedUrl = `https://www.youtube.com/embed/${channelHandle}/live`;
  } catch (error) {
    info.directUrlGeneration.works = false;
    info.directUrlGeneration.error = error.message;
  }
  
  return "## Templater Debug Information\n\n```json\n" + JSON.stringify(info, null, 2) + "\n```";
}

// Make sure this function is properly exposed
module.exports = debugTemplater; 