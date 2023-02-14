var data = [
            {
                img: "./assets/img/item/item1.jpg",
                itemName: "Cotton T-shirt A",
                itemPrice: 74,
                itemSl: 1
            },
            {
                img: "./assets/img/item/item2.jpg",
                itemName: "Cotton T-shirt B",
                itemPrice: 72,
                itemSl: 1
            },
            {
                img: "./assets/img/item/item3.jpg",
                itemName: "Cotton T-shirt C",
                itemPrice: 44,
                itemSl: 1
            },
            {
                img: "./assets/img/item/item4.jpg",
                itemName: "Cotton T-shirt A",
                itemPrice: 55,
                itemSl: 1
            },
            {
                img: "./assets/img/item/item1.jpg",
                itemName: "Cotton T-shirt A",
                itemPrice: 44,
                itemSl: 1
            }
            ,
            {
                img: "./assets/img/item/item2.jpg",
                itemName: "Cotton T-shirt A",
                itemPrice: 44,
                itemSl: 1
            },
            {
                img: "./assets/img/item/item3.jpg",
                itemName: "Cotton T-shirt A",
                itemPrice: 44,
                itemSl: 1
            },
            {
                img: "./assets/img/item/item4.jpg",
                itemName: "Cotton T-shirt B",
                itemPrice: 45,
                itemSl: 1
            }
        ];
var listOder = [];

let cart_status = document.getElementById('cart-sl');
//khoi tao danh sach mua hang 
function init() {
    let listOders = localStorage.getItem("oder-list");
    if(listOders != null) {
        listOder = JSON.parse(listOders);
    } 
    console.log(listOder);
}
init();
var sl = listOder.length;

function cart() {
    if(sl<1) {
        cart_status.style.display = "none";
        document.getElementsByClassName('cart-full')[0].style.display = 'none';
    } else {
        cart_status.style.display = "flex";
        cart_status.innerText = sl;
        document.getElementsByClassName('cart-full')[0].style.display = 'flex';
        document.getElementsByClassName('cart-blank')[0].style.display = "none";
        document.getElementsByClassName('cart-full')[0].classList.add('js-animated');
    }
} 
cart();


function render() {
    var listItem = '';
    for(let s=0; s<data.length; s++) {
        listItem += `<div class="item">
                        <div class="line"></div>
                        <div class="pic">
                            <img src='${data[s].img}' alt="">
                            <div class="info">
                                <span>${data[s].itemName}</span>
                                <span class="price-item">$ ${data[s].itemPrice}</span>
                                <button onclick="buyItem(${s})">Buy now</button>
                            </div>
                        </div>    
                    </div>`
    } 
    
    document.getElementById("row").innerHTML = listItem;
}
render();

//luu danh sach mua hang
function buyItem(index) {
    for(let s=0; s<data.length; s++) {
        if(s==index) {
            sl++;
            listOder.push(data[s]);
            console.log(listOder);
        }
    }
    
    localStorage.setItem("oder-list", JSON.stringify(listOder));
    cart();

   
    document.getElementById('mes-oder').style.display = "block";
   
    setTimeout(function offNoti(){
        document.getElementById('mes-oder').style.display = "none";
    }, 3000);

}






document.getElementsByClassName('cart-icon')[0].addEventListener("click", function(e) {
    e.preventDefault();
    if(sl<1) {
        alert('Chua co san pham nao trong gio hang.');
    } else {
        window.location.href = "./cart.html";
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}












