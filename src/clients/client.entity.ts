import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/catalog/product.entity';
import { Order } from 'src/orders/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clients')
export class Client {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  surname: string;
  @ApiProperty()
  @Column()
  phoneNumber: number;
  @ApiProperty()
  @Column()
  email: string;
  @ApiProperty()
  @Column()
  address: string;

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];

  @ManyToMany(() => Product, (product) => product.clients) //Создадим связь многие ко многим с сущностью Product и свяжем с полем clients у продукта
  @JoinTable({
    name: 'client_product',
    joinColumn: { name: 'client_id' }, //для связи с идентификатором клиента
    inverseJoinColumn: { name: 'product_id' }, //для связи с идентификатором продукта
  })
  products: Product[]; //объект, в котором будем автоматически получать все продукты, заказанные клиентом

  // constructor(
  //   id: number,
  //   name: string,
  //   surname: string,
  //   phoneNumber: number,
  //   email: string,
  //   address: string,
  // ) {
  //   this.id = id;
  //   this.name = name;
  //   this.surname = surname;
  //   this.phoneNumber = phoneNumber;
  //   this.email = email;
  //   this.address = address;
  // }
}
