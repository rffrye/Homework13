const orm = require("./config/orm");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "devoured",  );

// orm.updateOne();