import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
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