import express from 'express';
import path from 'path';

const port = 8000;
const app = express();

app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../app/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port: ' + port);
    }
});