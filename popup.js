
 
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}
function speakText() {
  chrome.tabs.executeScript(null, {file: "script.js"});
}

chrome.webNavigation.onCompleted.addListener(function() {
  var dropdown = document.getElementById('dropdown');
    //if(dropdown.value === enable){
  chrome.tabs.executeScript(null, {file: "script.js"});
 // console.log(dropdown.value);
 console.log("aa");

});
// document.addEventListener('DOMContentLoaded', () => {
//   // getCurrentTabUrl((url) => {
//     // var dropdown = document.getElementById('dropdown');
//     // if(dropdown.value === enable){
//     speakText();
//   });
  // });
// });

