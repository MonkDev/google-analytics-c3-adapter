/* jshint undef: false, unused: false */
describe('gac3', function () {
  var timeData1, timeData2, deviceType, singleSourceNoKeys,
      singleSourceUserKeys, multiSourceUserKeys, multiSourceNoKeys;

  before('sets up data structures', function () {
    timeData1 = { rows: [['01', '157.2118'], ['02', '184.6965'], ['03', '183.8783'], ['04', '157.2118'], ['05', '184.6965'], ['06', '183.8783'], ['07', '133.1900'], ['08', '157.2118'], ['09', '184.6965'], ['10', '184.6965'], ['11', '133.1900'], ['12', '157.2118']] },
    timeData2 = { rows: [['01', '140.8366'], ['02', '183.8783'], ['03', '184.6965'], ['04', '137.2118'], ['05', '194.6965'], ['06', '183.8783'], ['07', '133.1900'], ['08', '157.2118'], ['09', '181.365'], ['10', '122.6965'], ['11', '163.1900'], ['12', '150.2118']] },
    deviceType = { rows: [['mobile', '672723'], ['desktop', '615659'], ['tablet', '164285']] },
    singleSourceNoKeys = { sources: [deviceType] },
    singleSourceUserKeys = { keys: ['Bounce Rate'], sources: [timeData1] },
    multiSourceUserKeys = { keys: ['Last Year', 'This Year'], sources: [timeData1, timeData2] },
    multiSourceNoKeys = { sources: [timeData1, timeData2] };
  });

  describe('gac3.columns()', function () {

    describe('with single-source data with no keys', function () {
      it('should return a single array', function () {
        assert.isArray(gac3.columns(singleSourceNoKeys), 'columns are a collection');
      });
    });

    describe('with single-source data with keys', function () {
      it('should return collection of arrays', function () {
        assert.isArray(gac3.columns(singleSourceUserKeys), 'columns are a collection');        
      });
    });

    describe('with multi-source data with keys', function () {
      it('should return collection of arrays', function () {
        assert.isDefined(gac3.columns(multiSourceUserKeys), 'columns have been formatted');
        assert.isArray(gac3.columns(multiSourceUserKeys), 'columns are a collection');
      });
    });

    describe('with multi-source data with no keys', function () {
      it('should throw a custom error', function () {
        var fn = function () { gac3.columns(multiSourceNoKeys); };
        expect(fn).to.throw(RangeError);
      });
    });
  });
});