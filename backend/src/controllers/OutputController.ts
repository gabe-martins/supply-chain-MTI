import { Request, Response } from 'express'
import { getRepository, Index } from 'typeorm'
import Product from '../models/Product'
import * as Yup from 'yup'

import outputView from '../views/input_view'

export default {
  async create(req: Request, res: Response){
    return res.json('Keep Calm')
  }
}