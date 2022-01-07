var tools = {

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },

    rgbToHex(rgb) {
        return "#" + tools.componentToHex(rgb[0]) + tools.componentToHex(rgb[1]) + tools.componentToHex(rgb[2]) + tools.componentToHex(rgb[3]);
    },

    range(value, min, max) {
        if (value < min) {
            return min;
        }

        if (value > max) {
            return max;
        }

        return value;
    },

    rangeTest(value, min, max) {
        if (value < min || value > max) {
            return false;
        }

        return true;
    },

}