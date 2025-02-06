const wrapper = document.querySelector(".sliderWrapper")
const menuItems= document.querySelectorAll(".menuItem")

const product=[
{id:1,
title:"AIR FORCE",
price:119,
description:`Debuting in 1982 as a basketball must-have, the Air Force 1 came into its own in the '90s. The clean look of the classic white-on-white AF-1 was endorsed from the basketball courts to the street and beyond. Finding its rhythm in hip-hop culture, releasing limited collabs and colourways, Air Force 1 became an iconic sneaker around the globe. And with over 2,000 iterations of this staple, its impact on fashion, music and sneaker culture can't be denied.`,
color:[
    {
        code:"black",
        img:"./img/air.png",
    },
    {
        code:"darkblue",
        img:"./img/air2.png",
    }
]
},
{
    id : 2 ,
    title:"AIR JORDEN",
    price:199,
    description: `Luxe embroidery and a subdued palette bring a vibe of understated cool to the AJ1 Mid. The special-edition Swoosh adds a hint of shine to kicks that look good (and feel good) no matter where you wear them.`,
    color:[{
        code:"lightgray",
        img: './img/jordan.png',
    },
    {
        code:"green",
        img:"./img/jordan2.png"
    }
      
    ]
},
{
    id : 3 ,
    title:"Blazer",
    price:149,
    description:`Praised by the streets for its simplicity and comfort, the Blazer returns with its classic hoops style. The two-tone accents on the Swoosh logos and outsole give it a new twist, while durable leather and suede accents make this a wardrobe staple.`,
    color:[{
        code:"white",
        img: './img/blazer.png',
    },
    {
        code:"green",
        img:"./img/blazer2.png"
    }
      
    ]
},
{
    id : 4,
    title:"Crater",
    price:139,
    description:`Consider for a moment that pause when you see something new. Something exciting. That's the Nike Air Max Terrascape 90. A flashy new outsole with translucent rubber is combined with a Crater Foam midsole to bring you the spa treatment. Go ahead, introduce yourself.`,
    color:[{
        code:"black",
        img: './img/crater.png',
    },
    {
        code:"green",
        img:"./img/crater2.png"
    }
      
    ]
},
{
    id : 5 ,
    title:"Hippie",
    price:179,
    description:`In sneaker history, few styles last. Only 1 transcends every era—the Nike Air Force 1 '07 LX. Celebrate perfection with the b-ball original that delivers what you know best: woven fabric, bold details and some extra flash to keep you shining.`,
    color:[{
        code:"gray",
        img: './img/hippie.png',
    },
    {
        code:"black",
        img:"./img/hippie2.png"
    }
      
    ]
}
]

let chosenProduct= product[0]
const productDescription =document.querySelector('.productDescription')
const currentProductImg=document.querySelector(".productImg")
const currentProductTitle=document.querySelector(".productTitle")
const currentProductPrice=document.querySelector(".productPrice")
const currentProductColors=document.querySelectorAll(".color")
const currentProductSizes=document.querySelectorAll(".size")


menuItems.forEach((item,index)=>{ // item is each name of shoes and index is their place
    item.addEventListener('click', ()=>{

        //change the current slide
        wrapper.style.transform=`translateX(${-100*index}vw)`

        //change the choosen product
        chosenProduct= product[index]

        //change text of current product
        currentProductTitle.textContent=chosenProduct.title
        currentProductPrice.textContent='$'+chosenProduct.price
        currentProductImg.src=chosenProduct.color[0].img
        // assign new color
        currentProductColors.forEach((color,index)=>{
         color.style.backgroundColor=chosenProduct.color[index].code
        })
        // this is to add product description
        productDescription.innerHTML= chosenProduct.description

    })})



    currentProductColors.forEach((colors,index)=>{
        colors.addEventListener('click',()=>{
            currentProductImg.src=chosenProduct.color[index].img
        })
    })

    currentProductSizes.forEach((size,index)=>{
        size.addEventListener('click',()=>{
      currentProductSizes.forEach((size)=>{
           size.style.backgroundColor='white'
           size.style.color="black"
      })

        size.style.backgroundColor='black'
        size.style.color='white'
        })
    })
const productButton= document.querySelector(".productButton")
const payment= document.querySelector(".payment")
const close= document.querySelector(".close")
productButton.addEventListener('click',()=>{
    payment.style.display="flex"
})

close.addEventListener('click',()=>{
    payment.style.display='none'
})