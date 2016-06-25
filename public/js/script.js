"use strict";

// var user=prompt("Кто пришел?","");
// if(user===null){
//  console.log("Вход отменен");
// }else if(user=="Админ"){
//  console.log("user - "+user);
//  var password = prompt("Введите пароль","");
//  if(password===null){
//    console.log("Вход отменен");
//  }else if(password=="Черный Властелин"){
//    console.log("Добро пожаловать");
//  }else{
//    console.log("Пароль неверен");
//  }
// }else{
//  console.log("Я вас не знаю");
// }
// var message;
// var login=prompt("Кто вы?","");
// (login=="Вася") ?
//  message = "Привет" :
//    (login=="Директор") ?
//      message = "Здавствуйте" :
//        (login=="") ?
//          message = "Нет логина" : message = "--";
// console.log(message);
// console.log(null||2||undefined);//2
// console.log(1||2||3);//1
// console.log(1&&null&&2);//null
// console.log(1&&2);//2
// console.log(null||2&&3||4);//3

// var age = 50;
// if(age>=14 && age<=90){
//  console.log(true);
// }else {
//  console.log(false);
// }

// if(!(age>=14 && age<=90)){
//  console.log(true);
// }else {
//  console.log('awd');
// }

// console.log(''+1+0); //'10'
// console.log(''-1+0);//-1
// console.log(true+false);//1
// console.log(6/'3');//2
// console.log('2'*'3');//6
// console.log(4+5+'px');//'9px'
// console.log('$'+4+5);//'$45'
// console.log('4'-2);//2
// console.log('4px'-2);//NaN
// console.log(7/0); //infinity
// console.log('  -9\n'+5);//-9 \n 5
// console.log('  -9\n'-5);//-14
// console.log(5&&2);//2
// console.log(5||0);//5
// console.log(0||5);//5
// console.log(null + 1);//1
// console.log(undefined + 1);//NaN
// console.log(null=='\n0\n');//false
// console.log(+null== +'\n0\n');//true

// var i=3;
// while(i){
//  console.log(i--);
// }
// var i = 0;
// while (++i < 5) console.log(i); //1,2,3,4
// var i = 0;
// while (i++ < 5) console.log(i); //1,2,3,4,5

// for(let i = 0;i<5;i++)console.log(i);//0,1,2,3,4
// for (let i = 0;i<5;++i)console.log(i);//0,1,2,3,4

// for(let i=0;i<=10;i++){  //even numbers
//  if(i%2==0){
//    console.log(i);
//  }
// }

// for (let i = 0; i < 3; i++) {
//     console.log('number ' + i + '!');
// }

// var i = 0;
// while (i < 3) {
//     console.log('number ' + i + '!');
//     i++;
// }

// while (true) {
//     var number = prompt('Введите число > 100', '');
//     if (number == null) {
//         console.log('Вы нажали отмену');
//         break;
//     }else if(number==''){
//      console.log('Вы не ввели число. Повторите ввод.')
//     }else if (number > 100) {
//         console.log('Ваше число %s > 100', number);
//         break;
//     } else {
//         console.log('Ваше число %s < 100.Повторите ввод числа.', number)
//     }
// }

// var number;
// do{
//  number=prompt('Введите число > 100','');
//  console.log(number);
// }while(number<=100 && number!=null);

// Для всех i от 1 до 10 {
//   проверить, делится ли число i на какое - либо из чисел до него
//   если делится, то это i не подходит, берем следующее
//   если не делится, то i - простое число
// }

// next1:
//     for (let i = 2; i <= 10; i++) {
//         for (let j = 2; j < Math.sqrt(i); j++) {
//             if (i % j == 0) continue next1;
//         }
//         console.log(i);
//     }

// var arg = prompt("Введите arg?")
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один или ноль' );
//     //break;
//   case '2':
//     alert( 'Два' );
//     break;

//   case 3:
//     alert( 'Никогда не выполнится' );

//   default:
//     alert('Неизвестное значение: ' + arg)
// }

