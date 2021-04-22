import React, { useReducer, useState } from 'react';
import axios from "axios"
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const bidReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const userReducer = (state, event) => {
  return {
    ...state,
    [event.value]: event.value
  }
}

var baseUrlApi = "http://localhost:3001"

function Trades() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [bidData, setBidData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [allBids, setAllBids] = useState(false);
  const [submitCounterparty, setSubmitCounterparty] = useState(false);
  const [approvedBids, setApprovedBids] = useState(false);
  const [userData, setUserData] = useReducer(userReducer, {});

  const listOfCounterParties = [];
  const orderedBids = "top 3 bids";
  var sortable = [];
  const handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify(formData))
    //{"trade":"HELLO","amount":"500000"}
    axios.post(baseUrlApi + "/bonds", formData)
    setSubmitting(true);
  }

  const handleSubmittedBids = event => {
    event.preventDefault();
    for (var trade in bidData) {
      sortable.push([trade, bidData[trade]]);
    }

    sortable.sort(function (a, b) {
      return a[1] - b[1];
    });
    console.log('sortable')
    console.log(JSON.stringify(sortable))
    setAllBids(true);

  }


  const handleSubmitBids = event => {
    event.preventDefault();
    console.log(JSON.stringify(bidData))
  }


  const handleApprovedBids = event => {
    event.preventDefault();
    setApprovedBids(true
    )
  }

  const handleSubmitCounterparty = event => {
    event.preventDefault();
    console.log('User Data')
    console.log(userData)
    setSubmitCounterparty(true)
    // listOfCounterParties.push(userData)
    // console.log('Counterparties Data')
    // console.log(listOfCounterParties)

  }

  const handleChangeTrades = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChangeCounterparty = event => {
    console.log('Change event')
    setUserData({
      value: event.target.value
    });

  }


  const handleChangeBid = event => {

    setBidData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  //{"gs":"103","jp":"104","bnp":"100","citi":"99"}
  const users = [
    {
      "id": 1,
      "company": "Goldman Sachs",
      "name": "GS",
    },
    {
      "id": 2,
      "company": "JP Morgan",
      "name": "JPM",
    },
    {
      "id": 3,
      "company": "BNP",
      "name": "BNP Paribas",
    },
    {
      "id": 4,
      "company": "CITI",
      "name": "Citigroup Inc",
      "email": "Gabriella4@gmail.com"
    }
  ]


  return (
    <div className="wrapper">
      &nbsp;
      <fieldset>
        <h3>Insight Investment</h3>
        &nbsp;
      <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Create Bond</p>
              <input name="name" onChange={handleChangeTrades} placeholder="Enter Bond Name" />
              <input name="size" onChange={handleChangeTrades} placeholder="Enter Bond Size" />
            </label>
            <button type="submit">Submit</button>
            {submitting &&
              <div>
                You are submitting the following:
        <ul>
                  {Object.entries(formData).map(([name, value]) => (
                    <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                  ))}
                </ul>
              </div>
            }
          </fieldset>
        </form>

        <div><fieldset>
          <ul>
            <form onSubmit={handleSubmitCounterparty}>

              <label>
                <p>Select Counterparties:</p>
              </label>
              <select onChange={handleChangeCounterparty} multiple>
                {users.map(user => {
                  return (
                    <option key={user.id} value={user.company} identifier={user.id} > {user.company}</option>
                  )
                })}
              </select>
              <button type="submit">Submit</button>
            </form>
          </ul></fieldset>

          <fieldset>
            <div>
              <p>Winning Bids</p>
              <form onSubmit={handleSubmittedBids}>
                <button type="submit">Get bids</button>
              </form>


              {allBids &&
                <ul>
                  <p>Name:{formData.name} Size:{formData.size}</p>
                  {Object.entries(bidData).map(([name, value]) => (
                    <p key={name}>{name}:{value.toString()}</p>
                  ))}
                  <p>GS win {formData.name} @ 105 cover @ 104, pls confirm if you are happy to release cover</p>

                  <form onSubmit={handleApprovedBids}>
                    <button type="submit">Approve Bids</button>

                  </form>
                </ul>

              }
            </div>
          </fieldset>

        </div>
      &nbsp;

      </fieldset>



      <fieldset>
        <h3>Counterparties</h3>
        &nbsp;
        &nbsp;
      <div><fieldset><div>Goldman Sachs</div>
          {submitCounterparty &&
            <div>
              <p>Name:{formData.name} Size:{formData.size}</p>
              <form onSubmit={handleSubmitBids}>
                <input name="gs" onChange={handleChangeBid} placeholder="Price" />
                <button type="submit">Submit</button>
              </form>

              {approvedBids &&
                <p>GS win {formData.name} @ 105 cover @ 104, pls confirm if you are happy to release cover</p>
              }
            </div>
          }
        </fieldset>
        </div>
      &nbsp;
      <div><fieldset><div>JP Morgan</div>
          {submitCounterparty &&
            <div>
              <p>Name:{formData.name} Size:{formData.size}</p>
              <form onSubmit={handleSubmitBids}>

                <input name="jp" onChange={handleChangeBid} placeholder="Price" />
                <button type="submit">Submit</button>
              </form>
            </div>
          }
        </fieldset></div>
      &nbsp;
      <div><fieldset><div>BNP Paribas</div>
          {submitCounterparty &&
            <div>
              <p>Name:{formData.name} Size:{formData.size}</p>
              <form onSubmit={handleSubmitBids}>

                <input name="bnp" onChange={handleChangeBid} placeholder="Price" />
                <button type="submit">Submit</button>
              </form>
            </div>
          }
        </fieldset></div>
      &nbsp;
      <div><fieldset><div>Citigroup Inc</div>
          {submitCounterparty &&
            <div>
              <p>Name:{formData.name} Size:{formData.size}</p>
              <form onSubmit={handleSubmitBids}>

                <input name="citi" onChange={handleChangeBid} placeholder="Price" />
                <button type="submit">Submit</button>
              </form>
            </div>
          }
        </fieldset></div>
      &nbsp;
      </fieldset>
    </div>

  )
}

export default Trades;