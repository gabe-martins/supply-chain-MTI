import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Output from '../models/Output'
import * as Yup from 'yup'

import outputView from '../views/output_view'

export default {

  async index(req: Request, res: Request) {
    const outputRepository = getRepository(Output)
    const outputs = await outputRepository.find()

    return res.json(outputView.renderMany(outputs))
  },

  async show(req: Request, res: Response) {
    const { id } = req.params

    const outputRepository = getRepository(Output);
    const output = await outputRepository.findOneOrFail(id)

    return res.json(outputView.render(output))
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

    const outputRepository = getRepository(Output)

  

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

    const output = outputRepository.create(data)

    await outputRepository.save(output)



    return res.status(201).json(output)
  }
}