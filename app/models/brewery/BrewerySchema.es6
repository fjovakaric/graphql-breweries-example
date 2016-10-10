import mongoose from 'mongoose';

let BrewerySchema = new mongoose.Schema({
    id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
    name: String,
    description: String,
    established: Number,
    country: String
});

BrewerySchema.set('toJSON', { getters: true });

let Brewery = mongoose.model('Brewery', BrewerySchema);

module.exports = Brewery;

module.exports.getBreweryById = (root, {id}) => {
    return new Promise((resolve, reject) => {
        Brewery.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res[id]);
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