const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = document.querySelector("#ingredients");

const makeIngredientList = (ingredients)=>{ 
  return ingredients.map((ingredientEl) =>{
    const item = document.createElement("li");
    item.classList.add("item_ingredient");
    item.textContent = ingredientEl;
    return item;
})};
const makeList = makeIngredientList(ingredients);
items.append(...makeList);

console.log(makeList);