/**
 * Created by tmin_lim on 15. 9. 19..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//object date
var sleepSchema = new Schema({
    asleep: Number,
    awake: Number,
    sleepEfficiency: Number,
    actualSleepTime: String,
    enterBed: String,
    leftBed: String
});
var actSchema = new Schema({
    distance: Number,
    activeMins: Number,
    floors: Number,
    steps: Number,
    burnedCalories: Number
});
var foodSchema = new Schema({
    toDrink: Number,
    caloriesIn: Number
});

var dateByDaySchema = new Schema({
    date: String,
    sleep: [{ type: Schema.Types.ObjectId, ref: 'sleep' }],
    activities: [{ type: Schema.Types.ObjectId, ref: 'act' }],
    food: [{ type: Schema.Types.ObjectId, ref: 'food' }]
});

//var sleep = mongoose.model('sleep', sleepSchema);
//var act = mongoose.model('act', actSchema);
//var food = mongoose.model('food', foodSchema);
//exports.dateByDaySchema = mongoose.model('dateByDaySchema', dateByDaySchema);


