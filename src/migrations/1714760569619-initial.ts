import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1714760569619 implements MigrationInterface {
  name = 'Initial1714760569619';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client_product" DROP CONSTRAINT "FK_b4450dd99d0d31c18b8ecc94d56"`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_product" DROP CONSTRAINT "FK_e27b2a17fd2fb91ff34d4bd9530"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_order" DROP CONSTRAINT "FK_2a8da6a067cb59557b708fd4a29"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_order" DROP CONSTRAINT "FK_44a63452d4f45e3e54a3028e9e5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_product" ADD CONSTRAINT "FK_b4450dd99d0d31c18b8ecc94d56" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_product" ADD CONSTRAINT "FK_e27b2a17fd2fb91ff34d4bd9530" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_order" ADD CONSTRAINT "FK_2a8da6a067cb59557b708fd4a29" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_order" ADD CONSTRAINT "FK_44a63452d4f45e3e54a3028e9e5" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_order" DROP CONSTRAINT "FK_44a63452d4f45e3e54a3028e9e5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_order" DROP CONSTRAINT "FK_2a8da6a067cb59557b708fd4a29"`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_product" DROP CONSTRAINT "FK_e27b2a17fd2fb91ff34d4bd9530"`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_product" DROP CONSTRAINT "FK_b4450dd99d0d31c18b8ecc94d56"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_order" ADD CONSTRAINT "FK_44a63452d4f45e3e54a3028e9e5" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_order" ADD CONSTRAINT "FK_2a8da6a067cb59557b708fd4a29" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_product" ADD CONSTRAINT "FK_e27b2a17fd2fb91ff34d4bd9530" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_product" ADD CONSTRAINT "FK_b4450dd99d0d31c18b8ecc94d56" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
