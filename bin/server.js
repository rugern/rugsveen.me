const path = require('path');
const express = require('express');

const app = express();
const serverPort = process.env.PORT || 3000;


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(serverPort, 'localhost', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`Listening at http://localhost:${serverPort}`);
});
