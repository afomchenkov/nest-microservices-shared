import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => AppDataSource.runMigrations())
  .then(() => {
    console.log('Migrations ran successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error running migrations:', err);
    process.exit(1);
  });
  