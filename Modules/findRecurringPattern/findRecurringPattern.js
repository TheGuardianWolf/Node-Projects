module.export = function( val ){
    val = (val || "").toString();
    var RE_PatternInRepeatDec = /(?:[^\.]+\.\d*)(\d{2,})+(?:\1)$/,
        RE_RepeatingNums = /^(\d+)(?:\1)$/,
        match = RE_PatternInRepeatDec.exec( val );

    if( !match ){
        // Try again but take off last digit incase of precision error.
        val = val.replace( /\d$/, '' );
        match = RE_PatternInRepeatDec.exec( val );
    }
    if( match && 1 < match.length ){
        // Reset the match[1] if there is a pattern inside the matched pattern.
       match[1] = RE_RepeatingNums.test(match[1]) ? RE_RepeatingNums.exec(match[1])[1] : match[1];
    }
    return match;
};