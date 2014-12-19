# Google Analytics C3 Adapter [![Build Status](https://travis-ci.org/MonkDev/google-analytics-c3-adapter.svg?branch=master)](https://travis-ci.org/MonkDev/google-analytics-c3-adapter)

> A simple adapter for Google Analytics responses and C3 Data Structures

## Installation

In a browser:

```html
<script src="gac3.min.js"></script>
```


In an AMD loader:

```js
require(['gac3.min'], function (gac3) {/*…*/});
```

## Usage

### Methods

Name | Parameters | Description
---- | ---------- | -----------
columns() | `params` | Transforms data source(s) to [C3 columns](http://c3js.org/reference.html#data-columns) format.
rows() | `params` | Transforms data source(s) to [C3 rows](http://c3js.org/reference.html#data-rows) format. _TODO: Not yet implemented._


### Parameters

Name | Value | Required | Summary
---- | ----- | -------- | -------
sources | `Array` | **yes** | An array of Google Analytics response objects.
keys | `Array` | no | An array of keys to use for each data source. If keys are present, then there must be an equal number of data sources, otherwise a `RangeError` will be thrown.
callback | `Function` | no | Executes once per Google Analytics `response.row`, taking one argument: `data`, which is the value of the data in the given row.

### Examples

**Basic Usage** - *Use exiting Google Analytics keys:*
```js
gac3.columns({
  sources: [response]
});
```

*returns:*

```js
[['mobile', 672723], ['desktop', 615659], ['tablet', 164285]]
```

**Keys** - *Specify a key to group data by:*

```js
gac3.columns({
  keys: ['Bounce Rate %'],
  sources: [response]
});
```

*returns:*

```js
[
  ['Bounce Rate %', 52.1, 66.7, 21.9, 34.3, 20.2, 21.6, 34.4, 56.0, 60.5, 44.2, 57.1]
]
```


**Multiple Data Sources** - *Specify multiple data sources with an optional callback:*

```js
gac3.columns({
  keys: ['Last Year', 'This Year'],
  sources: [lastYearResponse, thisYearResponse],
  callback: function (data) { return parseInt(data, 10); }
});
```

*returns:*

```js
[
  ['Last Year', 521, 667, 219, 343, 202, 216, 344, 560, 605, 442, 571],
  ['This Year', 343, 442, 560, 216, 667, 571, 344, 973, 571, 334, 987]
]
```

## Building & Testing
Custom Tasks:

* `gulp build` - Build distribution.
* `gulp test` - Run tests.

## License
Copyright 2014 [Monk Development](http://monkdevelopment.com/)

[MIT](https://github.com/MonkDev/google-analytics-c3-adapter/blob/master/LICENSE.txt)
