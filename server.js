const Express = require('express')
const orm = require("./config/orm");

orm.selectAll("burgers");

// orm.insertOne();

// orm.updateOne();