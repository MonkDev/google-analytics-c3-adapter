/**
 * @license
 * Google Analytics C3 Adapter <https://github.com/monkdev/google-analytics-c3-adapter>
 * Copyright 2014 Monk Development <http://monkdevelopment.com/>
 * Inspired by Lo-Dash 2.4.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Available under MIT license <https://github.com/MonkDev/google-analytics-c3-adapter/blob/master/LICENSE.txt>
 */
;(function () {
  'use strict';

  /* Exported by module */
  var gac3 = {};

  /**
   * Maps Google Analytics response to c3 columns structure
   * see: <http://c3js.org/reference.html#data-columns> for reference
   *
   * @private
   * @param {Object}    params
   * @param {Array}     params.keys
   * @param {Array}     params.sources
   * @param {Function}  params.callback
   */
  function formatColumns (params) {
    var hasKeys = hasUserKeys(params),
        columns = hasKeys ? params.keys.map(function (value) { return [value]; }) : [];

    handleErrors(params);

    // Format columns
    params.sources.forEach(function (source, index) {
      source.rows.forEach(function (row) {
        var data = isFunction(params.callback) ? params.callback(+row[1]) : +row[1];
        if(hasKeys) {
          columns[index].push(data);
        } else {
          columns.push([row[0], data]);
        }
      });
    });

    // Flatten single source arrays
    if(columns.length === 1) {
      return columns.reduce(function (a, b) { return a.concat(b); });
    } else {
      return columns;
    }
  }

  /**
   * Handle errors for given parameters.
   * 
   * @param  {Object} params Params object
   * @return {Null}
   */
  function handleErrors (params) {
    if(!isArray(params.sources)) {
      throw new TypeError('Expects an array of data sources.');
    }
    if(params.keys && !isArray(params.keys)) {
      throw new TypeError('Expects an array of keys.');
    }
    if(params.callback && !isFunction(params.callback)) {
      throw new TypeError('Expects callback to be a function.');
    }
    if(params.sources.length > 1 && !hasUserKeys(params)) {
      throw new RangeError('Expects keys to be specified for multiple data sources.');
    }
    if(hasUserKeys(params) && params.keys.length !== params.sources.length) {
      throw new RangeError('If keys are provided, there must be an equal number of keys and data-sources.');
    }
  }

  /**
   * Determines whether object has user provided keys.
   * This is used to differentiate between single-source data 
   * with user provided keys and Google provided keys.
   * 
   * @private
   * @param  {[type]}  params Params object.
   * @return {Boolean}        True if has user provided keys.
   */
  function hasUserKeys (params) {
    return params.keys && params.keys.length ? true : false;
  }

  /**
   * Checks if `value` is an array. Inspired by Lo-Dash.
   * 
   * @private
   * @param  {*}       value The value to check.
   * @return {Boolean}       Returns `true` if the `value` is an array, else `false`.
   */
  function isArray (value) {
    return value && typeof value === 'object' && typeof value.length === 'number' || false;
  }

  /**
   * Checks if `value` is a function. Inspired by Lo-Dash.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
   */
  function isFunction(value) {
    return typeof value === 'function';
  }

  gac3.columns = formatColumns;


  /*--------------------------------------------------------------------------*/

  // Export 
  window.gac3 = gac3;

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function () {
      return gac3;
    });
  }
}.call(this));