#! /usr/local/bin/node

var linebyline = require("linebyline"),
    EventEmitter = require('events').EventEmitter,
    util = require('util'),
    lookup = require("./lookup"),
    assign = require("lodash/Object/assign");

var makeLineParser = function(line) {
   return {
      getRecordID : function() {
         return line.substr(0,3).trim();
      },
      getData : function(position, length, process) {
         var d = line.split("").splice(position-1, length).join("").trim();
         return (process) ? process(d) : d;

      }
   }
};


var fnm_rld = module.exports = function(file, opts) {
   if (!(this instanceof fnm_rld)) return new fnm_rld(file, opts);

    EventEmitter.call(this);
    opts = opts || {};
    if("map" in opts) {
        if("override" in opts && opts.override === true) {
            lookup = opts.map;
        } else {
            lookup = assign(lookup, opts.map);
        }
    }

   var parser,
       map,
       item,
       data = {},
       self = this;

   var fnm_file = linebyline(file);
   fnm_file.on('line', function(line) {
      parser = makeLineParser(line);
      if(parser.getRecordID() in lookup) {
         recordId = parser.getRecordID();
         map = lookup[recordId];
         var section = {};
         for(var i=0; i < map.length; i++) {
            item = map[i];
            item.data = parser.getData(item.position, item.length, item.process);
            var entry={};
            entry[item.label]=item.data;
            section[item.label]=item.data
         }
         if (! data[recordId]){
            data[recordId]=section;
         }
         else {
            tmp = data[recordId];
            data[recordId]=[];
            data[recordId].push(tmp);
            data[recordId].push(section);
         }
         
      }
   }).on('error', function(err) {
      self.emit('error', err);
   })
    .on('close', function() {
      self.emit('done', data);
   });
};
util.inherits(fnm_rld, EventEmitter);

