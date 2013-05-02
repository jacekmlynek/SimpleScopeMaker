var ScopeMaker = (function() {
    "use strict";

    var createChildScope = function(parentScope, segmentIndex, splitedSegments) {
        var segmentName = splitedSegments[segmentIndex];
        
        if (parentScope[segmentName] === undefined
            || parentScope[segmentName] === null) {

            parentScope[segmentName] = {};
        }
        
        var child = parentScope[segmentName];
        
        segmentIndex += 1;

        if (segmentIndex < splitedSegments.length) {
            return createChildScope(child, segmentIndex, splitedSegments);
        }

        return child;
    };
    
    var createGlobalObjectByName = function (objectName) {
        
        var rawCodeToCreateGlobalIfNotExit = "if (typeof "+ objectName +" === 'undefined') {"
        + objectName + " = {}; } return " + objectName + ";";
   
        return new Function(rawCodeToCreateGlobalIfNotExit)();
    };

    var validatePath = function(scopeFullPath) {
        
        if (scopeFullPath === undefined || scopeFullPath === null
            || scopeFullPath === '') {

            throw new Error("You must pass scope path");
        }
    };

    var createScope = function(scopeFullPath, block) {
            
        validatePath(scopeFullPath);
        
        var segmentRegexSeparator = /\s*\.\s*/;
        var splitedSegments = scopeFullPath.split(segmentRegexSeparator);
        
        var firstChild = createGlobalObjectByName(splitedSegments[0]);
        var lastChild = firstChild;

        if(splitedSegments.length > 1) {
            lastChild = createChildScope(firstChild, 1, splitedSegments);
        }

        if(block !== undefined && block !== null) {
            block(lastChild);
        }

        return lastChild;
    };

    return createScope;
})();

(function() {
    if (typeof module !== 'undefined' && module.exports !== undefined) {
            module.exports.ScopeMaker = ScopeMaker;
    }
})();

