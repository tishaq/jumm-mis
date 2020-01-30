/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFacility = `subscription OnCreateFacility {
  onCreateFacility {
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
export const onUpdateFacility = `subscription OnUpdateFacility {
  onUpdateFacility {
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
export const onDeleteFacility = `subscription OnDeleteFacility {
  onDeleteFacility {
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
export const onCreatePaymentRecord = `subscription OnCreatePaymentRecord {
  onCreatePaymentRecord {
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
export const onUpdatePaymentRecord = `subscription OnUpdatePaymentRecord {
  onUpdatePaymentRecord {
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
export const onDeletePaymentRecord = `subscription OnDeletePaymentRecord {
  onDeletePaymentRecord {
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
export const onCreateTicket = `subscription OnCreateTicket {
  onCreateTicket {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
export const onUpdateTicket = `subscription OnUpdateTicket {
  onUpdateTicket {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
export const onDeleteTicket = `subscription OnDeleteTicket {
  onDeleteTicket {
    id
    deviceName
    itemType
    receiptType
    fee
    date
  }
}
`;
