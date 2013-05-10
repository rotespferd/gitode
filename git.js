var sys = require('sys');
var exec = require('child_process').exec;


var basiccmd = "git ";

exports.init = function(dir) {
    var cmd = basiccmd + " init " + dir;
    execCmd(cmd);
};

exports.initBare = function(dir) {
    var cmd = basiccmd + " init --bare " + dir;
    execCmd(cmd);
};

exports.clone = function(repo, path) {
    console.log("Clone repo " + repo + " to path " + path);
  
    var cmd = basiccmd + "clone " + repo + " " + path;
    console.log(cmd);
    execCmd(cmd);
};

exports.commit = function(msg) {
    
};






// helper methods
function execCmd(cmd) {
    exec(cmd, puts);
}

 function puts(error, stdout, stderr) { sys.puts(stdout) };