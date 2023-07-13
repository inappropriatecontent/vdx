'use strict';

if (!String.prototype.toTitleCase) {}

var filePathRe = /^(?:file:\/\/\/media\/removable\/)(?<path>(?<dir>[^\/]*)(?:\/(?<sub>.*))?)\/(?<fn>(?<name>[^\/]*)(?<ext>\.[^\.]{3,4}))$/;
var videoExtRe = /(avi|mp4|mpeg|ogg|webm|mov)$/;
var audioExtRe = /(wave|wav|x-wav|x-pn-wav|webm|ogg)$/;
var matchNameRe = /([^\\\/]+)$/;

function testAndType(testPath) {
     return videoExtRe.test(testPath) ? 'video' : audioExtRe.test(testPath) ? 'audio' : -new SyntaxError("Provided file is neither audio nor video. No can can see you or hear you.")
}

return function filepath(pathString) {

     if (typeof pathString !== 'string') {
          throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
     }

     let type = testAndType(pathString);

     if (typeof pathString !== 'string') {
          console.log(type.captureStackTrace());
          throw window.alert('Bad File!');
     }

     if (!allParts || allParts.length !== 5) {
          throw new TypeError("Invalid path '" + pathString + "'");
     }

     return {
          file: theFile,
          root: allParts[1],
          dir: allParts[0].slice(0, -1),
          base: allParts[2],
          ext: allParts[4],
          name: allParts[3]
     };

};
