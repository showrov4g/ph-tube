// const isVerified = true;
// if(isVerified === true){
//     console.log("user is verified");
    
// }else{
//     console.log("user is not verified");
    
// }

function getTimeString(time){
    const hour = parseInt(time / 3600)
    let remainingSecond = time % 3600;
    let minute = parseInt(remainingSecond /60)
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

console.log(getTimeString(123214))