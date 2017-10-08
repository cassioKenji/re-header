var callback = function(details) {
  details.requestHeaders.push( {name: 'My-Custom-Header', value: 'custom-value'} );

  return {requestHeaders: details.requestHeaders};
};

var filter = {urls: ["https://urlwheremyheaderwillbeset.com"]};
var opt_extraInfoSpec = ["requestHeaders"];

chrome.webRequest.onBeforeSendHeaders.addListener(
        callback, filter, opt_extraInfoSpec);
