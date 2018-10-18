# Overview
Library for run docker by nodejs

# Support
* RunContainer
* StopContainer

# How to use
- Install
```
    npm install docker-testing
```

- Example
```
    var docker = new dockerTest.DockerTest()
    docker.RunContainer("redis:5.0-rc-alpine",6379,"redis-test").then(function(result){
       //
    })

```
