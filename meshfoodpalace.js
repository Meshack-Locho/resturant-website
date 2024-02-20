let menuMusic = document.createElement("audio")
menuMusic.src = "music/latin music.mp3"
menuMusic.setAttribute("loop", "loop")
menuMusic.volume = 0.3
let menuMusicToggle = document.querySelector(".music-toggle")
let musicIcon = document.querySelector(".fa-music")
let menuMusicToggleText = document.querySelectorAll(".music-toggle-text")
let menuMusicCheckbox = document.getElementById("menu-checkbox")
menuMusicCheckbox.checked = false

menuMusicToggle.addEventListener("click", ()=>{
    if (menuMusicCheckbox.checked) {
        menuMusic.play()
        musicIcon.style.textDecoration = "none"
        for (let i = 0; i < menuMusicToggleText.length; i++) {
            menuMusicToggleText[i].textContent = "On"
        }
    }else{
        menuMusic.load()
        musicIcon.style.textDecoration = "line-through"
        for (let i = 0; i < menuMusicToggleText.length; i++) {
            menuMusicToggleText[i].textContent = "Off"
        }
    }
})

let navigationEl = document.querySelector(".navigation")
let backToTopIcon = document.querySelector(".back-to-top-icon")
let menuToggle = document.querySelector(".menu-toggle")
let mobileMenu = document.querySelector(".mobile-menu")
let closeMenu = document.querySelector(".fa-circle-xmark")

menuToggle.addEventListener("click", ()=>{
    console.log("clicked")
    mobileMenu.classList.remove("inactive")
})
closeMenu.addEventListener("click", ()=>{
    mobileMenu.classList.add("inactive")
})
window.addEventListener("scroll", ()=>{
    if (window.scrollY >= 900) {
        navigationEl.style.backgroundColor = "black"
        navigationEl.style.color = "goldenrod"
        backToTopIcon.classList.remove("inactive")
    }else{
        navigationEl.style.backgroundColor = "transparent"
        navigationEl.style.color = "white"
        backToTopIcon.classList.add("inactive")
    }
})

//loader

let loadingScene = document.querySelector(".loader")
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
      loadingScene.classList.add("inactive")
  } else {
      loadingScene.classList.remove("inactive")
  }
};


