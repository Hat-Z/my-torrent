'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('mai-san.torrent');
console.log(torrent.toString('utf8'));