import { Request, Response } from 'express'
import { getRepository, Index } from 'typeorm'
import Product from '../models/Product'
import * as Yup from 'yup'

import productView from '../views/product_view'

export default {

  async index(req: Request, res: Response) {
    const productsRepository = getRepository(Product)
    const products = await productsRepository.find()

    return res.json(productView.renderMany(products))
  },

  async show(req: Request, res: Response) {
    const { registrationNumber } = req.params
    
    const productsRepository = getRepository(Product);
    let product = await productsRepository.findOne({
      registrationNumber
    })

    return res.json(productView.render(product))
  },

  async create(req: Request, res: Response) {
    const {
      registrationNumber,
      name,
      manufacturer,
      type,
      description
    } = req.body


    const productsRepository = getRepository(Product)
    let product = await productsRepository.findOne({
      registrationNumber
    })

    if (!product) {
      const data = {
        registrationNumber,
        name,
        manufacturer,
        type,
        description
      }

      const schema = Yup.object().shape({
        registrationNumber: Yup.number().required(),
        name: Yup.string().required(),
        manufacturer: Yup.string().required(),
        type: Yup.string().required(),
        description: Yup.string().required().max(300),
      })

      await schema.validate(data, {
        abortEarly: false
      })

      const product = productsRepository.create(data)

      await productsRepository.save(product)
    } else {
      return res.json({ message: "Mercadoria já cadastrada" });
    }

    return res.status(201).json(product)
  }
}