chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggle") {
      let activeElement = document.activeElement;
      if (activeElement && activeElement.type === "password") {
          activeElement.type = activeElement.type === "password" ? "text" : "password";
      }
  }
});

