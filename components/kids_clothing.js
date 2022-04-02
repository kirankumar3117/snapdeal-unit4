//this are kid products
var mensdata = [ 
    {
        _id: "6247ac561e2af751a970df35",
        name: "SFC Cute Stylus Girls Frocks & Dresses",
        image_url: "https://n3.sdlcdn.com/imgs/j/w/e/230X258_sharpened/SFC-Cute-Stylus-Girls-Frocks-SDL350865831-1-6bfd0.webp",
        strikedoffprice: 999,
        discount: 70,
        price: 299
    },
    {
        _id: "6247ac911e2af751a970df37",
        name: "JCT Dresses Dhoti Kurta For Boys(Pack of 2)",
        image_url: "https://n1.sdlcdn.com/imgs/j/x/i/230X258_sharpened/combo-pack-of-9-SDL777856112-1-688f8.webp",
        strikedoffprice: 1999,
        discount: 69,
        price: 439
    },
    {
        _id: "6247acbe1e2af751a970df39",
        name: "SFC Midi/Knee Length Festive/Wedding Dress ",
        image_url: "https://n1.sdlcdn.com/imgs/j/v/v/230X258_sharpened/SFC-Midi-Knee-Length-Festive-SDL789300123-1-fce7a.webp",
        strikedoffprice: 999,
        discount: 62,
        price: 379
    },
    {
        _id: "6247ac561e2af751a970df35",
        name: "Boys Festive & Party Kurta and Churidar Set",
        image_url: "https://n2.sdlcdn.com/imgs/j/v/s/230X258_sharpened/Boys-Festive-Party-Kurta-and-SDL692734276-1-1fd1e.jpeg",
        strikedoffprice: 999,
        discount: 70,
        price: 299
    },
    {
        _id: "6247ac911e2af751a970df37",
        name: "Naughty Ninos Girls Blue Embroidered Denim Flaired",
        image_url: "https://n1.sdlcdn.com/imgs/j/k/l/230X258_sharpened/Naughty-Ninos-Girls-Blue-Embroidered-SDL678985231-1-65635.webp",
        strikedoffprice: 1999,
        discount: 66,
        price: 675
    },
    {
        _id: "6247acbe1e2af751a970df39",
        name: "SBN Girls Maxi/Full Length Festive/Wedding Dress",
        image_url: "https://n2.sdlcdn.com/imgs/k/e/e/230X258_sharpened/SBN-Girls-Maxi-Full-Length-SDL538465320-1-c1d8b.jpeg",
        strikedoffprice: 999,
        discount: 71,
        price: 289
    },
    {
        _id: "6247ac561e2af751a970df35",
        name: "NARPAVI TRENDS BOYS AND GIRLS HOODED TEE WITH ",
        image_url: "https://n1.sdlcdn.com/imgs/j/x/9/230X258_sharpened/NARPAVI-TRENDS-BOYS-AND-GIRLS-SDL551890300-1-615fc.webp",
        strikedoffprice: 899,
        discount: 53,
        price: 419
    },
    {
        _id: "6247ac911e2af751a970df37",
        name: "Hopscotch Girls Cotton Floral Printed Dress in 8-10",
        image_url: "https://n1.sdlcdn.com/imgs/k/d/2/230X258_sharpened/Hopscotch-Girls-Cotton-Floral-Printed-SDL852990218-1-ad620.webp",
        strikedoffprice: 499,
        discount: 46,
        price: 269
    },
    {
        _id: "6247acbe1e2af751a970df39",
        name: "Me N My CLOSET 100% Cotton Latest Fashion Top",
        image_url: "https://n4.sdlcdn.com/imgs/j/r/3/230X258_sharpened/Me-N-My-CLOSET-100-SDL102810149-1-bfb54.jpeg",
        strikedoffprice: 799,
        discount: 61,
        price: 3309
    },
    {
        _id: "6247ac561e2af751a970df35",
        name: "Sathiyas Comfortable Multicolour Cotton Cute ",
        image_url: "https://n4.sdlcdn.com/imgs/b/2/n/230X258_sharpened/Sathya-Multicolour-Cotton-Frocks-Pack-SDL394980900-1-cfe92.webp",
        strikedoffprice: 759,
        discount: 48,
        price: 389
    },
    {
        _id: "6247ac911e2af751a970df37",
        name: "J D Creation Boys Designer Dhoti kurta and pyjama Set",
        image_url: "https://n1.sdlcdn.com/imgs/f/p/7/230X258_sharpened/J-D-Creation-Boys-Designer-SDL548438931-1-f6fd4.webp",
        strikedoffprice: 1100,
        discount: 60,
        price: 439
    },
    {
        _id: "6247acbe1e2af751a970df39",
        name: "The Best Son Kids T-Shirt",
        image_url: "https://n4.sdlcdn.com/imgs/j/7/u/230X258_sharpened/The-Best-Son-Kids-T-SDL402853828-1-77a28.jpeg",
        strikedoffprice: 499,
        discount: 48,
        price: 269
    },
    
    
    
    
]

  
     
  
   //localStorage.setItem("footware",JSON.stringify(mensdata));
  
    var container_1 = document.getElementById("product");
   display_data(mensdata);
   
  
  
    
    let cart = localStorage.getItem("cart");
    if (!cart) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart = JSON.parse(cart); // get the data | data format [{id:1, title:1, ..},{},{}]
   
    }
  
  
  function display_data(mensdata){
    
     mensdata.map(function(elem){
  
      var div_pro = document.createElement("div");
  div_pro.style.backgroundColor="white";
  div_pro.style.height = "360px";
  div_pro.style.borderRadius = "10px";
  //div_pro.style.border = '2px solid white';
  //div_pro.style.hover = ""
  div_pro.id= "div_product";
  //div_pro.setAttribute("id","div_product");
  //div_product.style
  
  
  
  
  
  var image = document.createElement("img");
  image.setAttribute("id", "img1");
   image.setAttribute('src',elem.image_url);
  
  var title = document.createElement("p");
  title.textContent = elem.name;
  title.style.color = "grey";
  
  
  var strike = document.createElement("p");
  strike.textContent =  "Rs." + elem.strikedoffprice;
  strike.style.textDecoration = "line-through";
  strike.style.color = "grey";
  
  
  var price = document.createElement("h4");
  price.textContent = "Rs."+elem.price;
  price.style.marginTop = "-14%";
  price.style.marginLeft = "30%";
  
  
  var discount_1 = document.createElement("h5");
  discount_1.textContent = elem.discount+"% Off";
  discount_1.style.marginTop = "-17%";
  discount_1.style.marginLeft = "75%";
  discount_1.style.color = "grey";
  let r=Math.random()*6
  var star = document.createElement("p");
  star.textContent = getStar(r) 
    
  star.style.color = "orange"
  star.style.marginTop = "-5%";
  
  div_pro.append(image,title,strike,price,discount_1,star);
  container_1.append(div_pro);
  div_pro.onclick = function (event) {
    console.log("yesssssss")
   addToCartpage(elem);
   window.location.href='product1.html'
  };
     });
    }
  
    function addToCartpage(prod) {
      let cart = JSON.parse(localStorage.getItem("cart")); 
      cart.push(prod);
      localStorage.setItem("onlyone", JSON.stringify(cart)); 
    }
  
  
  
  
    function pricesort(){
      document.getElementById("product").innerHTML = "";
      var selected = document.getElementById("sort").value;
      //console.log(selected);
    
      if(selected == "Price High To Low"){
    mensdata.sort(function(a,b){
      return b.price-a.price;
    });
      }
      if(selected == "Price Low To High"){
    mensdata.sort(function(a,b){
      return a.price-b.price;
    });
      }
      if(selected == discount){
   mensdata.sort(function(a,b){
  return b.discount - a.discount;
  });
      }
      console.log(mensdata);
    display_data(mensdata);
    }
  
  
  
   // let name = document.getElementById("search_category").value;
  
  
  
   
  
  
  //  document.getElementById("product").addEventListener("click",function(){
  //   localStorage.setItem("oneitem",JSON.stringify(mensdata));
  //   window.location.href='product1.html'
  // });
  function getStar(r) {
    switch (Math.floor(r)) {
        case 0:
            return "☆☆☆☆☆";
        case 1:
            return "★☆☆☆☆";
        case 2:
            return "★★☆☆☆";
        case 3:
            return "★★★☆☆";
        case 4:
            return "★★★★☆";
        case 5:
            return "★★★★★";
    }
  }
