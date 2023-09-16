chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'searchOnGenius',
      title: 'Search on Genius',
      contexts: ['selection']
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'searchOnGenius') {
      const query = info.selectionText;
      const geniusURL = `https://genius.com/search?q=${encodeURIComponent(query)}`;
      chrome.tabs.create({ url: geniusURL });
    }
  });
  