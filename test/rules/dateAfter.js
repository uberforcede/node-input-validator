const Validator = require('../../index');
const assert = require('assert');

describe('#dateAfter', function () {

    it('should return true', async () => {

        let v, matched;

        v = new Validator({ dob: '1990-02-28' }, { dob: 'required|dateFormat:YYYY-MM-DD|dateAfter:1990-01-01' });

        matched = await v.check();
        assert.equal(matched, true);

    });


    it('should return false', async () => {
        let v = new Validator({ dob: '1993-28-02' }, { dob: 'required|dateFormat:YYYY-MM-DD|dateAfter:2000-15-31' });

        let matched = await v.check();

        assert.equal(matched, false);

        v = new Validator({ dob: '1993-28-02' }, { dob: 'required|dateFormat:YYYY-MM-DD|after:2000-12-31' });

        matched = await v.check();

        assert.equal(matched, false);


        v = new Validator({ dob: '1993-32-50' }, { dob: 'required|dateFormat:YYYY-MM-DD|after:2000-12-31' });

        matched = await v.check();

        assert.equal(matched, false);

    });

});