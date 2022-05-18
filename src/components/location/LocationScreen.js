import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechtAllLocations } from "../../store/slices/location";
import * as moment from "moment";

export const LocationScreen = () => {
  const { list } = useSelector((state) => state.locations);

  const dispatch = useDispatch();
  const url = "https://rickandmortyapi.com/api/location";
  useEffect(() => {
    dispatch(fechtAllLocations(url));
  }, [dispatch]);
  return (
    <div className="row">
      {list?.results?.map((item) => (
        <div key={item.id} className="col animate__animated animate__fadeIn">
          <div
            className="card "
            style={{
              minWidth: "220px",
              marginTop: "10px",
              border: "2px solid Pink",
            }}
          >
            <div className="row no-gutters">
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>

                  <p className="text-muted">{item.type}</p>
                  <p className="text-muted">
                    {moment(item.created).format("L")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
