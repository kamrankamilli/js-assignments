let shoppingList = ["Meat","Milk","Cheese"];
console.log("Shopping List: " + shoppingList); 
let shoppingBasket = shoppingList.splice(0,3);
shoppingBasket.push("Apple");
console.log("Shopping Basket: " + shoppingBasket); 