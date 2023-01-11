// All Categories
const categoryList = document.querySelector("#categories");
const allCategories = categoryList.querySelectorAll(".item").length;
console.log("Numbers of categories:", allCategories);

// for (let i = 0; i < categoryList.length; i++) {
//     const Item = categoryList.children[i];
//     const title = Item.querySelector("h2");
//     const itemEl = Item.querySelector("ul").children;
//     // console 
//  console.log("Category:",title.textContent);
//      console.log("Elements:",(itemEl.length)); 
    
// } 
// Animals
const firstItem = categoryList.children[0];
const titleFirst = firstItem.querySelector("h2");
const itemEl = firstItem.querySelector("ul").children;
// console
console.log("Category:",titleFirst.textContent);
console.log("Elements:",(itemEl.length));

// Products
const secondItem = categoryList.children[1];
const titleSecond = secondItem.querySelector("h2");
const itemEl2 = secondItem.querySelector("ul").children;
// console
console.log("Category:",titleSecond.textContent);
console.log("Elements:",(itemEl2.length));

// Technologies
const thirdItem = categoryList.children[2];
const titleThird = thirdItem.querySelector("h2");
const itemEl3 = thirdItem.querySelector("ul").children;
// console
console.log("Category:",titleThird.textContent);
console.log("Elements:",(itemEl3.length));