const mongoose = require('mongoose');
const Product =  require('../models/Product')

/////////database connectin////////

main().then((res)=>{
    console.log("DataBase connected");
})
.catch((err)=>{{
    console.log(err);
}});


async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/geeProducts");
console.log("db connected");
}

const products = [
  {
    name: 'Smart TV 32 Inch',
    image: 'https://m.media-amazon.com/images/I/71xQtZAXBWL._SX679_.jpg',
    description: '4K QLED Display, Dolby Vision & Audio, PatchWall, DTS:X, 30W Speaker, 32GB Storage, Google TV.',
    features: ['4K QLED', 'Dolby Vision', 'Dolby Audio', 'PatchWall', 'DTS:X', '30W Speaker', '32GB Storage', 'Google TV'],
    price: 12000
  },
  {
    name: 'Air Conditioner',
    image: 'https://cdn.moglix.com/p/QTQ5QlB9gEmf3-xxlarge.jpg',
    description: 'Efficient and quiet cooling with smart climate control.',
    features: ['Dual Inverter', 'Turbo Cooling', 'Smart Mode', 'Silent Operation'],
    price: 35000
  },
  {
    name: 'Washing Machine',
    image: 'https://m.media-amazon.com/images/I/71a8akl5+LL._SY879_.jpg',
    description: 'Effortless washing with AI-powered smart features.',
    features: ['Smart Wash', '6 Motion DD', 'Auto Tub Clean', '10kg Capacity'],
    price: 16000
  },
  {
    name: 'Personal Air Cooler',
    image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/air-cooler/n/f/k/125-125-pcf-dlx-24-bajaj-original-imagxcghq6ykgvqh.jpeg?q=70&crop=false',
    description: 'Keep food fresh with advanced inverter technology.',
    features: ['Inverter Moter', 'Multi Airflow', 'Smart Diagnosis', 'Energy Saving'],
    price: 12000
  }
];

// Function to insert sample data into the database
async function insertSampleData() {
    try {
        // Insert each review document into the database
        await Product.insertMany(products);
        console.log("Sample data inserted successfully.");
    } catch (err) {
        console.error("Error inserting sample data:", err);
    }
    process.exit();
}

// Call the function to insert sample data
insertSampleData();


