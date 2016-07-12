#!/usr/bin/env node

var express = require('./server');
var karma = require('karma');
var program = require('commander');

program
    .command('test')
    .action(function() {
        var Server = karma.Server;
        var server = new Server({configFile: '../../../karma.conf.js'}, function(exitCode) {
            console.log('Karma has exited with ' + exitCode);
            process.exit(exitCode);
        });
        server.start();
    });

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
