import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import Rightarrow from "../../assets/images/right-arrow.svg";
import { v4 as uuidv4 } from "uuid";

const Entryheading = (props) => {
  return (
    <div className="titles">
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const UserEntries = (props) => {
  return (
    <div>
      <ul className="user-entry">
        <p>Select an entry to continue</p>
        {props.entries.map((userEntry) => {
          return (
            <li
              key={uuidv4()}
              onClick={() => props.handleSelectUserEntry(userEntry)}
            >
              <p>
                {userEntry.titles[0]}
                <span>{userEntry.titles[2]}</span>
              </p>
              <p>{userEntry.titles[3]} </p>
              <p style={{ justifyContent: "end" }}>
                Issued on
                <Moment format="DD-MMM-YYYY" style={{ paddingLeft: "5px" }}>
                  {userEntry.titles[1]}
                </Moment>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CycleEntries = ({
  basicEntries,
  handleSelectUserEntry,
  handleMonthResult,
  selectedMonth,
}) => {
  return (
    <div>
      {basicEntries.map((entry) => {
        return (
          <div className="wrap-entries" key={uuidv4()}>
            <Entryheading
              heading={entry.title}
              description={entry.subtitle}
              selectedMonth={selectedMonth}
            />
            {entry.dict_list && (
              <UserEntries
                entries={entry.dict_list}
                handleSelectUserEntry={handleSelectUserEntry}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CycleEntries;
