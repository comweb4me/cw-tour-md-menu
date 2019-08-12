/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
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
        stepTemplate: [{ type: Input }, { type: ContentChild, args: [TemplateRef,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFlLDJCQUEyQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRDtJQWdDK0MscURBQTJCO0lBU3hFLG1DQUFvQix1QkFBZ0QsRUFBUyxXQUE0QjtRQUF6RyxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUZtQiw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQVMsaUJBQVcsR0FBWCxXQUFXLENBQWlCO1FBRmxHLFVBQUksR0FBZ0IsRUFBRSxDQUFDOztJQUk5QixDQUFDOzs7O0lBRU0sbURBQWU7OztJQUF0QjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDeEQsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQU05QixRQUFRLEVBQUUsMi9CQXVCVDs2QkE1QlEsbUdBSVI7aUJBeUJGOzs7O2dCQWxDUSx1QkFBdUI7Z0JBQ3hCLGVBQWU7OzsyQkFtQ3BCLFNBQVMsU0FBQyxPQUFPOytCQUVqQixLQUFLLFlBQ0wsWUFBWSxTQUFDLFdBQVc7O0lBWTNCLGdDQUFDO0NBQUEsQUFoREQsQ0FnQytDLDJCQUEyQixHQWdCekU7U0FoQlkseUJBQXlCOzs7SUFDcEMsNkNBQTZDOztJQUU3QyxpREFFd0Q7O0lBRXhELHlDQUE4Qjs7Ozs7SUFFbEIsNERBQXdEOztJQUFFLGdEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBJU3RlcE9wdGlvbiwgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3VyLXN0ZXAtdGVtcGxhdGUnLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOjpuZy1kZWVwIC50b3VyLXN0ZXAgLm1hdC1tZW51LWNvbnRlbnQgeyBcclxuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXHJcbiAgICAgIH1cclxuICBgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1tZW51IFtvdmVybGFwVHJpZ2dlcl09XCJmYWxzZVwiIGNsYXNzPVwidG91ci1zdGVwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGVwVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlOyBjb250ZXh0OiB7IHN0ZXA6IHN0ZXAgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1zdGVwPVwic3RlcFwiPlxyXG4gICAgICA8bWF0LWNhcmQgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgIHt7c3RlcD8udGl0bGV9fVxyXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICB7e3N0ZXA/LmNvbnRlbnR9fVxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFtkaXNhYmxlZF09XCIhdG91clNlcnZpY2UuaGFzUHJldihzdGVwKVwiIChjbGljayk9XCJ0b3VyU2VydmljZS5wcmV2KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmNoZXZyb25fbGVmdDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFtkaXNhYmxlZF09XCIhdG91clNlcnZpY2UuaGFzTmV4dChzdGVwKVwiIChjbGljayk9XCJ0b3VyU2VydmljZS5uZXh0KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmNoZXZyb25fcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInRvdXJTZXJ2aWNlLmVuZCgpXCI+e3tzdGVwPy5lbmRCdG5UaXRsZX19PC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoTWF0TWVudSkgcHVibGljIHRvdXJTdGVwOiBNYXRNZW51O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcclxuXHJcbiAgcHVibGljIHN0ZXA6IElTdGVwT3B0aW9uID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLCBwdWJsaWMgdG91clNlcnZpY2U6IE5neG1Ub3VyU2VydmljZSkge1xyXG4gICAgc3VwZXIodG91clNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVDb21wb25lbnQgPSB0aGlzO1xyXG4gIH1cclxufVxyXG4iXX0=