let searchInput=document.getElementById("searchInput");
// let searchResults=document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
searchInput.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
    spinnerEl.classList.remove("d-none");
    console.log(searchInput.value);
    let url="https://apis.ccbp.in/wiki-search?search="+searchInput.value;
    console.log(url);
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
        let output="";
        for(let item of data.search_results){
        console.log(item);
        output+=`
        <div>
         <p>${item.title}</p>
         <a href="${item.link}">${item.link}</a>
         <p>${item.description}</p>
        </div>
        `
        }
        document.querySelector(".search-results").innerHTML=output;
        searchInput.value="";
         spinnerEl.classList.add("d-none");
    })
    .catch(function(error){
        console.log(error);
    });
}
})
