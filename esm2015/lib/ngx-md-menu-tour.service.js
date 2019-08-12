/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-core';
import { TourBackdropService } from './tour-backdrop.service';
import { Router } from '@angular/router';
export class NgxmTourService extends TourService {
    /**
     * @param {?} router
     * @param {?} tourBackdrop
     */
    constructor(router, tourBackdrop) {
        super(router);
        this.tourBackdrop = tourBackdrop;
    }
    /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    hideStep(step) {
        /** @type {?} */
        const anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            this.tourBackdrop.close();
        }
        else {
            anchor.hideTourStep();
            this.stepHide$.next(step);
        }
    }
}
NgxmTourService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxmTourService.ctorParameters = () => [
    { type: Router },
    { type: TourBackdropService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxmTourService.prototype.tourBackdrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbWQtbWVudS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBNEI7Ozs7O0lBRS9ELFlBQ0UsTUFBYyxFQUNOLFlBQWlDO1FBRXpDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUZOLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUczQyxDQUFDOzs7Ozs7SUFFUyxRQUFRLENBQUMsSUFBSTs7Y0FDZixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0wsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7O1lBbEJGLFVBQVU7Ozs7WUFGRixNQUFNO1lBRE4sbUJBQW1COzs7Ozs7O0lBUXhCLHVDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG91clNlcnZpY2UgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcclxuXHJcbmltcG9ydCB7IElOZ3htU3RlcE9wdGlvbiB9IGZyb20gJy4vc3RlcC1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVG91ckJhY2tkcm9wU2VydmljZSB9IGZyb20gJy4vdG91ci1iYWNrZHJvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5neG1Ub3VyU2VydmljZSBleHRlbmRzIFRvdXJTZXJ2aWNlPElOZ3htU3RlcE9wdGlvbj4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSB0b3VyQmFja2Ryb3A6IFRvdXJCYWNrZHJvcFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKHJvdXRlcik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGlkZVN0ZXAoc3RlcCk6IHZvaWQge1xyXG4gICAgY29uc3QgYW5jaG9yID0gdGhpcy5hbmNob3JzW3N0ZXAgJiYgc3RlcC5hbmNob3JJZF07XHJcbiAgICBpZiAoIWFuY2hvcikge1xyXG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYW5jaG9yLmhpZGVUb3VyU3RlcCgpO1xyXG4gICAgICB0aGlzLnN0ZXBIaWRlJC5uZXh0KHN0ZXApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=