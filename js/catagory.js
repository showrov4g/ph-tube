// show catagories using API

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => displayCategory(error));
};
// display category function

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoryContainer.append(button);
  });
};

loadCategory();
