
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var butAdd = document.getElementById('add');
var productsContainer //0
if (localStorage.getItem(`prodacts`)==null) {
    productsContainer=[];
}
else productsContainer=JSON.parse( localStorage.getItem(`prodacts`));
displayProducts(productsContainer     );  

function addProduct() {
if (butAdd.innerHTML=`add product`) {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }

    productsContainer.push(product);//5
    localStorage.setItem("prodacts",JSON.stringify(productsContainer)   )
    displayProducts(productsContainer);
    clearForm();
}
    
}

function clearForm(){
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescInput.value="";
}
function displayProducts(prodlist) {
    
    var cartoona = ``;
    for(var i = 0 ; i< prodlist.length ; i++){
        cartoona+=`<tr>
        <td> ${i} </td>       
        <td> ${prodlist[i].name} </td>       
        <td> ${prodlist[i].price} </td>       
        <td> ${prodlist[i].category} </td>       
        <td> ${prodlist[i].desc} </td> 
        <td> <button onclick= "deletprodact(${i})" class="btn btn-warning p-2"> delet </button> </td>
        </tr>`
    }
    document.getElementById(`tableRow`).innerHTML= cartoona;
}
function deletprodact(prodactindex) {
    productsContainer.splice(prodactindex,1);
    displayProducts(productsContainer);
    
}
function searchProdact(term) {
    
    var searchProdac=[];
    for(var i = 0 ; i<productsContainer.length;i++)
    {
        if ( productsContainer[i].name.toLowerCase().includes(term.toLowerCase()  ) == true) 
        {searchProdac.push(productsContainer[i])  ;    
        }
    }
    displayProducts(searchProdac);  
}


