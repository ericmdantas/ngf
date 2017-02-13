[![Build Status](https://travis-ci.org/ericmdantas/ngf.svg?branch=master)](https://travis-ci.org/ericmdantas/ngf)
[![Coverage Status](https://coveralls.io/repos/github/ericmdantas/ngf/badge.svg?branch=master)](https://coveralls.io/github/ericmdantas/ngf?branch=master)

Simple alias for [`generator-ng-fullstack`](https://github.com/ericmdantas/generator-ng-fullstack).

### Install

```shell
$ npm i -g ngf
```

### What?

The idea is to have something similar to [`angular-cli`](https://github.com/angular/angular-cli) - but with `ng-fullstack` in mind.

### Why?

Because typing `yo ng-fullstack:component people_list_cmp --feature person` all the time sucks.

### How?

`ngf` simply passes the info to `ng-fullstack`, there's no black magic involved.

### API

Following what's done in `angular-cli`, we have:

```shell
 $ ngf g component people_list_cmp --ft person

 # creates a new component called people_list_cmp

 # ngf: is the responsible to talk with ng-fullstack
 # g: means `generate`
 # component: is the type of file that's being created
 # people_list_cmp: is the name given to the file/component
 # --ft: means the `--feature`, which is the context to the created file
 ```

Check the [API section in the wiki](https://github.com/ericmdantas/ngf/wiki/API) for more.

### LICENSE

MIT
