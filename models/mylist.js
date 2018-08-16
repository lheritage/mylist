var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('mylist', {
    "connector": "memory",
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
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;