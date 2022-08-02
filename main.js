// Write your function here:
const toEmoticon = emoticon => {
  switch(emoticon) {
  case 'shrug':
    // code block
    return '|_{"}_|';
    break;
  case 'smiley face':
    // code block
    return ':)';
    break;
    case 'frowny face':
    // code block
    return':(';
    break;
  case 'winky face':
    // code block
    return ';)';
    break;
  case 'heart':
    // code block
    return '<3'
    break;
  default:
    // code block
    return '|_(* ~ *)_|';
  }
}

console.log(toEmoticon("shrug"));
console.log(toEmoticon("smiley face"));
console.log(toEmoticon("frowny face")); 
console.log(toEmoticon("winky face")); 
console.log(toEmoticon("heart"));
console.log(toEmoticon("whatever")); 
// Should print  '|_(* ~ *)_|'

