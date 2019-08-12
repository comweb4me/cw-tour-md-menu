/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material';
export class TourAnchorOpenerComponent {
    constructor() {
        this.menu = new MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true, backdropClass: '' });
    }
}
TourAnchorOpenerComponent.decorators = [
    { type: Component, args: [{
                selector: 'tourAnchorOpener',
                template: `<span [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"></span>`,
                styles: [`:host { display: none; }`]
            }] }
];
TourAnchorOpenerComponent.propDecorators = {
    menu: [{ type: Input }],
    trigger: [{ type: ViewChild, args: [MatMenuTrigger,] }]
};
if (false) {
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.menu;
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPNUQsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1XLFNBQUksR0FBWSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHbEosQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLFFBQVEsRUFBRSxvRUFBb0U7eUJBRHJFLDBCQUEwQjthQUVwQzs7O21CQUVFLEtBQUs7c0JBRUwsU0FBUyxTQUFDLGNBQWM7Ozs7SUFGekIseUNBQWdKOztJQUVoSiw0Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0TWVudVRyaWdnZXIsIE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvdXJBbmNob3JPcGVuZXInLFxyXG4gIHN0eWxlczogW2A6aG9zdCB7IGRpc3BsYXk6IG5vbmU7IH1gXSxcclxuICB0ZW1wbGF0ZTogYDxzcGFuIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgI3RyaWdnZXI9XCJtYXRNZW51VHJpZ2dlclwiPjwvc3Bhbj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBtZW51OiBNYXRNZW51ID0gbmV3IE1hdE1lbnUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHsgeFBvc2l0aW9uOiAnYWZ0ZXInLCB5UG9zaXRpb246ICdiZWxvdycsIG92ZXJsYXBUcmlnZ2VyOiB0cnVlLCBiYWNrZHJvcENsYXNzOiAnJyB9KTtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXRNZW51VHJpZ2dlcikgcHVibGljIHRyaWdnZXI6IE1hdE1lbnVUcmlnZ2VyO1xyXG59XHJcbiJdfQ==