//var req = new XMLHttpRequest();
//req.open('GET', URLrequest);
//req.responseType = 'json';
//req.send();
//req.onload = function() {
//    var strangeproduct = req.response;
//    console.log(strangeproduct);
//    strangeProducts(strangeproduct);
//};


//Fetch all the data from the given URL and display it to the user screen
fetch('https://bhattaneri.github.io/comp1073-Lab_4/Lab4/main.json').then(function(response) {
    return response.json(); //this response to json file instead of the text file.
}).then(function(json) {
    let jsonObj = json;
    strangeProduct(jsonObj);
}).catch(function(err) {
    console.log('Fetch Problem ' + err.message);
});

//function is used to display the content on the webpages on the user end.
function strangeProduct(jsonObj) {
    let strangeproducts = jsonObj.StrangeProducts;
    let section = document.querySelector('section');
    for (let i = 0; i < strangeproducts.length; i++) {
        let content = document.createElement('article');
        let h3 = document.createElement('h2');
        let imgage = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        imgage.setAttribute('src', 'https://bhattaneri.github.io/comp1073-Lab_4/Lab4/Images/' + strangeproducts[i].image);
        imgage.setAttribute('alt', strangeproducts[i].name);
        h3.textContent = strangeproducts[i].name;
        p1.textContent = 'Price: ' + strangeproducts[i].price;
        p2.textContent = 'Details: ' + strangeproducts[i].details;
        content.appendChild(imgage);
        content.appendChild(h3);
        content.appendChild(p1);
        content.appendChild(p2);
        section.appendChild(content);
    }
};