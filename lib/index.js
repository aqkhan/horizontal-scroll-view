"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var style_1 = __importDefault(require("./style"));
var HorizontalScroll = function (props) {
    var data = props.data, Component = props.Component, wrapperClass = props.wrapperClass, scrollLength = props.scrollLength, showControls = props.showControls;
    react_1.useEffect(function () {
        var slider = document.getElementById('scrollWrapper');
        var isDown = false;
        var startX;
        var scrollLeft;
        if (slider) {
            slider.addEventListener('mousedown', function (e) {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', function () {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mouseup', function () {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mousemove', function (e) {
                if (!isDown)
                    return;
                e.preventDefault();
                var x = e.pageX - slider.offsetLeft;
                var walk = (x - startX) * 2; //scroll-fast
                slider.scrollLeft = scrollLeft - walk;
            });
        }
    });
    var leftRightScroll = function (type) {
        var slider = document.getElementById('scrollWrapper');
        if (slider) {
            var scrollAmount_1 = 0;
            var slideTimer_1 = setInterval(function () {
                if (type === "left") {
                    slider.scrollLeft -= scrollLength ? scrollLength : 40;
                }
                else {
                    slider.scrollLeft += scrollLength ? scrollLength : 40;
                }
                scrollAmount_1 += 10;
                if (scrollAmount_1 >= 100) {
                    window.clearInterval(slideTimer_1);
                }
            }, 25);
        }
    };
    return (react_1.default.createElement("div", { className: "mainWrapper" },
        react_1.default.createElement("div", { id: "scrollWrapper", className: "scrollWrapper " + (wrapperClass ? wrapperClass : "") },
            react_1.default.createElement("div", { className: "items" }, data.map(function (item, index) {
                return react_1.default.createElement("div", { className: "item", key: index },
                    react_1.default.createElement(Component, { item: item }));
            })),
            react_1.default.createElement(style_1.default, null)),
        showControls &&
            react_1.default.createElement("div", { className: "controls" },
                react_1.default.createElement("div", { className: "image-left", onClick: function () { return leftRightScroll("left"); } },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 492 492", xmlSpace: "preserve", width: "40px", height: "512px" },
                        react_1.default.createElement("g", null,
                            react_1.default.createElement("g", null,
                                react_1.default.createElement("g", null,
                                    react_1.default.createElement("path", { d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z", className: "active-path", fill: "#000000" })))))),
                react_1.default.createElement("div", { className: "image-right", onClick: function () { return leftRightScroll("right"); } },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 492.004 492.004", xmlSpace: "preserve", width: "40px", height: "512px" },
                        react_1.default.createElement("g", null,
                            react_1.default.createElement("g", null,
                                react_1.default.createElement("g", null,
                                    react_1.default.createElement("path", { d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z", className: "active-path", fill: "#000000" })))))))));
};
exports.default = HorizontalScroll;
//# sourceMappingURL=index.js.map