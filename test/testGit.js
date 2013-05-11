var should = require("should"),
    git = require("../git.js"),
    fs = require("fs.extra");

// address of test repo
var testRepo = "https://github.com/rotespferd/gitode.git";

// path of local test repos
var pathRepos = "test/repos";

describe("Gitode", function() {
    before(function(done) {
        fs.mkdirSync(pathRepos);
        done();
    });

    after(function(done) {
        fs.rmrf(pathRepos, function(err) {
            done();
        });
    });

    describe("#init()", function() {
        it("should init an empty repo in given dir", function(done) {
            var repoName = "/initTestRepo";
            git.init(pathRepos + repoName, function() {
                fs.existsSync(pathRepos + repoName).should.be.true;
                fs.existsSync(pathRepos + repoName + "/.git").should.be.true;
                done();
            });
        });
    });

    describe("#initBare()", function() {
        it("should init an empty bare repo in given dir", function(done) {
            var repoName = "/initBareTestRepo";
            git.initBare(pathRepos + repoName, function() {
                fs.existsSync(pathRepos + repoName).should.be.true;
                fs.existsSync(pathRepos + repoName + "/.git").should.not.be.true;

                fs.existsSync(pathRepos + repoName + "/branches").should.be.true;
                fs.existsSync(pathRepos + repoName + "/hooks").should.be.true;
                fs.existsSync(pathRepos + repoName + "/info").should.be.true;
                fs.existsSync(pathRepos + repoName + "/objects").should.be.true;
                fs.existsSync(pathRepos + repoName + "/refs").should.be.true;
                
                fs.existsSync(pathRepos + repoName + "/HEAD").should.be.true;
                
                done();
            });
        });
    });

    describe("#clone()", function() {
        it("should clone an online repo", function(done) {
            var repoName = "/cloneTestRepo";
            git.clone(testRepo, pathRepos + repoName, function() {
                fs.existsSync(pathRepos + repoName).should.be.true;
                fs.existsSync(pathRepos + repoName + "/.git").should.be.true;
                done();
            });
        });
    });
});