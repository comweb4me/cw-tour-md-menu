/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material';
var TourAnchorOpenerComponent = /** @class */ (function () {
    function TourAnchorOpenerComponent() {
        this.menu = new MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true, backdropClass: '' });
    }
    TourAnchorOpenerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tourAnchorOpener',
                    template: "<span [matMenuTriggerFor]=\"menu\" #trigger=\"matMenuTrigger\"></span>",
                    styles: [":host { display: none; }"]
                }] }
    ];
    TourAnchorOpenerComponent.propDecorators = {
        menu: [{ type: Input }],
        trigger: [{ type: ViewChild, args: [MatMenuTrigger,] }]
    };
    return TourAnchorOpenerComponent;
}());
export { TourAnchorOpenerComponent };
if (false) {
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.menu;
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQ7SUFBQTtRQU1XLFNBQUksR0FBWSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHbEosQ0FBQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBRTVCLFFBQVEsRUFBRSx3RUFBb0U7NkJBRHJFLDBCQUEwQjtpQkFFcEM7Ozt1QkFFRSxLQUFLOzBCQUVMLFNBQVMsU0FBQyxjQUFjOztJQUMzQixnQ0FBQztDQUFBLEFBVEQsSUFTQztTQUpZLHlCQUF5Qjs7O0lBQ3BDLHlDQUFnSjs7SUFFaEosNENBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyLCBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3VyQW5jaG9yT3BlbmVyJyxcclxuICBzdHlsZXM6IFtgOmhvc3QgeyBkaXNwbGF5OiBub25lOyB9YF0sXHJcbiAgdGVtcGxhdGU6IGA8c3BhbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiICN0cmlnZ2VyPVwibWF0TWVudVRyaWdnZXJcIj48L3NwYW4+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbWVudTogTWF0TWVudSA9IG5ldyBNYXRNZW51KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7IHhQb3NpdGlvbjogJ2FmdGVyJywgeVBvc2l0aW9uOiAnYmVsb3cnLCBvdmVybGFwVHJpZ2dlcjogdHJ1ZSwgYmFja2Ryb3BDbGFzczogJycgfSk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIHB1YmxpYyB0cmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcclxufVxyXG4iXX0=