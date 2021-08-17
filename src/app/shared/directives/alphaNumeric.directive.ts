import { Directive, HostListener, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[specialIsAlphaNumeric]'
})

export class SpecialCharacterDirective {

    // regexStr = '^[a-zA-Z0-9_]*$';
    regexStr = /^[a-zA-Z 0-9_/\s-]*$/;
    @Input() isAlphaNumeric: boolean;

    constructor(private el: ElementRef) { }


    @HostListener('keydown', ['$event']) onKeyPress(event) {
        // console.log(event, new RegExp(this.regexStr).test(event.key));
        return new RegExp(this.regexStr).test(event.key);
    }

    @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
        this.validateFields(event);
    }
    

    validateFields(event: ClipboardEvent) {
        event.preventDefault();
        const pasteData = event.clipboardData.getData('text/plain').replace(/[^a-zA-Z0-9-]/g, '');
        document.execCommand('insertHTML', false, pasteData);
    }
}