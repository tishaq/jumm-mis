import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../src/graphql/queries";
class gate extends Component {
  //static async getInitialProps() {}
  render() {
    return (
      <>
        <div className="header">
          <form>
            <div className="search-items">
              <p>
                Select the range of dates to view summary Maximum of 30 days
              </p>

              <div>
                From:
                <input name="datepicker1" type="date" />
                To:
                <input name="datepicker2" type="date" />
                <input name="load" type="button" value="Load" />
              </div>
            </div>
          </form>
        </div>

        <div className="main">
          {Object.entries(this.props.data).map(tck => (
            <div className="card">
              <div className="card-title">{tck[0]}</div>
              <div className="card-body">
                <table>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Item Name</th>
                      <th>Fee</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>

                  {Object.entries(tck[1]).map(cat => (
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>{cat[0]}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      {Object.entries(cat[1]).map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item[0]}</td>
                          <td>N{item[1][0]}</td>
                          <td>{item[1].length}</td>
                          <td>N{item[1].reduce((x, y) => x + y)}</td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
gate.getInitialProps = async function() {
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
      tickets[t.deviceName] = {};
    }
    if (!tickets[t.deviceName][t.receiptType]) {
      tickets[t.deviceName][t.receiptType] = {};
    }
    if (!tickets[t.deviceName][t.receiptType][t.itemType]) {
      tickets[t.deviceName][t.receiptType][t.itemType] = [];
    }
    tickets[t.deviceName][t.receiptType][t.itemType].push(parseInt(t.fee));
  });
  return { data: tickets, errors: errors };
};

export default gate;
