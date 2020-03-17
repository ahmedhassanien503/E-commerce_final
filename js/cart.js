let finalData;
let litems;
let totalArr=[];
let finalTotal=[];

async function addtoCart(id) {

    // let litems=Object.entries(localStorage);

    // console.log(`our local storage itemes are : ${item[0]}`);
    let result = await fetch('https://afternoon-falls-30227.herokuapp.com/api/v1/products/' + id);


    data = await result.json();

    return data
}
litems = Object.entries(localStorage);
if(litems.length==0){
    const tbody = document.getElementById('tbody')
    const emptyCart=document.createElement('h2');
    emptyCart.textContent='No itemes added to the cart';
    emptyCart.setAttribute('style','text-align: center;');
    tbody.append(emptyCart);
}
else{

litems.forEach(item => {
    
    addtoCart(item[0]).then(r => {
        finalData = r.data
        console.log(finalData);
        const tbody = document.getElementById('tbody')
        const tr = document.createElement('tr');
        //##################CHANGEEEEEEE###########################
        tr.setAttribute('id', `tr-${finalData.ProductId}`)
        //###########################################
        tbody.append(tr);
        const td1 = document.createElement('td');
        tr.append(td1);
        const divmedia = document.createElement('div');
        divmedia.classList.add('media');
        td1.append(divmedia);
        const divflex = document.createElement('div');
        divflex.classList.add('d-flex');
        divmedia.append(divflex);
        const img = document.createElement('img');
        img.src = finalData.ProductPicUrl;
        divflex.append(img);
        const divmediabody = document.createElement('div');
        divmediabody.classList.add('media-body"');
        divmedia.append(divmediabody);
        const productName = document.createElement('p');
        productName.textContent = `${finalData.Name}`;
        divmediabody.append(productName);
        // const proddesc=document.createElement('p');
        // proddesc.textContent=`${finalData.Description}`;
        // divmediabody.append(proddesc);

        const td2 = document.createElement('td');
        tr.append(td2);
        const price = document.createElement('h5');
        price.textContent = `$${finalData.Price}`;
        td2.append(price);
        const td3 = document.createElement('td');
        tr.append(td3);
        const divproductcount = document.createElement('div');
        divproductcount.classList.add('product_count');
        td3.append(divproductcount);
        // const span1=document.createElement('span');
        // span1.classList.add('input-number-decrement');
        // divproductcount.append(span1);

        // const i1=document.createElement('i');
        // i1.classList.add('ti-minus');
        // span1.append(i1);
        const input1 = document.createElement('input');
        input1.classList.add('input-number');
        // input1.type='text';
        input1.setAttribute('type', 'number');

        input1.setAttribute('value', '0');
        // input1.min='0';
        input1.setAttribute('min', '0');


        // input1.max=`${finalData.Quantity}`
        let quantity = finalData.Quantity;
        input1.setAttribute('max', `${quantity}`);
        input1.setAttribute('step', '1');

        divproductcount.append(input1);

        // const span2=document.createElement('span');
        // span2.classList.add('input-number-increment');
        // divproductcount.append(span2);

        // const i2=document.createElement('i');
        // i2.classList.add('ti-plus');
        // span2.append(i2);
        const td4 = document.createElement('td');
        tr.append(td4);

        const total = document.createElement('h5');
        total.classList.add('tot-class');
        let newPrice = Number(price.textContent.slice(1));
        total.textContent = `$${newPrice * input1.value}`;
        const cost=document.getElementById('total-cost');
        
        // totalArr=Array.from(document.querySelectorAll('.tot-class'));

        // totalArr.forEach((el)=>{
            
        //     finalTotal.push(Number((el.textContent).slice(1)));
        //     console.log(finalTotal)
        // })

        // cost.textContent=`$${(finalTotal.reduce((sum,item)=>sum+item,0))}`;

        input1.addEventListener('change', () => {
            if (input1.value > quantity) {
                input1.value = quantity;
                alert(`only ${quantity} unit available from ${productName.textContent}`)
                // totalArr[i]=(newPrice * input1.value);
               
            }
            total.textContent = `$${newPrice * input1.value}`;

           
           totalArr=Array.from(document.querySelectorAll('.tot-class'));

            totalArr.forEach((el)=>{
                
                finalTotal.push(Number((el.textContent).slice(1)));
                console.log(finalTotal)
            })
    
            cost.textContent=`$${(finalTotal.reduce((sum,item)=>sum+item,0))}`;
            finalTotal=[];

        })



        td4.append(total);
        const td5 = document.createElement('td');
        tr.append(td5);

        const remove = document.createElement('a');
        remove.textContent = 'remove';
        remove.href = '#';
        //##################CHANGEEEEEEE###########################
        remove.setAttribute('id', `rm-${finalData.ProductId}`)
        //#############################################

        td5.append(remove);
        remove.addEventListener('click', (() => {

            //##################CHANGEEEEEEE###########################
            let rmId = remove.getAttribute('id')
            let trId = rmId.replace('rm', 'tr')
            let tr = document.getElementById(trId);
            //#############################################
            tr.remove();
            localStorage.removeItem(rmId.slice(3));
           
        }))

        
      
        })
    
    // console.log(addtoCart(item[0]));
})
}

const submit = document.getElementById('submit-btn');
submit.addEventListener('click',()=>{
    alert('your order has confirmed')

});