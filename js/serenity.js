function serenityGeneration(fightLength) {
    // We are assuming that we do NOT use Tiger Palm during
    // the duration of Serenity. Also, we are assuming we use
    // Fists of Fury at the very last second. In addition,
    // we assume that we are NOT using the current Windwalker
    // set bonus (because this skews results).
    
    // Proper play also states we would have at least 3 Chi available
    // during the duration of Serenity.
    
    // set the duration in a variable in case it's changed later
    var duration = 10,
        cooldown = 90;
    
    // So, the first thing we need to find is how many Chi we
    // create over 10 seconds. This means we have to ignore
    // Mastery - because that's a moot point for now (we can
    // add in something for mastery later to compare how mastery
    // affects both talents, but for now, unimportant).
    
    // and every 2 seconds, we are using 4 chi. Since TeB per chi
    // seems to change, we'll make it a variable.
    var chiToTeb = 4;
    
    // So, we want to figure out how many chi we can use
    // over this duration. Let's put 2 Chi for BoK and RSK.
    
    var bokRsk = 2;
    var fof = 3;
    
    // keep in mind that perfect play will never use fof.
    
    // it's a very basic equation now. Let's find how many
    // uses we get during the fight length.
    var usage = Math.floor(fightLength/cooldown);
    
    var timeSerene = duration * usage;
    
    
    // So that gives us the amount of time we spend in Serenity.
    // But, this isn't actually that useful. That's a red herring
    // because we want to spend X amount of chi each time we use it - 
    // that's the important figure.
    // What we want is how much Chi we are using.
    var generateTeb = (((duration-1) * bokRsk) + fof) / chiToTeb;
    
    // After that, we do want to factor in Mastery. So, about 30-50% of
    // the time, we will be generating an extra stack of TeB.
    // So, while your console will say something like 5.25 Chi
    // generated, keep in mind that this will probably be more like doubled.
    
    return generateTeb;
}