[![Build Status](https://travis-ci.org/ericmdantas/ngf.svg?branch=master)](https://travis-ci.org/ericmdantas/ngf)
[![Coverage Status](https://coveralls.io/repos/github/ericmdantas/ngf/badge.svg?branch=master)](https://coveralls.io/github/ericmdantas/ngf?branch=master)

Simple alias for [`generator-ng-fullstack`](https://github.com/ericmdantas/generator-ng-fullstack).

### DISCLAIMER

This is a work in progress. Wait for 1.0.0 until you use it in your workflow.

### What?

The idea is to have something similar to [`angular-cli`](https://github.com/angular/angular-cli) - but with `ng-fullstack` in mind.

### Why?

Because typing `yo ng-fullstack:component people_list_cmp --feature person` all the time sucks.

### How?

`ngf` simply passes the info to `ng-fullstack`, there's no black magic involved.

### API

Following what's done in `angular-cli`, we have:

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

And much more.


Check the [API section in the wiki](https://github.com/ericmdantas/ngf/wiki/API) to know more.

### LICENSE

MIT
