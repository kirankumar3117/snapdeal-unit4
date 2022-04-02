import navbar from "/components/navBar.js"
import footerFin from "/components/footerNav.js";
import {signUpForm, login1} from "/components/signUp.js"


    let head = document.querySelector("#header1");
    head.innerHTML = navbar();

    let foot = document.querySelector("#expftr");
    foot.innerHTML = footerFin();

    let sign = document.querySelector("#drop1");
    sign.innerHTML = signUpForm();

    let loginda = document.querySelector("#drop3");
    loginda.innerHTML = login1();

    let cart = document.querySelector("#cartDiv");
    cart.addEventListener("click", () => {
        window.location.href = "cart1.html";
    });

    let arr = ["https://i.pinimg.com/originals/61/47/12/614712f5f6f0ea8e80c77e9ed9bc2359.jpg", "https://www.incimages.com/uploaded_files/image/1920x1080/getty_159281926_117506.jpg", "https://i.ytimg.com/vi/mkqeUk6ylkc/maxresdefault.jpg", "https://www.adgully.com/img/800/202104/snapdeal-campaign-2.jpeg", "https://dog55574plkkx.cloudfront.net/images/snapdeal-offers-today.jpg", "https://img4.goodfon.com/wallpaper/nbig/9/20/model-girl-blonde-long-hair-straight-hair-hair-in-the-wind-1.jpg"]
    let i = 0;
    changeimage();

    function changeimage() {
            let x = setInterval(() => {
                var slide = document.querySelector("#slideimg");
                slide.setAttribute("src", arr[i]);
                i++;
                if(i >= arr.length) {
                    i = 0;
                }
            }, 3000);
    }

    let dom1 = document.querySelector("#snapdeal");
    dom1.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[3]);
    });

    let dom2 = document.querySelector("#health");
    dom2.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[0]);
    });

    let dom3 = document.querySelector("#style");
    dom3.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[1]);
    });

    let dom4 = document.querySelector("#girl");
    dom4.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[5]);
    });

    let dom5 = document.querySelector("#india");
    dom5.addEventListener("click", () => {
        var slide = document.querySelector("#slideimg");
        slide.setAttribute("src", arr[3]);
    });
    var count = 1;
    var item = document.getElementById("hovDiv");
    item.addEventListener("click", () => {
        var dd = document.getElementById("dropdown");
        let t = document.getElementById("hovDiv");
        if(count%2 != 0) {
            t.style.backgroundColor = "#333333";
            dd.style.display = "block";
        } else {
            t.style.backgroundColor = "#F5004B";
            dd.style.display = "none";
        }
        count++;        
    });

    var count2 = 1;
    var item = document.getElementById("changebut");
    item.addEventListener("click", () => {
        var xy = document.querySelector("#domchange");
        if(count2 % 2 != 0) {
            let pinCode = document.querySelector("#domchange>input").value;
            console.log(pinCode);
            xy.innerHTML = "";
            let p = document.createElement("h3");
            if(pinCode > 100000 && pinCode < 999999) {
                p.innerHTML = "Availlable"
                xy.append(p);
            } else {
                p.innerHTML = "UnAvaillable"
                xy.append(p);
            }   
            document.querySelector("#changebut").innerHTML = "Check Again";
        } else {
            xy.innerHTML = "";
            let inp = document.createElement("input");
            inp.placeholder = "Enter pincode";
            xy.append(inp);
            document.querySelector("#changebut").innerHTML = "Submit";
        } 
        count2++;
    });

    var data = [
        {
            image_url: "https://n2.sdlcdn.com/imgs/i/1/y/large/Leathers-of-India-Leather-Brown-SDL485534844-1-439ef.jpeg",
            name: "Leathers of india Leather Brown",
            name2: "Formal Regular Wallet",
            strikedoffprice: 699,
            price:175
        },
        {
            image_url: "https://n1.sdlcdn.com/imgs/i/n/r/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg",
            name: "bhawna collection Loard Shiv",
            name2: "Rudraksha Mala Gold-plated Brass",
            strikedoffprice: 499,
            price:135
        },
        {
            image_url: "https://n4.sdlcdn.com/imgs/i/w/4/large/Kkrish-PU-Brown-Formal-Regular-SDL300527716-1-4510c.jpeg",
            name: "Leathers of india Leather Brown",
            name2: "Formal Regular Wallet",
            strikedoffprice: 399,
            price:235
        },
        {
            image_url: "https://n3.sdlcdn.com/imgs/j/f/c/large/SM-2-in-1-Rechargeable-SDL951195659-1-126be.jpg",
            name: "Flash Light",
            name2: "Regular Light Source",
            strikedoffprice: 499,
            price: 135
        },
        {
            image_url: "https://n3.sdlcdn.com/imgs/k/b/a/large/Callmate-H37-USB-BULB-10000-SDL793819316-1-b90b9.jpg",
            name: "H37 With USB Bulb 10000 -mAh",
            name2: "Li-ion Power Bank Pink",
            strikedoffprice: 499,
            price: 135
       }
    ];

    var data1 = [
        {
            image_url: "https://n1.sdlcdn.com/imgs/j/q/x/large/Handloom-Black-Blue-Green-Orange-SDL286330994-1-fb67b.jpg",
            name: "Light Green Saree South",
            name2: "Tradtional FOrmal Saree",
            strikedoffprice: 599,
            price: 4999
        },
        {
            image_url: "https://n4.sdlcdn.com/imgs/j/m/s/large/Gazal-Fashions-Yellow-Net-Saree-SDL486117459-1-f26e4.jpg",
            name: "Light Yellow Saree South",
            name2: "Tradtional FOrmal Saree",
            strikedoffprice: 499,
            price: 3999
        },
        {
            image_url: "https://n3.sdlcdn.com/imgs/j/v/m/large/Redux-MW-404-Golden-Dial-SDL013895527-1-2ed4a.jpg",
            name: "Gold Timer Watch",
            name2: "Formal Bussiness Type",
            strikedoffprice: 899,
            price: 6000
        },
        {
            image_url: "https://n3.sdlcdn.com/imgs/j/t/d/large/Handloom-Purple-Cotton-Silk-Saree-SDL672613945-1-b9fea.jpg",
            name: "Light Red Saree South",
            name2: "Tradtional FOrmal Saree",
            strikedoffprice: 499,
            price: 3999
        },
        {
            image_url: "https://n1.sdlcdn.com/imgs/j/y/g/large/Sana-Carpet-Brown-Silk-Carpet-SDL697306324-1-883d1.png",
            name: "Brown Mat Spread Wide",
            name2: "Fa-Fa Mat Spread",
            strikedoffprice: 499,
            price:  135
       },
        {
            image_url: "https://n4.sdlcdn.com/imgs/j/n/q/large/LUXIQE-PU-Blue-Formal-Regular-SDL237576481-1-d313c.jpeg",
            name: "Blue Leather Wallet",
            name2: "Quick Soft Leather Wallet",
            strikedoffprice: 699,
            price: 435
        },
    ];

    
    function addToCartpage(prod) {
        let cart = JSON.parse(localStorage.getItem("cart")); 
        cart.push(prod);
        localStorage.setItem("onlyone", JSON.stringify(cart)); 
      }
    




    addproduct(data);

    addproduct2(data1);
    function addproduct2(data) {

        data.map((ele) => {
            let pod = document.createElement("div");
            //pod.setAttribute("id", "innerpro");
            // pod.addEventListener("click", () => {
            //     let name = document.querySelector("#user").innerHTML;
            //     // if (name == "Profile&nbsp;") {
            //     //     alert("Please Login"); 
            //     // } else {
            //          window.location.href = "Home.html";
            //     // }
            // });

            let box1 = document.createElement("div");
            box1.setAttribute("id", "proimg");

            let img1 = document.createElement("img");
            img1.setAttribute("src", ele.image_url);

            box1.append(img1);

            let box2 = document.createElement("div");
            box2.setAttribute("id", "protext");

            let box21 = document.createElement("div");
            box21.setAttribute("id", "tex");

            let p1 = document.createElement("p");
            p1.innerHTML = ele.name;

            let p2 = document.createElement("p");
            p2.innerHTML = ele.name2;

            box21.append(p1, p2);

            let sp1 = document.createElement("span");
            sp1.setAttribute("id", "strike");
            sp1.style.color = "grey"
            sp1.innerHTML =`Rs.${ele.strikedoffprice}`;

            let sp2 = document.createElement("span");
            sp2.setAttribute("id", "rupees");
            sp2.innerHTML = `Rs.${ele.price}`;
            
            box2.append(box21, sp1, sp2);

            pod.append(box1, box2);
            pod.onclick = function (event) {
                console.log("yesssssss")
               addToCartpage(ele);
              window.location.href='product1.html'
              };

            document.querySelector("#flexProd2").append(pod);
        });
    }
   
    // function addToCartpage(prod) {
    //     let cart = JSON.parse(localStorage.getItem("cart")); 
    //     cart.push(prod);
    //     localStorage.setItem("onlyone", JSON.stringify(cart)); 
    //   }
    

    function addproduct(data) {

        data.map((ele) => {
            let pod = document.createElement("div");
            // pod.setAttribute("id", "innerpro");
            // pod.addEventListener("click", () => {
            //     let name = document.querySelector("#user").innerHTML;
            //     // if (name == "Profile&nbsp;") {
            //     //     alert("Please Login"); 
            //     // } else {
            //    //     window.location.href = "Home.html";
            //     // }
            // });

            let box1 = document.createElement("div");
            box1.setAttribute("id", "proimg");

            let img1 = document.createElement("img");
            img1.setAttribute("src", ele.image_url);

            box1.append(img1);

            let box2 = document.createElement("div");
            box2.setAttribute("id", "protext");

            let box21 = document.createElement("div");
            box21.setAttribute("id", "tex");

            let p1 = document.createElement("p");
            p1.innerHTML = ele.name;

            let p2 = document.createElement("p");
            p2.innerHTML = ele.name2;

            box21.append(p1, p2);

            let sp1 = document.createElement("span");
            sp1.setAttribute("id", "strike");
            sp1.style.color = "grey"
            sp1.innerHTML = `Rs.${ele.strikedoffprice}`;

            let sp2 = document.createElement("span");
            sp2.setAttribute("id", "rupees");
            sp2.innerHTML = `Rs.${ele.price}`;
            
            box2.append(box21, sp1, sp2);

            pod.append(box1, box2);
            pod.onclick = function (event) {
                console.log("yesssssss")
               addToCartpage(ele);
        //        function addToCartpage(ele) {
        //         let cart = JSON.parse(localStorage.getItem("cart")); 
        //    cart.push(ele);
        //    localStorage.setItem("onlyone", JSON.stringify(cart)); 
        //      }
              window.location.href='product1.html'
            //  window.location.href = "Home.html";
              };

            document.querySelector("#flexProd").append(pod);
        });
    }




    