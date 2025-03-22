/**
 * Test script for YouTube integration in Obsidian
 * 
 * This script can be run directly from Obsidian to test if the YouTube integration is working.
 * If there's an issue, it will show debugging information about what went wrong.
 */

/**
 * Main test function for YouTube integration
 * Tests the YouTube functionality directly without requiring imports
 * 
 * @param {object} tp - The Templater object (optional)
 * @returns {string} A message indicating test results
 */
function testYouTube(tp) {
  const results = {
    timestamp: new Date().toISOString(),
    environment: {
      hasTemplater: !!tp,
      hasObsidian: typeof app !== 'undefined',
      userFunctions: tp && tp.user ? Object.keys(tp.user) : []
    },
    liveURLTests: {},
    embedTests: {}
  };
  
  // Try to determine if templaterYouTube is directly available
  if (tp && tp.user && tp.user.templaterYouTube) {
    results.environment.hasTemplaterYouTube = true;
    
    // Test main function
    try {
      const liveUrl = tp.user.templaterYouTube(tp);
      results.liveURLTests.mainFunction = {
        success: true,
        result: liveUrl
      };
    } catch (error) {
      results.liveURLTests.mainFunction = {
        success: false,
        error: error.message
      };
    }
    
    // Test getLivestream method
    try {
      if (typeof tp.user.templaterYouTube.getLivestream === 'function') {
        const liveUrl = tp.user.templaterYouTube.getLivestream(tp);
        results.liveURLTests.getLivestreamMethod = {
          success: true,
          result: liveUrl
        };
      } else {
        results.liveURLTests.getLivestreamMethod = {
          success: false,
          error: "Method not found on function"
        };
      }
    } catch (error) {
      results.liveURLTests.getLivestreamMethod = {
        success: false,
        error: error.message
      };
    }
    
    // Test getChannelUrl method
    try {
      if (typeof tp.user.templaterYouTube.getChannelUrl === 'function') {
        const channelUrl = tp.user.templaterYouTube.getChannelUrl(tp);
        results.liveURLTests.getChannelUrlMethod = {
          success: true,
          result: channelUrl
        };
      } else {
        results.liveURLTests.getChannelUrlMethod = {
          success: false,
          error: "Method not found on function"
        };
      }
    } catch (error) {
      results.liveURLTests.getChannelUrlMethod = {
        success: false,
        error: error.message
      };
    }
    
    // Test createLivestreamEmbed method
    try {
      if (typeof tp.user.templaterYouTube.createLivestreamEmbed === 'function') {
        const embed = tp.user.templaterYouTube.createLivestreamEmbed(tp);
        results.embedTests.createLivestreamEmbedMethod = {
          success: true,
          result: embed.substring(0, 150) + "..." // Only show the first part of the embed
        };
      } else {
        results.embedTests.createLivestreamEmbedMethod = {
          success: false,
          error: "Method not found on function"
        };
      }
    } catch (error) {
      results.embedTests.createLivestreamEmbedMethod = {
        success: false,
        error: error.message
      };
    }
    
    // Test custom channel methods
    try {
      if (typeof tp.user.templaterYouTube.getCustomChannelLivestream === 'function') {
        const customLiveUrl = tp.user.templaterYouTube.getCustomChannelLivestream(tp, '@YouTube');
        results.liveURLTests.getCustomChannelLivestreamMethod = {
          success: true,
          result: customLiveUrl
        };
      } else {
        results.liveURLTests.getCustomChannelLivestreamMethod = {
          success: false,
          error: "Method not found on function"
        };
      }
    } catch (error) {
      results.liveURLTests.getCustomChannelLivestreamMethod = {
        success: false,
        error: error.message
      };
    }
    
    // If the testIntegration method is available, use that for a simplified test result
    if (typeof tp.user.templaterYouTube.testIntegration === 'function') {
      try {
        results.testIntegrationResult = tp.user.templaterYouTube.testIntegration(tp);
      } catch (error) {
        results.testIntegrationError = error.message;
      }
    }
  } else {
    results.environment.hasTemplaterYouTube = false;
  }
  
  // Test direct URL generation
  try {
    // Generate URLs directly as a fallback test
    const channelHandle = '@FirstBaptistNilesOhio';
    
    const directLiveURL = channelHandle.startsWith('@') 
      ? `https://www.youtube.com/${channelHandle}/live`
      : `https://www.youtube.com/channel/${channelHandle}/live`;
      
    const directChannelURL = channelHandle.startsWith('@')
      ? `https://www.youtube.com/${channelHandle}`
      : `https://www.youtube.com/channel/${channelHandle}`;
      
    const directEmbedURL = `https://www.youtube.com/embed/${channelHandle.replace('@', '')}/live`;
    
    results.liveURLTests.directGeneration = {
      success: true,
      liveURL: directLiveURL,
      channelURL: directChannelURL,
      embedURL: directEmbedURL
    };
  } catch (error) {
    results.liveURLTests.directGeneration = {
      success: false,
      error: error.message
    };
  }
  
  // If simplified output is requested, and we have the test integration result, show that
  if (results.testIntegrationResult) {
    return results.testIntegrationResult;
  }
  
  // Return results in a readable format
  return "## YouTube Integration Test Results\n\n```json\n" + 
    JSON.stringify(results, null, 2) + 
    "\n```\n\n**Note:** If direct URL generation works but the methods fail, you may need to ensure that `templater-youtube.js` is properly configured in Templater settings.";
}

/**
 * Function that displays a message in Obsidian
 * This will be used when the script is executed directly
 */
function showTestResults() {
  const results = testYouTube();
  if (typeof Notice !== 'undefined') {
    new Notice(
      "YouTube integration tested. Check console for results.",
      5000
    );
  }
  console.log(results);
  return results;
}

// Export the function for Templater to use
module.exports = testYouTube; 