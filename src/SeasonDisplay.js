// if the latitude is > 0 then this is the southern hemisphere
// else if the latitude is < 0 then this is the northern hemisphere
import "./SeasonDisplay.css";
import React from "react";

// set the season date that needs to be shown in each season using seasonConfg object
const seasonConfig = {
  summer: {
    iconName: "sun", // to use sematic ui icon that has the name of sun
    text: "It's Summer It's hot. Let's hit the beach!"
  },
  winter: {
    iconName: "snowflake",
    text: "Burr it's freezing cold. I think we need a hot chocolate!"
  },
  spring: {
    iconName: "leaf",
    text: "It's Spring. Life is pretty. Just let's go outside!"
  },
  fall: {
    iconName: "leaf",
    text: "MAN it's fall, oh, not again. I really miss summer!"
  }
}

const getSeason = (lat, month) => {
  if ( month >= 2  && month <= 4 ) {
    return lat > 0 ? "spring" : "fall";
  } else if ( month >= 5 && month <= 7 ) {
    return lat > 0 ? "summer" : "winter";
  } else if (month >=8 && month <= 10 ) {
    return lat > 0 ? "fall" : "spring";
  } else if (month >= 11|| month <= 1) {
  return lat > 0 ? "winter" : "summer";
  }
  console.log(`month ${month}`);
}
const SeasonDisplay = (props) => {
  // set the seasonName using to the latitude that passed from App component through the props plus the current month
  const seasonName = getSeason(props.lat, new Date().getMonth());

  // retrieve the right season object from the seasonConfig object using the season const that we've settled at the last line of code
  // const seasonObject = seasonConfig[seasonName];
  const { iconName, text } = seasonConfig[seasonName];
  return (
    <div className={`SeasonDisplay ${seasonName}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`}></i>
    </div>
  );
}
export default SeasonDisplay;
