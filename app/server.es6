import express from 'express';
import path from 'path';

import webpack from 'webpack';
import config from '../webpack.config.es6';

import {graphql} from 'graphql';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import schema from './schema';

const port = 8000;
const app = express();

// Webpack setup
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Always return index.html
app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../app/index.html'));
});

//GraphQL setup
const db = mongoose.connection;
app.use(bodyparser.text({type: 'application/graphql'}));

app.post('/graphql', (req, res) => {
    //Execute the query
    graphql(schema, req.body)
        .then((result) => {
            res.send(result);
        });
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port: ' + port);
        mongoose.connect('mongodb://localhost/beerdb');
    }
});