// var browser = prompt('Введите ваш браузер', '');
// if (browser == 'IE') {
//     console.log('IE');
// } else if (
//     browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     console.log('Вы ввели ' + browser);
// } else {
//     console.log('Неизвестный браузер');
// }
// var a= +prompt('a?','');
// switch(a){
//  case 0:
//    console.log(0);
//    break;
//  case 1:
//    console.log(1);
//    break;
//  case 2:
//  case 3:
//    console.log('2,3');
//    break;
//  default:
//    console.log(false);
// }

// function hello(name){
//  name=name||'!Внимание! Имя не передано в функцию!';
//  console.log('Привет '+name);
// }
// hello('');

// function checkAge(age){
//  if(age>18){
//    return true;
//  }else{
//    return(confirm('Разрешено?'));
//  }
// }
// var a;
// checkAge(19);
// console.log(checkAge(19));

// function checkAge(age){
//  (age>18) ? true : confirm('Разрешено?');
// }

// function checkAge(age){
//  return (age>18)||confirm('Разрешено?');
// }


// function min(a,b){
//  if (a<b){
//    return a;
//  }
//  return b;
// }
// console.log(min(1,1));

// function pow(x,n){
//  var result=x;
//  for(let i=1;i<n;i++){

//    result*=x;
//  }
//  return result;
// }
// console.log(pow);

// function ask(question,yes,no){
//  if(confirm(question,'')){
//    yes();
//  }else{
//    no();
//  }
// }
// function showYes(){
//  alert('Вы согласились');
// }
// function showNo(){
//  alert('Вы отменили выполнение');
// }
// ask('Вопрос?',showYes,showNo);

// function ask(question,yes,no){
//  if(confirm(question)){
//    yes();
//  }else{
//    no();
//  }
// }
// ask('Вопрос?',
//  function(){alert('Yes');},
//  function(){alert('No');}
// );

// var sum = new Function('a,b','var result=a+b;return result*3;');
// console.log(sum(2,3));

// function pow(x,n){
//  if(n!=1){
//    return x*pow(x,n-1);
//  }else{
//    return x;
//  }
// }
// console.log(pow(2,3));

// function test(x){
//  if(x){
//    console.log(x);
//    //x--;
//    test(x-1);
//  }
// }
// test(10);

// function sumTo(x) {
//     var result = 0;
//     for (let i = 1; i <=x; i++) {
//         result += i;
//     }
//     return result;
// }
// console.log(sumTo(100));

// function sumToR(x){
//  if(x==1){
//    return x;
//  }else{
//    return x+sumToR(x-1);
//  }
// }
// console.log(sumToR(100));

// function sumToA(x){
//  return x*(x+1)/2;
// }
// console.log(sumToA(100));

// function factorial(n){
//  if(n==1){
//    return 1;
//  }else{
//    return n*factorial(n-1);
//  }
// }
// console.log(factorial(5));

// function factorialIf(n){
//  var result = n;
//  if(n!=1){
//    for(let i=1;i<n;i++){
//      result*=i;
//    }
//  }
//  return result;
// }
// console.log(factorialIf(50));

// function factorial(n){
//  if(n!=1){
//    return n*factorial(n-1);
//  }else{
//    return 1;
//  }
// }
// console.log(factorial(5));

// function fib(n){
//  if(n>1){
//    return fib(n-1)+fib(n-2);
//  }else{
//    return n;
//  }
// }

// console.log(fib(20));

// var a=1;b=1;
// var c=a+b;

// a=b;
// b=c;
// c=a+b;

// function fib(n) {
//     var a = 1;
//     var b = 1;
//     for (let i = 3; i <= n; i++) {
//         var c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// console.log(fib(7));

// var f = function factorial(n) {
//     if (n) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }
// };
// var g = f;
// console.log(g(5));

// var g=(function (){
//  return 1;
// });
// console.log((
//  function(){
//    return 1;
//  }())
// );

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  if (x == 0 && n == 0) return NaN;
  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// var x = prompt("x?", '');
// var n = prompt("n?", '');

// if (n < 0) {
//   alert('Степень '+n+
//    'не поддерживается, введите целую степень, большую 0');
// } else {
//   alert( pow(x, n) );
// }

// var str="Hello world";
// console.log(str.length);
// console.log(str.toUpperCase());

