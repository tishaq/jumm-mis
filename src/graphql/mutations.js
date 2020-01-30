/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFacility = `mutation CreateFacility(
  $input: CreateFacilityInput!
  $condition: ModelFacilityConditionInput
) {
  createFacility(input: $input, condition: $condition) {
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
export const updateFacility = `mutation UpdateFacility(
  $input: UpdateFacilityInput!
  $condition: ModelFacilityConditionInput
) {
  updateFacility(input: $input, condition: $condition) {
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
export const deleteFacility = `mutation DeleteFacility(
  $input: DeleteFacilityInput!
  $condition: ModelFacilityConditionInput
) {
  deleteFacility(input: $input, condition: $condition) {
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
export const createPaymentRecord = `mutation CreatePaymentRecord(
  $input: CreatePaymentRecordInput!
  $condition: ModelPaymentRecordConditionInput
) {
  createPaymentRecord(input: $input, condition: $condition) {
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
export const updatePaymentRecord = `mutation UpdatePaymentRecord(
  $input: UpdatePaymentRecordInput!
  $condition: ModelPaymentRecordConditionInput
) {
  updatePaymentRecord(input: $input, condition: $condition) {
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
export const deletePaymentRecord = `mutation DeletePaymentRecord(
  $input: DeletePaymentRecordInput!
  $condition: ModelPaymentRecordConditionInput
) {
  deletePaymentRecord(input: $input, condition: $condition) {
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
export const createTicket = `mutation CreateTicket(
  $input: CreateTicketInput!
  $condition: ModelTicketConditionInput
) {
  createTicket(input: $input, condition: $condition) {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
export const updateTicket = `mutation UpdateTicket(
  $input: UpdateTicketInput!
  $condition: ModelTicketConditionInput
) {
  updateTicket(input: $input, condition: $condition) {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
export const deleteTicket = `mutation DeleteTicket(
  $input: DeleteTicketInput!
  $condition: ModelTicketConditionInput
) {
  deleteTicket(input: $input, condition: $condition) {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
