// const APIKey = '52cdcc6215094b79bd176c92ddeb8b0d';
// const url = 'https://newsapi.org/v2/top-headlines?' +
//     'sources=bbc-news&apiKey=' + APIKey;
//
// var req = new Request(url);
//
//
// let resp = fetch(req)
//     .then(function(response) {
//         console.log('Responding...')
//         return response;
//     });
//
// resp.then(function (re) {
//
//
//     re.json().then(function (jsonResp) {
//         console.log('***JSON***')
//         console.log(jsonResp.articles);
//         console.log('++++')
//     })
//
// });
//
//
// self.addEventListener('install', event => { console.log('Installing service worker'); })
// self.addEventListener('activate', event => { console.log('Activating service worker'); })
//
// self.addEventListener('fetch', event => {
//     var requestUrl = new URL(event.request.url);
//
//     console.log("Just fetched: " + requestUrl);
// })