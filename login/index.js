const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_ID = 'Iv1.57b730c6df216a98'; // Client ID fornito da GitHub
const CLIENT_SECRET = 'yQdtdA9rsKR97rdDv2SgTDM/3PT6+UjUIcUdyzKI3kM='; // Private Key fornita da GitHub
const REDIRECT_URI = 'https://gjdev.it'; // URI di reindirizzamento del tuo sito

app.get('/auth/callback', async (req, res) => {
    const code = req.query.code;

    try {
        // Exchange code for access token
        const { data } = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
            redirect_uri: REDIRECT_URI
        }, {
            headers: {
                'Accept': 'application/json'
            }
        });

        const accessToken = data.access_token;

        // Use access token to fetch user data
        const userDataResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });

        const userData = userDataResponse.data;

        // Here you can handle the user data as needed (e.g., save to database, create session, etc.)

        res.send(userData);
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).send('Authentication failed');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
