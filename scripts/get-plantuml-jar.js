#!/usr/bin/env node
'use strict'

var fs = require('fs')
var path = require('path')

var download = require('./download')

var JAR_DIR_PATH = path.join(__dirname, '../vendor')
var PLANTUML_JAR = path.join(JAR_DIR_PATH, 'plantuml.jar')

var PLANTUML_FILES_URL = 'http://beta.plantuml.net/'
var PLANTUML_FILES_JAR_PATH = 'plantuml.jar'

if (!fs.existsSync(JAR_DIR_PATH)) {
  fs.mkdirSync(JAR_DIR_PATH)
}

console.log('Downloading plantuml.jar', PLANTUML_FILES_URL + PLANTUML_FILES_JAR_PATH)
download(PLANTUML_FILES_URL + PLANTUML_FILES_JAR_PATH, PLANTUML_JAR, true)
