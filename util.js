function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function hexToRgba(hex, a) {
    var rgb = hexToRgb(hex);
    return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + a + ')';
}


function randomBrightColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    r = g = b = 0;
    while (r + g + b < 16) {
        r = Math.floor(Math.random() * 16);
        g = Math.floor(Math.random() * 16);
        b = Math.floor(Math.random() * 16);
    }
    color += letters[r];
    color += letters[g];
    color += letters[b];
    return color;
}
