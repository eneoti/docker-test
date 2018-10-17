'use strict'
var dockerTest = require('../')

describe('docker test', function () {
	it('should done when run run container ', function (done) {
    		var docker = new dockerTest.DockerTest()
    		docker.RunContainer("redis:5.0-rc-alpine",6379,"redis-test").then(function(result){
    			docker.StopContainer("redis-test").then(function(result){
    			 	done();
    			})
    		})
	    })
})
