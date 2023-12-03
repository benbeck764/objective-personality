import { app, InvocationContext, Timer } from '@azure/functions';
import { airTableToSqlETL } from './etl';

const airTableToSqlETLHandler = async (
  _myTimer: Timer,
  _context: InvocationContext
): Promise<void> => {
  await airTableToSqlETL();
};

app.timer('etl-function', {
  schedule: '0 * * */1 * *',
  handler: airTableToSqlETLHandler,
  runOnStartup: process.env.Environment === 'local',
});
