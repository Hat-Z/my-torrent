'use strict';
import bencode from 'bencode';
import fs from 'fs';

const torrent = bencode.decode(fs.readFileSync('mai-san.torrent'));
console.log(torrent);