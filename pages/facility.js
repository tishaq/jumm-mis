import React, { Component } from "react";
import Link from "next/link";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../src/graphql/queries";

const facility = props => (
  <>
    <div className="header">
      <form>
        <div className="search-items">
          <Link href="/addFacility">
            <a>
              <input name="new-facility" type="button" value="New Facility" />
            </a>
          </Link>
          <div>
            Search for Facility: &nbsp;
            <input name="search-term" type="text" placeholder="Facility ID" />
            &nbsp;
            <input name="search" type="button" value="Search" />
          </div>
        </div>
      </form>
    </div>

    <div className="main">
      {console.log(props.data)}
      {Object.entries(props.data).map(items => (
        <div className="card" key={items[0]}>
          <div className="card-title">{items[0]}</div>
          <div className="card-body">
            <div className="facility-summary">
              <Link href="#">
                <a>Unpaid (0) </a>
              </Link>

              <Link
                href={{
                  pathname: "/listFacility",
                  query: { facilityType: items[0] }
                }}
              >
                <a> Total ({items[1].length}) </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
facility.getInitialProps = async function() {
  let nextToken = null;
  let results = [];
  let errors;
  let raw = {};
  let facilities = {};
  try {
    do {
      raw = await API.graphql(
        graphqlOperation(queries.listFacilitys, {
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
  results.map(f => {
    if (!facilities[f.facilityType]) {
      facilities[f.facilityType] = [];
      facilities[f.facilityType].push(f);
    } else {
      facilities[f.facilityType].push(f);
    }
  });

  return { data: facilities, errors: errors };
};
export default facility;
