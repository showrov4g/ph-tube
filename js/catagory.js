// show catagories using API

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => displayCategory(error));
};

// display category function
// const displayCategory = (categories) => {
//   const categoryContainer = document.getElementById("categories");
//   categories.forEach((item) => {
//     const buttonContainer = document.createElement("div");
//     buttonContainer.innerHTML = `
//     <button onclick="loadCategoryVideo()" class= "btn">
//       ${item.category}
//     </button>
//     `
//     categoryContainer.append(buttonContainer)
//   });
// };

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    button.onclick = () => {
      alert("button clicked");
    };

    categoryContainer.append(button);
  });
};

loadCategory();
