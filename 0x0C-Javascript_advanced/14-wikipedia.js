function createElement (data) {
    let paragraph = document.createElement("p");
    paragraph.innerText = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function () {
        let responseObj = xhr.response;
        callback(responseObj.query.pages["1000000"].extract);
    }
}

queryWikipedia(createElement);
