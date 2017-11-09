// Code your solution in this file!
function distanceFromHqInBlocks(x){
  if(x > 42){
    return x - 42
  }else{
    return 42 - x
  }
}

function distanceFromHqInFeet(d){
  return distanceFromHqInBlocks(d) * 264
}

function distanceTravelledInFeet(a, b){
  if( a > b){
    return (a - b) * 264
  } else
    return (b - a) * 264
}


