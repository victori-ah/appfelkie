const products = [
    {
        id: '1', 
        name: 'The Angel Delight Day Dress',
        alt: 'The Angel Delight Day Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SKCP1122_c2eb8d91-a9ca-433a-abff-c059b3367e4c_460x.jpg?v=1658826959', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/DAYANGSUMMERSISTERSSELKIE2114_27876613-9a86-47b4-8a88-2001e3a04740_460x.jpg?v=1658826960',
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'    
    },
    {
        id: '2', 
        name: 'Ballerina Moonlight Dress',
        alt: 'Ballerina Moonlight Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SKPO1104_BALLERINA_FRONT_0ef9de90-177b-453b-b96a-548e54670f16_460x.jpg?v=1655252596',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/PETITTRIANONSELKIEFW2180_bcad3cf9-0757-450a-8385-6541914aef43_1512x.jpg?v=1655252596', 
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '3', 
        name: 'The Beverly Queen of Angels Dress',
        alt: 'The Beverly Queen of Angels Dress',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/F21_SKPO2000CP23_BEVERLYQOA_460x.jpg?v=1655252600',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SPRING_22_SELKIE_PRE_RELEASE_WEB116_460x.jpg?v=1648429446', 
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '4', 
        name: 'The Ivory beach day Dress',
        alt: 'The Ivory beach day Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEB_SKET1174_IVORYBEACHDAY_460x.jpg?v=1660866839', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/RUNAWAYBRIDRE2022SELKIE52_1512x.jpg?v=1660866839',
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '5', 
        name: 'The Ivory puff Dress',
        alt: 'The Ivory puff Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEB_SKPO1016_IVORYPUFF_FRONT_460x.jpg?v=1661886359',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/RUNAWAYBRIDRE2022SELKIE108_1512x.jpg?v=1661785733', 
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '6', 
        name: 'The South of France Vacation Dress',
        alt: 'The South of France Vacation Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEBSKPC1147_SOFVACATION_460x.jpg?v=1655252927', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/EmptyName11_1512x.jpg?v=1655252927',
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '7', 
        name: 'My so called life nightie Dress',
        alt: 'My so called life nightie Dress',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEBSKMSH1054W87_a2003759-c718-45e7-8954-774a5b642632_460x.jpg?v=1661303941', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/BREAKFASTINBEDSELKIEKIMGBANNERHOMELR188_e82fe656-e215-4981-83d4-8393acb0d480_460x.jpg?v=1661303942',
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '8', 
        name: 'The Parfait poet Marie Dress',
        alt: 'The Parfait poet Marie Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/F21WEB_PARFAITCTNMARIE_17816ea0-200c-4ad0-8157-8d9b97c44245_1512x.jpg?v=1661980452', 
        img2:'https://cdn.shopify.com/s/files/1/2413/8101/products/PETITTRIANONSELKIEFW21210_592ed177-170f-45e6-b1b4-3f32d23655d8_460x.jpg?v=1657804079',
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '9', 
        name: 'The Rainbow puff Dress',
        alt: 'The Rainbow puff Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEB_SKPO1016LW89_RAINBOWPUFF_FRONT_460x.jpg?v=1661361650',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/464A1392_d261fc34-97a5-4d42-8081-82756a52a248_460x.jpg?v=1661361650', 
        price: 300,
        stock: 15,
        category: 'reg',
        description: 'Dress, blah-blah'
    },
    {
        id: '10', 
        name: 'The Ivory Flower Gown',
        alt: 'The Ivory Flower Gown',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/OUTOFTHETOWERSS22SELKIELR212_1512x.jpg?v=1655252688',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/OUTOFTHETOWERSS22SELKIELR212_1512x.jpg?v=1655252688', 
        price: 600,
        stock: 15,
        category: 'new',
        description: 'Dress, blah-blah'
    },
    {
        id: '11', 
        name: 'The Ribbon Dancer in Bloom Gown',
        alt: 'The Ribbon Dancer in Bloom Gown',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SKPO1160P72_RIBBON_IN_BLOOM_460x.jpg?v=1655252866',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/OUTOFTHETOWERSS22SELKIELR170_460x.jpg?v=1655928146', 
        price: 600,
        stock: 15,
        category: 'new',
        description: 'Dress, blah-blah'
    },
    {
        id: '12', 
        name: 'The Renaissance Girl Tea Rose Dress',
        alt: 'The Renaissance Girl Tea Rose Dress',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/J2OIRu9A_460x.jpg?v=1657062871', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/S_6_30_0655_460x.jpg?v=1657062871',
        price: 450,
        stock: 15,
        category: 'new',
        description: 'Dress, blah-blah'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}