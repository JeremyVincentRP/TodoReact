import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!doctype html><html><body><div id="content"></div></body></html>')
const win = doc.defaultView

global.document = doc
global.window   = win

propagateToGlobal(win)

function propagateToGlobal (window) {
  for (const key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}
