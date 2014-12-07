"use strict";

var _ = require('lodash');
var Component = require('./');
var Table = require('./table').Table;

var ReportBody = Component.extend('ReportBody', function() {
  this.defaults = {
    alignment: 'left'
  };

  Object.defineProperty(this, 'components', {
    get: function() {
      if(!this._components) this._components = [];
      return this._components;
    }
  });

  this.addTable = function(options, fn) {
    var table = Table.create(this, options, fn);
    this.components.push(table);
  };

  this.render = function(block) {
    this.components.forEach(function(component) {
      component.render(block);
    }.bind(this));
  };
});

module.exports = ReportBody;
