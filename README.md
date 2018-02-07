[![Build Status](https://travis-ci.org/ericmdantas/ngf.svg?branch=master)](https://travis-ci.org/ericmdantas/ngf)
[![Coverage Status](https://coveralls.io/repos/github/ericmdantas/ngf/badge.svg?branch=master)](https://coveralls.io/github/ericmdantas/ngf?branch=master)

Simple alias for [`generator-ng-fullstack`](https://github.com/ericmdantas/generator-ng-fullstack).

### Prerequisites

You'll need to have both `yo` and `generator-ng-fullstack` installed globally

```shell
$ npm i -g yo
```

```shell
$ npm i -g generator-ng-fullstack
```

### Install

```shell
$ npm i -g ngf
```

### What?

The idea is to have something similar to [`angular-cli`](https://github.com/angular/angular-cli) - but with `ng-fullstack` in mind.

### Why?

Because typing `yo ng-fullstack:component people_cmp --feature person` all the time sucks.

### How?

`ngf` simply passes the info down to `ng-fullstack`, there's no black magic involved.

### API

Answer some questions by runing:

```shell
$ ngf

# runs `yo ng-fullstack` behind the hood
```

Create components, services, models and many others, by running:

```shell
 $ ngf g cmp people_cmp --ft person

 # creates a new component called people_cmp
 # it's the same as running: `yo ng-fullstack:component people_cmp --feature person`

 # ngf: is the responsible to talk with ng-fullstack
 # g: means `generate`
 # cmp: is the type of file that's being created - a component
 # people_cmp: is the name given to the file/component
 # --ft: means the `--feature`, which is the context to the created file
 ```

Check the [API section in the wiki](https://github.com/ericmdantas/ngf/wiki/API) and the [pro tips](https://github.com/ericmdantas/ngf/wiki/Pro-tips) for improvements in your workflow.

### LICENSE

MIT
