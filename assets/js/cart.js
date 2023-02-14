
//danh sach cac san pham khach hang da chon mua
var listOder = [];

//danh sach ma coupon giam gia
var listCODE = [
    {
        code: 'AAA',
        val_code: 5  //giam gia 5 euro
    },
    {
        code: 'BBB',
        val_code: 10
    },
    {
        code: 'CCC',
        val_code: 15
    },
    {
        code: 'DDD',
        val_code: 20
    }
]

function init() {
    let list_oder  =  localStorage.getItem("oder-list");
    listOder = JSON.parse(list_oder);
}
init();
console.log(listOder);

function backHome() {
    window.location.href = "index.html";
}

// in so luong item mua
function sl_item() {
    document.getElementById("sl-item").innerText = listOder.length;
}
sl_item();

function item_add(index) {
    listOder[index].itemSl += 1;
    render();
    oder_price();
}
function item_minus(index) {
    if(listOder[index].itemSl > 0) {
        listOder[index].itemSl -= 1;
    } else {
        listOder[index].itemSl = 0;
    }
    render();
    oder_price();
}

function render() {
    let ren = "";
    if(listOder.length < 1) {
        document.getElementById('list-Item').innerHTML = ren;
    } else {
        for(let s=0; s<listOder.length; s++) {
            ren += `<div class="item">
                        <div class="col d-flex1">
                            <img src="${listOder[s].img}" alt="">
                        </div>
                        <div class="col item-name">
                            <span class="item-type">Shirt</span>
                            <span>${listOder[s].itemName}</span>
    
                        </div>
                        <div class="col d-flex1">
                            <button class="button-a" id="minus" onclick="item_minus(${s})">-</button>
                            <input type="number" name="sl" value="${listOder[s].itemSl}">
    
                            <button class="button-a" id="add" onclick="item_add(${s})">+</button>
                        </div>
                        <div class="col d-flex3">
                            <label for="">$</label>
                            <span class="price" value="${listOder[s].itemPrice}">${listOder[s].itemPrice * listOder[s].itemSl}</span>
                        </div>
                        <div class="col d-flex3">
                            <button class="button-a" id="btn-del" onclick="del(${s})">X</button>
                        </div>
                    </div>`
        }
        document.getElementById('list-Item').innerHTML = ren;
    }
}
render();


function del(index) {
    listOder.splice(index,1);
    render();
    localStorage.removeItem("oder-list");
    localStorage.setItem("oder-list", JSON.stringify(listOder));
    sl_item();
}
let code_counter = 0;
let scode = 0;
function coupon() {
    let coup = document.getElementById('in-coupon').value;
    if(code_counter > 0) {
        alert("CODE chi su dung 1 lan duy nhat");
    } else {
        for(let s of listCODE) {
            if(s.code == coup) {
                scode = s.val_code;
                alert('Da ap dung CODE');
                code_counter++;
                console.log(scode);
                document.getElementById('mes-coupon').innerText = `Ma coupon ${s.code} giam €${s.val_code}`;
                return;
            } 
        }
        alert('CODE khong ton tai');
    }
}

setInterval(oder_price, 1000);

let total = 0;
function oder_price() {
    let price = 0;
    for(let s of listOder) {
        price += s.itemPrice * s.itemSl; 
    }
    document.getElementById('money').innerText = price;
    
    let shiping = document.getElementById('s-ship').value;
    let a = Number.parseInt(shiping);
    total = price + a - scode; 
    document.getElementById('total-money').innerText = total;
}

function checkout() {
    let a = confirm("Ban chac chan muon thanh toan don hang ?");
    if(a) {
        document.getElementById('mes').innerText = `Xac nhan don hang thanh cong, ban can thanh toan so tien €${total}`;
        localStorage.removeItem("oder-list");
        listOder = [];
        render();
        sl_item();
    }
    
}



