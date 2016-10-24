namespace Riksarkivet.Custom {
    export class Device {
        static isTouch (): boolean {
            return !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;
        }
    }
}