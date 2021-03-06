const assert = require('assert');
const t = require('../../src/transform/transform');

describe('transform-dateYearsBeforeToday-rules', function () {

    describe('#dateYearsBeforeToday', function () {

        it('should return true when have options', async () => {
            const v = ['dateYearsBeforeToday:3'];
            const obj = t.toObject(v);
            const match = {
                params: [{
                    'arguments': [{
                        'name': 'number of years',
                        type: 'integer',
                        'value': 3
                    }],
                    'name': 'dateYearsBeforeToday',
                    'options': undefined,
                    'types': ['date'],
                }],
            };
            assert.equal(JSON.stringify(obj), JSON.stringify(match));
        });

        it('should return true when the string have options', async () => {
            const stringMatch = ['dateYearsBeforeToday:3'];
            const objToTransform = {
                params: [{
                    'arguments': [{
                        'name': 'number of years',
                        type: 'integer',
                        'value': 3
                    }],
                    'name': 'dateYearsBeforeToday',
                    'options': undefined,
                    'types': ['date'],
                }],
            };
            const result = t.normalize(objToTransform);
            assert.equal(JSON.stringify(result), JSON.stringify(stringMatch));
        });

    });
});