// var n = 12;
// console.log(n.toFixed(2));
// console.log((13).toFixed(1));
// console.log(str[6]+str[7]);
// console.log(3e-5);
// console.log(4/0);

// function test(a,b){
//  return (a==b)? true:NaN;
// }
// console.log(isNaN(test(null,1)));

// console.log(isFinite(5.25));

// console.log(parseInt('12px'));
// console.log(parseFloat('12.5.5px'));
// console.log(parseInt('a12px'));
// console.log(parseInt('1011110011',2));

// function isNumeric(n){
//  return !isNaN(parseFloat(n)) && isFinite(n);
// }
// console.log(isNumeric('43.5'));

// console.log((45).toString(2));

// console.log((Math.floor(4.5)));
// console.log((Math.ceil(4.5)));
// console.log((Math.round(4.5)));

// console.log(~~12.3);
// console.log(12.3^0);
// console.log(5.5+6.3^0);
// var n = 3.456;
// console.log((Math.round(n * 100) / 100 )); // 3.456 -> 345.6 -> 346 -> 3.46

// console.log(+(3.45).toFixed(1));
// console.log((Math.round(3.45*10)/10));
// console.log(0.1+0.2);
// console.log((124535667).toLocaleString());

// var a = +prompt('Enter first number', '');
// var b = +prompt('Enter second number', '');

// function sum(a, b) {
//   return a + b;
// }
// console.log('Result: ' + sum(a, b));

// console.log((6.35).toFixed(20));
// console.log(Math.round(6.35*10)/10);

// var price1=0.1, price2=0.25;
// console.log((price1+price2).toFixed(2)+' $');

// var i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }

// function getDecimal(num){
//  if(num>1){
//    return num%1;
//  }
//  return -num%1;
// }

// function getDecimal(number) {
//   var numberToStr = '' + number;
//   var zeroPosition = numberToStr.indexOf('.');
//   if (zeroPosition == -1) return 0;
//   numberToStr = numberToStr.slice(zeroPosition);
//   return +numberToStr;
// }

// console.log(getDecimal(1124.5));

// function fibBinet(n) {
//   var phi = (1 + Math.sqrt(5)) / 2;
//   return Math.round(Math.pow(phi, n) / Math.sqrt(5));
// }

// function fib(n) {
//   var a = 1,
//     b = 1,
//     results = [a, b],
//     c;
//   for (let i = 3; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     results.push(c);

//   }

//   console.log(results);
//   return b;

// }

// console.log(fibBinet(77));
// console.log(fib(77));


//1  0  1  1  2  3  5  8  13  21  34
//1  1  2  3  5  8  13  21  34


// function rand(max) {
//   return Math.random() * max;
// }
// console.log(rand(10));

// function randInterval(min, max) {
//   return (min + Math.random() * (max - min));
// }
// console.log(randInterval(9, 10));

// function randomInt(min,max){
//  var rand=min-0.5+Math.random()*(max-min+1);
//  rand=Math.round(rand);
//  return rand;
// }
// console.log(randomInt(0,10));

// function randomInt2(min,max){
//  var rand=min+Math.random()*(max-min+1);
//  rand=Math.floor(rand);
//  return rand;
// }
// console.log(randomInt2(0,50));

// 0-0.99999 =0
// 1-1.99999 =1
// 2-2.99999 =2
// 50-50.9999 =50
// (5,10)   5.000-10.99999

// console.log('Hello World \u00A9');
// console.log('I\'m a JavaScript programmer');
// console.log('My\nStr'.length);

// console.log('char = '+ 'string'.charAt(5));
// console.log('char = '+ 'string'[5]);

// console.log('string'.toUpperCase());
// console.log('StRINg'.toLowerCase());

// var str = 'My super string';
// console.log(str.indexOf('s',5));

// console.log( ~2 ); // -(2+1) = -3
// console.log( ~1 ); // -(1+1) = -2
// console.log( ~0 ); // -(0+1) = -1
// console.log( ~-1 ); // -(-1+1) = 0

// var str = "Widget";

// if (~str.indexOf("get")) {
//   console.log( 'совпадение есть!' );
// }

