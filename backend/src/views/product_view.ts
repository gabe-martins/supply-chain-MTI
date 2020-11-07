import Product from '../models/Product'

export default {
  render(product: Product) {
    return {
      id: product.id,
      registrationNumber: product.registrationNumber,
      name: product.name,
      manufacturer: product.manufacturer,
      type: product.type,
      description: product.description,
    }
  },
  renderMany(products: Product[]) {
    return products.map(product => this.render(product))
  }
}