import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProducts1604710783530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'registrationNumber',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'manufacturer',
                    type: 'varchar'
                },
                {
                    name: 'type',
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'text'
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