//foods
let foodsSection = document.querySelector(".foods-section")
let allFoods = [
    {
        id: 1,
        name: "Lasagna (Single Option)",
        price: 800,
        image: "meshfoodpalace images/foods/lasagna.jpg",
        deliveryFee: 50,
        description: "Our lasagna is a delicious and hearty dish that features layers of tender pasta, rich tomato sauce, creamy béchamel sauce, and a generous filling of ground beef, Italian sausage, and a blend of melted cheeses. Each bite is bursting with flavor and texture, making it the perfect comfort food for any occasion. Plus, it's served hot and fresh from the oven, so you can enjoy it at its best. Come and give it a try at our restaurant today!",
        alternative: "picture of lasagna",
        unit: "person's",
    },
    {
        id: 2,
        name: "Chocolate cake",
        price: 740,
        image: "meshfoodpalace images/foods/chocolate cake.jpg",
        deliveryFee: 50,
        description: "Get to satisfy your craving for chocolate cake with us. Each slice is made with only the finest ingredients, including rich cocoa powder and creamy, indulgent frosting. Our cake is so moist and delicious, you'll be craving it long after you've finished your meal.Our cozy and inviting atmosphere is perfect for a date night or a catch up with friends so come on in and get your share of our chocolate cake",
        alternative: "chocolate cake picture",
        unit: "Kgs",
    },
    {
        id: 3,
        name: "Biryani",
        price: 1000,
        image: "meshfoodpalace images/foods/biryani.jpg",
        deliveryFee: 50,
        description: "Our lasagna is a delicious and hearty dish that features layers of tender pasta, rich tomato sauce, creamy béchamel sauce, and a generous filling of ground beef, Italian sausage, and a blend of melted cheeses. Each bite is bursting with flavor and texture, making it the perfect comfort food for any occasion. Plus, it's served hot and fresh from the oven, so you can enjoy it at its best. Come and give it a try at our restaurant today!",
        alternative: "Picture of biryani dish",
        unit: "plates",
    },
    {
        id: 4,
        name: "Chips",
        price: 100,
        image: "meshfoodpalace images/foods/chips.jpg",
        deliveryFee: 30,
        description: "Surprise your tasting buds with chips from MESH_FOODPALACE today. Our chips are made fresh daily using only the highest quality potatoes and ingredients. You can choose from a variety of different flavors and seasonings, including classic salted, spicy jalapeño, tangy vinegar, and more. And if you're feeling extra hungry, you can even order a loaded plate of chips with all your favorite toppings, such as cheese, bacon, and sour cream.Welcome",
        alternative: "picture of chips",
        unit: "packs",
    },
    {
        id: 5,
        name: "Chicken fried rice",
        price: 700,
        image: "meshfoodpalace images/foods/chicken fried rice.jpg",
        deliveryFee: 50,
        description: "One of our most popular dishes is our delicious chicken fried rice. Our chefs use only the freshest ingredients to create this savory and satisfying dish. With a special blend of savory sauces and spices we makesure it gives that irresistible flavor that keeps our customers coming back for more. Get your taste buds ready, for they will only leave you asking for more.",
        alternative: "chicken fried rice image",
        unit: "plates",
    },
    {
        id: 6,
        name: "Chicken cheese Burger",
        price: 600,
        image: "meshfoodpalace images/foods/burger.jpg",
        deliveryFee: 50,
        description: "If you're in the mood for a juicy and flavorful burger, you won't want to miss our chicken cheese burger. Our chicken cheese burger is a juicy chicken breast, grilled and topped with melted cheese, fresh lettuce, and tomato. Our brioche bun is toasted and spread with a special sauce. We also offer fresh salads, hearty sandwiches, and more. Come on in and try our delicious chicken cheese burger - you won't be disappointed!",
        alternative: "burger image",
        unit: "pieces",
    },
    {
        id: 7,
        name: "House Coffee",
        price: 200,
        image: "meshfoodpalace images/foods/coffee.jpg",
        deliveryFee: 50,
        description: "We're proud to serve our signature home coffee, made with the finest quality beans and brewed to perfection. Our home coffee is the perfect blend of rich and smooth flavors, with just the right amount of boldness to give you that extra kick. Whether you prefer it black or with a splash of cream, our home coffee is the perfect way to start your day or to enjoy with a sweet treat.",
        alternative: "coffee image",
        unit: "cups",
    },
    {
        id: 8,
        name: "Fried fish",
        price: 700,
        image: "meshfoodpalace images/foods/fried fish.jpg",
        deliveryFee: 50,
        description: "Our fried fish is a customer favorite and is sure to leave your taste buds satisfied. We use only the freshest and highest quality fish, lightly breaded and fried to crispy perfection. We offer a range of fish options, including cod, haddock, and tilapia, all served with a side of crispy fries and tartar sauce. Our generous portions are perfect for sharing or for satisfying a hearty appetite.",
        alternative: "Picture of fried fish",
        unit: "plates",
    },
    {
        id: 9,
        name: "Chocolate chip cookies",
        price: 350,
        image: "meshfoodpalace images/foods/chocolate chip cookies.jpg",
        deliveryFee: 50,
        description: "One of our most popular treats is our freshly baked chocolate chip cookies. Made with the finest ingredients, these cookies are warm, chewy, and oh-so-delicious. Our freshly baked chocolate chip cookies are warm, chewy, and delicious, made with high-quality chocolate chips, butter, and sugar. They're perfect as a dessert, snack, or gift. We also offer a variety of other desserts, including cakes and pastries. Come on in and indulge in our treats!",
        alternative: "chocolate chip cookies image",
        unit: "Kgs",
    },
    {
        id: 10,
        name: "Pizza(medium)",
        price: 540,
        image: "meshfoodpalace images/foods/pizza.jpg",
        deliveryFee: 50,
        description: "We're known for our delicious pizza, made with only the freshest and highest quality ingredients. Our pizza is made with fresh ingredients, crispy crust, homemade tomato sauce, and mozzarella cheese. Choose from a variety of toppings like pepperoni, sausage, mushrooms, and peppers. We also offer salads, pasta, and desserts. Come on in and enjoy our delicious pizza!",
        alternative: "pizza image",
        unit: "size",
    },
    {
        id: 11,
        name: "Lobster",
        price: 600,
        image: "meshfoodpalace images/foods/lobster.jpg",
        deliveryFee: 50,
        description: "One of our most sought-after dishes is our succulent and flavorful lobster. We source only the freshest and highest quality lobster, perfectly cooked and served with butter and lemon. It's a mouthwatering delicacy that's sure to impress even the most discerning seafood lovers.",
        alternative: "lobster dinner image",
        unit: "plates",
    },
    {
        id: 12,
        name: "Papaya salad(Thai cuisine)",
        price: 500,
        image: "meshfoodpalace images/foods/papaya salad(Thai foods).jpg",
        deliveryFee: 50,
        description: "Indulge in the refreshing papaya salad at MESH_FOODPALACE, which is a perfect combination of shredded green papaya, crunchy peanuts, tangy lime juice, and spicy chili peppers. With a delectable balance of sweet, sour, and savory flavors, every bite is a fulfilling experience. The addition of fresh herbs like cilantro and mint elevates the dish and adds a burst of freshness. If you're a lover of Thai cuisine or looking for a healthy meal option, this salad is a must-try. Don't miss out on the opportunity to savor this delectable dish at this restaurant.",
        alternative: "papaya salad image",
        unit: "plates",
    },
    {
        id: 13,
        name: "Glenfiddich wine",
        price: 900,
        image: "meshfoodpalace images/foods/glenfiddich wine.jpg",
        deliveryFee: 50,
        description: "Indulge in the full-bodied Glenfiddich wine at MESH_FOODPALACE, aged to perfection with a subtle hint of oak and sherry. The complex flavor features honey, vanilla, and spicy cinnamon, with a long and smooth finish. Perfect for a hearty meal or a relaxing drink. Don't miss out on this exceptional Scotch whisky.",
        alternative: "glenfiddich wine image",
        unit: "bottles",
    },
    {
        id: 14,
        name: "Sauvignon blanc wine",
        price: 950,
        image: "meshfoodpalace images/foods/sauvignon blanc wine.jpg",
        deliveryFee: 50,
        description: "The wine at this restaurant is a perfect pairing for any occasion. With a robust body and complex flavor, it offers a delightful experience for any wine lover. Sauvignon blanc is one of the best you will find. Get you bottle today and déguster du vin français",
        alternative: "Sauvignon blanc wine",
        unit: "bottles",
    },
    {
        id: 15,
        name: "Jacob's creek wine",
        price: 850,
        image: "meshfoodpalace images/foods/jacob's creek wine.jpg",
        deliveryFee: 50,
        description: "The Jacob's Creek wine at this restaurant is a premium quality Australian wine that offers a rich and vibrant taste. With a perfect balance of fruity and floral notes, it leaves a refreshing aftertaste. The wine selection features a variety of options, including Shiraz, Chardonnay, and Cabernet Sauvignon, catering to all palates. Don't miss out on the opportunity to savor the exquisite taste of Jacob's Creek wine at MESH_FOODPALACE.",
        alternative: "jacob's creek wine image",
        unit: "bottles",
    },
]

