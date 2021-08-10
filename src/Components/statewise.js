import React, { useState, useEffect } from "react";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const responce = await fetch("https://api.covid19india.org/data.json");
    const actualData = await responce.json();
    //console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
    return () => {};
  }, []);
  return (
    <>
      <div className="row">
        {data.map((currentelement, index) => {
          return (
            <div className="col-md-4  col-sm-6 " key={index}>
              <div
                class="card text-white bg-dark mb-3"
                style={{ maxWwidth: "18rem" }}
              >
                <h5 class="card-header text-center ">{currentelement.state}</h5>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <h6 class="card-title d-inline">CONFIRMED: </h6>
                      <p class="card-text d-inline">
                        {currentelement.confirmed}
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h6 class="card-title d-inline btn btn-outline-success">
                        RECOVERED:
                      </h6>
                      <p class="card-text d-inline">
                        {" "}
                        {currentelement.recovered}
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h6 class="card-title d-inline btn btn-outline-danger">
                        DEATHS:
                      </h6>
                      <p class="card-text d-inline"> {currentelement.deaths}</p>
                    </li>
                    <li class="list-group-item">
                      <h6 class="card-title d-inline">ACTIVE: </h6>
                      <p class="card-text d-inline">{currentelement.active}</p>
                    </li>
                    <li class="list-group-item">
                      <h6 class="card-title d-inline">UPDATED: </h6>
                      <p class="card-text d-inline">
                        {currentelement.lastupdatedtime}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Statewise;
