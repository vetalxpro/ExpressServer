// var regexp=/test/gi;
// var str='string-Test test';
// console.log(str.search(regexp));
// console.log('-javascript, language javascript'.match(/java(script)/ig));
// console.log('-javascript,js js language javascript'.match(/js/ig));

// console.log('12-34-56'.split(/-/));
// console.log('12-34-56'.replace(/-/g,':'));
// console.log('string1 string2 string3'.replace(/(string1) (string2)/,'$2, $1'));
// console.log('string test'.replace(/test/,'$\'and super'));
//
// function replacer(str,offset,s){
//   console.log('Найдено: '+str+' на позиции: '+offset+' в строке: '+s);
//   return str.toUpperCase();
// }
//
// console.log('js test java test css test'.replace(/test/gi, replacer));

// console.log(/test/.test('java test'));

// console.log(/java/.exec('test javascript'));
// var regexp=/java/ig;
// var result;
// regexp.lastIndex=10;
// console.dir(regexp);
//
// while(result = regexp.exec('test javascript java')){
//   console.log(result[0]+' index = '+result.index +' lastIndex:'+regexp.lastIndex );
//
// }
// var phone='+38-097-146-09-23';
// var result;
// result= phone.match(/\d/gi);
// console.log(result);
// result=phone.replace(/\D/g,'');
// console.log(result);
//
// console.log('1 - 5'.match(/\d - \d/)[0]);
// console.log('chapter 5.1'.match(/\d\.\d/)[0]);

// console.log('Завтрак в 09:22'.match(/\d\d:\d\d/));
// console.log('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/gi));
// console.log('Русский слово тест'.match(/[а-я]+/gi));
// console.log('test'.replace(/test/,'$&o'));
// console.log('Java'.match(/Java[^script]/));
// console.log('JavaScript'.match(/Java[^script]/));
// var re = /\d\d[-:]\d\d/g;
// console.log('Завтрак в 09:00. Обед - в 21-30'.match(re));
// console.log('Привет!... Как дела?.....'.match(/\.{3,}/g));
// var color='color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2';
// console.log(color.match(/#[0-9a-f]{6}\b/gi));
// var num="1.5 0 -12. -123.4.";
// console.log(num.match(/-?\d+(\.\d)?/g));
// var str = 'a "witch" and her "broom" is one';
// console.log(str.match(/".*?"/g));
// str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
// console.log(str.match(/<a href="[^"]*" class=.*?>/g));
// console.log("123 456".match(/\d+? \d+/g));
// var str = '.. <!-- Мой -- комментарий \n тест --> ..  <!----> .. ';
// console.log(str.match(/<!--[\s\S]*?-->/g));
// str = '<> <a href="/"> <input type="radio" checked> <b></b>';
// console.log(str.match(/<[^>]+>/g));
// var str='<h1>Hello, World</h1>';
// console.log(str.match(/<(.*?)>/i));
// console.log(str.match(/<[^>]*?>([\s\S]*?)<\/\w+?>/i));
// var str = '<span class="my">';
// console.log(str.match(/<(([a-z]+)\s*([^>]*))>/i));
// console.log('ac'.match(/a(c)?(?:b)?/));

// var str = "color: #3f3; background-color: #AA00ef; and: #abcd";
// console.log(str.match(/#([0-9a-f]{3}){1,2}\b/gi));

// function parseExpr(expr) {
//   var result = expr.match(/(-?\d+(?:\.\d+)?)\s*([-+*/])\s*(-?\d+(?:\.\d+)?)/);
//   if (!result)return false;
//   console.log(result.shift());
// }
//
// parseExpr('1 + 2');
// parseExpr('1.2 * 3.4');
// parseExpr('-3 / -6');
// parseExpr('-2 - 2');

// var str = "..[url]http://ya.ru[/url]..[b]текст[/b] sdfsd.. dsfd[quote]text[/quote]";
// console.log(str.match(/\[(b|url|quote)[\s\S]*\[\/\1\]/ig));
var str = 'Java JavaScript PHP C++ C';
// console.log(str.match(/java(script)?|php|c(\+\+)?/gi));
//
// str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\r\\n\\\\" .. ';
// console.log(str.match(/"(\\.|[^"\\])*?"/gi));

// str='<style> <styler> <style test>';
// console.log(str.match(/<style(>|\s.*?>)/gi));
// console.log(''.match(/^$/));
var re=/^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i;
var mac ='01:32:54:67:89:AB';
console.log(re.test('01:32:54:67:89:AB'));
console.log(re.test('0132546789AB'));
console.log(re.test('01:32:54:67:89'));
console.log(re.test('01:32:54:67:89:ZZ'));

console.log('Jack Sprat'.match(/Jack (?=Sprat)/i));
console.log(/\d+(?!\.)/.exec('3.141'));
console.log('3.141'.match(/\d+(?!\.)/));
