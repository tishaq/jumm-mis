import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../src/graphql/queries";
import Header from "../components/Header";
import Footer from "../components/Footer";

const index = props => (
  <>
    {console.log(props)}
    <div className="header">
      <h1>Jimeta Ultra Modern Market Transaction Sumarry</h1>
    </div>

    <div className="main">
      <div className="card">
        <div className="card-title">Tickets Daily Summary</div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Item Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(props.tickets).map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item[0]}</td>
                  <td>N{item[1].reduce((x, y) => x + y)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <div className="card-title">Tickets Monthly Summary</div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Item Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(props.tickets).map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item[0]}</td>
                  <td>N{item[1].reduce((x, y) => x + y)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <div className="card-title">Facility Daily Summary</div>
        <div className="card-body">
          <canvas id="last-seven-days"></canvas>
        </div>
      </div>
      <div className="card">
        <div className="card-title">Facility Monthly Summary</div>
        <div className="card-body">
          <canvas id="last-thirty-days"></canvas>
        </div>
      </div>
    </div>
  </>
);
index.getInitialProps = async function() {
  let nextToken = null;
  let results = [];
  let errors;
  let raw = {};
  let tickets = {};
  try {
    do {
      raw = await API.graphql(
        graphqlOperation(queries.listTickets, {
          limit: 10000,
          nextToken: nextToken
        })
      );
      nextToken = raw.data.listTickets.nextToken;
      raw.data.listTickets.items.map(value => results.push(value));
    } while (nextToken);
  } catch (error) {
    errors = error;
  }
  results.map(t => {
    if (!tickets[t.deviceName]) {
      tickets[t.deviceName] = [];
    }
    tickets[t.deviceName].push(parseInt(t.fee));
  });

  let payments = {};
  results = [];
  try {
    do {
      raw = await API.graphql(
        graphqlOperation(queries.listPaymentRecords, {
          limit: 10000,
          nextToken: nextToken
        })
      );
      nextToken = raw.data.listPaymentRecords.nextToken;
      raw.data.listPaymentRecords.items.map(value => results.push(value));
    } while (nextToken);
  } catch (error) {
    errors = error;
  }
  // results.map(pr => {
  //   if (!payments[pr.]) {
  //     payments[] = [];
  //     payments[].push(f);
  //   } else {
  //     payments[].push(f);
  //   }
  // });

  return { tickets: tickets, payments: results, errors: errors };
};
export default index;
