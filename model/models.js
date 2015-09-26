var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//object goal
var goalSchema  = new Schema({
    burnedCalories: Number,
    distance: Number,
    floors: Number,
    steps: Number,
    caloriesInOut: Array
});
//object date
var sleep = new Schema({
    asleep: Number,
    awake: Number,
    sleepEfficiency: Number,
    actualSleepTime: String,
    enterBed: String,
    leftBed: String
});

var users = new Schema ({
    email:String,
    //name: String,
    //password: String,
    //auth: String
});

var act = new Schema({
    distance: Number,
    activeMins: Number,
    floors: Number,
    steps: Number,
    burnedCalories: Number
});
var food = new Schema({
    toDrink: Number,
    caloriesIn: Number
});

var dataByDay = new Schema({
    dddd:String,
    //sleep: [{ type: Schema.Types.ObjectId, ref: 'sleep' }],
    //activities: [{ type: Schema.Types.ObjectId, ref: 'act' }],
    //food: [{ type: Schema.Types.ObjectId, ref: 'food' }]
});

exports.users = mongoose.model('users', users);

exports.sleep = mongoose.model('sleep', sleep);
exports.act = mongoose.model('act', act);
exports.food = mongoose.model('food', food);
exports.dataByDay = mongoose.model('dataByDay', dataByDay);
exports.goal = mongoose.model('goal',goalSchema);