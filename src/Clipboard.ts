namespace Riksarkivet.Custom {
    export class Clipboard {
        public static copy(text: string) {
            let $tempDiv = $("<div style='position:absolute;left:-9999px'>");
            let brRegex = /<br\s*[\/]?>/gi;
            text = text.replace(brRegex, "\n");
            $("body").append($tempDiv);
            $tempDiv.append(text);
            let $tempInput = $("<textarea>");
            $tempDiv.append($tempInput);
            $tempInput.val($tempDiv.text()).select();
            document.execCommand("copy");
            $tempDiv.remove();
        }

        public static supportsCopy(): boolean {
            return document.queryCommandSupported && document.queryCommandSupported('copy');
        }

    }

}