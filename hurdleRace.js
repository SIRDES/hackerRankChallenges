function hurdleRace (k,height){
  let highestHurdle = Math.max(...height);
  let hurdleHeightRequired = highestHurdle - k;
  if (hurdleHeightRequired > 0 ){
    return console.log(hurdleHeightRequired)
  }else return console.log(0)
}
hurdleRace(4,[1,6,3,5,2])