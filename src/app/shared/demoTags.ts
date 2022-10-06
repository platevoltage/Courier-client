import { ITag } from './stop-data.model';
const data: ITag[] = [
      {
        "sender": {
          "name": "Dumper",
          "address": "666 Post st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94109,
          "arrivalWindowStart": new Date("2022-12-17T09:02:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T09:30:00.000Z"),
          "isRecipient": false
        },
        "recipient": {
          "name": "Clumper",
          "address": "999 Pine st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94109,
          "arrivalWindowStart": new Date("2022-12-17T11:02:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T11:30:00.000Z"),
          "isRecipient": true
        },
        "status": "ready",
        "level": "Rush",
        "id": 100006,
        "assignedTo": -1
      },
      {
        "sender": {
          "name": "Krumper",
          "address": "44 Montgomery st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94104,
          "arrivalWindowStart": new Date("2022-12-17T08:02:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T08:30:00.000Z"),
          "isRecipient": false
        },
        "recipient": {
          "name": "Frumper",
          "address": "888 Brannon st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94103,
          "arrivalWindowStart": new Date("2022-12-17T19:03:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T01:05:00.000Z"),
          "isRecipient": true
        },
        "level": "Rush",
        "id": 100018,
        "status": "ready",
        "assignedTo": -1
      },
      {
        "sender": {
          "name": "Krumper test",
          "address": "44 Montgomery st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94104,
          "arrivalWindowStart": new Date("2022-12-17T05:02:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T05:10:00.000Z"),
          "isRecipient": false
        },
        "recipient": {
          "name": "Frumper",
          "address": "888 Brannon st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94103,
          "arrivalWindowStart": new Date("2022-12-17T06:03:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T06:30:00.000Z"),
          "isRecipient": true
        },
        "level": "Rush",
        "id": 100019,
        "status": "picked-up",
        "assignedTo": -1
      },
      {
        "sender": {
          "name": "Krumper",
          "address": "44 Montgomery st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94104,
          "arrivalWindowStart": new Date("2022-12-17T05:28:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T05:37:00.000Z"),
          "isRecipient": false
        },
        "recipient": {
          "name": "Frumper",
          "address": "888 Brannon st.",
          "city": "San Francisco",
          "state": "CA",
          "zip": 94103,
          "arrivalWindowStart": new Date("2022-12-17T19:03:00.000Z"),
          "arrivalWindowEnd": new Date("2022-12-17T01:05:00.000Z"),
          "isRecipient": true
        },
        "level": "Rush",
        "id": 100020,
        "status": "ready",
        "assignedTo": -1
      }
    ];

    export default data;
  