import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../src/graphql/queries";
class remit extends Component {
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
          <div className="card-list">
            <div className="card-title">Transaction Summary</div>
            <div className="card-body">
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Revenue Source</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(this.props.data).map((tck, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{tck[0]}</td>
                      <td>N{tck[1].reduce((x, y) => x + y)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
remit.getInitialProps = async function() {
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
  return { data: tickets, errors: errors };
};

export default remit;
