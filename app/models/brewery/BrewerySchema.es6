import mongoose from 'mongoose';

let BrewerySchema = new mongoose.Schema({
    id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
    name: String,
    description: String,
    established: Number,
    website: String,
    country: String
});

BrewerySchema.set('toJSON', { getters: true });

let Brewery = mongoose.model('Brewery', BrewerySchema);

module.exports = Brewery;

module.exports.getBreweryById = (root, {id}) => {
    return new Promise((resolve, reject) => {
        Brewery.findOne({_id: id}).exec((err, res) => {
            err ? reject(err) : resolve(res);
        })
    });
};

module.exports.getListOfBreweries = () => {
    return new Promise((resolve, reject) => {
        Brewery.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports.getFirst = () => {
    return new Promise((resolve, reject) => {
        Brewery.findOne({}).exec((err, res) => {
            err ? reject(err) : resolve(res);
        });
    })
};