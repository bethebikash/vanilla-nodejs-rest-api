const product = require('../data/product')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(product)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(product.find((item) => item.id == id))
  })
}

module.exports = {
  findAll,
  findById
}