const loadVideos = (searchText ="") => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((Response) => Response.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => displayVideos(error));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = " ";
  if (videos.length === 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
      <div class= "min-h-[300px] flex flex-col gap-5 justify-center items-center "> 
      <img src="./image/Icon.png "/>
      <h2 class="text-4xl font-semibold">No Content Here in this category</h2>
      </div>

    `;
    return;
  } else {
    videoContainer.classList.add("grid");
  }

  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
            <figure class = "h-[200px] relative">
                <img
                src=${video.thumbnail} class = "h-full w-full object-cover" 
                alt="Shoes" />
                ${
                  video.others.posted_date?.length === 0
                    ? ""
                    : `<span class="absolute right-2 bottom-2 p-1 bg-black text-white text-xs rounded-lg">${getTimeString(
                        video.others.posted_date
                      )}</span>`
                }

            </figure>
            <div class="px-0 py-2 flex gap-2">
                <div>
                    <img class="w-10 h-10 rounded-full object-cover" src=${
                      video.authors[0].profile_picture
                    } />
                </div>
                <div>
                    <h2 class = "font-bold">${video.title}</h2>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">${
                          video.authors[0].profile_name
                        }</p>
                        ${
                          video.authors[0].verified === true
                            ? ' <img class="w-[20px] h-[20px]" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />'
                            : " "
                        }

                    </div>

                    <p>
                        <button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button>
                    </p>
                </div>
            </div>
        `;
    videoContainer.append(card);
  });
};

loadVideos();

// time calculating function
function getTimeString(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  let minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hrs ${minute} min ${remainingSecond} sec ago`;
}
