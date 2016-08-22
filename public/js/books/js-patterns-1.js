/**=======================================================================
 * Минимизация количества глобальных
 переменных
 =======================================================================
 */
function globalVar() {
  function sum(a, b) {
    var result = a + b;
    return result;
  }

  var a,
    b;
  a = b = 0;

}

/**
 * Циклы for
 */
function circleFor() {
  var arr = [];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    //do
    console.log(arr[i]);
  }
}

/**=======================================================================
 * Циклы for-in
 * =======================================================================
 */
function circleForIn() {

  var obj = {
    val1: 1,
    val2: 2,
    val3: 3
  };

  for (let val in obj) {
    if (obj.hasOwnProperty(val)) {
      console.log(val, ' : ', obj[val]);
    }
  }

  for (let val in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, val)) {
      console.log(obj[val]);
    }
  }

  /*=========================
   Расширение встроенных прототипов
   (в том числе нежелательное)
   ==========================
   */
  if (typeof Object.prototype.myMethod !== 'function') {
    Object.prototype.myMethod = function () {
    };
  }
}

/**=======================================================================
 * Шаблон switch
 * =======================================================================
 */

function switchPattern() {
  var i = 0,
    result = '';
  switch (i) {
    case 0:
      result = 'zero';
      break;
    case 1:
      result = 'one';
      break;
    default:
      result = 'unknown';
  }

  /**====================================
   * Избегайте неявного приведения типов
   * ====================================
   */
}

/**=======================================================================
 *                    !!!Не используйте eval()!!!
 * =======================================================================
 */

/**=======================================================================
 * Преобразование строки в число с помощью parseInt()
 =======================================================================
 */

function parse() {
  var month = '05',
    day = '09';

  month = parseInt(month, 2);       // 2 - система счисления  двоичная
  day = parseInt(day, 2);

  month = +'08';
  day = Number('07');

}

/**=======================================================================
 *  Имена
 *  =======================================================================
 */
function naming() {
  var PI = 3.14,
    MAX_WIDTH = 800;             //const

  var person = {
    getName: function () {                 //public method
      return this._getFirst() + ' ' + this._getLast();
    },
    _getFirst: function () {           //private method
      //do something
    },
    _getLast: function () {             //private
      //do something
    },
    _variable1: 1,                          //protected variable
    __variable2: 2           //private variable

  };

}

/**=======================================================================
 * Литералы объектов
 * =======================================================================
 */

function objLiterals() {
  var obj = {};
  var dog = {
    name: 'dog',
    getName: function () {
      return this.name;
    }
  };
  var Person = function (name) {
    if (!(this instanceof Person)) {
      return new Person();
    }
    this.name = name;
    this.say = function () {
      return 'I am ' + this.name;
    };

    return this;
  };

  Person.prototype.say = function () {
    return 'I am ' + this.name;
  };

  var adam = new Person('Adam');
  adam.say();
}

/** =======================================================================
 * Литералы массивов
 *  =======================================================================
 */
function arrLiterals() {
  var arr = [3];   //[3]
  var arr1 = new Array(3);  // [undef,undef,undef];

  console.log(Array.isArray(arr));
  console.log(Object.prototype.toString.call(arr));
}


/**=======================================================================
 * JSON
 * =======================================================================
 */

function j() {
  var jsString = '{"name":"bob","age":"25"}';
  var data = JSON.parse(jsString);

  var dataToJson = JSON.stringify(data);
}


/**=======================================================================
 * Литералы регулярных выражений
 * =======================================================================
 */

function reg() {
  var re1 = new RegExp('/abc/', 'gi'),
    re2 = /abc/gi;

}


/**=======================================================================
 *Объекты-обертки значений простых типов
 * =======================================================================
 */
function objWrappers() {
  //Number(),String(),Boolean()
  var a = 'string',
    b = true,
    c = 2;
}

/**=======================================================================
 *   Объекты Error
 * =======================================================================
 */

function er() {
  /*  try {
   // произошло что-то неприятное, возбудить ошибку
   throw {
   name: 'MyErrorType', // нестандартный тип ошибки
   message: 'oops',
   extra: 'This was rather embarrassin',
   remedy: genericErrorHandler // какой обработчик
   // должен обрабатывать ошибку
   };
   } catch (e) {
   // известить пользователя
   alert(e.message); // “oops”
   // обработать ошибку
   e.remedy(); // вызовет genericErrorHandler()
   }*/
}


/**=======================================================================
 *
 *            Функции
 *
 * =======================================================================
 */

var func = function func() {          //именованная функция-выражение
  //do
};
var func1 = function () {                 // функция-выражение, она же анонимная функция
  //do
};
function func2() {                    //функции-объявления

}

