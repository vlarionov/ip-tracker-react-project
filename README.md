Live demo of the application can be found at:
https://vlarionov.github.io/ip-tracker-react-project/

How to use the IP Adress Tracker

Simply input an IP address or web domain into the search field and click the arrow button to obtain IP Adress, Location, Timezone, and ISP information.

Notes: 
- The application currently supports IPv4 only, it does not support IPv6. Attempting to search an IPv6 address will result in an alert being returned.

- For web domain inputs omit the "https://" at the begining of the domain, otherwise the API will return an HTTP error. E.g. "mail.google.com" is a valid input, while "https://mail.google.com" will return an error.

- For web domain inputs the application only accepts web domains ending at the top level domain. E.g., "mail.google.com" is a valid input, while "mail.google.com/mail" will return an error. The application looks for the last dot followed by 2 to 6 alphanumeric characters, optionally followed by another dot and 2 alphanumeric characters for country code top level domains. E.g. "yandex.com.am" is a valid web domain input.
