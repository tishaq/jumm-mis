/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFacility = `query GetFacility($id: ID!) {
  getFacility(id: $id) {
    id
    facilityId
    facilityType
    currentOwner
    currentOwnerContact
    previousOwner
    previousOwnerContact
    createdAt
    updateAt
    lastPaidAt
    nextDueDate
    facilityAmount
    amountPaid
    paymentRecords {
      items {
        id
        paidAt
        monthsPaid
        nextDueDate
      }
      nextToken
    }
  }
}
`;
export const listFacilitys = `query ListFacilitys(
  $filter: ModelFacilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listFacilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      facilityId
      facilityType
      currentOwner
      currentOwnerContact
      previousOwner
      previousOwnerContact
      createdAt
      updateAt
      lastPaidAt
      nextDueDate
      facilityAmount
      amountPaid
      paymentRecords {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPaymentRecord = `query GetPaymentRecord($id: ID!) {
  getPaymentRecord(id: $id) {
    id
    paidAt
    monthsPaid
    nextDueDate
    facility {
      id
      facilityId
      facilityType
      currentOwner
      currentOwnerContact
      previousOwner
      previousOwnerContact
      createdAt
      updateAt
      lastPaidAt
      nextDueDate
      facilityAmount
      amountPaid
      paymentRecords {
        nextToken
      }
    }
  }
}
`;
export const listPaymentRecords = `query ListPaymentRecords(
  $filter: ModelPaymentRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listPaymentRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      paidAt
      monthsPaid
      nextDueDate
      facility {
        id
        facilityId
        facilityType
        currentOwner
        currentOwnerContact
        previousOwner
        previousOwnerContact
        createdAt
        updateAt
        lastPaidAt
        nextDueDate
        facilityAmount
        amountPaid
      }
    }
    nextToken
  }
}
`;
export const getTicket = `query GetTicket($id: ID!) {
  getTicket(id: $id) {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
export const listTickets = `query ListTickets(
  $filter: ModelTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      deviceName
      itemType
      receiptType
      fee
      date
    }
    nextToken
  }
}
`;
