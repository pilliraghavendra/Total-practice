let groceryList = ["Apples", "Boost Drink","Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Choculates", "Pasta"];
let itemsContainer = document.getElementById("groceryListContainer");
itemsContainer.classList.add("items-container");
let headingEl = document.createElement("h1");
headingEl.textContent= "Grocery List";
headingEl.classList.add("heading");
itemsContainer.appendChild(headingEl);

let unOrderedList = document.createElement("ul");
unOrderedList.classList.add("grocery-container");

itemsContainer.appendChild(unOrderedList);
for (let items of groceryList){
    let listItem = document.createElement("li");
    listItem.textContent = items;
    listItem.classList.add("ml-4");
    unOrderedList.appendChild(listItem)
}