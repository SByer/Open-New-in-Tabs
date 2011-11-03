function getLinks() {
  var links = document.querySelectorAll("a");
  var results = [];
  var seenLinks = {};
  for (var i  = 0; i < links.length; ++i) {
    var link = links[i].href.replace(/(.*)#?/, "$1");
    if (seenLinks[link])
      continue;
    seenLinks[link] = 1;
    if (link.search('goto=newpost') > -1)
      results.push({ href: link });
  }
  return results;
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse(getLinks());
});
