'use strict';
/*
// Задание 1
function itsMe(a) {
    if (a !== undefined) {
        console.log(`Its me, ${a}`);
        return `Its me, ${a}`;
    }else {
        console.log('Its me, tarasmilchenko97');
        return 'Its me, tarasmilchenko97';
    }
}
*/

// Задание 2
/*
function compare(num1, num2) {

    if (typeof num1 !== 'number') {
        console.log(num1,num2);
    }else if (typeof num2 !== typeof 1){
        console.log(num1,num2);
    }else if (typeof num1 !== typeof 1 && typeof num2 !== typeof 1){
        console.log(num1,num2);
    } else

    if (num1 < num2) {
        console.log(`${num1} < ${num2}`);
    }else if (num1 > num2){
        console.log(`${num1} > ${num2}`);
    }else if (num1 === num2) {
        console.log(`${num1} == ${num2}`);
    }
}
*/


// Задание 3
/*
function row(n1, n2, n3, s4) {
    let arr1 = [n1, n2, n3];
    arr1.sort();


}

alert(row(3, 4, -1,'<'));
*/

// Задание 4
/*
function fact(z) {
    return (z !== 1) ? z * fact(z - 1) : 1;
}

*/

// Задание 5

function matrixDiff(arr1,arr2) {
    let one= 0;
    let two = 0;
    let arrrez = [];
    let arrrez1 = [];
    for (let i =0; i <arr1.length; i+=1){
        one = arrrez[i] + arrrez[i+1];

        for (let k = 0; k <arr1.length; k+=1) {
            arrrez1[i] = Math.abs(arr1[i][k] - arr2[i][k]);
            arrrez1.push(arrrez);
        }
        }

return one;







    // for (let i =0; i <arr2.length; i+=1){
    //     two = Math.abs(arr2[i] + arr1[i]);
    //     for (let k = 0; k <arr2.length; k+=1) {
    //         arr2[i] = Math.abs(arr1[i][k+1] - arr2[i][k+1]);
    //     }
    // }


}

console.log(matrixDiff([[2,3],[4,5]],
                        [[2,1],[6,5]],));