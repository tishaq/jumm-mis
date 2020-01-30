import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Facility {
  readonly id: string;
  readonly FacilityId: string;
  readonly facilityType: string;
  readonly currentOwner: string;
  readonly currentOwnerContact: string;
  readonly previousOwner?: string;
  readonly previousOwnerContact?: string;
  readonly createdAt: string;
  readonly updateAt?: string;
  readonly facilityAmount?: number;
  readonly amountPaid?: number;
  readonly paymentRecords?: PaymentRecord[];
  constructor(init: ModelInit<Facility>);
  static copyOf(source: Facility, mutator: (draft: MutableModel<Facility>) => MutableModel<Facility> | void): Facility;
}

export declare class PaymentRecord {
  readonly id: string;
  readonly paidAt: string;
  readonly monthsPaid: number;
  readonly nextDueDate: string;
  readonly facility: Facility;
  constructor(init: ModelInit<PaymentRecord>);
  static copyOf(source: PaymentRecord, mutator: (draft: MutableModel<PaymentRecord>) => MutableModel<PaymentRecord> | void): PaymentRecord;
}

export declare class Ticket {
  readonly id: string;
  readonly deviceName: string;
  readonly itemType: string;
  readonly receiptType: string;
  readonly fee: number;
  readonly date: string;
  constructor(init: ModelInit<Ticket>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket>) => MutableModel<Ticket> | void): Ticket;
}