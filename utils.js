
export default class JSONRequest {

  constructor (protocol, url, callback) {
    this._HttpReq = new XMLHttpRequest()
    this._HttpReq.open(protocol, url, true)
    this._HttpReq.onload = (e) => {
      this._json = JSON.parse(this._HttpReq.responseText)
      callback(this._json)
    }
    this._HttpReq.send(null)
  }

  abort = () => {
    this._HttpReq.abort()
  }

}
