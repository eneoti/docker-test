'use strict'

var util = require('util');
var child_process = require('child_process');

function DockerTest() {
	this.RunContainer=function(image, port,name,cb){
		return new Promise(function (resolve, reject) {
			if(!image||!port){
				return reject(new Error('can not run empty image or port'));
			}
			var bash=`docker run -d -p ${port}:${port} --name ${name} ${image} `;
			excuteBash(bash).then(function(result){
				if(cb){
					cb();
				}
				resolve();

			}).catch(function(err){
				 return reject(err);
			})
			
		})
	}

	this.StopContainer=function(name,cb){
		return new Promise(function (resolve, reject) {
			if(!name){
				return reject(new Error('can not stop unname container'));
			}
			var bash=`docker rm -f  ${name}`;
			excuteBash(bash).then(function(result){
				resolve();
			}).catch(function(err){
				 return reject(err);
			})
			
		})
	}


	function excuteBash(bash)
	{
		return new Promise(function (resolve, reject) {
			var temp = child_process.exec(bash, function(err, stdout, stderr) {
				if (err) {
				    return reject(err);
				}
			});

			temp.on('exit', function (code) {
			  resolve()
			});
		})
	}
	
	
}
module.exports = DockerTest;
