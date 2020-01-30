export const schema = {
    "models": {
        "Facility": {
            "syncable": true,
            "name": "Facility",
            "pluralName": "Facilities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "FacilityId": {
                    "name": "FacilityId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "facilityType": {
                    "name": "facilityType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "currentOwner": {
                    "name": "currentOwner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "currentOwnerContact": {
                    "name": "currentOwnerContact",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "previousOwner": {
                    "name": "previousOwner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "previousOwnerContact": {
                    "name": "previousOwnerContact",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "updateAt": {
                    "name": "updateAt",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "facilityAmount": {
                    "name": "facilityAmount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "amountPaid": {
                    "name": "amountPaid",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentRecords": {
                    "name": "paymentRecords",
                    "isArray": true,
                    "type": {
                        "model": "PaymentRecord"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "facility"
                    }
                }
            }
        },
        "PaymentRecord": {
            "syncable": true,
            "name": "PaymentRecord",
            "pluralName": "PaymentRecords",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "paidAt": {
                    "name": "paidAt",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "monthsPaid": {
                    "name": "monthsPaid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "nextDueDate": {
                    "name": "nextDueDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "facility": {
                    "name": "facility",
                    "isArray": false,
                    "type": {
                        "model": "Facility"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "paymentRecordFacilityId"
                    }
                }
            }
        },
        "Ticket": {
            "syncable": true,
            "name": "Ticket",
            "pluralName": "Tickets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDate",
                        "fields": [
                            "date"
                        ]
                    }
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "deviceName": {
                    "name": "deviceName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "itemType": {
                    "name": "itemType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "receiptType": {
                    "name": "receiptType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "fee": {
                    "name": "fee",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "enums": {},
    "version": "da9f5f2d1d5d60caab3d9446a96934c9"
};