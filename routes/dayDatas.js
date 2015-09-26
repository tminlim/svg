/**
 * Created by tmin_lim on 15. 9. 20..
 */
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'); //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
var dayDatas = require('../model/dayDatas.js');
var models = require('../model/models.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));



//router.get("/clear", function(req, res) {
//    console.log("clear");
//    models.dataByDay.find({}, function (err, data){
//        console.log(data);
//        //res.render('index', {title: "Express", real: dateByDay});
//    });
//});

router.get("/dd", function(req, res){
    models.users.find({}, function(err, data){
        console.log("?");
     console.log(data);
    });
});

router.get("/hello", function(req, res){
    models.dataByDay.find({}, function(err, data){
        console.log("!");
        console.log(data);
    });
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

        //
        //model('goal').find({}, function (err, goals ) {
        //    if (err) {
        //        return console.error(err);
        //    } else {
        //        goal = goals.burnedCalories;
        //        console.log("hessssss");
        //
        //        //goal = goals;
        //
        //    }
        //});





module.exports = router;