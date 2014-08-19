$(document).ready(function() {
    // so we want to figure out the fightLength both upon 
    // load as well as when it changes
    $('#time').on('change', function() {
        // we take fight lenght in in minutes
        // for readability. So we have to turn that into
        // seconds because GCDs.
        var fightLength = $('#time').val() * 60;
        console.log(fightLength);
        var sereneTeb = serenityGeneration(fightLength); 
        
        insertToPage(sereneTeb);
    });
    
    
});

function insertToPage(sereneTeb) {
    
    
}