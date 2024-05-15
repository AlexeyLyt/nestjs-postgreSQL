import { ApiProperty } from '@nestjs/swagger';
import { Client } from 'src/clients/client.entity';
import { Order } from 'src/orders/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @ApiProperty()
  name: string;
  @Column()
  @ApiProperty()
  desc: string;
  @Column()
  @ApiProperty()
  price: number;
  @Column()
  @ApiProperty({ required: false })
  inStock?: boolean;

  @ManyToMany(() => Order, (order) => order.products) //Создадим связь многие ко многим с сущностью Order и свяжем с полем products в заказах
  @JoinTable({
    name: 'product_order',
    joinColumn: { name: 'product_id' }, //для связи с идентификатором продукта
    inverseJoinColumn: { name: 'order_id' }, //для связи с идентификатором заказа
  })
  orders: Order[]; //объект, в котором будем автоматически получать все заказы продукта

  @ManyToMany(() => Client, (client) => client.products) //Создадим связь многие ко многим с сущностью Client и свяжем с полем products у клиентов
  @JoinTable({
    name: 'client_product',
    joinColumn: { name: 'product_id' }, //для связи с идентификатором продукта
    inverseJoinColumn: { name: 'client_id' }, //для связи с идентификатором клиента
  })
  clients: Client[]; //объект, в котором будем автоматически получать всех клиентов, заказавших продукт
}
