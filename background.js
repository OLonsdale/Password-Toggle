chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
      id: "toggle-password",
      title: "Toggle Password Visibility",
      contexts: ["editable"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "toggle-password") {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: togglePassword
      });
  }
});

function togglePassword() {
  let activeElement = document.activeElement;
  if (activeElement && activeElement.type === "password") {
      activeElement.type = "text";
  } else if (activeElement && activeElement.type === "text") {
      activeElement.type = "password";
  }
}
