var utilites = {
    isEmpty:function (input) {
        if (typeof input == "undefined") {
            return true;
        } else {
            var lstrTempstring = new String(input);
            lstrTempstring = lstrTempstring.trim(); //this is needed
            if (lstrTempstring == "" || lstrTempstring == "undefined") {
                return true;
            } else {
                return false;
            }
        }
    },

    isNull: function (input) {
        if (input != null) {
            return false;
        } else {
            return true;
        }
    },

    isSingleChar: function (input) {
        if(input.length == 1 && isNaN(input) == true) {
            return true;
        } else {
            return false;
        }
    },

    isNaN: function(input) {
        if(isNaN(input) == false) {
            return false;
        } else {
            return true;
        }
    }
};
module.exports = utilites;
