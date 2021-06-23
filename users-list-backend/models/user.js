// models/user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user_schema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: Object,
        street: {
            type: String
        },
        suite: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        },
        geo: {
            lat: {
                type: String
            },
            lang: {
                type: String
            }
        }
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    company: {
        type: Object,
        name: {
            type: String
        },
        catchPhrase: {
            type: String
        },
        bs: {
            type: String
        }
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('users', user_schema);