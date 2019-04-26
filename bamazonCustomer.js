// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your username & port
    port: 3306,
    user: "root",

    // Your password
    password: "butterfly",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function that prompts the user for the item/quantity they would like to purchase

function start() {

    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);

        // prompt user to select an item
        inquirer.prompt([
            {
                name: "item_id",
                type: "input",
                choices: function () {
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].product_name);
                    }
                    return choiceArray;
                },
                message: "Please enter the item which you would like to purchase."
            },
            {
                name: 'quantity',
                type: 'input',
                message: 'How many do you need?'
            }
        ]).then(function (input) {
            // get info of the item chosen
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === input.choice) {
                    chosenItem = results[i];
                    console.table(chosenItem);
                }
            }
            if (chosenItem.stock_quantity > input.quantity) {
                // update the database and restart
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: chosenItem.stock_quantity - input.quantity
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw err;
                        console.log("Item Purchased");
                        console.log("- - - - - - - - - - - - - - ");
                        start();
                    }
                );
            } else {
                console.log("Sorry, we don't have enogh inventory for your request.");
                console.log("- - - - - - - - - - - - - - ");
                start();
            }

        });
    });
}

