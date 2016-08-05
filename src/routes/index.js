var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    test: {test: 11},
    pages: {
      'DOM test': 'dom/test.html',
      'events': 'dom/events.html',
      'events in details': 'dom/detail-events.html',
      'forms': 'dom/form',
      'graphic components': 'dom/gcomponents'
    }
  });
});

module.exports = router;
