console.log('content', chrome.runtime)

chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    console.log(msg)
  })
})

chrome.extension.onRequest.addListener(
  (request, sender, sendResponse) => {
    console.log(request, sender, sendResponse)
//    sendResponse({counter: request.counter+1});
  })


//  const content = require('./content')
//  content()
