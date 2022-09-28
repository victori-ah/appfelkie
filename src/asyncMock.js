const products = [
    {
        id: '1', 
        name: "Angel Delight Day Dress",  
        img: "images/AngelDelightDay.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'    
    },
    {
        id: '2', 
        name: "Ballerina Moonlight Dress",  
        img: "images/BallerinaMoonlight.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '3', 
        name: "Blush Angel Mini Bustle Dress",  
        img: "images/BlushAngelMiniBustle.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '4', 
        name: "Ivory beach day Dress",  
        img: "images/IvoryBeachDay.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '5', 
        name: "Ivory puff Dress",  
        img: "images/IvoryPuff.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '6', 
        name: "My so called life Dress",  
        img: "images/MySoCalledLife.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '7', 
        name: "My so called life nightie Dress",  
        img: "images/MySoCalledLifeNightie.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '8', 
        name: "Parfait poet Marie Dress",  
        foto: "images/ParfaitPoetMarie.webp", 
        precio: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '9', 
        name: "Rainbow puff Dress",  
        foto: "images/RainbowPuff.webp", 
        precio: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    },
    {
        id: '10', 
        name: "South of France Dress",  
        img: "images/SouthOfFrance.webp", 
        price: 300,
        stock: 15,
        description: 'Dress, blah-blah'
    }
]

// Esta forma de export se llama export nombrado =/= export default
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}