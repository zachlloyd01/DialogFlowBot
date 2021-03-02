const express = require('express')

const app = express();

const fs = require('fs');


const port = 8080;

app.use(express.json());




// process.env.GOOGLE_APPLICATION_CREDENTIALS = {
//                                                 "type": "service_account",
//                                                 "project_id": "dialogflow-test-306401",
//                                                 "private_key_id": "593e2838975724452f1c87d8300d64d0ff1fa7cf",
//                                                 "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC31D9/pf8+ocXd\nCrOiWB4v+ZALM9pNtjSX0tZd5mk932wtgPA9lVuQNlY6k1cb4avD2xxAPeVIXKEK\ncp44AXxxRDAWYMPUdq34zNRqi+KN5Wvh1NmB9LMtagrWCS1CznHhxpigzsgvOVx2\nX5v12idNPTUnCghbWgMs/LZBBioDZ9Dq6SrXO+cXK8A8XStwoYeFlR7+bcdShs8k\ndT2cQURSc8xcBvaHDTrFpFaJYQXHehecA9ceL5EPX2d+S6oGX7+dYJ7fftbDwgPr\nM97p6+dcIFPsBNOSXQSk3gD/xHtsyNqC1J1Jtxsj1lOVMYKpFKryIQ0uuuXNFfFP\nS0xuJlhvAgMBAAECggEASy3AMkH+2uxp8PYZdME4x0H2yL4R/0oOxDBzfr9mNumS\nYiGjHmxgn9+48Aelzj9CcbzAFv25MRjAu3cYgasJ64CJcf1s2Q0YJPIPxOskYgd7\nUUYtFdqvFFmTyOjD29h19nGzpcArWjTJPZfoPmlTPWFUxXxy4nkzZ0iKeJk+wVkW\nnmIIlqFM6/QbeDaCqF3OtmKTWt6nO0pEVEWMA98RFYcLqBYWvZCDlAXW/Cl3wA40\n/2Jl1A6VbMjYMY+HfyPjRrWYqEbijPhLraaty99meXjRJk160Pe168D/ty0vtqSG\nidj04VpPcC4jejMe5UsoKv2bCGOKX2ELsoHAqcyKUQKBgQD4pDG14FTxzqsHHYoP\nvLcpr1EPu7u4iT2J4xfD4Ho6yxj8DHA3yHVetpdIkazwzz81moRusli9vcjCabN9\nbvyL392yDLUL1sg9rJJB1IVeJFnG7oz/IeKGxKycsNjFURDzClaV6DJ6sIvcLzGV\nXqN4ZsxoSN6k4naiA4eniljCMwKBgQC9RQKePWS8plimgs9puvqrlaWj9sepj0tM\nkRBzA8khImm4zab+b/jfguW//Smfs1hFukmLeJOzyR0aFTB0IDqCNbzaAhKbCSUE\ne5+6SXHmJVkQsejVMv/0zCA+Cw7fH8j4lVyhNwCd+zt0ZWH48I/TJGfSyJHlsM2M\nRvSc92Qs1QKBgQDk66+FB5TNyPy4IV9Cm/p7W5mjhbIQ9fJ9qGLyChQfW2yWaxFK\nmrpNSIlC3DTAxd8piCkUDgocL8bOECmce/nzAlsIGiD6VHaqKd/C0ls0UP2DZZDV\nOappcFyIK155VOjpC4Sqok0Pnso2IBFjt+2D5gmenjC22HZnNh7Ih1yu9wKBgBTX\nsacdWaeQpfiINTEOfyZAD4KT3X7locQnwWj5BMAaWwwX0Yj5aa2ra4ON7HSCunjL\nP+gU+ib1QbgqlzBikC7gnhBf5A6gniv1NSy9g8Z1XG6DOQGpYRhjFjXe399gT7BY\nOmAif3XmQbDarURNsXjt7GUA41go9Sm6cpuKfsSVAoGBAOBP0+vqL9lheIquqDTr\nPq4Ct4QwSmCe2B/O+zLths/pewQuafhmSjhsBdIdo8Q2bujsrgCsE8cETk/qFe0O\nhyEp9iAp4gZ4JPjh1gyXYTVQDS2mzeUQ1phaJcCUN0fCoZcOU0LFIvk+is5a21PK\nY0zwEm8jNCuz/4LShvknzN0c\n-----END PRIVATE KEY-----\n",
//                                                 "client_email": "full-account@dialogflow-test-306401.iam.gserviceaccount.com",
//                                                 "client_id": "100712548072138804982",
//                                                 "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//                                                 "token_uri": "https://oauth2.googleapis.com/token",
//                                                 "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//                                                 "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/full-account%40dialogflow-test-306401.iam.gserviceaccount.com"
//                                             };

/* API Routing */
const bot = require('./routes/bot');

app.use('/api/bot', bot);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});