import { Request, Response } from 'express'
import { getRepository, Index } from 'typeorm'
import Input from '../models/Input'
import * as Yup from 'yup'

import inputView from '../views/input_view'

export default {

  async index(req: Request, res: Request) { 
    const inputRepository = getRepository(Input)
    const inputs = await inputRepository.find()

    return res.json(inputView.renderMany(inputs))
  },

  async show(req: Request, res: Response) {
    const { id } = req.params
    
    const inputRepository = getRepository(Input);
    const input = await inputRepository.findOne(id)

    return res.json(inputView.render(input))
  },

  async create(req: Request, res: Response) {
    const {
      amount,
      local,
      product_number,
    } = req.body


    const inputRepository = getRepository(Input)

    const data = {
      amount,
      local,
      product_number,
    }

    const schema = Yup.object().shape({
      amount: Yup.number().required(),
      local: Yup.string().required(),
      product_number: Yup.number().required(),
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const input = inputRepository.create(data)

    await inputRepository.save(input)

    return res.status(201).json(input)
  }
}