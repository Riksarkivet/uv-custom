var Riksarkivet;
(function (Riksarkivet) {
    var Custom;
    (function (Custom) {
        var Clipboard = (function () {
            function Clipboard() {
            }
            Clipboard.copy = function (text) {
                var $tempDiv = $("<div style='position:absolute;left:-9999px'>");
                var brRegex = /<br\s*[\/]?>/gi;
                text = text.replace(brRegex, "\n");
                $("body").append($tempDiv);
                $tempDiv.append(text);
                var $tempInput = $("<textarea>");
                $tempDiv.append($tempInput);
                $tempInput.val($tempDiv.text()).select();
                document.execCommand("copy");
                $tempDiv.remove();
            };
            Clipboard.supportsCopy = function () {
                return document.queryCommandSupported && document.queryCommandSupported('copy');
            };
            return Clipboard;
        }());
        Custom.Clipboard = Clipboard;
    })(Custom = Riksarkivet.Custom || (Riksarkivet.Custom = {}));
})(Riksarkivet || (Riksarkivet = {}));
var Riksarkivet;
(function (Riksarkivet) {
    var Custom;
    (function (Custom) {
        var Device = (function () {
            function Device() {
            }
            Device.isTouch = function () {
                return !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;
            };
            return Device;
        }());
        Custom.Device = Device;
    })(Custom = Riksarkivet.Custom || (Riksarkivet.Custom = {}));
})(Riksarkivet || (Riksarkivet = {}));
var Riksarkivet;
(function (Riksarkivet) {
    var Custom;
    (function (Custom) {
        var Utils = (function () {
            function Utils() {
            }
            Utils.SetUrlAfter = function (searchvalue, value, doc) {
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
            Utils.prototype.GetBildIdFromCanvas = function (canvas) {
                var bildid = canvas.getImages()[0].getResource().getServices()[0].id;
                bildid = bildid.substr(bildid.indexOf("!") + 1);
                return bildid;
            };
            return Utils;
        }());
        Custom.Utils = Utils;
    })(Custom = Riksarkivet.Custom || (Riksarkivet.Custom = {}));
})(Riksarkivet || (Riksarkivet = {}));
