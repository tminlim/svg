/**
 * Created by tmin_lim on 15. 9. 20..
 */
var mongoose = require('mongoose');

//object goal
var goalSchema  = new mongoose.Schema({
    burnedCalories: Number,
    distance: Number,
    floors: Number,
    steps: Number,
    caloriesInOut: Array
});

//mongoose.model('goal',goalSchema);