// var str = 'Ослик Иа-Иа посмотрел на виадук'.toLowerCase();
// var target = 'иа';
// var position = 0;
// while (true) {
//   var foundPosition = str.indexOf(target, position);
//   if (foundPosition == -1) break;
//   console.log(str.slice(foundPosition));
//   position = foundPosition + 1;
// }

// var str = 'stringify';
// console.log(str.substring(1, 5)); //trin
// console.log(str.substr(1, 4));
// console.log(str.slice(1, 5));

// console.log(str.substring(6, -1));
// console.log(str.slice(1, -2));

// console.log(String.fromCharCode(1072)); // 'а'
// console.log('б'.charCodeAt(0));
// console.log('я'.charCodeAt(0));

// var letters = [];
// for (let i = 1034; i <= 1113; i++) {
//   letters.push(String.fromCharCode(i));
// }
// console.log(letters);


// console.log('ё'.localeCompare('е')); // -1

// console.log('    string '.trim());

// function ucFirst(string) {
//   //if(!string) return string;
//   var firstChar = string.charAt(0).toUpperCase();
//   return firstChar + string.slice(1);

// }
// console.log(ucFirst('вася'));

// function checkSpam(str) {
//  var str = str.toLowerCase();
//  if(str.indexOf('xxx')!=-1||str.indexOf('viagra')!=-1) return 'spam';
//  return 'not spam';
// }
// console.log(checkSpam('string viagra'));

// function checkSpam(string) {
//   var spamFilter = ['xxx', 'viagra'];
//   var strToLower = string.toLowerCase();

//   for (let i = 0; i < spamFilter.length; i++) {
//     if (strToLower.indexOf(spamFilter[i]) != -1) return string + ' - spam!';
//   }

//   return string + ' - not spam';
// }

// console.log(checkSpam('string xxx'));



// function trancate(str, maxLength) {
//   if (str.length > maxLength) {
//     return str.slice(0, maxLength) + '...';
//   }

//   return str;
// }
// console.log(trancate('Super long string', 10));


// function extractCurrencyValue(str) {
//   if (str.indexOf('$') == 0) {
//     return +str.slice(1);
//   }

//   return str;
// }

// console.log(extractCurrencyValue('$120'));

// var user = {};
// user['name'] = 'Вася';
// user['surname'] = 'Петров';

// console.log(user);
// user['name']='Сергей';
// delete user['name'];
// console.log(user);

// var counter = 0;
// for (let key in user) {
//   ++counter;
//   console.log(counter + ' ' + key + ' ' + user[key]);
// }


// var schedule = {};


// function isObjectEmpty(object) {

//   for (let key in object) return false;
//   return true;
// }

// console.log(schedule);
// console.log(isObjectEmpty(schedule));

// schedule['8.00'] = 'wakeup';

// console.log(schedule);
// console.log(isObjectEmpty(schedule));


// var salaries = {
//   'Вася': 100,
//   'Петя': 300,
//   'Даша': 250
// }


// function sumSalaries(salaries) {
//   let sum = 0;

//   for (let name in salaries) {
//     sum += salaries[name];
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));


// function maxSalarie(salaries) {
//   let max = 0;
//   let maxName = '';

//   for (let name in salaries) {

//     if (max < salaries[name]) {
//       max = salaries[name];
//       maxName = name;
//     }
//   }

//   if (maxName) {
//     return maxName;
//   }
//   return 'Нет сотрудников';
// }

// console.log(maxSalarie(salaries));


// var menu = {
//   width: 200,
//   heith: 300,
//   title: 'My menu'
// }


// function multiplyNumeric(menu) {
//   for (let number in menu) {
//     if (isNumeric(menu[number])) {
//       menu[number] *= 2;
//     }
//   }
//   return menu;
// }


// function isNumeric(number) {
//   return !isNaN(parseFloat(number)) && isFinite(number);
// }

// console.log(multiplyNumeric(menu));

// var user = {
//   name: 'Вася',
//   age: 30
// };

// var clone = {};

// for(let key in user){
//   clone[key]=user[key];
// }
// clone['name']='Петя';
// console.log(user);
// console.log(clone);

