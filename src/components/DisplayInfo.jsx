
function DisplayInfo({ dispData }) {
  return (
    <div id="displayInfo">
      <div id="infoFieldFirst">
        <div className="fieldTitle">IP ADDRESS</div>
        <div id="ipAddressValue">{dispData.ip}</div>
      </div>

      <div id="infoField">
        <div className="fieldTitle">LOCATION</div>
        <div id="locationValue">
          {dispData.location.city +
            ", " +
            dispData.location.region +
            " " +
            dispData.location.postalCode}
        </div>
      </div>

      <div id="infoField">
        <div className="fieldTitle">TIMEZONE</div>
        <div id="timezoneValue">{"UTC " + dispData.location.timezone}</div>
      </div>

      <div id="infoFieldLast">
        <div className="fieldTitle">ISP</div>
        <div id="ispValue">{dispData.isp}</div>
      </div>
    </div>
  );
}

export default DisplayInfo;
