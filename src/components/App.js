import React from "react";
import Months from "./Months";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";
import Days from "./Days";
import { render } from "@testing-library/react";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Days />
            <ScheduleList />
          </div>
          <div className="col-6">
            <Months />
          </div>
        </div>
        <div className='row'>
          <ProduceList />
        </div>
      </div>
    </React.Fragment>
  );
}
    

export default App;