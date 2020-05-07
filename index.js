#! /usr/local/bin/node

var linebyline = require("linebyline"),
  EventEmitter = require("events").EventEmitter,
  util = require("util"),
  lookup = require("./lookup"),
  object = require("lodash/object");

var makeLineParser = function (line) {
  return {
    getRecordID: function () {
      return line.substr(0, 3).trim();
    },
    getData: function (position, length, process) {
      var d = line
        .split("")
        .splice(position - 1, length)
        .join("")
        .trim();
      return process ? process(d) : d;
    },
  };
};

var fnm_rld = (module.exports = function (file, opts) {
  if (!(this instanceof fnm_rld)) return new fnm_rld(file, opts);

  EventEmitter.call(this);
  opts = opts || {};
  if ("map" in opts) {
    if ("override" in opts && opts.override === true) {
      lookup = opts.map;
    } else {
      lookup = object.assign(lookup, opts.map);
    }
  }

  var parser,
    map,
    item,
    data = {},
    self = this;

  var addSection = function (section) {
    data[section] = [];
    return data[section];
  };
  var fnm_file = linebyline(file);
  fnm_file
    .on("line", function (line) {
      parser = makeLineParser(line);
      if (parser.getRecordID() in lookup) {
        map = lookup[parser.getRecordID()];
        var section = addSection(parser.getRecordID());
        for (var i = 0; i < map.length; i++) {
          item = map[i];
          item.data = parser.getData(item.position, item.length, item.process);
          section.push({
            label: item.label,
            data: item.data,
          });
        }
      }
    })
    .on("error", function (err) {
      self.emit("error", err);
    })
    .on("close", function () {
      self.emit("done", data);
    });
});
util.inherits(fnm_rld, EventEmitter);
