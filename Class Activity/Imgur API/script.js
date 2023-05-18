const clientId = "";

function requestAlbumXHR() {
    let albumId = document.getElementById("albumIdField").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            //processAlbumRequest(req.responseText);
            let response = JSON.parse(req.responseText)
            for (item of response.data) {
                let imgElem = document.createElement("img");
                imgElem.src = item.link;

                resultDiv.appendChild(imgElem);
            }
        }
        else if (req.readyState == 4 && req.status != 200) {
            console.log(req.status + " Error with the imgur API: ", req.responseText);
        }
    }
    req.open('GET', 'https://api.imgur.com/3/album/' + albumId + '/images', true); // true for asynchronous     
    req.setRequestHeader('Authorization', 'Client-ID ' + clientId);
    req.send();
}


function requestAlbumFetch() {
    let albumId = document.getElementById("albumIdField").value;

    fetch('https://api.imgur.com/3/album/' + albumId + '/images', {
      method: 'GET',
      headers: {
        'Authorization': clientId
      }
    })
      .then(response => response.blob())
      .then(data => {
        processResponse(JSON.parse(data));
      })
      .catch(error => console.error(error));
}


async function requestAlbumAsyncAwait() {
    let albumId = document.getElementById("albumIdField").value;

    var url = 'https://api.imgur.com/3/album/' + albumId + '/images';

    var requestOption = {
        method: 'GET',
        headers: {
          'Authorization': clientId
        }
    }

    const response = (await fetch(url, requestOption)).blob();
    const data = await response.json();
    processResponse(JSON.parse(data));
}

function processResponse(resp) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    for (item of resp.data) {
        let imgElem = document.createElement("img");
        imgElem.src = item.link;

        resultDiv.appendChild(imgElem);
    }
}