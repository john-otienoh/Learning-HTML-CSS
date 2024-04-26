/*MEMORY CREATION*/
let x = 100;//x variable is allocated memory and stores "undefined"
let y = 50;//y variable is allocated memory and stores "undefined"
function getSum(n1, n2)//getSum function is allocated memory and stores all the code
{
    let sum = n1 + n2;
    return sum;
}
let answer1 = getSum(x, y);//answer1 variable is allocated memory and stores "undefined"
let answer2 = getSum(10, 5);//answer2 variable is allocated memory and stores "undefined"
/*EXECUTION PHASE*/
//line 2: x variable is given the value 100
//line 3: y variable is given the value 50
//line 4: Skips the function because there is nothing to execute
//line 9: Invokes the getSum() function and creates a new function execution context
/*FUNCTION EXECUTION CONTEXT*/
    /*Creation Phase*/
//line 4: n1 & n2 are allocated memory and stores "undefined"
//line 6: sum variable is allocated memory and stores "undefined"
    /*Execution Phase*/
//line 4: n1 & n2 are assigned 100 and 50
//line 6: calculation is done and 150 is put into sum variable
//line 7: return tells the function execution context to return to the globa execution context with value of sum(150)
//line 9: Returned su value is put into the answer1 variable