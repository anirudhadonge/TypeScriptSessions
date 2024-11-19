

export let reverseFun = function(num){
    let reverseNum = 0;
    let leftOver;
    while(num>0){
        leftOver =  num%10
        reverseNum = reverseNum *10+leftOver;
        num = Math.floor(num/10);
        console.log(num);
    }

    console.log(reverseNum);
}