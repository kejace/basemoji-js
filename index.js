const emojis = require('unicode-tr51');
const be = require('base-x')('0123456789')
const sha3_512 = require('js-sha3').sha3_512;

let emojiMods = ['\uD83C\uDFFB', '\uD83C\uDFFC', '\uD83C\uDFFD', '\uD83C\uDFFE', '\uD83C\uDFFF']
let emojiAlphabet = ['\u270B','\uD83E\uDD1E'] 

let charAlphabet = ['a','b','c','d','e','f']
let charMods = [-32]

function modifyChar(i, c){
  if(i == 1)
    return String.fromCharCode(c.charCodeAt(0) + charMods[i-1]);
  else
    return c;
}

function modifyEmoji(i, c){
  if(i > 0 && i < 6)
    return c.concat(emojiMods[i-1])
  else
    return c;
}

let a1 = [0,1].map(i => [0,1,2,3,4,5].map(j=> modifyChar(i, charAlphabet[j])))
let a2 = [1,2,3,4,5].map(i => [0,1].map(j=> modifyEmoji(i, emojiAlphabet[j])))

console.log([a1,a2])

module.exports = {
  modifyChar: modifyChar
, charMods: charMods
, charAlphabet: charAlphabet
, modifyEmoji: modifyEmoji
, emojiMods: emojiMods
, emojiAlphabet: emojiAlphabet
}

