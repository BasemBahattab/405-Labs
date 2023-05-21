let searchText = document.querySelector('header input[type="text"]');
let searchResults = document.getElementById("searchResults");


function resetResult() {
    searchResults.innerHTML = "";
}

function XHR_btn() {
    resetResult();
    API_XHR(searchText.value);
}

function fetch_btn() {
    resetResult();
    API_fetch(searchText.value);
}

function async_await_btn() {
    resetResult();
    API_async_await(searchText.value);
}

function API_XHR(word) {
    if (!word) {
        return;
    }

    var url = "https://api.giphy.com/v1/gifs/search";
    var api = "TYPE_YOUR_API_KEY";
    var params = "api_key=" + api + "&limit=5&q=" + encodeURIComponent(word);

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            processResponse(JSON.parse(this.responseText));
        }
    });

    xhr.open("GET", url + "?" + params);
    xhr.send();
}

function API_fetch(word) {
    if (!word) {
        return;
    }

    var url = "https://api.giphy.com/v1/gifs/search";
    var api = "TYPE_YOUR_API_KEY";
    var params = "api_key=" + api + "&limit=5&q=" + encodeURIComponent(word);
    var requestOptions = {
        method: 'GET'
      };
      
    fetch(url + "?" + params, requestOptions)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        processResponse(JSON.parse(data))
    })
    .catch((e) => {
        console.error(e);
    })
}

async function API_async_await(word) {
    if (!word) {
        return;
    }

    var url = "https://api.giphy.com/v1/gifs/search";
    var api = "TYPE_YOUR_API_KEY";
    var params = "api_key=" + api + "&limit=5&q=" + encodeURIComponent(word);
    var requestOptions = {
        method: 'GET'
    };
    
    const response = await fetch(url + "?" + params, requestOptions);
    const data = await response.json();

    processResponse(data);
}

function processResponse(resp) {
    for (item of resp.data) {
        let imgEle = document.createElement("img");
        imgEle.src = item.images.downsized_medium.url;
        imgEle.alt = item.title;
        searchResults.appendChild(imgEle);
    }
}