// var fruits = ['Яблоко', 'Апельсин', 'Слива'];
// console.log(fruits[0]);
// fruits[3] = 'Груша';
// console.log(fruits);
// console.log(fruits.length);
// // alert(fruits);
// console.log(fruits.pop());
// console.log(fruits.push('Банан'));
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits.unshift('Виноград'));
// console.log(fruits);
// fruits.age = 25;
// console.log(fruits);

// var arr = [1, 2, 3, 4, 5];
// arr.length = 3;
// arr[3] = 10;
// console.log(arr);

// var matrix = [
//   [1, 2, 3, 4],
//   [4, 5, 6, 7],
//   [7, 8, 9, 10]
// ];

// console.log(matrix[1][1]);

// var goods = [1, 2, 3, 4, 5];

// function showArrLastItem(arr) {
//   return arr[arr.length - 1];
// }

// console.log(showArrLastItem(goods));

// goods.push(6);
// goods[goods.length] = 7;
// console.log(goods);

// var styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-Ролл');
// console.log(styles);
// styles[styles.length - 2] = 'Классика';
// console.log(styles);
// console.log(styles.shift() + ' - ' + styles);
// styles.unshift('Рэп', 'Регги')
// console.log('' + styles);

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

// function randArrItem(arr) {
//   var rand = Math.floor(Math.random() * arr.length);
//   return arr[rand];
// }
// console.log(randArrItem(arr));

// var arr = [];
// while(true){
//   let item = prompt('Введите значение','');
//   if(item===null||item===''||isNaN(item))break;
//   arr.push(+item);
// }
// console.log(arr);
// var sum = 0;
// for(let i=0;i<arr.length;i++){
//   sum+=arr[i];
// }
// console.log(sum);

// var arr = [1, 2, 3,4];

// var arr2 = arr;
// arr2[0] = 5;

// alert( arr[0] );

// var arr = ['test', 2, 1.5, false];

// function find(arr,value){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===value){
//       return i;
//     }
//   }
//   return -1;


//   return arr;
// }
// console.log(find(arr,0));

// console.log(!![].indexOf);


// if ([].indexOf) {

//   var find = function(array, value) {
//     return array.indexOf(value);
//   }

// } else {
//   var find = function(array, value) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === value) return i;
//     }

//     return -1;
//   }

// }
// console.log(find(arr,false));

// var arr = [5, 4, 3, 8, 0];

// function filterRangeOfArray(arr, min, max) {
//   let filtArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= min && arr[i] <= max) {
//       filtArr.push(arr[i]);
//     }
//   }
//   return filtArr;
// }
// console.log(filterRangeOfArray(arr, 3, 5));


// var eratosfen = function(maxArrValue) {
//   let arrNumbers = [];
//   let sum = 0;

//   for (let i = 2; i <= maxArrValue; i++) {
//     arrNumbers.push(i);
//   }

//   for (let index = 0, p = arrNumbers[index]; p * p < maxArrValue; p = arrNumbers[++index]) {
//     for (let i = 1; i < arrNumbers.length; i++) {
//       for (let j = 2; j < arrNumbers.length; j++) {
//         if (arrNumbers[i] == p * j) {
//           arrNumbers.splice(i, 1);
//           break;
//         }
//       }
//     }
//   }
//   for (let i = 0; i < arrNumbers.length; i++) {
//     sum += arrNumbers[i];
//   }

//   return [sum, arrNumbers];
// }

// console.log(eratosfen(100));

// var getMaxSubSum = function(arr) {
//   var maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     var subSum = 0;

//     for (let j = i; j < arr.length; j++) {
//       subSum += arr[j];
//       maxSum = Math.max(maxSum, subSum);
//     }
//   }
//   return maxSum;
// }

// var getMaxSubSum2 = function(arr) {
//   var maxSum = 0;
//   var subSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     subSum += arr[i];
//     maxSum = Math.max(maxSum, subSum);
//     if (subSum < 0) subSum = 0;
//   }
//   return maxSum;
// }

// console.log(getMaxSubSum2([2, -1, 2, 3, -9]));

