// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed 798, find the sum of the even-valued terms.
//fiboEvenSum(1000)  gives 798

function fiboEvenSum(n){
    let a =1;
    let b = 2;
    let sum = b;
    while(b<=n){
        let temp = a;
        a=b;
        b = temp+b
        if(b%2===0){
            sum+=b;
        }
        
    }
    return sum
}

console.log(fiboEvenSum(1000))

//fiboEvenSum(1000)  gives 798
//fiboEvenSum(60)  gives 44