(function($) {
    $(window).ready(updateSolarSystem);
    $(window).resize(updateSolarSystem);
    var orbit_ratios = { // Relative to the sun (not to scale)
        'mercury-orbit' : 1.60,
        'venus-orbit'   : 1.95,
        'earth-orbit'   : 2.85,
        'mars-orbit'    : 3.70,
        'jupiter-orbit' : 5.20,
        'saturn-orbit'  : 6.65,
        'uranus-orbit'  : 7.80,
        'neptune-orbit' : 8.80,
        'pluto-orbit'   : 10.50,
    },
    size_ratios = { // Relative to the sun (not to scale)
        'mercury' : 0.08,
        'venus'   : 0.10,
        'earth'   : 0.28,
        'mars'    : 0.25,
        'jupiter' : 0.60,
        'saturn'  : 0.55,
        'uranus'  : 0.38,
        'neptune' : 0.38,
        'pluto'   : 0.05
    }

    /**
     * Resizes the solar system when the window size changes
     */
    function updateSolarSystem(){
        // Update and position
        var sun_h = $('#sun').height();
        $('#sun').css('margin-top', -(sun_h/2));
        $('#sun').css('margin-left', -(sun_h/2));
        // Update planet sizes in relation to sun's new size
        $('.planet').each(function(index){
            var val = sun_h * size_ratios[$(this).attr('id')];
            $(this).css('width', val);
            $(this).css('height', val);
            // Center planets on orbit
            $(this).css('margin-top', -(val/2));
        });
        // Update planet orbits in relation to sun's size
        $('.orbit').each(function(index){
            var val = sun_h * orbit_ratios[$(this).attr('id')];
            $(this).css('width', val);
            $(this).css('height', val);
            // Center orbit around sun
            $(this).css('margin-top', -(val/2));
            $(this).css('margin-left', -(val/2));
        });
    }
})(jQuery);
