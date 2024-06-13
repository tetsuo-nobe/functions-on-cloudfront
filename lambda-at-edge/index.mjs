export const handler = async (event) => {
    const request = event.Records[0].cf.request;
    const querystring = request.querystring;

    if (request.uri != '/cherry.jpg') {
        // do not process if this is not an A-B test request
        return request;
    }

    const qsExperimentB= 'test=b';
    const pathExperimentA = '/test-a/cherry.jpg';
    const pathExperimentB = '/test-b/cherry.jpg';

    let experimentUri;
    if (querystring.indexOf(qsExperimentB) != -1) {
        console.log('Experiment B qs found');
        experimentUri = pathExperimentB;
    }
    else {
        console.log('Experiment B qs Not found');
        experimentUri = pathExperimentA;
    }
    


    request.uri = experimentUri;
    console.log(`Request uri set to "${request.uri}"`);
    return request;
};