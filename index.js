// Code your solution in this file!
function distanceFromHqInBlocks(x){
  if(x > 42){
    return x - 42
  }else{
    return 42 - x
  }
}

// function distanceFromHqInFeet(d){
//   return distanceFromHqInBlocks(d) * 264
// }
// 
// function distanceTravelledInFeet(a, b){
//   if( a > b){
//     return (a - b) * 264
//   } else
//     return (b - a) * 264
// }
// 
// function calculatesFarePrice(start, destination){
//   if(start > destination){
//     let distance = (start - destination) * 264
//   }else{
//     let distance = (destination - start) * 264
//   }
//   if(distance <= 264{
//     return 0
//   }else if( distance > 400 && distance <= 2000){
//     return 0.02 * distance
//   }else if (distance > 2000 ) {
//     return 25
//   }else{
//     return 'cannot travel that far'
//   }
}
