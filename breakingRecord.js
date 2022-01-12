function breakingRecord(scores){
  let lowestScore = scores[0], highestScore = scores[0], lowestCount= 0, highCount =0;
  for (let i = 0; i<scores.length; i++){
    if(scores[i] > highestScore){
      highestScore = scores[i];
      highCount++
    }
    else if(scores[i]< lowestScore){
      lowestScore = scores[i];
      lowestCount++
    }
  }
  return console.log([highCount, lowestCount])
}
breakingRecord([10,12,5,2,25])