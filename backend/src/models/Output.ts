import { Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm'
import Products from './Product'

@Entity('outputs')
export default class Output {
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