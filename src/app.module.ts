import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { OrdersModule } from './orders/orders.module';
import { DatasourceModule } from './datasource/datasource.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CatalogModule,
    ClientsModule,
    OrdersModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5433, //порт
      username: 'postgres', //имя пользователя
      password: '3639', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
      entities: ['src/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
