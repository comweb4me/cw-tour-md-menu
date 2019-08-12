/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-core';
import { TourBackdropService } from './tour-backdrop.service';
import { Router } from '@angular/router';
var NgxmTourService = /** @class */ (function (_super) {
    tslib_1.__extends(NgxmTourService, _super);
    function NgxmTourService(router, tourBackdrop) {
        var _this = _super.call(this, router) || this;
        _this.tourBackdrop = tourBackdrop;
        return _this;
    }
    /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    NgxmTourService.prototype.hideStep = /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    function (step) {
        /** @type {?} */
        var anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            this.tourBackdrop.close();
        }
        else {
            anchor.hideTourStep();
            this.stepHide$.next(step);
        }
    };
    NgxmTourService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxmTourService.ctorParameters = function () { return [
        { type: Router },
        { type: TourBackdropService }
    ]; };
    return NgxmTourService;
}(TourService));
export { NgxmTourService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxmTourService.prototype.tourBackdrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbWQtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDO0lBQ3FDLDJDQUE0QjtJQUUvRCx5QkFDRSxNQUFjLEVBQ04sWUFBaUM7UUFGM0MsWUFJRSxrQkFBTSxNQUFNLENBQUMsU0FDZDtRQUhTLGtCQUFZLEdBQVosWUFBWSxDQUFxQjs7SUFHM0MsQ0FBQzs7Ozs7O0lBRVMsa0NBQVE7Ozs7O0lBQWxCLFVBQW1CLElBQUk7O1lBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQWxCRixVQUFVOzs7O2dCQUZGLE1BQU07Z0JBRE4sbUJBQW1COztJQXNCNUIsc0JBQUM7Q0FBQSxBQW5CRCxDQUNxQyxXQUFXLEdBa0IvQztTQWxCWSxlQUFlOzs7Ozs7SUFJeEIsdUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3VyU2VydmljZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5cclxuaW1wb3J0IHsgSU5neG1TdGVwT3B0aW9uIH0gZnJvbSAnLi9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUb3VyQmFja2Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4bVRvdXJTZXJ2aWNlIGV4dGVuZHMgVG91clNlcnZpY2U8SU5neG1TdGVwT3B0aW9uPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHRvdXJCYWNrZHJvcDogVG91ckJhY2tkcm9wU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIocm91dGVyKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoaWRlU3RlcChzdGVwKTogdm9pZCB7XHJcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLmFuY2hvcnNbc3RlcCAmJiBzdGVwLmFuY2hvcklkXTtcclxuICAgIGlmICghYW5jaG9yKSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmNob3IuaGlkZVRvdXJTdGVwKCk7XHJcbiAgICAgIHRoaXMuc3RlcEhpZGUkLm5leHQoc3RlcCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==