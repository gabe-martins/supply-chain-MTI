import Input from '../models/Input'

export default {
  render(input: Input) {
    return {
      id: input.id,
      amount: input.amount,
      time: input.time,
      local: input.local,
      product_number: input.product_number,
    }
  },
  renderMany(inputs: Input[]) {
    return inputs.map(input => this.render(input))
  }
}