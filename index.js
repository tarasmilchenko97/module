'use strict';


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


// Задание 2

function compare(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number' ||
        typeof num1 !== 'number' && typeof num2 !== 'number') {
        console.log(String(num1+ ' ' +num2));
    } else if (num1 < num2) {
        console.log(String(num1+ ' < ' +num2));
    } else if (num1 > num2) {
        console.log(String(num1+ ' > ' +num2));
    } else if (num1 === num2) {
        console.log(String(num1+ ' == ' +num2));
    }
}


// Задание 3

function row(n1, n2, n3, s4) {
    let arr = [n1, n2, n3,];
    let str;
    function row2(a,b) {
        if (s4 === '<') {
            return a - b;
        } else {
            return b - a;
        }
    }
    arr.sort(row2);
    str = arr.join(' ');
    return str;
}


// Задание 4

function fact(z) {
    return (z !== 1) ? z * fact(z - 1) : 1;
}


// Задание 5

function matrixDiff(arr1, arr2) {
    let one = 0;
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i].length === arr2[i].length) {
        for (let k = 0; k < arr1.length; k += 1) {
            one = one + Math.abs(arr1[i][k] - arr2[i][k]);
        }
            } else {
               return NaN;
            }
        }
        return one;
    }


// Задание 6

function strangeSearch(arr) {



}