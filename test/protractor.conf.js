exports.config = {
       capabilities: {
           'browserName': 'chrome',
           'chromeOptions': {
               args: ['--disable-web-security']
           }
       },
       baseUrl: 'http://localhost:8100',
       specs: [
           'e2e/*.spec.js'
       ],
       jasmineNodeOpts: {
           isVerbose: true,
       }
};
