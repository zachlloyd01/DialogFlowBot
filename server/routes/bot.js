const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const router = require('express').Router();

const projectId = 'dialogflow-test-306401'
const sessionId = uuid.v4();

// Create a new session
const sessionClient = new dialogflow.SessionsClient({
    keyFilename: './key.json'
});
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);


async function getInput(textInput='hello') {
    
    // The Request
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: textInput,
                // The language used by the client (en-US)
                languageCode: 'en-US',  
            }
        }
    };

    
    const responses = await sessionClient.detectIntent(request); // Send request
    console.log('Detected intent');

    const result = responses[0].queryResult; // The API response

    return result.fulfillmentText;

}

router.post('/sendmessage', function (req, res) {
    getInput(req.body.inputText)
    .then(dialogResult => {
        res.status(200).json(dialogResult);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;