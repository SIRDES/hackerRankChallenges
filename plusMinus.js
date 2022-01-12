function plusMinus(arr){
  let posNums=0, negNums=0, zeroNums=0, arrLength=arr.length;
  for(let i=0; i<arr.length; i++){
    if(arr[i] >0){
      posNums++
    }
    else if (arr[i] <0){
      negNums++
    }
    else zeroNums++
  }
  let posRatio=(posNums/arrLength).toFixed(6);
  let negRatio=(negNums/arrLength).toFixed(6);
  let zeroRatio=(zeroNums/arrLength).toFixed(6);
  return console.log(posRatio),console.log(negRatio),console.log(zeroRatio)
}
plusMinus([1,2,2,-3,0])