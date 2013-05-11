var sys = require('sys');
var exec = require('child_process').exec;


var basiccmd = "git ";

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

exports.commit = function(msg) {
    
};






// helper methods
function execCmd(cmd, callback) {
    exec(cmd, function(error, stdout, stderr) {
        //console.log(stdout);
        callback();
    });
}