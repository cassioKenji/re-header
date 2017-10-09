var callback = function(details) {

  var headers = details.requestHeaders, blockingResponse = {};
  headers.push( {name: 'X-Custom-Header', value: 'x-custom-value'} );


  blockingResponse.requestHeaders = headers;
  return blockingResponse;
};

var filter = {urls: ["<all_urls>"]};
var opt_extraInfoSpec = ['requestHeaders', 'blocking'];

chrome.webRequest.onBeforeSendHeaders.addListener(
        callback, filter, opt_extraInfoSpec);
