///<reference path='node.d.ts'/>
/**
 * Project: i3status-taskwarrior
 *
 * @author Amado Martinez <http://amadomartinez.mx>
 */
import * as tw from "./lib/taskwarrior"
import process = require("process");
import moment = require("moment");

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
            status += ` [ ${id} ] ${desc} ( ${timediff} )`;
    }
    return status;
};

function append_status(itemlist){
    var status = get_tw_status();

    var myitem  =   {
        instance: "",
        name: "Node",
        color: "#ff0000",
        markup: "none",
        full_text: status
    };

    itemlist.unshift(myitem);
    return itemlist;
}


if(Boolean((<any>process.stdin).isTTY))
{
    console.log(get_tw_status());
    process.exit(0);
}

process.stdin.on('readable', () => {
    var d = process.stdin.read();
    if(d === null) return;

    var dstr = d.toString();

    //console.log(dstr);
    if(dstr.match(/^,\[.*\]/)){
        console.log(','+JSON.stringify(
            append_status(JSON.parse(dstr.replace(/^,/,'')))
        ));
    }else{
        process.stdout.write(dstr);
    }
});
