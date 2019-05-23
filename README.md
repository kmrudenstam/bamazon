# bamazon

Amazon-like storefront with MySQL. The app will take in orders from customers and deplete stock from the store's inventory. 

**Technologies used:** Node.js and MySQL


## Getting Started

- Clone repo.
- Run command in Terminal or Gitbash 'npm install'
- Run command 'npm run customer'

### What the JavaScript does

    * Prints the products in the store.

    * Prompts customer which product they would like to purchase by ID number.

    * Asks for the quantity.

      * If there is a sufficient amount of the product in stock, it will return the total for that purchase.
      * However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
      * If the purchase goes through, it updates the stock quantity to reflect the purchase.
      * It will also update the product sales in the department table.

![image of concertThis](/images/bamazon.png)
