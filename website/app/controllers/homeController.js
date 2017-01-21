var express = require('express');

module.exports = function () {
  return {
    index: function(req, res) {
      res.render('home/index');
    }
  }
};