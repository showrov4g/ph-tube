const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => displayVideos(error));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
            <figure class = "h-[200px]">
                <img
                src=${video.thumbnail} class = "h-full w-full object-cover" 
                alt="Shoes" />
            </figure>
            <div class="px-0 py-2 flex gap-2">
                <div>
                    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
                </div>
                <div>
                    <h2 class = "font-bold">${video.title}</h2>
                    <div class="flex items-center gap-2">
                        <p class="text-gray-400">${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified === true ?  ' <img class="w-[20px] h-[20px]" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' : " "}

                    </div>
                </div>
            </div>
        `;
    videoContainer.append(card);
  });
};

loadVideos();
