var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 7011

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/todos", function (req, res) {
  var data = [
      { id: 0, text:  "Hello", status: false },
      { id: 1, text:  "World", status: true },
      { id: 2, text:      "!", status: false },
      { id: 3, text:   "from", status: true },
      { id: 4, text: "server", status: false }
  ]
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(data))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
