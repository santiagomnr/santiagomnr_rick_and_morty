const http = require('http');
const character = require('./utils/data')
const port = 3001

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes("/rickandmorty/character")) {
    const id = req.url.split('/').at(-1)

    let characterFilter = character.find((character) =>
    character.id === Number(id))

    res.writeHead(200, { "content-type": "application/json" })
    res.end(json.stringify(characterFilter))
  }
}).listen(port, console.log("port on 3001"))

