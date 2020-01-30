import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../src/graphql/queries";
import Link from "next/link";
const listFacility = props => (
  <>
    <div className="header">
      Unpaid Facility Charges for {props.facilityType} This Month
    </div>
    <div className="main">
      <div className="card-list">
        <div className="card-title">{props.facilityType}s</div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Facility ID</th>
                <th>Owner Name</th>
                <th>Owner Contact</th>
                <th>Last Paid Date</th>
                <th>Next Due Date</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((f, index) => (
                <Link
                  href={{
                    pathname: "/facilityDetail",
                    query: { id: f.id }
                  }}
                  key={index}
                >
                  <tr>
                    <td>
                      <a>{index + 1}</a>
                    </td>
                    <td>{f.facilityId}</td>
                    <td>{f.currentOwner}</td>
                    <td>{f.currentOwnerContact}</td>
                    <td>{f.lastPaidAt}</td>
                    <td>{f.nextDueDate}</td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);
listFacility.getInitialProps = async function({ query }) {
  let nextToken = null;
  let results = [];
  let errors;
  let raw = {};
  try {
    do {
      raw = await API.graphql(
        graphqlOperation(queries.listFacilitys, {
          filter: { facilityType: { eq: query.facilityType } },
          limit: 10000,
          nextToken: nextToken
        })
      );
      nextToken = raw.data.listFacilitys.nextToken;
      raw.data.listFacilitys.items.map(value => results.push(value));
    } while (nextToken);
  } catch (error) {
    errors = error;
  }
  return { data: results, facilityType: query.facilityType, errors: errors };
};
export default listFacility;
