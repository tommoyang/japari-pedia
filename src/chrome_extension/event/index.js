const storeKey = 'isEnableContent'
let isEnableContent = true

const updateIcon = () => {
  chrome.browserAction.setIcon({
    path: `icon/38${isEnableContent ? '' : 'g'}.png`,
  })
}

const getStorage = () => {
  chrome.storage.local.get(storeKey, (val) => {
    console.log('get', val, val[storeKey])
    isEnableContent = val[storeKey]
    updateIcon()
  })
}
const setStorage = () => {
  console.log('set', isEnableContent)
  chrome.storage.local.set({
    [storeKey]: isEnableContent,
  })
}

const toggleContentEnable = () => {
  console.log('event', chrome.runtime)
  isEnableContent = !isEnableContent
  updateIcon()
  setStorage()
}

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(request, sender, sendResponse)

  }
)

chrome.browserAction.onClicked.addListener(toggleContentEnable)

getStorage()
