import {
  MigrationInterface,
  QueryRunner,
  Table,
  // TableForeignKey,
} from 'typeorm';

export class CreateAvailabilityTable1751188392621
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'availability',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'is_available',
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
    //   'availability',
    //   new TableForeignKey({
    //     columnNames: ['property_id'],
    //     referencedTableName: 'property',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'CASCADE',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('availability');
    // const foreignKey = table.foreignKeys.find(
    //   (fk) => fk.columnNames.indexOf('property_id') !== -1,
    // );
    // if (foreignKey) {
    //   await queryRunner.dropForeignKey('availability', foreignKey);
    // }
    await queryRunner.dropTable('availability');
  }
}
