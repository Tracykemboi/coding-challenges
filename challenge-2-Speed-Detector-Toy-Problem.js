
function demeritPointsCalculator(speed) {
    const speedLimit=70
    const speedIncrements=5
    if (speed<speedLimit) {
       console.log('Ok'); 
    }
const demeritPoints=Math.floor((speed-speedLimit)/speedIncrements)
if (demeritPoints>12) {
    console.log('License suspended');
}else{
    console.log(`points:${demeritPoints}`);
}
}