/**=======================================================================
 *   Функции обратного вызова (callback)
 *
 * =======================================================================
 */
function writeCode(callback) {
// выполнение некоторых операций...
  callback();
// ...
}
function introduceBugs() {
// ... вносит ошибку
}
//writeCode(introduceBugs);

var findNodes = function (callback) {
  var i = 100,
    nodes = [],
    found;
  if (typeof callback !== 'function') {
    callback = false;
  }
  while (i) {
    i -= 1;
    //do
    if (callback) {
      callback(found);
    }
    nodes.push(found);
  }
  return nodes;
};

var hide = function (node) {
  node.style.display = 'none';
};
//findNodes(hide);
/*findNodes(function(node){
 node.style.display='none';
 });*/

var findNodes1 = function (callback, callback_obj) {    //если колбек является методом другого объекта
//...
  var found;
  if (typeof callback === 'function') {
    callback.call(callback_obj, found);
  }
// ...
};


/**=======================================================================
 *   Обработчики асинхронных событий
 *
 * =======================================================================
 */

function ev() {
  document.addEventListener('click', console.log, false);
  var func = function () {
    console.log('500ms');
  };
  setTimeout(func, 500);
}

/**=======================================================================
 *  Возвращение функций
 *
 * =======================================================================
 */

function wr() {
  var setup = function () {
    console.log(1);
    return function () {          //     Замыкание
      console.log(2);
    };
  };
  var my = setup();   //1
  my();             //2


  /**==========================
   *  счетчик
   *  ==========================
   */
  var counter = function () {
    var count = 0;
    return function () {
      return count += 1;
    };
  };
  var next = counter();
  next();   //1
  next();   //2

}

/**=======================================================================
 *  Самоопределяемые функции
 *
 * =======================================================================
 */

function samo() {
  var scareMe = function () {
    alert('Boo!');
    scareMe = function () {
      alert('Double boo!');
    };
  };

  scareMe(); // Boo!
  scareMe(); // Double boo!

  scareMe.property = 'prop';

  var prank = scareMe;

  var spooky = {
    boo: scareMe
  };
  // вызов под новым именем
  prank(); // “Boo!”
  prank(); // “Boo!”
  console.log(prank.property);      // “properly”
// вызов как метода
  spooky.boo();                     // “Boo!”
  spooky.boo();                     // “Boo!”
  console.log(spooky.boo.property); // “properly”
// использование самоопределяемой функции
  scareMe();                        // Double boo!
  scareMe();                        // Double boo!
  console.log(scareMe.property);    // undefined
}

/**=======================================================================
 *  Немедленно вызываемые функции
 *
 * =======================================================================
 */

function go1() {
  (function () {
    console.log(1);
  })();

  (function () {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],       //переменнык остаются локальными и не попадают в
      // глобал
      today = new Date(),
      msg = 'Today is ' + days[today.getDay()] + ' ' + today.getDate();
    console.log(msg);
  }('arg1', new Date()));   //можно передавать аргументы

  //(function (global) {
// глобальный объект доступен через аргумент `global`
  // }(this));
  //
  /*передается глобальный объект(this), чтобы к нему можно было обращаться без
   использования свойства window; это позволяет использовать программ-
   ный код в средах, отличных от броузеров*/


  /**=======================================================================
   * Значения, возвращаемые
   немедленно вызываемыми функциями
   *
   * =======================================================================
   */

  var result = (function () {
    return 2 + 2;
  })();
  var result1 = function () {
    return 2 + 2;
  }();

  var getResult = (function () {
    var res = 2 + 2;                //немедленно вызываемая ф-ция с замыканием
    return function () {
      return res;
    };
  })();

  var obj = {
    message: (function () {
      var who = 'me',
        what = 'call';
      return what + ' ' + who;
    })(),
    getMsg: function () {
      return this.message;
    }
  };
  //obj.getMsg();                     //call me
  //obj.message;                      //call me


  // имя module1 определено в файле module1.js         //Создание модулей которые не влияют на глобал
  (function () {
// реализация модуля module1...
  }());

}


/**=======================================================================
 *  Немедленная инициализация объектов
 *
 * =======================================================================
 */
function objInit(){
  //===================
  ({
    maxwidth:600,                     //недостаток= компрессоры не будут укорачивать переменные
    maxheight:400,                    //GCC умеет в расширенном режиме
    gimmeMax:function(){
      return this.maxwidth+' x '+this.maxheight;
    },
    init:function(){
      console.log(this.gimmeMax());
      console.log(this);            //если нужно вернуть объект в переменную
    }
  }).init();

}




