import {
  Table,
  // TableForeignKey,
} from 'typeorm';

import type {
  MigrationInterface,
  QueryRunner} from 'typeorm';

export class CreatePropertyEntity1751188440117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'property',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
            isNullable: false,
            default: 'UUID()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'amenities',
            type: 'json',
            isNullable: true,
          },
          {
            name: 'to_know',
            type: 'json',
            isNullable: true,
          },
          {
            name: 'owner_id',
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
    //   'property',
    //   new TableForeignKey({
    //     columnNames: ['owner_id'],
    //     referencedTableName: 'user',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'NO ACTION',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('property');
    // if (table) {
    //   for (const fk of table.foreignKeys) {
    //     await queryRunner.dropForeignKey('property', fk);
    //   }
    // }
    await queryRunner.dropTable('property');
  }
}
