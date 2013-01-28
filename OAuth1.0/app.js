var oAuthAdapter = require('/lib/oauth').create({
	service: 'serviceName',
	consumerKey: '-- YOUR CONSUMER KEY HERE --',
	consumerSecret: '-- YOUR CONSUMER SECRET HERE --',
	signatureMethod: '-- YOU SIGNATURE METHOD HERE -- ', // ex. PLAINTEXT, HMAC-SHA1
	requestTokenUrl: 'http://example.com/api/v1/token/request',
	accessTokenUrl: 'http://example.com/api/v1/token/access',
	authorizeUrl: 'http://example.com/account/authorize?oauth_token=',
	endpointUrl: 'http://example.com/api/v1/',
	callbackUrl: 'http://yoursite.com/callbacks/success/'
});


oAuthAdapter.makeRequest({
    apiPath: 'list/all/people',
    onSuccess: function(evt) {
        if (evt.success) {
            console.log(evt.responseText);
        }
    },
    onError: function(evt) {
        console.log(JSON.stringify(evt));
    }
});