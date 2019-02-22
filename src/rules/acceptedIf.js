const empty = require('../lib/empty');
const {pathIndex} = require('../lib/ObjectIndex');

module.exports = async function acceptedIf(field, value, args) {

    if (!args || args.length < 2) {

        throw new Error('Invalid arguments supplied for field ' + field + ' in requiredIf rule.');
        return false;
    }

    if (args.length % 2 !== 0) {

        throw new Error('Invalid arguments supplied for field ' + field + ' in requiredIf rule.');
        return false;
    }
    let acceptedValues = [true, 'true', 1, '1', 'yes', 'on'];

    let canbetrue = false;
    for (let start = 0; start < args.length; start += 2) {
        let requiredField = args[start];
        let requiredValue = args[start + 1];

        if (requiredField == field) {
            return false;
        }
        if(!empty(pathIndex(this.inputs,requiredField))
            && !acceptedValues.indexOf(pathIndex(this.inputs,requiredField)) >= 0){
          return true;
        }

        // field can be true if all values are presented
        if (!empty(pathIndex(this.inputs,requiredField))
            && pathIndex(this.inputs,requiredField).toString() == requiredValue) {
            canbetrue = true;
        } else {
            canbetrue = false;
            break
        }
    }

    if (canbetrue && !acceptedValues.indexOf(value)>= 0) {
        return false;
    }

    return true;
}