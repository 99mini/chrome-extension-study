chrome.storage.local.get("testKey", function (result) {
  console.log("At popup: ");
  console.log(result);
});
