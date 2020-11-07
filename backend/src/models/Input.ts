import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import Products from './Product'

@Entity('inputs')
export default class Input {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  amount: number;

  @Column()
  time: Date;

  @Column()
  local: string;

  @Column()
  product_number: number
}