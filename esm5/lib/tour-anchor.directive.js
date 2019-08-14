/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, HostBinding, Injector, Input, ViewContainerRef } from '@angular/core';
import { TourState } from 'ngx-tour-core';
import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { first } from 'rxjs/operators';
import { TourBackdropService } from './tour-backdrop.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
var TourAnchorMatMenuDirective = /** @class */ (function () {
    function TourAnchorMatMenuDirective(componentFactoryResolver, injector, viewContainer, element, tourService, tourStepTemplate, tourBackdrop) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.viewContainer = viewContainer;
        this.element = element;
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.tourBackdrop = tourBackdrop;
        this.opener = this.viewContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory(TourAnchorOpenerComponent)).instance;
    }
    /**
     * @return {?}
     */
    TourAnchorMatMenuDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorMatMenuDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorMatMenuDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var _this = this;
        this.isActive = true;
        this.tourStepTemplate.templateComponent.step = step;
        // Ignore step.placement
        if (!step.preventScrolling) {
            // if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
            //   (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
            // } else if (
            //   !withinviewport(this.element.nativeElement, { sides: 'left top right' })
            // ) {
            ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(true);
            // }
        }
        ((/** @type {?} */ (this.opener.trigger)))._element = this.element;
        this.opener.trigger.menu = this.tourStepTemplate.templateComponent.tourStep;
        this.opener.trigger.ngAfterContentInit();
        this.opener.trigger.openMenu();
        if (step.enableBackdrop) {
            this.tourBackdrop.show(this.element);
        }
        else {
            this.tourBackdrop.close();
        }
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.menuCloseSubscription = this.opener.trigger.menuClosed
            .pipe(first())
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.tourService.getStatus() !== TourState.OFF) {
                _this.tourService.end();
            }
            _this.tourBackdrop.close();
        }));
    };
    /**
     * @return {?}
     */
    TourAnchorMatMenuDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.opener.trigger.closeMenu();
        if (this.tourService.getStatus() === TourState.OFF) {
            this.tourBackdrop.close();
        }
    };
    TourAnchorMatMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tourAnchor]'
                },] }
    ];
    /** @nocollapse */
    TourAnchorMatMenuDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: NgxmTourService },
        { type: TourStepTemplateService },
        { type: TourBackdropService }
    ]; };
    TourAnchorMatMenuDirective.propDecorators = {
        tourAnchor: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
    };
    return TourAnchorMatMenuDirective;
}());
export { TourAnchorMatMenuDirective };
if (false) {
    /** @type {?} */
    TourAnchorMatMenuDirective.prototype.tourAnchor;
    /** @type {?} */
    TourAnchorMatMenuDirective.prototype.opener;
    /** @type {?} */
    TourAnchorMatMenuDirective.prototype.menuCloseSubscription;
    /** @type {?} */
    TourAnchorMatMenuDirective.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    TourAnchorMatMenuDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    TourAnchorMatMenuDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    TourAnchorMatMenuDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    TourAnchorMatMenuDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TourAnchorMatMenuDirective.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourAnchorMatMenuDirective.prototype.tourStepTemplate;
    /**
     * @type {?}
     * @private
     */
    TourAnchorMatMenuDirective.prototype.tourBackdrop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbWQtbWVudS8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTNEO0lBV0Usb0NBQ1Usd0JBQWtELEVBQ2xELFFBQWtCLEVBQ2xCLGFBQStCLEVBQy9CLE9BQW1CLEVBQ25CLFdBQTRCLEVBQzVCLGdCQUF5QyxFQUN6QyxZQUFpQztRQU5qQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBRXpDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQzlDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1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RUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQXJGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQTFCQyx3QkFBd0I7Z0JBSXhCLFFBQVE7Z0JBSVIsZ0JBQWdCO2dCQU5oQixVQUFVO2dCQW9CSixlQUFlO2dCQUpkLHVCQUF1QjtnQkFFeEIsbUJBQW1COzs7NkJBU3hCLEtBQUs7MkJBSUwsV0FBVyxTQUFDLDZCQUE2Qjs7SUE2RTVDLGlDQUFDO0NBQUEsQUF0RkQsSUFzRkM7U0FuRlksMEJBQTBCOzs7SUFFckMsZ0RBQW1DOztJQUNuQyw0Q0FBeUM7O0lBQ3pDLDJEQUEyQzs7SUFFM0MsOENBQXFFOzs7OztJQUduRSw4REFBMEQ7Ozs7O0lBQzFELDhDQUEwQjs7Ozs7SUFDMUIsbURBQXVDOzs7OztJQUN2Qyw2Q0FBMkI7Ozs7O0lBQzNCLGlEQUFvQzs7Ozs7SUFDcEMsc0RBQWlEOzs7OztJQUNqRCxrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBUb3VyQW5jaG9yRGlyZWN0aXZlLFxyXG4gIFRvdXJTdGF0ZVxyXG59IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHdpdGhpbnZpZXdwb3J0IGZyb20gJ3dpdGhpbnZpZXdwb3J0JztcclxuXHJcbmltcG9ydCB7IFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnQgfSBmcm9tICcuL3RvdXItYW5jaG9yLW9wZW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtUb3VyQmFja2Ryb3BTZXJ2aWNlfSBmcm9tICcuL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XHJcbmltcG9ydCB7IElOZ3htU3RlcE9wdGlvbiBhcyBJU3RlcE9wdGlvbiB9IGZyb20gJy4vc3RlcC1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHtOZ3htVG91clNlcnZpY2V9IGZyb20gJy4vbmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmVcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBUb3VyQW5jaG9yRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBwdWJsaWMgdG91ckFuY2hvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBvcGVuZXI6IFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnQ7XHJcbiAgcHVibGljIG1lbnVDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvdXJhbmNob3ItLWlzLWFjdGl2ZScpIHB1YmxpYyBpc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHRvdXJTZXJ2aWNlOiBOZ3htVG91clNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGU6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0b3VyQmFja2Ryb3A6IFRvdXJCYWNrZHJvcFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMub3BlbmVyID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChcclxuICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXHJcbiAgICAgICAgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudFxyXG4gICAgICApXHJcbiAgICApLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VyU2VydmljZS51bnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1RvdXJTdGVwKHN0ZXA6IElTdGVwT3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZS50ZW1wbGF0ZUNvbXBvbmVudC5zdGVwID0gc3RlcDtcclxuICAgIC8vIElnbm9yZSBzdGVwLnBsYWNlbWVudFxyXG4gICAgaWYgKCFzdGVwLnByZXZlbnRTY3JvbGxpbmcpIHtcclxuICAgICAgLy8gaWYgKCF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2JvdHRvbScgfSkpIHtcclxuICAgICAgLy8gICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAoXHJcbiAgICAgIC8vICAgIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IHNpZGVzOiAnbGVmdCB0b3AgcmlnaHQnIH0pXHJcbiAgICAgIC8vICkge1xyXG4gICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnNjcm9sbEludG9WaWV3KHRydWUpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAoPGFueT50aGlzLm9wZW5lci50cmlnZ2VyKS5fZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuICAgIHRoaXMub3BlbmVyLnRyaWdnZXIubWVudSA9IHRoaXMudG91clN0ZXBUZW1wbGF0ZS50ZW1wbGF0ZUNvbXBvbmVudC50b3VyU3RlcDtcclxuICAgIHRoaXMub3BlbmVyLnRyaWdnZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XHJcbiAgICB0aGlzLm9wZW5lci50cmlnZ2VyLm9wZW5NZW51KCk7XHJcblxyXG4gICAgaWYgKHN0ZXAuZW5hYmxlQmFja2Ryb3ApIHtcclxuICAgICAgdGhpcy50b3VyQmFja2Ryb3Auc2hvdyh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b3VyQmFja2Ryb3AuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGVwLnByZXZCdG5UaXRsZSA9IHN0ZXAucHJldkJ0blRpdGxlIHx8ICdQcmV2JztcclxuICAgIHN0ZXAubmV4dEJ0blRpdGxlID0gc3RlcC5uZXh0QnRuVGl0bGUgfHwgJ05leHQnO1xyXG4gICAgc3RlcC5lbmRCdG5UaXRsZSA9IHN0ZXAuZW5kQnRuVGl0bGUgfHwgJ0VuZCc7XHJcblxyXG4gICAgaWYgKHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMub3BlbmVyLnRyaWdnZXIubWVudUNsb3NlZFxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50b3VyU2VydmljZS5nZXRTdGF0dXMoKSAhPT0gVG91clN0YXRlLk9GRikge1xyXG4gICAgICAgICAgdGhpcy50b3VyU2VydmljZS5lbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3VyQmFja2Ryb3AuY2xvc2UoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZVRvdXJTdGVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wZW5lci50cmlnZ2VyLmNsb3NlTWVudSgpO1xyXG4gICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgPT09IFRvdXJTdGF0ZS5PRkYpIHtcclxuICAgICAgdGhpcy50b3VyQmFja2Ryb3AuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19