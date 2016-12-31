"use strict";
///<reference path='../node.d.ts'/>
/**
 * Project: i3status-taskwarrior
 *
 * @author Amado Martinez <http://amadomartinez.mx>
 */
var child_process_1 = require("child_process");
exports.getIds = function (filter) {
    var ids = child_process_1.execSync("task " + filter + " _id").toString().trim().split("\n");
    if (ids.length == 1 && ids[0] == '')
        ids.pop(); // detect empty results
    return ids;
};
/**
 *
 * @url http://taskwarrior.org/docs/dom.html
 * @param prop
 * @param id
 * @returns {string}
 */
exports.getProperty = function (prop, id) {
    if (id.trim().length == 0)
        throw new Error("id is empty.");
    return child_process_1.execSync("task _get " + id + "." + prop).toString().trim();
};
//# sourceMappingURL=taskwarrior.js.map