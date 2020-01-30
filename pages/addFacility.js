import React, { Component } from "react";
import Amplify from "@aws-amplify/core";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../src/graphql/mutations";
class addFacility extends Component {
  state = {};

  render() {
    const handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = async e => {
      const now = new Date();
      console.log({ ...this.state });
      try {
        const newFacility = await API.graphql(
          graphqlOperation(mutations.createFacility, {
            input: { ...this.state, createdAt: now.toString() }
          })
        );
        console.log(newFacility);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <>
        <div className="header">Register New Facility</div>
        <div className="main">
          <div className="form-item">
            <label>Facility ID * </label>
            <br />
            <input
              onChange={handleChange}
              name="facilityId"
              type="text"
              placeholder="JUMM/A/00001"
              required
            />
          </div>
          <div className="form-item">
            <label>Facility Type *</label>
            <br />
            <select name="facilityType" onChange={handleChange}>
              <option>Select Facility Type</option>
              <option value="Shop">Shop</option>
              <option value="Attachment">Attachment</option>
              <option value="Banking Hall">Banking Hall</option>
              <option value="Ware House">Ware House</option>
              <option value="Generator Room">Generator Room</option>
              <option value="Toilets">Toilets</option>
            </select>
          </div>
          <div className="form-item">
            <label>Current Owner's Name * </label>
            <br />
            <input
              onChange={handleChange}
              name="currentOwner"
              type="text"
              placeholder="ex: John Musa"
              required
            />
          </div>
          <div className="form-item">
            <label>Current Owner's Contact * </label>
            <br />
            <input
              onChange={handleChange}
              name="currentOwnerContact"
              type="text"
              placeholder="ex: 08088080808"
              required
            />
          </div>
          <div className="form-item">
            <label>Previous Owner's Name </label>
            <br />
            <input
              onChange={handleChange}
              name="previousOwner"
              type="text"
              placeholder="ex: Laraba Bulus"
            />
          </div>
          <div className="form-item">
            <label>Previous Owner's Contact </label>
            <br />
            <input
              onChange={handleChange}
              name="previousOwnerContact"
              type="text"
              placeholder="ex: 08088080808"
            />
          </div>
          <div className="form-item">
            <label>Facility Cost</label>
            <br />
            <input
              onChange={handleChange}
              name="facilityAmount"
              type="number"
              defaultValue="0"
            />
          </div>
          <div className="form-item">
            <label>Facility Amount Paid</label>
            <br />
            <input
              onChange={handleChange}
              name="amountPaid"
              type="number"
              defaultValue="0"
            />
          </div>
          <div className="form-item-button">
            <input
              onClick={handleSubmit}
              name="add"
              type="button"
              defaultValue="Add Facility"
            />
          </div>
        </div>
      </>
    );
  }
}
export default addFacility;
