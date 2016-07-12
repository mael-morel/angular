#!/usr/bin/env node

var express = require('./server');
var program = require('commander');

program
    .command('start')
    .action(function() {
        express.server().start();
    });

program
    .command('startBackend')
    .action(function() {
        express.server().startBackend();
    });

program.parse(process.argv);
