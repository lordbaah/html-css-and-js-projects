const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const searchResults = document.querySelector(".search-result");
const imageWrapper = document.querySelector(".img-wrapper");
const searchMorebtn = document.querySelector(".show-more-btn");
// const description = document.querySelector(".img-title");

const accessKey = "APRtuqiS48pk8jA_D7AKU3JWwnXAGb-7obO7JObuEp8"

let keyword = "";
let page = 1

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.preview_photos[0].urls.small;
        image.alt = result.cover_photo.alt_description;
        searchResults.appendChild(image);
    })

    searchMorebtn.style.display = "block"
}

searchBtn.addEventListener("click" , ()=>{
    page = 1;
    // searchBox.value = "";
    searchImages();
});

searchMorebtn.addEventListener("click" , ()=>{
    page++;
    searchImages();
})
