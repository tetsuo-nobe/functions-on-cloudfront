function handler(event) {
    var request = event.request;
    var headers = request.headers;
    var host = request.headers.host.value;
    var uri  = request.uri;
    var country = 'JP' // Choose a country code
    var newurl = `https://${host}/jp/index.html` // Change the redirect URL to your choice 
  
    if (headers['cloudfront-viewer-country']) {
        console.log(request);
        var countryCode = headers['cloudfront-viewer-country'].value;
        if (countryCode === country) {
            if (uri.indexOf('/jp/') == -1) {
                var response = {
                    statusCode: 302,
                    statusDescription: 'Found',
                    headers:
                        { "location": { "value": newurl } }
                    }
    
                return response;
            }
        }
    }
    return request;
}