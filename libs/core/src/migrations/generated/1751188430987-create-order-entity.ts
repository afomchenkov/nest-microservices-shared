import {
  Table,
  // TableForeignKey,
} from 'typeorm';

import type {
  MigrationInterface,
  QueryRunner} from 'typeorm';

export class CreateOrderEntity1751188430987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'price',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'billing_address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'bank_account',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'effective_date',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'user_id',
            type: 'char',
            length: '36',
            isNullable: false,
          },
          {
            name: 'metadata',
            type: 'json',
            isNullable: true,
            default: null,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
            default: null,
          },
        ],
      }),
      true,
    );

    // await queryRunner.createForeignKey(
    //   'order',
    //   new TableForeignKey({
    //     columnNames: ['user_id'],
    //     referencedTableName: 'user',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'NO ACTION',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('order');
    // if (table) {
    //   for (const fk of table.foreignKeys) {
    //     await queryRunner.dropForeignKey('order', fk);
    //   }
    // }
    await queryRunner.dropTable('order');
  }
}
