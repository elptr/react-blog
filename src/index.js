import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; //you don't need it is default anyway

axios.interceptors.request.use(requestConfig =>{
    console.log(requestConfig);
    //Edit requestConfig, add headers or sth
    return requestConfig;
}, error => {
    console.log(error);
    //To show sth in UI and store sth globally in log file for example
    //when no internet?
    return Promise.reject(error)
    });

axios.interceptors.response.use(responseSuccess =>{
    console.log(responseSuccess);
    //Edit requestConfig, add headers or sth
    return responseSuccess;
}, error => {
    console.log(error);
    //To show sth in UI and store sth globally in log file for example
    //when no internet?
    return Promise.reject(error)
});


//Removing interceptors
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
