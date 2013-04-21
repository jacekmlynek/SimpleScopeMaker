describe('ScopeMaker', function(){
    var subject = require('./ScopeMaker.js').ScopeMaker;
    
    var sherableInvalidPathExample = function(path){
        it('should raise exception with message: You must pass scope path', function(){
            expect(function(){subject(path)}).toThrow('You must pass scope path');
        }); 
    };

    describe('Full scope path is undefine', function(){
        sherableInvalidPathExample();
    });

    describe('Full scope path is null', function(){
        sherableInvalidPathExample(null);
    });

    describe('Full scope path is empty', function(){
        sherableInvalidPathExample('');
    });

    describe( 'Full scope path is valid', function() {
        it('should return not null object', function(){
            expect(subject('scope')).not.toBeNull();
        });

        it('should add first path part as global globalObject object property', function(){
            subject('firstPart');
            
            expect(firstPart).not.toBeUndefined();
        });

        it('should not create new global globalObject property if already exist', function(){
            var existingProperty = {child: {}};
            existingProperty = existingProperty;
            
            subject('existingProperty');

            expect(existingProperty).not.toBe({});
            expect(existingProperty).toBe(existingProperty);
        });

        describe('Full path contains more that one segment', function(){
            it('should add next segment as property to previous one', function() {
                subject('previous.next');

                expect(previous['next']).not.toBeUndefined();
            });

            it('should return object equal to last nested property of global globalObject', function(){
                var scope = subject('first.last');
                scope.NewProperty = "Value to change defualt empty object";

                expect(scope).toBe(first['last']);
            });

            describe('Full path contains white space around dots', function(){
                it('should add new properties ignoring white spaces', function(){
                    subject('firstDummyName   .  secondDummyName');

                    expect(firstDummyName).not.toBeUndefined();
                    expect(firstDummyName['secondDummyName']).not.toBeUndefined();
                });
            });
        });
    });
});
