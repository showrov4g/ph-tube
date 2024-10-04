// show catagories using API

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => console.log(error));
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


// load video with category
const loadCategoryVideo =(id) =>{
  // alert(id);
  // fetch 
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then((Response) => Response.json())
  .then((data) => {
    removeActiveClass();
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add('active')
    displayVideos(data.category)
  })
  .catch((error) => console.log(error));
}
// remove class

const removeActiveClass = () =>{
  const buttons = document.getElementsByClassName('category-btn');
  console.log(buttons);
  for(let btn of buttons){
    btn.classList.remove("active")
  }
}


// display video category
const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button id="btn-${item.category_id}" onclick="loadCategoryVideo(${item.category_id})" class=" btn category-btn">${item.category}</button>
    `

    categoryContainer.append(buttonContainer);
  });
};

const loadDetails =async (videoId) =>{
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.video)
}
const displayDetails = (video) => {
  console.log(video);
  const detailsContainer = document.getElementById('modal-content');
  detailsContainer.innerHTML = `
    <img src="${video.thumbnail}"/>
    <p>${video.description}</p>
  `
  document.getElementById('show-modal-data').click();
}

// search function making 
document.getElementById('search-input').addEventListener('keyup',(e)=>{
  loadVideos(e.target.value);
})


loadCategory();
