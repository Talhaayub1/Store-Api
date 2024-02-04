
const Product = require('../models/product');

const getAllProductStatic = async (req, res) =>{
     const products = await Product.find({name: 'emperor bed'});
     res.status(200).json({products,  nbHits: products.length});
}
const getAllProducts = async (req, res) =>{
     res.status(200).json({msg: "product testing"})
}


module.exports = {
     getAllProductStatic,
     getAllProducts,
}