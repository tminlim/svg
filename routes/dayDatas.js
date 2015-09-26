/**
 * Created by tmin_lim on 15. 9. 20..
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'); //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));

router.route('/')
    //GET all data by day
    .get(function(req, res, next) {
        //retrieve all data from Mongo fitbit collection
        var real;
        var goal;
        mongoose.model('dateByDay').find({}, function (err, dateByDay) {
            if (err) {
                return console.error(err);
            } else {
                console.log("ddddddd" + dateByDay)
                res.render('index.ejs', {
                    title: "hello world",
                    real: dateByDay,
                    goal: goal
                });
            }
        });

//router.route('/')
//    //GET all data by day
//    .get(function(req, res, next) {
//        //retrieve all data from Mongo fitbit collection
//        var real;
//        var goal;
//        mongoose.model('dateByDay').find().exec(function(err, dayData) {
//            if (err) {
//                return console.error(err);
//            } else {
//                console.log("ddddddd" + dayData)
//                res.render('index.ejs', {
//                    title: "hello world",
//                    real: dayData,
//                    goal: goal
//                });
//            }
//        });


                mongoose.model('goal').find({}, function (err, goals ) {
            if (err) {
                return console.error(err);
            } else {
                goal = goals.burnedCalories;
                console.log("hessssss");

                //goal = goals;

            }
        });



    })

module.exports = router;