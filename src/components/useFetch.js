import { useState, useEffect } from 'react';

// function UseFetch ({ url }) {
const useFetch = ( url ) => { // import url fetch endpoint as props

  //console.log(`useFetch: ${url}`); //


    const [fetchdata, setFetchdata] = useState(null); // state for fetch data
    const [fetchstatus, setFetchStatus] = useState(true); // state for fetch data status
    const [error, setError] = useState(null); // state for error status from fetch data or fetch status


  // useEffect - pass function as argument each time there is a re-render of the data state 
  useEffect (() => {

    const abortCont = new AbortController(); // used to unmount page state on page change to avoid state conflicts

    setTimeout(() => { // add delay to code to for testing only

      fetch(url, { signal: abortCont.signal }) // fetch url endpoint + stop loading current page state when going to another page state

        // returns a promise
        .then(res => { // returns a response object
          // console.log(res); // check response object
          if(!res.ok) { // if res.ok' not equal to 'yes', then fire error
            throw Error('Could not fetch the data for that resource!') // error message to show
          }
          return res.json(); // converts object to useable json object if no issues
        })

        // returns another promise
        // if no issues
        .then(data => { // final step to get json object as data
          // console.log(data); // check data is being fetched via console
          setFetchdata(data); // update data state to get and use JSON data
          //setFetchdata(data.results); // update data state to get and use JSON data
          setFetchStatus(false); // show loading... message untill JSON data fetched, then hide
          setError(null); // if no error, set error state status to 'null' so no error message shown
        })

        // if issues: capture error if cant connect to JSON server or fetch url issue display error
        .catch(err => { // catch block
          // console.log(err.message) // catches error if unable to connect to JSON server or get API
          if (err.name === 'AbortError') { // check if error is loading page state error, if so ignore
            // console.log('fetch aborted'); // test message in console
          } else { // if not page change state error, continue to with other errors
            setFetchStatus(false); // hide loading... message if error
            setError(err.message); // get/show error message
          }
        })

    }, 0); // wait 2 seconds, set to zero for production

    return () => abortCont.abort(); // stops loading page state on page change
  }, [url]); 

  return { fetchdata, fetchstatus, error } // get current state of each of the 3 hooks

}



// export hook as new custom reuseable hook
//export default UseFetch;
export default useFetch;