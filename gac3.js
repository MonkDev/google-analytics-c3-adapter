/**
 * @license
 * Copyright 2014 Monk Development <http://monkdevelopment.com/>
 * Available under MIT license <https://github.com/MonkDev/google-analytics-c3-adapter/blob/master/LICENSE.txt>
 */
;(function() {
  'use strict';

  function gac3 () {

  }

  /**
   * Maps Google Analytics response to c3 columns structure
   * see: <http://c3js.org/reference.html#data-columns> for reference
   * @param {Object} params
   * @param {Array}  params.keys
   * @param {Object} params.response
   */
  gac3.prototype.columns = function (params) {

  };

  /**
   * Maps Google Analytics response to c3 rows structure
   * see: <http://c3js.org/reference.html#data-rows> for reference
   * @param {Object} params
   */
  gac3.prototype.rows = function (params) {

  };

  /*--------------------------------------------------------------------------*/

  // Export 
  window.gac3 = new gac3();

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function () {
      return gac3;
    });
  }
}.call(this));
