const products = [
    {
        id: '1', 
        name: 'The Angel Delight Day Dress',
        alt: 'The Angel Delight Day Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SKCP1122_c2eb8d91-a9ca-433a-abff-c059b3367e4c_460x.jpg?v=1658826959', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/DAYANGSUMMERSISTERSSELKIE2114_27876613-9a86-47b4-8a88-2001e3a04740_460x.jpg?v=1658826960',
        price: 299,
        stock: 15,
        category: 'reg',
        description: 'This thick cotton beauty now available in our signature pink, is a dream for all your daytime affairs. Hugging you in all the right places it creates a natural corset type look, with princess seams running the entire length of the skirt and up into the bust. Super comfortable, crispy fresh cotton makes this easy to wear all day without ever feeling uncomfortable. No pinching, no itching, no pain. The ankle length skirt is perfect for looking easy chic while sitting, spinning, zoom calls, long walks through meadows and more.'    
    },
    {
        id: '2', 
        name: 'Ballerina Moonlight Dress',
        alt: 'Ballerina Moonlight Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SKPO1104_BALLERINA_FRONT_0ef9de90-177b-453b-b96a-548e54670f16_460x.jpg?v=1655252596',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/PETITTRIANONSELKIEFW2180_bcad3cf9-0757-450a-8385-6541914aef43_1512x.jpg?v=1655252596', 
        price: 299,
        stock: 15,
        category: 'reg',
        description: "This modern day rococo Moonlight dress was inspired by desserts, holiday ballets, and late night lawn parties under moonlit tents, where champagne is poured freely, big hair is piled into royal sculptures and faces are painted with pink blush and fake moles. Pass the mini sandwiches and cakes and get ready to skinny dip in fountains."
    },
    {
        id: '3', 
        name: 'The Beverly Queen of Angels Dress',
        alt: 'The Beverly Queen of Angels Dress',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/F21_SKPO2000CP23_BEVERLYQOA_460x.jpg?v=1655252600',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SPRING_22_SELKIE_PRE_RELEASE_WEB116_460x.jpg?v=1648429446', 
        price: 349,
        stock: 15,
        category: 'reg',
        description: "The Queen Of Angels gown, Selkie's very first official bridal/event gown! This dreamy, delicate dress was designed for a real bride, we wanted something flattering, simple and chic, while still incredibly show stopping and voluminous! It flows with incredible grace, reminiscent of a 1940's gown."
    },
    {
        id: '4', 
        name: 'The Ivory beach day Dress',
        alt: 'The Ivory beach day Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEB_SKET1174_IVORYBEACHDAY_460x.jpg?v=1660866839', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/RUNAWAYBRIDRE2022SELKIE52_1512x.jpg?v=1660866839',
        price: 349,
        stock: 15,
        category: 'reg',
        description: "Like a burst of ocean spray off the Pacific, the Ivory Beach Day Dress empire-waist mini dress puffs against the body with its triple-layer pleated skirt and puff sleeves. Delight is in the details here–eyelet embroidery on 100% cotton, and a drawstring tie along a square neckline. This dress is suitable for long walks on the beach with sand as fine as setting powder, and velvety waves tickling your pedicure. Wear it to a seaside bachelorette weekend for a night of dancing, and then wear it again in the morning when you bike into town to buy everyone a gatorade. Should the runaway bride need to escape swiftly on horseback—or ride horses in the surf alongside a beloved—this dress will accommodate. "
    },
    {
        id: '5', 
        name: 'The Ivory puff Dress',
        alt: 'The Ivory puff Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEB_SKPO1016_IVORYPUFF_FRONT_460x.jpg?v=1661886359',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/RUNAWAYBRIDRE2022SELKIE108_1512x.jpg?v=1661785733', 
        price: 289,
        stock: 15,
        category: 'reg',
        description: "The perfect celebration dress, occasion dress, champagne drinking baby wedding dress.. Whatever the event, people will stop you to compliment this little piece of heaven! She's one you will hand down forever. Incredibly flattering with a tight bust and forgiving skirt, the puff sleeves give the body a beautiful shape. "
    },
    {
        id: '6', 
        name: 'The South of France Vacation Dress',
        alt: 'The South of France Vacation Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEBSKPC1147_SOFVACATION_460x.jpg?v=1655252927', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/EmptyName11_1512x.jpg?v=1655252927',
        price: 299,
        stock: 15,
        category: 'reg',
        description: 'Pure amour with polished provincial vibes, the South of France Vacation Dress will have you falling in love with its romantic sweetheart neckline, billowy puff sleeves, and structured tiered skirt. A warm-water breeze from the South of France wafts a perfume of ocean salt, Alpine freshness and just-bloomed wildflowers. Ideally worn while walking through the Gardens of Versailles, sipping champagne from a coupe glass on a leisurely river cruise, or cuddling baby bunnies on fresh-cut grass.'
    },
    {
        id: '7', 
        name: 'My so called life nightie Dress',
        alt: 'My so called life nightie Dress',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEBSKMSH1054W87_a2003759-c718-45e7-8954-774a5b642632_460x.jpg?v=1661303941', 
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/BREAKFASTINBEDSELKIEKIMGBANNERHOMELR188_e82fe656-e215-4981-83d4-8393acb0d480_460x.jpg?v=1661303942',
        price: 289,
        stock: 15,
        category: 'reg',
        description: "The Nightie, made from a stretch 60's inspired nylon featuring one of our most beloved prints. With it's cinched waist and puffy cap sleeve, you'll feel comfortable and adorable as you climb under the sheets this Spring! Pair with our new bedsheets for the ultimate full look."
    },
    {
        id: '8', 
        name: 'The Parfait poet Marie Dress',
        alt: 'The Parfait poet Marie Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/F21WEB_PARFAITCTNMARIE_17816ea0-200c-4ad0-8157-8d9b97c44245_1512x.jpg?v=1661980452', 
        img2:'https://cdn.shopify.com/s/files/1/2413/8101/products/PETITTRIANONSELKIEFW21210_592ed177-170f-45e6-b1b4-3f32d23655d8_460x.jpg?v=1657804079',
        price: 299,
        stock: 15,
        category: 'reg',
        description: "A statement dress for those who really love 90's shabby chic catalogue wear meets the 18th century. Cotton mini with a puffy skirt and bow garnish all over! The skirt is designed after Marie Antoinette's famous curtain style gowns, which open in the front. Great for daytime affairs, heading out to the cinema, or a day at the museum.",
    },
    {
        id: '9', 
        name: 'The Rainbow puff Dress',
        alt: 'The Rainbow puff Dress',
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEB_SKPO1016LW89_RAINBOWPUFF_FRONT_460x.jpg?v=1661361650',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/HEAVENORLASVEGAS_SELKIE_LR172_1512x.jpg?v=1665154808', 
        price: 289,
        stock: 15,
        category: 'reg',
        description: "Why not make some magic, or at least feel some magic during this daunting time. Pretend you are sitting on the roof tops of Paris, drinking champagne cocktails and eating baguettes from the paper, feasting on plates of berries. Maybe when you slip into this opaque rainbow (the print was custom created VERY carefully, perfected to be semi subtle and elegant while still outrageous) If you haven't tried on the puff dress yet, do yourself a favour. Although it's MASSIVE in volume, it's simultaneously the most flattering and special thing."
    },
    {
        id: '10', 
        name: 'The Ivory Flower Gown',
        alt: 'The Ivory Flower Gown',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/WEBSKPO1153_IVORYFLOWER_460x.jpg?v=1655252688',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/OUTOFTHETOWERSS22SELKIELR212_1512x.jpg?v=1655252688', 
        price: 599,
        stock: 15,
        category: 'new',
        description: "A structured square neckline balances frothy floral accents on the Ivory Flower Gown, merging timeless romance with a modern allure. Framed by fanciful ruffled puff sleeves and trimmed at the skirt with matching frills, you’ll bloom in this dreamy dress. Ideal for trips down the aisle, frolics in a field, and living your princess fantasy."
    },
    {
        id: '11', 
        name: 'The Ribbon Dancer in Bloom Gown',
        alt: 'The Ribbon Dancer in Bloom Gown',  
        img: 'https://cdn.shopify.com/s/files/1/2413/8101/products/SKPO1160P72_RIBBON_IN_BLOOM_460x.jpg?v=1655252866',
        img2: 'https://cdn.shopify.com/s/files/1/2413/8101/products/OUTOFTHETOWERSS22SELKIELR170_460x.jpg?v=1655928146', 
        price: 599,
        stock: 15,
        category: 'new',
        description: "An incredible show stopper, the Ribbon Dancer Bloom Bridal Gown is ideal for weddings, photoshoots, or other special events. Frothy layers of voluminous skirt are slit at the side to reveal a hint of leg, while whimsical puff sleeves can be worn on or off shoulder for added romance. This gown offers a dramatic full train which can be bustled in a variety of ways. Plucked from nostalgic corners of our mind, diaphanous ribbons dance with faded florals for a whimsically wistful sentiment. Wear it for a statement-making commitment ceremony, trips down the red carpet, and breezy cliffside photoshoots. "
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
        description: "Dust light dances in a sun-dappled hallway, casting speckled sunshine on the muted blooms of the Renaissance Girl Tea Rose Dress. Whimsical puff sleeves frame the sides while underwire cups provide structure and definition to the lightweight cotton design. Wear it while re-reading a well-worn romance novel, picnicking with friends under a willow tree, or while playing with fluffy Persian kittens."
    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
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

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}