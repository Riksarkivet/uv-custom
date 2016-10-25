declare namespace Riksarkivet.Custom {
    class Utils {
        static SetUrlAfter(searchvalue: string, value: string, doc?: Document): void;
        GetBildIdFromCanvas(canvas: Manifesto.ICanvas): string;
    }
}
