import { airTableToSqlETL } from './functions/etl';

// Run locally for long-running tasks to avoid function timeout
// Function is only used to quickly parse new data
(async () => {
  console.log(process.env.Environment);
  console.log(process.env.REPLACE_DATA);
  await airTableToSqlETL();
})();
