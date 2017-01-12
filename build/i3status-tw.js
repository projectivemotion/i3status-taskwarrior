#!/usr/bin/env node
"use strict";
var tw = require("./lib/taskwarrior");
var process = require("process");
var moment = require("moment");
var get_tw_status = function () {
    var status = "Active: ";
    var active_ids = tw.getIds("+ACTIVE");
    var now = moment();
    switch (active_ids.length) {
        case 0:
            status += "None";
            break;
        default:
            var id = active_ids.pop();
            var desc = tw.getProperty("description", id);
            var timediff = moment(tw.getProperty('start', id)).fromNow(true);
            status += " [ " + id + " ] " + desc + " ( " + timediff + " )";
    }
    return status;
};
function append_status(itemlist) {
    var status = get_tw_status();
    var myitem = {
        instance: "",
        name: "Node",
        color: "#fcc0cf",
        markup: "none",
        full_text: status
    };
    itemlist.unshift(myitem);
    return itemlist;
}
if (process.argv.length > 2 && process.argv[2] == 'json') {
    var list = [];
    append_status(list);
    console.log(JSON.stringify(list[0]));
    process.exit(0);
}
if (Boolean(process.stdin.isTTY)) {
    console.log(get_tw_status());
    process.exit(0);
}
process.stdin.on('readable', function () {
    var d = process.stdin.read();
    if (d === null)
        return;
    var dstr = d.toString();
    //console.log(dstr);
    if (dstr.match(/^,\[.*\]/)) {
        console.log(',' + JSON.stringify(append_status(JSON.parse(dstr.replace(/^,/, '')))));
    }
    else {
        process.stdout.write(dstr);
    }
});
//# sourceMappingURL=i3status-tw.js.map