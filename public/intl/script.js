
//document.addEventListener('DOMContentLoaded',function(){
//
//
//
//});

var collator = new Intl.Collator();
console.log('ёжик'>'яблоко');
console.log(collator.compare('ёжик','яблоко'));

collator=new Intl.Collator(undefined,{
  sensitivity:'accent'
});
console.log(collator.compare('Ёжик','ёжик'));

var formatter=new Intl.DateTimeFormat('ru',{
  month:'long',
  day:'numeric'
});
console.log(formatter.format(new Date()));

var animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
var col=new Intl.Collator(undefined,{
  sensitivity:'case'
});
function comparator(a,b){
  return col.compare(a,b);
}
animals.sort(comparator);
console.log(animals);
function MyArray() { }
MyArray.prototype = [];

var arr = new MyArray();
arr.push(1, 2, 3);
console.log(arr.length);
function t(){
  //"use strict";
  console.log(typeof null);
  var x=null;
  var a=x;
  console.log(a==x);
}
t();
function User() { }
User.prototype = { admin: false };

var user = new User();
console.log(user.admin);