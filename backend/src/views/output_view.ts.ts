import Output from '../models/Output'

export default {
  render(output: Output) {
    return {
      id: output.id,
      amount: output.amount,
      time: output.time,
      local: output.local,
      product_number: output.product_number,
    }
  },
  renderMany(outputs: Output[]) {
    return outputs.map(output => this.render(output))
  }
}