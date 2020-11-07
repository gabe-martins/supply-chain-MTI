import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
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
    const input = await inputRepository.findOneOrFail(id)

    return res.json(inputView.render(input))
  },

  async create(req: Request, res: Response) {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    var exactTime = (date + "/" + month + "/" + + year + "-" + hours + ":" + minutes + ":" + seconds);
    
    const {
      amount,
      local,
      product_number,
    } = req.body

    const inputRepository = getRepository(Input)

  

    const data = {
      amount,
      time: exactTime,
      local,
      product_number,
    }

    const schema = Yup.object().shape({
      amount: Yup.number().required(),
      time: Yup.date().required(),
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