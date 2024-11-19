// function keywork <Function name> (<variables with Type>): <retrun type>


function printValues(num1:number | string | boolean ,num2:number): void{
    console.log(`num1 :${num1} and num2: ${num2}`);
}


// printValues(4);
// printValues(5,6)
printValues("Anirudha",4);
printValues(4,6);
printValues(false,10);


export{}