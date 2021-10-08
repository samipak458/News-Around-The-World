console.log('Conected....');

//Sources
let source = 'bbc-news';
let apiKey = '6d2b49da6540466ca6c5d3ed6664bf7e';

//grab news Container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);


xhr.onload = function () {
    if (this.status === 200) {
        document.getElementById("source").innerHTML = source;
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let updateNews = '';

    articles.forEach((element,index) => {    
            let News = `<div class="card">
                <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="true" aria-controls="collapse${index}">
                <strong>Breaking News ${index+1}:</strong> ${element["title"]}
                </button>
                </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#newsAccordion">
                <div class="card-body">${element["content"]} <a href="${element['url']}" target="_blank">Read more here</a></div>
                </div>
                </div> `;

                updateNews += News;
            });
            newsAccordion.innerHTML=updateNews;
    } 
    else {
        console.log("Some error occured")
    }
}

//send request
xhr.send();

