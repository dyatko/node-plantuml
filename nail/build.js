#!/usr/bin/env node
'use strict'

var path = require('path')
var shell = require('shelljs')

var DIR = __dirname
var PLANTUML_JAR = path.join(DIR, '../vendor/plantuml.jar')
var NAILGUN_JAR = path.join(DIR, '../node_modules/node-nailgun-server/vendor/nailgun.jar')
var PLANTUML_NAIL_JAR = path.join(DIR, 'plantumlnail.jar')
var PLANTUML_NAIL_JAVA = path.join(DIR, 'PlantumlNail.java')
var PLANTUML_NAIL_CLASS = 'PlantumlNail.class'

var commands = [
  'javac -cp ' + PLANTUML_JAR + ':' + NAILGUN_JAR + ' ' + PLANTUML_NAIL_JAVA,
  'jar -cfM ' + PLANTUML_NAIL_JAR + ' -C ' + DIR + ' ' + PLANTUML_NAIL_CLASS,
  'rm ' + path.join(DIR, PLANTUML_NAIL_CLASS)
]

commands.forEach(command => {
  console.log(command)

  const result = shell.exec(command)

  if (result.code) {
    console.log(result)
  }
})
