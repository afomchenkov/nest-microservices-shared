import {
  MigrationInterface,
  QueryRunner,
  Table,
  // TableForeignKey,
} from 'typeorm';

export class CreateBookingTable1751188414674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'booking',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'title',
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
            name: 'date_from',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'date_to',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'is_active',
            type: 'boolean',
            default: true,
          },
          {
            name: 'property_id',
            type: 'char',
            length: '36',
            isNullable: false,
          },
          {
            name: 'tenant_id',
            type: 'char',
            length: '36',
            isNullable: false,
          },
          {
            name: 'order_id',
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

    // await queryRunner.createForeignKeys('booking', [
    //   new TableForeignKey({
    //     columnNames: ['property_id'],
    //     referencedTableName: 'property',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'CASCADE',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['tenant_id'],
    //     referencedTableName: 'user',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'CASCADE',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['order_id'],
    //     referencedTableName: 'order',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'SET NULL',
    //   }),
    // ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('booking');
    // if (table) {
    //   for (const fk of table.foreignKeys) {
    //     await queryRunner.dropForeignKey('booking', fk);
    //   }
    // }
    await queryRunner.dropTable('booking');
  }
}
