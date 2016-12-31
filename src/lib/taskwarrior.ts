///<reference path='../node.d.ts'/>
/**
 * Project: i3status-taskwarrior
 *
 * @author Amado Martinez <http://amadomartinez.mx>
 */
import {execSync} from "child_process";

export var getIds = (filter) => {
    let ids = execSync("task " + filter + " _id").toString().trim().split("\n");
    if(ids.length == 1 && ids[0] == '') ids.pop();  // detect empty results
    return ids;
} ;

/**
 *
 * @url http://taskwarrior.org/docs/dom.html
 * @param prop
 * @param id
 * @returns {string}
 */
export var getProperty = (prop, id) => {
    if(id.trim().length == 0) throw new Error("id is empty.");
    return execSync("task _get " + id + "."+prop).toString().trim();
};

