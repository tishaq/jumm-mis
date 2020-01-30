// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Facility, PaymentRecord, Ticket } = initSchema(schema);

export {
  Facility,
  PaymentRecord,
  Ticket
};