// var names = 'Маша, Петя, Марина, Василий';
// var arr = names.split(', ');
// console.log(arr);
// for(let i=0;i<arr.length;i++){
// 	console.log('Message to '+arr[i]);
// }
// console.log('a,b,c,d'.split(',',2)); //[a,b]
// console.log('test'.split(''));//["t", "e", "s", "t"]

// console.log(["Маша", "Петя", "Марина", "Василий"].join(', '));

// console.log(new Array(5).join('ля'));

// var arr = [1, 2, 15, 20, 5];
// console.log(arr.splice(0, 0, 9, 7, 8) && arr);
// console.log(arr.slice(3));

// console.log('2' > '15');

// var compareNumeric = function(a, b) {
//     if (a > b) return 1;
//     return -1;
//   }
//   // console.log(arr.sort(compareNumeric));

// console.log(arr.sort(function(a, b) {
//   return a - b;
// }));

// console.log(arr.reverse());

// console.log(arr.concat([100,200],300));

// console.log(arr.indexOf(15));  //lastIndexOf search from the end of arr

// var store = {};
// var items = ['id1','id2','id3'];
// for(let i=0;i<items.length;i++){
// 	var key = items[i];
// 	store[key]=key;
// }
// console.log(store);
// console.log('id1' in store);

// var user = {
// 	name:'Petya',
// 	age:30
// }

// console.log(Object.keys(user));

// var obj = {
//   className: 'form a div'
// }

// var addClass = function(obj, element) {

//   if (obj['className']) {
//     var arrClass = obj['className'].split(' ');
//   } else {
//     var arrClass = [];
//   }


//   if (arrClass.indexOf(element) == -1) arrClass.push(element);

//   obj['className'] = arrClass.join(' ');

//   return obj;
// }

// console.log(addClass(obj, 'new') && addClass(obj, 'open') && addClass(obj, 'me'));

// var camelize = function(str) {
// 	if(str){
// 	  var strArr = str.split('-');
// 	  for (let i = 1; i < strArr.length; i++) {
// 	    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
// 	    console.log(strArr[i]);
// 	  }
// 	  return strArr.join('');
// 	 }
// 	 return str;
// }
// console.log(camelize('list-style-image'));

// var obj = {
//   className: 'menu open start menu menu close'
// }

// var removeClass = function(obj, element) {
//   if (obj['className']) {
//     var classArr = obj['className'].split(' ');
//   } else {
//     var classArr = [];
//   }
//   console.log(classArr);

// while (true) {
//   if (classArr.indexOf(element) < 0) break;
//   classArr.splice(classArr.indexOf(element), 1)
// }
//   for (var i = 0; i < classArr.length; i++) {
//     if (classArr[i] == element) {
//       classArr.splice(i, 1);
//       i--;
//     }
//   }

//   console.log(classArr);

//   obj['className'] = classArr.join(' ');

//   return obj;
// }

// console.log(removeClass(obj, 'menu'));

// var arr = [5, 3, 8, 1, 4];
// var filterRangeInPlace = function(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// filterRangeInPlace(arr, 1, 4)
// console.log(arr);

// var arr = [5, 2, 1,1, -10, 8];
// var compareReverse = function(a,b){
// 	return b-a;
// }
// console.log(arr.sort(compareReverse));

// var arr= ['HTML','JavaScript','CSS'];
// var arrSorted = arr.slice().sort();
// console.log(arrSorted);
// console.log(arr);

// var arr=[1,2,3,4,5];
// arr.sort(function(a,b){
// 	return Math.random()-0.5;
// });
// console.log(arr);


// var vasya = {
//   name: "Вася",
//   age: 23
// };
// var masha = {
//   name: "Маша",
//   age: 18
// };
// var vovochka = {
//   name: "Вовочка",
//   age: 6
// };

// var people = [vasya, masha, vovochka];

// people.sort(function(a, b) {
//   if (a.age > b.age) return 1;
//   return -1;
// });

// console.log(people[0].age);

// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// }

// var printList = function(list) {
//   var tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

// console.time('printList');
// printList(list);
// console.timeEnd('printList');


// var printListRecursive = function(list) {
//   console.log(list.value);
//   if (list.next) {
//     printListRecursive(list.next);
//   }
// }


