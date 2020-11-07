import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn()
  registrationNumber: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  type: string;

  @Column()
  description: string;
}