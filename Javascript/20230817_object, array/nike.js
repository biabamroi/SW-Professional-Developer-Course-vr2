// createElement로 products length만큼 html 생성

let boxList = document.querySelector('.box-list');

let products = [
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e90af51-c6cd-4426-ad31-5f34ac7df0ee/%EC%A4%8C-%EB%B3%B4%EB%A9%94%EB%A1%9C-5-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-fwdJDzm0.png',
    title : '나이키 줌 보메로 5 프리미엄',
    price : '219,000 원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2554affc-8e73-4a3d-98a8-4b4a98d67a3e/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-e1FKsCkm.png',
    title : '나이키 덩크 로우 프리미엄',
    price : '139,000 원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b95ae5a4-a237-4e16-87ea-a7d23fa2541c/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-og-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-NhOqw8IO.png',
    title : '에어 조던 1 로우 OG',
    price : '169,000 원',
    size : ['230','240','250','260']
  }
]

let productsLength = products.length;

for (let i=0; i < productsLength; i++){
  let boxItem = document.createElement('div');
  boxItem.classList.add('box-item');
  boxList.appendChild(boxItem);
  
  let img = document.createElement('img');
  boxItem.appendChild(img);
  
  let shoInfo = document.createElement('div');
  shoInfo.classList.add('sho-info');
  boxItem.appendChild(shoInfo);
  
  let h3Tag = document.createElement('h3');
  let pTag1 = document.createElement('p');
  let pTag2 = document.createElement('p');
  
  shoInfo.appendChild(h3Tag);
  shoInfo.appendChild(pTag1);
  shoInfo.appendChild(pTag2);
};

let boxItems = document.querySelectorAll('.box-item');
let boxItemImage = document.querySelector('.box-item > img');
let shoInfoTitle = document.querySelector('.sho-info > h3');
let shoInfoPrice = document.querySelectorAll('.sho-info > p')[0];
let shoInfoSize = document.querySelectorAll('.sho-info > p')[1];

let boxItemLength = boxItems.length;

boxItems.forEach(function(item, index){
  item.querySelector('img').src = products[index].img;
  item.querySelector('.sho-info > h3').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info > p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info > p')[1].innerHTML = products[index].size;
});













