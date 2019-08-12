/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2 } from '@angular/core';
var TourBackdropService = /** @class */ (function () {
    function TourBackdropService(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} targetElement
     * @return {?}
     */
    TourBackdropService.prototype.show = /**
     * @param {?} targetElement
     * @return {?}
     */
    function (targetElement) {
        /** @type {?} */
        var boundingRect = targetElement.nativeElement.getBoundingClientRect();
        if (!this.backdropElement) {
            this.backdropElement = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
            this.renderer.appendChild(document.body, this.backdropElement);
        }
        this.setStyles(boundingRect);
    };
    /**
     * @return {?}
     */
    TourBackdropService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.backdropElement) {
            this.renderer.removeChild(document.body, this.backdropElement);
            this.backdropElement = null;
        }
    };
    /**
     * @private
     * @param {?} boundingRect
     * @return {?}
     */
    TourBackdropService.prototype.setStyles = /**
     * @private
     * @param {?} boundingRect
     * @return {?}
     */
    function (boundingRect) {
        var e_1, _a;
        /** @type {?} */
        var styles = {
            position: 'fixed',
            width: boundingRect.width + 'px',
            height: boundingRect.height + 'px',
            top: boundingRect.top + 'px',
            left: boundingRect.left + 'px',
            'box-shadow': '0 0 0 9999px rgba(0, 0, 0, 0.7)',
            'z-index': '100'
        };
        try {
            for (var _b = tslib_1.__values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                this.renderer.setStyle(this.backdropElement, name_1, styles[name_1]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TourBackdropService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TourBackdropService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    return TourBackdropService;
}());
export { TourBackdropService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TourBackdropService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TourBackdropService.prototype.backdropElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbWQtbWVudS8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWJhY2tkcm9wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGO0lBS0UsNkJBQVksZUFBaUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVNLGtDQUFJOzs7O0lBQVgsVUFBWSxhQUF5Qjs7WUFDN0IsWUFBWSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSxtQ0FBSzs7O0lBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7Ozs7SUFFTyx1Q0FBUzs7Ozs7SUFBakIsVUFBa0IsWUFBcUI7OztZQUMvQixNQUFNLEdBQUc7WUFDYixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJO1lBQ2hDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUk7WUFDbEMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSTtZQUM1QixJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQzlCLFlBQVksRUFBRSxpQ0FBaUM7WUFDL0MsU0FBUyxFQUFFLEtBQUs7U0FDakI7O1lBRUQsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQW5DLElBQU0sTUFBSSxXQUFBO2dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2xFOzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkExQ0YsVUFBVTs7OztnQkFGaUMsZ0JBQWdCOztJQTZDNUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTFDWSxtQkFBbUI7Ozs7OztJQUM5Qix1Q0FBNEI7Ozs7O0lBQzVCLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG91ckJhY2tkcm9wU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3codGFyZ2V0RWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGFyZ2V0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGlmICghdGhpcy5iYWNrZHJvcEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYmFja2Ryb3BFbGVtZW50LCAnbmd4LXRvdXJfYmFja2Ryb3AnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCB0aGlzLmJhY2tkcm9wRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdHlsZXMoYm91bmRpbmdSZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmJhY2tkcm9wRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoYm91bmRpbmdSZWN0OiBET01SZWN0KSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICB3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgJ3B4JyxcclxuICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAncHgnLFxyXG4gICAgICAnYm94LXNoYWRvdyc6ICcwIDAgMCA5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjcpJyxcclxuICAgICAgJ3otaW5kZXgnOiAnMTAwJ1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoc3R5bGVzKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYmFja2Ryb3BFbGVtZW50LCBuYW1lLCBzdHlsZXNbbmFtZV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=