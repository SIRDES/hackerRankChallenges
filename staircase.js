function staircase(n){
  let star = "";
    for(let i =1; i<=n; i++){
        for(let k=1; k<=n-i; k++){
            star+=" "
        }
    for(let j=1;j<=i; j++){      
      star += "#"
    }
    star += "\n"
  }
  return console.log(star)
}
staircase(4)