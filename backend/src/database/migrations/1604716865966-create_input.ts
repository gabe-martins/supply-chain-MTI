import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createInput1604716865966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'inputs',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: 'amount',
                    type: 'integer',
                },
                {
                    name: 'time',
                    type: 'datetime',
                },
                {
                    name: 'local',
                    type: 'varchar'
                },
                {
                    name: 'product_number',
                    type: 'integer'
                },
            ],
            foreignKeys: [
                {
                    name: 'productRegistration',
                    columnNames: ['product_number'],
                    referencedTableName: 'products',
                    referencedColumnNames: ['registrationNumber'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('inputs')
    }

}
