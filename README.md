[![Build Status](https://travis-ci.org/ericmdantas/ngf.svg?branch=master)](https://travis-ci.org/ericmdantas/ngf)
[![Coverage Status](https://coveralls.io/repos/github/ericmdantas/ngf/badge.svg?branch=master)](https://coveralls.io/github/ericmdantas/ngf?branch=master)

Simple and short alias for the [`generator-ng-fullstack`](https://github.com/ericmdantas/generator-ng-fullstack).

### DISCLAIMER

This is a work in progress. Wait for 1.0.0 until you use it in your workflow - it shouldn't take long, though.

### What?

The idea is to have something similar to [`angular-cli`](https://github.com/angular/angular-cli) - but aimed to `ng-fullstack`.

### Why?

Because typing `yo ng-fullstack:component people_list_cmp --feature person` all the time sucks.

### How?

`ngf` simply passes the info to `ng-fullstack`, there's no black magic involved.

### API

Following what's done in `angular-cli`, we have the following params:


##### Component
```shell
 # creates a new component called people_list_cmp
 $ ngf g component people_list_cmp --feat person
```

##### Directive
```shell
 # creates a new directive called on_click
 $ ngf g directive on_click --feat lib
```

##### Model
```shell
 # creates a new model called car
 $ ngf g model car --feat car
```

### LICENSE

MIT
