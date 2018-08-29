var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('mylist', {
    "fields": {
        "name": {
            "type": "string"
        },
        "price": {
            "type": "string"
        },
        "store": {
            "type": "string"
        }
    },
    "connector": "memory",
    "actions": []
});
module.exports = Model;