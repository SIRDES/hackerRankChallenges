function catsMouse(x,y,z){
  
  if(Math.abs(z - x) > Math.abs(z - y)){
    return console.log("Cat B")
  }
  else if (Math.abs(z - y) > Math.abs(z - x)){
    return console.log("Cat A")
  }
  else return console.log("Mouse C")

}
catsMouse([1,3,2])