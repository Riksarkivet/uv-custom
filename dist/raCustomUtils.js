var RaCustomUtils = (function () {
    function RaCustomUtils() {
    }
    RaCustomUtils.SetUrlAfter = function (searchvalue, value, doc) {
        if (!doc) {
            doc = window.document;
        }
        var url = doc.URL;
        var searchIndex = url.lastIndexOf(searchvalue);
        if (searchIndex === -1) {
            return;
        }
        var startUrl = url.substr(0, searchIndex);
        var endUrl = url.substr(searchIndex);
        var indexAfter = endUrl.indexOf("?");
        if (indexAfter === -1) {
            indexAfter = endUrl.indexOf("&");
        }
        if (indexAfter === -1) {
            indexAfter = endUrl.indexOf("#");
        }
        if (indexAfter !== -1) {
            endUrl = endUrl.substr(indexAfter);
        }
        else {
            endUrl = "";
        }
        if (window.top.history.replaceState) {
            window.top.history.replaceState(null, null, startUrl + searchvalue + value + endUrl);
        }
    };
    RaCustomUtils.prototype.GetBildIdFromCanvas = function (canvas) {
        var bildid = canvas.getImages()[0].getResource().getServices()[0].id;
        bildid = bildid.substr(bildid.indexOf("!") + 1);
        return bildid;
    };
    return RaCustomUtils;
}());