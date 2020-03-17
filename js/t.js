const xhr = new XMLHttpRequest();

var urlparams = new URLSearchParams(window.location.search);
var id = urlparams.get('ProductId');
// let aa = document.querySelector("#a").setAttribute("src", json.data.ProductId);

console.log(id);
xhr.open('GET', 'https://afternoon-falls-30227.herokuapp.com/api/v1/products/'+id);
xhr.send();

xhr.onload = () => {
    console.log('onload');
    console.log(xhr.status);
    if (xhr.status === 200) {
        console.log(typeof (xhr.response));
        const json = JSON.parse(xhr.response);
        console.log(json);
        console.log(xhr.response);
        // for (let i = 0; i < json.per_page; i++) {
            // let vimg = document.createElement("img");
            // let vspan = document.createElement("p");
            // let desc = document.createElement("p");
            // let price = document.createElement("p");
            // let b1 = document.createElement("button");
            // let b2 = document.createElement("button");
            
            // vimg.setAttribute("src", json.data.ProductPicUrl);
            // vspan.innerText = json.data.Name + " ";
            // desc.innerText = json.data.Description +" ";
            // price.innerText = json.data.Price +" ";

            console.log("attia")
            
            let img =document.querySelector("#fimg").setAttribute("src", json.data.ProductPicUrl);
            let name =document.querySelector("#fname").innerHTML =  json.data.Name+" ";
            let price =document.querySelector("#fprice").innerHTML =  json.data.Price+" ";
            let cat =document.querySelector("#fCategory").innerHTML =  json.data.Category+" ";
            let Quantity =document.querySelector("#fQuantity").innerHTML =  json.data.Quantity+" ";
            let desc =document.querySelector("#fDescription").innerHTML =  json.data.Description+" ";



            /////////////////////////////////////
                
            


            //////////////////////////////////////

            // let vdiv = document.createElement("div");
            // vdiv.Category = "user_" + json.data[i].Category;


            // vdiv.appendChild(vspan);
            // vdiv.appendChild(vimg);
            // vdiv.appendChild(desc);
            // vdiv.appendChild(price);
            

            // //document.appendChild(vdiv);

            // document.getElementById("content").appendChild(vdiv);
        // }

    }
};

  