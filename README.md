# Vending machine project
We would like to ask you to implement a vending machine with the following requirements:
- Inventory size – up to 15 products of the same type
- Price of products – should be different for each type
- Use a currency of your choice, but please note the accepted coin denominations in a readme file. Make sure your vending machine accepts only the selected denominations
-  The machine must return change
-  Web Design: responsive
Operations to be implemented:
-  Products - Get initial products list data from external resource (mocked API created by you)
- CRUD operations for the products only in the application state (products data is not needed to be updated in the external resource)
- Vending – Insert coins, buy product, reset process (return the coins without purchase)

## Project setup

### Installation

Install the dependencies and devDependencies

```sh
cd vending-machine
npm install
```

Start the server:

```sh
cd vending-machine
npm start
```

### Note
Accepted coin denominations - $1, $2, $5, $10, $20, $50, $100

I added form state to redux only for representing more slices In Redux
