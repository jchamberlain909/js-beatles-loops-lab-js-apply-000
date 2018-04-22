function theBeatlesPlay(musicianArray, instrumentArray) {
  let beatlesArray = [];
  for(let i=0;i<musicianArray.length;i++) {
    beatlesArray.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return beatlesArray;
}