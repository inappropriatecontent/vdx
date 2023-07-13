'use strict';

var splitPathRe = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/;

var matchNameRe = /([^\\\/]+)$/;

function posixSplitPath(filename) {
    return splitPathRe.exec(filename).slice(1);
}

function posixGetFile(filepath) {
    return filepath.match(matchNameRe).shift();
}


export function filepath(pathString) {
    if (typeof pathString !== 'string') {
        throw new TypeError(
            "Parameter 'pathString' must be a string, not " + typeof pathString);
    }
    var allParts = posixSplitPath(pathString),
        theFile = posixGetFile(pathString);
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
}
