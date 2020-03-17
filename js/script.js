let prev = document.getElementById('prev');
let next = document.getElementById('next');
let page = 1;


let image = document.querySelectorAll('.image');

let price = document.querySelectorAll('.price');

let category = document.querySelectorAll('.category');
let card = document.querySelectorAll('.card');
let view = document.querySelectorAll('.attia');



async function getApi(page) {
    const api_url = " https://afternoon-falls-30227.herokuapp.com/api/v1/products/?limit=10&page=" + page;
    const response = await fetch(api_url);
    const data = await response.json();
    const products = data.data;
    console.log(data);
    document.getElementById('page').textContent = page;
    //const{page,category,limit,total_items}=data;
    //document.getElementById('img').textContent=data.data[0].Category;


    // let item_image =document.createElement('img');

    // let item_price =document.createElement('p');

    // let item_category =document.createElement('p');

    // console.log("image: ", image[0])

    //price.appendChild(item_price);
    // image.appendChild(item_image);
    // category.appendChild(item_category);

    for (let i = 0; i < products.length; i++) {

        const item_image = document.createElement('img');
        let id = products[i].ProductId;
        // console.log(id);
        let cartArrBtns = Array.from(card);

        console.log(id);

        cartArrBtns[i].setAttribute("id", id);

        let detailArrBtns = Array.from(view);

        detailArrBtns[i].setAttribute('href', `single-product.html?ProductId=${products[i].ProductId}`);



        const item_price = document.createElement('p');

        const item_category = document.createElement('p');
        item_image.classList.add("item_image");
        item_price.classList.add("item_price");
        item_category.classList.add("item_category");

        item_price.textContent = products[i].Price;
        item_category.textContent = products[i].Category;
        item_image.src = products[i].ProductPicUrl;

        price[i].appendChild(item_price);
        image[i].appendChild(item_image);
        category[i].appendChild(item_category);

    }

}
getApi(1);





next.addEventListener('click', (e) => {
    let item_image = document.querySelectorAll(".item_image");
    let item_category = document.querySelectorAll(".item_category");
    let item_price = document.querySelectorAll(".item_price");

    for (let i = 0; i < 6; i++) {
        //console.log(image);
        image[i].removeChild(item_image[i]);
        price[i].removeChild(item_price[i]);
        category[i].removeChild(item_category[i]);

    }
    page++;
    getApi(page);

    // if(page==13){
    //     document.getElementById("next").style.visibility = "hidden"; 

    // }
});

prev.addEventListener('click', (e) => {
    let item_image = document.querySelectorAll(".item_image");
    let item_category = document.querySelectorAll(".item_category");
    let item_price = document.querySelectorAll(".item_price");

    for (let i = 0; i < 6; i++) {
        //console.log(image);
        image[i].removeChild(item_image[i]);
        price[i].removeChild(item_price[i]);
        category[i].removeChild(item_category[i]);

    }
    // if(page==1){
    //     document.getElementById("prev").style.visibility = "hidden";
    //} else {
    page--;
    getApi(page);
    //}

});

const search = document.forms['search'].querySelector('input');
search.addEventListener('keyup', function (e) {
    const term = e.target.value.toLowerCase();
    const cat = list.getElementByTagName('p')
})

let cartArrBtns = Array.from(card);



cartArrBtns.forEach(btn => {

    btn.addEventListener('click', (ev) => {
        let id = btn.getAttribute('id');
        localStorage.setItem(id, id);
        console.log(Object.entries(localStorage));

    });
})
// let litems=Object.entries(localStorage);
// litems.forEach(item=>{
//     console.log(`our local storage itemes are : ${item[0]}`);
// })
