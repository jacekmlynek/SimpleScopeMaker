ScopeMaker = function(scopeFullPath){
    
    if(scopeFullPath === undefined || scopeFullPath === null || scopeFullPath === '')
    {
        throw Error("You must pass scope path");
    }

    var segmentRegexSeparator = /\s*\.\s*/;
    var splitedSegments = scopeFullPath.split(segmentRegexSeparator);

    var createChildScope = function(parentScope, segmentIndex){
        var segmentName = splitedSegments[segmentIndex];
        
        if(parentScope[segmentName] === undefined
            || parentScope[segmentName] === null)
        {
            parentScope[segmentName] = {};
        }
        
        var child = parentScope[segmentName];
        
        segmentIndex += 1;

        if(segmentIndex < splitedSegments.length)
        {
            return createChildScope(child, segmentIndex);
        }

        return child;
    };

    var lastChild = createChildScope(window, 0);

    return lastChild;
};
