const mongoose = require('mongoose');
const Product  = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
    console.log("Mongo connection open")
    })
    .catch(err => {
    console.log("Mongo error", err)
    })
    
    // const p = new Product({
    //     name: 'Ruby Grapefruit',
    //     price: 1.99,
    //     category: 'fruit'
    // })
    // p.save()
    //     .then(p => {
    //     console.log(p)
    //      })
    //     .catch(e => {
    //     console.log(e)
    //     })

    const seedProduct = [
        {
            name: 'Fairy Eggplant',
            price: 2.50,
            category: 'vegetables'
        },
        {
            name: 'Watermelon',
            price: 3.99,
            category: 'fruit'
        },
        {
            name: 'Zucchini',
            price: 1.75,
            category:'vegetables'
        },
        {
           name: 'Chocolate milk',
            price: 4.99,
            category: 'dairy' 
        },
        {
            name: 'Pineapple',
            price: 2.25,
            category: 'fruit'
        },
    ]

    Product.insertMany(seedProduct)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        
        