/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material';
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
var TourStepTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TourStepTemplateComponent, _super);
    function TourStepTemplateComponent(tourStepTemplateService, tourService) {
        var _this = _super.call(this, tourService) || this;
        _this.tourStepTemplateService = tourStepTemplateService;
        _this.tourService = tourService;
        _this.step = {};
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.tourStepTemplateService.templateComponent = this;
    };
    TourStepTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tour-step-template',
                    template: "\n    <mat-menu [overlapTrigger]=\"false\" class=\"tour-step\">\n      <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n    </mat-menu>\n    <ng-template #defaultTemplate let-step=\"step\">\n      <mat-card (click)=\"$event.stopPropagation()\">\n        <mat-card-title>\n          {{step?.title}}\n        </mat-card-title>\n        <mat-card-content>\n          {{step?.content}}\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-icon-button [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\">\n            <mat-icon>chevron_left</mat-icon>\n          </button>\n          <button mat-icon-button [disabled]=\"!tourService.hasNext(step)\" (click)=\"tourService.next()\">\n            <mat-icon>chevron_right</mat-icon>\n          </button>\n          <button mat-button (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n  ",
                    styles: ["\n      ::ng-deep .tour-step .mat-menu-content { \n          padding: 0 !important; \n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    TourStepTemplateComponent.ctorParameters = function () { return [
        { type: TourStepTemplateService },
        { type: NgxmTourService }
    ]; };
    TourStepTemplateComponent.propDecorators = {
        tourStep: [{ type: ViewChild, args: [MatMenu,] }],
        stepTemplate: [{ type: ContentChild, args: [TemplateRef,] }]
    };
    return TourStepTemplateComponent;
}(TourHotkeyListenerComponent));
export { TourStepTemplateComponent };
if (false) {
    /** @type {?} */
    TourStepTemplateComponent.prototype.tourStep;
    /** @type {?} */
    TourStepTemplateComponent.prototype.stepTemplate;
    /** @type {?} */
    TourStepTemplateComponent.prototype.step;
    /**
     * @type {?}
     * @private
     */
    TourStepTemplateComponent.prototype.tourStepTemplateService;
    /** @type {?} */
    TourStepTemplateComponent.prototype.tourService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBUyxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQWUsMkJBQTJCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTNEO0lBZ0MrQyxxREFBMkI7SUFReEUsbUNBQW9CLHVCQUFnRCxFQUFTLFdBQTRCO1FBQXpHLFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBQ25CO1FBRm1CLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFBUyxpQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFGbEcsVUFBSSxHQUFnQixFQUFFLENBQUM7O0lBSTlCLENBQUM7Ozs7SUFFTSxtREFBZTs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUN4RCxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBTTlCLFFBQVEsRUFBRSwyL0JBdUJUOzZCQTVCUSxtR0FJUjtpQkF5QkY7Ozs7Z0JBbENRLHVCQUF1QjtnQkFDeEIsZUFBZTs7OzJCQW1DcEIsU0FBUyxTQUFDLE9BQU87K0JBRWpCLFlBQVksU0FBQyxXQUFXOztJQVkzQixnQ0FBQztDQUFBLEFBL0NELENBZ0MrQywyQkFBMkIsR0FlekU7U0FmWSx5QkFBeUI7OztJQUNwQyw2Q0FBNkM7O0lBRTdDLGlEQUN3RDs7SUFFeEQseUNBQThCOzs7OztJQUVsQiw0REFBd0Q7O0lBQUUsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IElTdGVwT3B0aW9uLCBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcclxuXHJcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7Tmd4bVRvdXJTZXJ2aWNlfSBmcm9tICcuL25neC1tZC1tZW51LXRvdXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvdXItc3RlcC10ZW1wbGF0ZScsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6Om5nLWRlZXAgLnRvdXItc3RlcCAubWF0LW1lbnUtY29udGVudCB7IFxyXG4gICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyBcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LW1lbnUgW292ZXJsYXBUcmlnZ2VyXT1cImZhbHNlXCIgY2xhc3M9XCJ0b3VyLXN0ZXBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN0ZXBUZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGU7IGNvbnRleHQ6IHsgc3RlcDogc3RlcCB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LXN0ZXA9XCJzdGVwXCI+XHJcbiAgICAgIDxtYXQtY2FyZCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAge3tzdGVwPy50aXRsZX19XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIHt7c3RlcD8uY29udGVudH19XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW2Rpc2FibGVkXT1cIiF0b3VyU2VydmljZS5oYXNQcmV2KHN0ZXApXCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLnByZXYoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+Y2hldnJvbl9sZWZ0PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW2Rpc2FibGVkXT1cIiF0b3VyU2VydmljZS5oYXNOZXh0KHN0ZXApXCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLm5leHQoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+Y2hldnJvbl9yaWdodDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwidG91clNlcnZpY2UuZW5kKClcIj57e3N0ZXA/LmVuZEJ0blRpdGxlfX08L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZChNYXRNZW51KSBwdWJsaWMgdG91clN0ZXA6IE1hdE1lbnU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcclxuXHJcbiAgcHVibGljIHN0ZXA6IElTdGVwT3B0aW9uID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLCBwdWJsaWMgdG91clNlcnZpY2U6IE5neG1Ub3VyU2VydmljZSkge1xyXG4gICAgc3VwZXIodG91clNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVDb21wb25lbnQgPSB0aGlzO1xyXG4gIH1cclxufVxyXG4iXX0=