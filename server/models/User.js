//jshint esversion:8
const db = require('../db.js');

module.exports = db.defineModel('users', {
    username: {
        type: db.STRING(100),
        unique: true
    },
    passwd: db.STRING(100),
    nickname: db.STRING(100),
    gender: db.BOOLEAN,
    describe:{
        type:db.TEXT,
        allowNull:true,
    },
    age:{
        type:db.INTEGER,
        allowNull:true
    }
});