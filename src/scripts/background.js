/**
 * chrome local 저장소에 {key: value} 형태로 저장하기
 * @param {string} key
 * @param {string} value
 */
function setStorage(key, value) {
  let setObj = {};
  setObj[key] = value;
  chrome.storage.local.set(setObj);
}

chrome.runtime.onInstalled.addListener(() => {
  setStorage("testKey", "testValue");
  chrome.storage.local.get("testKey", function (result) {
    console.log(result);
  });
});
