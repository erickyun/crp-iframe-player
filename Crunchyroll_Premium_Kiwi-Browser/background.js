chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
      console.log("test bg:")
      console.log(details.responseHeaders)
      const newHeader = {name: 'Access-Control-Allow-Origin', value: '*'};
      const responseHeaders = details.responseHeaders.concat(newHeader);
      return { responseHeaders };
    },
    {
      urls: ["https://*.mateus7g.github.io/*", "https://pl.crunchyroll.com/*", "https://www.crunchyroll.com/*", "http://localhost/*"],
      types : ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking","responseHeaders", "extraHeaders"]
  )
  