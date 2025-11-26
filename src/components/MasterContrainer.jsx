import { useState } from "react";
import MapComp from "../components/MapComp";
import SearchBar from "../components/SearchBar";
import DisplayInfo from "../components/DisplayInfo";
import "../App.css";

function MasterContainer() {

  // set the default data here
  const testOutput = `{
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC"
  }`;

  let data = JSON.parse(testOutput)

  const [apiData, setApiData] = useState(data)
  // console.log(apiData)


  return (
    <div>
      <div id="topLayer">
        <h1>IP Address Tracker</h1>
        <SearchBar setApiData={setApiData}/>
        <DisplayInfo dispData={apiData}/>
      </div>

      <div id="bgLayer">
        <img
          id="bgImage"
          src="images/pattern-bg-desktop.png"
          alt="Decoration Map"
        ></img>

        <MapComp coords={[apiData.location.lat, apiData.location.lng]} />
      </div>
    </div>
  );
}

export default MasterContainer;