let foodsList = [...new Set(allFoods.map((items)=>{
    return items
}))]

let addOrder = 0

foodsSection.innerHTML = foodsList.map((item)=>{
    let {name, image, price, deliveryFee, description, alternative} = item

    return(
        `<div class="foods">
           <h1>${name}</h1>
           <img src="${image}" alt="${alternative}">
           <h3>Price: KSH ${price}</h3>
           <h4>Delivery Fee (If you want it delivered): KSH ${deliveryFee}</h4>
           <p>${description}</p>` +
           "<button class='order-btn' onclick=addFoodOrder("+(addOrder++)+")>ORDER NOW</button>" +
            `<a href="">Make a Reservation</a>
        </div>`
    )
}).join('')


let orderPopUp = document.querySelector(".food-order-popup")
let orders = []
let total
let n = document.querySelector("#order-numbers")
let orderNumbers = 0
let addedOrders = 0
function showPopUp() {
    orderPopUp.classList.remove("inactive")
    if (orders.length == 0) {
        orderPopUp.innerHTML = "NO ORDER"
    } else {
        
        orderPopUp.innerHTML = orders.map((foods)=>{
            let {name, image, price, deliveryFee, description,alternative, unit} = foods
            return(
                `<div class="food-order-left">
                    <h1>${name}</h1>
                    <h3>Price: KSH ${price}</h3>
                    <h4>Delivery Fee (If you want it delivered): KSH ${deliveryFee}</h4>
                    <p>${description}</p>` + 
                    "<button onclick=showCalc()>Calculator</button>" +
                    `<i class="fa-solid fa-xmark close-order-popup"></i>
                    <form class="order-form" action="https://formsubmit.co/0a0f8aa3e942db6c5c538712825ba65c" method="POST">
                       <label>Number of orders per(${unit})</label>` +
                       "<input type='number' id='order-numbers' name='Orders Number' placeholder='Enter number of orders'>" +
                       `<select name="Mode of payment">
                         <option>Select mode of Payment</option>
                         <option>M-pesa</option>
                         <option>Credit Card</option>
                         <option>Cash</option>
                       </select>
                       <input type="hidden" name="Name of food" value=${name}>                  
                       <input type="hidden" name="Amount" value=${price}>
                       <label>Enter address</label>
                       <input type="text" name="Address">
                       <label>Describe meal(Optional)</label>
                       <textarea placeholder="Describe your meal eg, 2 slices of medium Pizza" cols=40 rows=15 name="Food description"></textarea>                  
                       <input type="submit" name="Orders" value="ORDER NOW">
                    </form> 
                       <p class="order-number-text"></p>
                       <p class="total-order-multple"></p>
                    <p>Order through call: <a href="tel:+254714352684" style="text-decoration: none;color: white;">0714352684</a></p>
                </div>
                <div class="food-order-right">
                   <img src="${image}" alt="${alternative}">
                </div>
                `
            )
        }).join('')  
        
    }
    let orderPopUpCloser = document.querySelector(".close-order-popup")
    orderPopUpCloser.addEventListener("click", (a)=>{
        orderPopUp.classList.add("inactive")
        orders.pop({...foodsList[a]})
    })
        
    }

function addFoodOrder(a) {
    orders.push({...foodsList[a]})
    showPopUp()
}

let calc = document.querySelector(".calculator")
let closeCalc = document.querySelector(".close-calc")

function showCalc() {
    calc.classList.toggle("inactive")
}
closeCalc.addEventListener("click", ()=>{
    calc.classList.add("inactive")
})