import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../src/graphql/queries";
const facilityDetail = props => (
  <>
    <div className="header">Unpaid Facility Charges for Shops This Month</div>

    <div className="main">
      <div className="card-detail">
        <div className="card-title">Detail for {props.facility.facilityId}</div>
        <div className="card-body">
          <table>
            <tbody>
              <tr>
                <td>Facility ID</td>
                <td>{props.facility.facilityId}</td>
              </tr>
              <tr>
                <td>Current Owner</td>
                <td>{props.facility.currentOwner}</td>
              </tr>
              <tr>
                <td>Current Owner Contact</td>
                <td>{props.facility.currentOwnerContact}</td>
              </tr>
              <tr>
                <td>Previous Owner</td>
                <td>{props.facility.previousOwner}</td>
              </tr>
              <tr>
                <td>Previous Owner Contact</td>
                <td>{props.facility.previousOwnerContact}</td>
              </tr>
              <tr>
                <td>Facility Cost</td>
                <td>N{props.facility.facilityAmount}</td>
              </tr>
              <tr>
                <td>Facility Amount Paid</td>
                <td>N{props.facility.amountPaid}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-list">
        <div className="card-title">Payments History</div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date Last Paid</th>
                <th>Month(s) Paid</th>
                <th>Next Due Date</th>
                <th>Processed By</th>
              </tr>
            </thead>
            <tbody>
              {props.facility.paymentRecords.items.length
                ? props.facility.paymentRecords.items.map((p, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{p.paidAt}</td>
                      <td>{p.monthsPaid}</td>
                      <td>{p.nextDueDate}</td>
                      <td>Facility 1</td>
                    </tr>
                  ))
                : "No History"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);
facilityDetail.getInitialProps = async function({ query }) {
  let results = null;
  let errors = null;
  try {
    const facility = await API.graphql(
      graphqlOperation(queries.getFacility, { id: query.id })
    );
    results = facility.data.getFacility;
  } catch (error) {
    errors = error;
  }
  return { facility: results, errors: errors };
};
export default facilityDetail;
