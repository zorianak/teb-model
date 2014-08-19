$(document).ready(function() {
    // we take fight lenght in in minutes
    // for readability. So we have to turn that into
    // seconds because GCDs.
    var fightLength = $('#time').val() * 60;
    
    var sereneTeb = serenityGeneration(fightLength); 
    
    
    insertToPage(sereneTeb);
});

function insertToPage(sereneTeb) {
    
    var sereneOutput = $('#serenityOutput');
    
    sereneOutput.text(sereneTeb);
}