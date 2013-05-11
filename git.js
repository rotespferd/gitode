var sys = require('sys'),
    exec = require('child_process').exec,
    _ = require("underscore");


var basiccmd = "git ";

/*
* init/clone
*/

exports.init = function(dir, callback) {
    var cmd = basiccmd + " init " + dir;
    execCmd(cmd, callback);
};

exports.initBare = function(dir, callback) {
    var cmd = basiccmd + " init --bare " + dir;
    execCmd(cmd, callback);
};

exports.clone = function(repo, path, callback) {
    var cmd = basiccmd + "clone " + repo + " " + path;
    execCmd(cmd, callback);
};

/*
* branches
*/

exports.branchList = function(path, callback) {
    var branches = "";

    execCmd("cd " + path + " && " + basiccmd + " branch", function(output) {
        
        var branches = output.split("\n");

        _.each(branches, function(element, index, list) {
            list[index] = element.substring(2);
        });

        callback(branches);
    });
};

exports.branchCreate = function(path, name, callback) {
    // body
};

exports.branchChange = function(path, name, callback) {
    // body
};

/*
* commits
*/

exports.commit = function(msg) {
    
};






// helper methods
function execCmd(cmd, callback) {
    exec(cmd, function(error, stdout, stderr) {
        //console.log(stdout);
        callback(stdout);
    });
}