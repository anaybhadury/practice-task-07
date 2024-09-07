/**
 * WRITE A FUNCTION CALLED ODD_EVEN() WHICH TAKES AN INTEGER VALUE AND TELLS WHETHER THIS VALUE IS EVEN OR ODD. IF EVEN RETURN EVEN. IF ODD RETURN ODD.
 */

function odd_even(evenOrOdd){
    if(evenOrOdd % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
console.log(odd_even(5));
console.log(odd_even(4));