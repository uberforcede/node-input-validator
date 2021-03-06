const assert = require('assert');

const Validator = require('../index');

let r = {};

describe('Objects', function () {



    it('Validate object properties', async () => {

        let v = new Validator(
            {
                product: { id: '1', name: '', price: '', active: 'yes' }
            },
            {
                'product': 'required|object',
                'product.id': 'required|integer',
                'product.name': 'required',
                'product.price': 'required|integer',
                'product.active': 'required|integer'
            });

        let matched = await v.check();

        assert.equal(matched, false);

    });

    it('Validate object:false case', async () => {

        let v = new Validator(
            {
                product: ''
            },
            {
                'product': 'required|object',

            });

        let matched = await v.check();

        assert.equal(matched, false);

    });

    it('Validate object:true case', async () => {

        let v = new Validator(
            {
                product: {}
            },
            {
                'product': 'required|object',

            });

        let matched = await v.check();


        assert.equal(matched, true);

    });



});