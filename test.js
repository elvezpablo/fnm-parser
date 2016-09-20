var fnm_rld = require("./index");


fnm_rld('./data/POINT.FNM').on("done", function(d) {
    console.log("done: ",d);
});

fnm_rld('./data/POINT.FNM', {
    map : {
        "02A" : [
            {
                "position" : 1,
                "length" : 3,
                "label" : "Test and things"
            }
        ]
    }
}).on("done", function(d) {
    console.log("done: ",d);
});

fnm_rld('./data/POINT.FNM', {
    map : {
        "02A" : [
            {
                "position" : 1,
                "length" : 3,
                "label" : "Test and things"
            }
        ]
    },
    override : true
}).on("done", function(d) {
    console.log("done: ",d);
});