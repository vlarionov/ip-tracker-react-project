

export async function apiParsing (searchValue) {


    let replaceData = null;

    let apiCallPrefix =
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_uD1g4uqDN1SWK9nnDQx1xjB7nFC8V";
    let apiCallValue = "";

    //----------------------------------
    // copy paste old code here
    // console.log("you clicked the button");

    // reset apiCallValue
    apiCallValue = "";

    // obtain search query
    // var searchValue = searchQueryInput.value;
    // console.log(`you searched for ${searchValue}`);

    // determine if search query is an IP or domain

    var isDomain = extractTLD(searchValue);
    //console.log(Boolean(isDomain));

    var isIP = extractIP(searchValue);
    //console.log(`is IP: ${Boolean(isIP)}`);

    if (Boolean(isDomain)) {
        apiCallValue = apiCallPrefix + "&domain=" + searchValue;
        //console.log(apiCallValue);
    }
    if (Boolean(isIP)) {
        apiCallValue = apiCallPrefix + "&ipAddress=" + searchValue;
        //console.log(apiCallValue);
    }

    if (!Boolean(apiCallValue)) {
        //console.log("invalid entry")
        alert("Please enter a valid IPv4 address or domain name.");
        return null;
    }

    // call API
    //console.log("this part of the code executes");
    // console.log(apiCallValue);
    
    
    replaceData = await fetchDataAndUse (apiCallValue);
    // console.log(searchValue)
    // console.log(`final data from apiParsing: ${replaceData.ip}`)


    return replaceData;
}


// helper function to determine if search query is a domain
function extractTLD(url) {
  // Regular expression to capture the TLD (e.g., .com, .org, .co.uk)
  // This regex looks for the last dot followed by 2 to 6 alphanumeric characters,
  // optionally followed by another dot and 2 alphanumeric characters for country code TLDs.
  const tldRegex = /\.([a-z0-9]{2,6})(?:\.[a-z]{2})?$/i;

  const match = url.match(tldRegex);

  if (match && match[0]) {
    return match[0]; // Returns the full TLD (e.g., ".com", ".co.uk")
  } else {
    return null; // No TLD found
  }
}

function extractIP(myIP) {
  const ipRegex =
    /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

  const match = myIP.match(ipRegex);
  if (match && match[0]) {
    return match[0]; // Returns the full IP
  } else {
    return null; // No IP found
  }
}

// async function for fetch call
async function fetchDataAndUse (apiCallValue) {
    try {
        const response = await fetch(apiCallValue);
        const fetchedData = await response.json();
        return fetchedData
    } catch (error) {
        console.error('Error fetching data: ', error)
    }
    
}