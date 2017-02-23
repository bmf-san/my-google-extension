chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "chrome://cache/";
  chrome.tabs.create({ url: newURL });
});
