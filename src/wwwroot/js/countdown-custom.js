jQuery(document).ready(function() {
    jQuery(function() {
        jQuery('#defaultCountdown').countdown({ until: new Date(2021, 11, 20, 0) }); // year, month, date, hour
    });
});