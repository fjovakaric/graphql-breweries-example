import mongoose from 'mongoose';

import Brewery from '../app/models/brewery/BrewerySchema.es6';

mongoose.connect('mongodb://localhost/beerdb');

let salto = new Brewery({
    name: 'Salto',
    description: '',
    established: 2012,
    country: 'Serbia'
});

let dogma = new Brewery({
    name: 'Dogma',
    description: '',
    established: 2016,
    country: 'Serbia'
});

let tron = new Brewery({
    name: 'Tron',
    description: '',
    established: 2015,
    country: 'Serbia'
});

let kas = new Brewery({
    name: 'Kash',
    description: '',
    established: 2014,
    country: 'Serbia'
});

salto.save();
dogma.save();
tron.save();
kas.save();

setTimeout(function() {
    mongoose.disconnect();
}, 1000);