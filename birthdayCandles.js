function birthdayCandles(candles){
  let highCandle = Math.max(...candles)
  let numHighCandles = 0;
  for (let i=0; i<candles.length; i++){
    if(candles[i] ==highCandle){
      numHighCandles++
    }
  }
  return console.log(highCandle)
}
birthdayCandles([2,3,3,1])