// printListRecursive(list);


// var printReverseList = function(list) {
//   var arr = [];
//   var tmp = list;
//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }


// printReverseList(list);


// var printReverseListRecursive = function(list) {
//   if (list.next) {
//     printReverseListRecursive(list.next);
//   }
//   console.log(list.value);
// }

// printReverseListRecursive(list);

// var arr=["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// var aclean=function(arr){
// 	var result=[];
// 	var tmpObj={};

// 	for(let i=0;i<arr.length;i++){
// 		var sorted = arr[i].toLowerCase()
// 			.split('')
// 			.sort()
// 			.join('');

// 		tmpObj[sorted]=arr[i];
// 	}

// 	for(let key in tmpObj) result.push(tmpObj[key]);

// 	return result;

// }

// console.log(aclean(arr));

// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// var unique = function(arr) {
//   var result = [];
//   var tmpObj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     tmpObj[key] = true;
//   }

//   if (Object.keys) {
//     result = Object.keys(tmpObj);
//   } else {

//     for (let key in tmpObj) result.push(key);
//   }

//   return result;

// }
// console.log(unique(strings));

// var arr = ["Яблоко", "Апельсин", "Груша"];
// arr.forEach(function(item, i, arr) {
// 	console.log(item + ' ' + i + ' ' + arr);
// });

// var arr = [1, -1, 2, -2, 3];
// console.log(arr.filter(function(number) {
//   return number > 0;
// }));

// var names = ['HTML', 'CSS', 'JavaScript','5'];
// console.log(names.map(function(item){
// 	return item.toLowerCase();
// }));

// console.log(names.every(function(item){
// 	return isNaN(item);
// }));
// console.log(names.some(function(item){
// 	return isNaN(item);
// }));

// var arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce(function(sum,item,i,array){
// 	return sum+item;
// },0));

// console.log(arr.reduceRight(function(sum,item){
// 	return sum+item;
// },0));

// var arr = ["Есть", "жизнь", "на", "Марсе"];
// console.log(arr.map(function(item,i){
// 	return item.length;
// }));

// var arr = [1, 2, 3, 4, 5];
// var getSums = function(arr) {
//   var result = [];

//   if(!arr.length)return result;

//   arr.reduce(function(sum, item) {
//     result.push(sum + item);
//     return item + sum;
//   }, 0);
//   return result;
// }
// console.log(getSums(arr));
// console.log(getSums([-2, -1, 0, 1]));

// function sayHi(a) {
//   // arguments[0]='notVasya';
//   console.log(typeof(arguments));
//   console.log(arguments);
// }
// sayHi('Vasya', 'Petya');

// var vasya = {
//   age: 21,
//   name: 'Вася',
//   surname: 'Петров',
// };

// var user = {
//   isAdmin: false,
//   isEmailConfirmed: true
// };

// var student = {
//   university: 'My university'
// };

// function copy(dst) {
//   var dst = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     var arg = arguments[i];
//     for (let key in arg) {
//       dst[key] = arg[key];
//     }
//   }
//   return dst;
// }


// var newArr = copy({}, vasya, user, student);
// console.log(newArr);

// function showWarning(width,height,title,content){
// 	width=width||200;
// 	height=height||100;
// 	title=title||'Default Title';
// 	content=content||'content';
// 	return [width,height,title,content];
// }
// console.log(showWarning());

// function f() {
//   console.log( arguments.callee === f ); // only work without strict mode
// }
// f();

// arguments.callee.caller    //only without use strict

// function showWarning(options) {
//   var width = options.width || 200;
//   var height = options.heigth || 100;
//   var title = options.title || 'Default Title';
//   var content = options.content || 'content';
//   return [width, height, title, content];
// }
// console.log(showWarning({ content: 'new content', title: 'new title' }));

// function f(x) {
// 	console.log(arguments);
//   if (arguments.length) return 1;
//   return 0;
// }
// console.log(f(undefined));
// console.log(f());

function sumArgs(){
	var sum=0;
	if(arguments.length==0)return console.log(sum);
	for(let i =0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	console.log(sum);
}
sumArgs(1,2,3,4);
