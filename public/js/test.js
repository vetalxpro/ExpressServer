describe('function pow(x, n)', function() {

  describe('возведение x в степень 3', function() {

    function makeTest(x) {
      var expected = x * x * x;
      it('при возведении ' + x + ' в степень 3, результат: ' + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe('любое число неравное 0 в степени 0, результат: 1', function() {
    function makeTest(x) {
      it(x + ' в степени 0, результат: 1', function() {
        assert.equal(pow(x, 0), 1);
      });
    }
    for (var x = -5; x <= 5; x += 2) {
      makeTest(x);
    }
  });

  it('при возведении (x) в отрицательную степень, результат: NaN', function() {
    assert(isNaN(pow(2, -2)), 'result not NaN');
  });

  it('при возведении (x) в дробную степень, результат: NaN', function() {
    assert(isNaN(pow(2, 1.5)), 'result not NaN');
  });

  it('ноль в нулевой степени, результат: NaN', function() {
    assert(isNaN(pow(0, 0)), 'result not NaN');
  });

});
