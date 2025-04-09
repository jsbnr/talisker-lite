/* A simple example 
*
*  This example shows how to query some data and store either as a metric or event. Generally metrics should be preffered as they are more efficient to store and query.
*
*  You may query the metric with `select * from Metric where talisker.id='exampleUniqueAPICount'`
*  You may query the event with `select * from taliskerSample where talisker.id='exampleUniqueAPICount'`
*/

const YOUR_ACCOUNT_ID="3934073" // Your account ID ;

const TASKS = [{
    "id":"exampleUniqueAPICount",
    "name":"Example Metric - Unique API count",
    "accountId":YOUR_ACCOUNT_ID,
    "selector":"value",
    "ingestType": "metric",
    "query":"FROM Public_APICall select uniqueCount(api) as value since 10 minute ago"
},
{
    "id":"exampleUniqueAPICount",
    "name":"Example Event - Unique API count",
    "accountId":YOUR_ACCOUNT_ID,
    "selector":"value",
    "ingestType": "event",
    "query":"FROM Public_APICall select uniqueCount(api) as value since 10 minute ago"
},
];

const NAMESPACE ="talisker"  ;       // metric details are prefixed with this, best to leave as is
const NEWRELIC_DC = "US"  ;          // datacenter for account - US or EU
const ACCOUNT_ID = YOUR_ACCOUNT_ID;  // Account ID (required if ingesting events)
let INSERT_KEY=typeof $secure !== 'undefined' ? $secure.YOUR_SECURE_CRED_CONTAINING_INSERT_KEY : "YOUR-INGEST-API-KEY"; //use secure credentials if possible!
let QUERY_KEY= typeof $secure !== 'undefined' ? $secure.YOUR_SECURE_CRED_CONTAINING_QUERY_KEY : "YOUR-USER-API-KEY"; //use secure credentials if possible!

