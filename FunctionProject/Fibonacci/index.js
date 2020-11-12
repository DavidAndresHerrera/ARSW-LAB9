var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else {
        answer = fibo(nth)
    }

    context.res = {
        body: answer.toString()
    };

}
let lista= {};
function fibo(num){

    if (num in lista){
        return lista[num];
    }
    else if( num == 0){
        lista[num] = bigInt.zero;
        return bigInt.zero;
    }
    else if (num == 1){
        lista[num] = bigInt.one;
    }
    else{
        lista[num] = fibo(num-1).add(fibo(num-2));
    }
    return lista[num];
}