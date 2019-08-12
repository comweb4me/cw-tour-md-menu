/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, RendererFactory2 } from '@angular/core';
export class TourBackdropService {
    /**
     * @param {?} rendererFactory
     */
    constructor(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} targetElement
     * @return {?}
     */
    show(targetElement) {
        /** @type {?} */
        const boundingRect = targetElement.nativeElement.getBoundingClientRect();
        if (!this.backdropElement) {
            this.backdropElement = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
            this.renderer.appendChild(document.body, this.backdropElement);
        }
        this.setStyles(boundingRect);
    }
    /**
     * @return {?}
     */
    close() {
        if (this.backdropElement) {
            this.renderer.removeChild(document.body, this.backdropElement);
            this.backdropElement = null;
        }
    }
    /**
     * @private
     * @param {?} boundingRect
     * @return {?}
     */
    setStyles(boundingRect) {
        /** @type {?} */
        const styles = {
            position: 'fixed',
            width: boundingRect.width + 'px',
            height: boundingRect.height + 'px',
            top: boundingRect.top + 'px',
            left: boundingRect.left + 'px',
            'box-shadow': '0 0 0 9999px rgba(0, 0, 0, 0.7)',
            'z-index': '100'
        };
        for (const name of Object.keys(styles)) {
            this.renderer.setStyle(this.backdropElement, name, styles[name]);
        }
    }
}
TourBackdropService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TourBackdropService.ctorParameters = () => [
    { type: RendererFactory2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbWQtbWVudS8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWJhY2tkcm9wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUk5QixZQUFZLGVBQWlDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFTSxJQUFJLENBQUMsYUFBeUI7O2NBQzdCLFlBQVksR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFO1FBRXhFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sS0FBSztRQUNWLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxZQUFxQjs7Y0FDL0IsTUFBTSxHQUFHO1lBQ2IsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSTtZQUNoQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2xDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxHQUFHLElBQUk7WUFDNUIsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUM5QixZQUFZLEVBQUUsaUNBQWlDO1lBQy9DLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7O1lBMUNGLFVBQVU7Ozs7WUFGaUMsZ0JBQWdCOzs7Ozs7O0lBSTFELHVDQUE0Qjs7Ozs7SUFDNUIsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb3VyQmFja2Ryb3BTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcbiAgcHJpdmF0ZSBiYWNrZHJvcEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdyh0YXJnZXRFbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSB0YXJnZXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5iYWNrZHJvcEVsZW1lbnQsICduZ3gtdG91cl9iYWNrZHJvcCcpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0eWxlcyhib3VuZGluZ1JlY3QpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuYmFja2Ryb3BFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgdGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0eWxlcyhib3VuZGluZ1JlY3Q6IERPTVJlY3QpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIHdpZHRoOiBib3VuZGluZ1JlY3Qud2lkdGggKyAncHgnLFxyXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nUmVjdC5oZWlnaHQgKyAncHgnLFxyXG4gICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgKyAncHgnLFxyXG4gICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArICdweCcsXHJcbiAgICAgICdib3gtc2hhZG93JzogJzAgMCAwIDk5OTlweCByZ2JhKDAsIDAsIDAsIDAuNyknLFxyXG4gICAgICAnei1pbmRleCc6ICcxMDAnXHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhzdHlsZXMpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYWNrZHJvcEVsZW1lbnQsIG5hbWUsIHN0eWxlc1tuYW1lXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==