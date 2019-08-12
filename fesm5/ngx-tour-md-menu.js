import { __extends, __values, __spread } from 'tslib';
import { Injectable, RendererFactory2, Component, ViewChild, Input, ComponentFactoryResolver, Directive, ElementRef, HostBinding, Injector, ViewContainerRef, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { TourService, TourState, TourHotkeyListenerComponent, TourModule } from 'ngx-tour-core';
import { Router } from '@angular/router';
import { MatMenuTrigger, MatMenu, MatMenuModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import withinviewport from 'withinviewport';
import { first } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _b = __values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxmTourService = /** @class */ (function (_super) {
    __extends(NgxmTourService, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourStepTemplateService = /** @class */ (function () {
    function TourStepTemplateService() {
    }
    TourStepTemplateService.decorators = [
        { type: Injectable }
    ];
    return TourStepTemplateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(false);
            }
            else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(true);
            }
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
            .subscribe(function () {
            if (_this.tourService.getStatus() !== TourState.OFF) {
                _this.tourService.end();
            }
            _this.tourBackdrop.close();
        });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourStepTemplateComponent = /** @class */ (function (_super) {
    __extends(TourStepTemplateComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourMatMenuModule = /** @class */ (function () {
    function TourMatMenuModule() {
    }
    /**
     * @return {?}
     */
    TourMatMenuModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourMatMenuModule,
            providers: __spread([
                TourStepTemplateService,
                TourBackdropService
            ], TourModule.forRoot().providers, [
                NgxmTourService
            ]),
        };
    };
    TourMatMenuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
                    entryComponents: [TourAnchorOpenerComponent],
                    exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourModule],
                    imports: [CommonModule, TourModule,
                        MatMenuModule, MatCardModule, MatButtonModule, MatIconModule,
                    ],
                },] }
    ];
    return TourMatMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxmTourService as TourService, TourMatMenuModule, TourAnchorMatMenuDirective, TourStepTemplateComponent, NgxmTourService as ɵa, TourAnchorOpenerComponent as ɵd, TourBackdropService as ɵb, TourStepTemplateService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvdXItbWQtbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRvdXItbWQtbWVudS9saWIvdG91ci1iYWNrZHJvcC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG91ci1tZC1tZW51L2xpYi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL3RvdXItYW5jaG9yLW9wZW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG91ci1tZC1tZW51L2xpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL3RvdXItc3RlcC10ZW1wbGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL21kLW1lbnUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG91ckJhY2tkcm9wU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3codGFyZ2V0RWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGFyZ2V0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGlmICghdGhpcy5iYWNrZHJvcEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYmFja2Ryb3BFbGVtZW50LCAnbmd4LXRvdXJfYmFja2Ryb3AnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCB0aGlzLmJhY2tkcm9wRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdHlsZXMoYm91bmRpbmdSZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmJhY2tkcm9wRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoYm91bmRpbmdSZWN0OiBET01SZWN0KSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICB3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgJ3B4JyxcclxuICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAncHgnLFxyXG4gICAgICAnYm94LXNoYWRvdyc6ICcwIDAgMCA5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjcpJyxcclxuICAgICAgJ3otaW5kZXgnOiAnMTAwJ1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoc3R5bGVzKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYmFja2Ryb3BFbGVtZW50LCBuYW1lLCBzdHlsZXNbbmFtZV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJTmd4bVN0ZXBPcHRpb24gfSBmcm9tICcuL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRvdXJCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3htVG91clNlcnZpY2UgZXh0ZW5kcyBUb3VyU2VydmljZTxJTmd4bVN0ZXBPcHRpb24+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgdG91ckJhY2tkcm9wOiBUb3VyQmFja2Ryb3BTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihyb3V0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhpZGVTdGVwKHN0ZXApOiB2b2lkIHtcclxuICAgIGNvbnN0IGFuY2hvciA9IHRoaXMuYW5jaG9yc1tzdGVwICYmIHN0ZXAuYW5jaG9ySWRdO1xyXG4gICAgaWYgKCFhbmNob3IpIHtcclxuICAgICAgdGhpcy50b3VyQmFja2Ryb3AuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuY2hvci5oaWRlVG91clN0ZXAoKTtcclxuICAgICAgdGhpcy5zdGVwSGlkZSQubmV4dChzdGVwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyLCBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3VyQW5jaG9yT3BlbmVyJyxcclxuICBzdHlsZXM6IFtgOmhvc3QgeyBkaXNwbGF5OiBub25lOyB9YF0sXHJcbiAgdGVtcGxhdGU6IGA8c3BhbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiICN0cmlnZ2VyPVwibWF0TWVudVRyaWdnZXJcIj48L3NwYW4+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbWVudTogTWF0TWVudSA9IG5ldyBNYXRNZW51KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7IHhQb3NpdGlvbjogJ2FmdGVyJywgeVBvc2l0aW9uOiAnYmVsb3cnLCBvdmVybGFwVHJpZ2dlcjogdHJ1ZSwgYmFja2Ryb3BDbGFzczogJycgfSk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIHB1YmxpYyB0cmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIHtcclxuICBwdWJsaWMgdGVtcGxhdGVDb21wb25lbnQ6IFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgVG91ckFuY2hvckRpcmVjdGl2ZSxcclxuICBUb3VyU3RhdGVcclxufSBmcm9tICduZ3gtdG91ci1jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB3aXRoaW52aWV3cG9ydCBmcm9tICd3aXRoaW52aWV3cG9ydCc7XHJcblxyXG5pbXBvcnQgeyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWFuY2hvci1vcGVuZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7VG91ckJhY2tkcm9wU2VydmljZX0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJTmd4bVN0ZXBPcHRpb24gYXMgSVN0ZXBPcHRpb24gfSBmcm9tICcuL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7Tmd4bVRvdXJTZXJ2aWNlfSBmcm9tICcuL25neC1tZC1tZW51LXRvdXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVG91ckFuY2hvckRpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgcHVibGljIHRvdXJBbmNob3I6IHN0cmluZztcclxuICBwdWJsaWMgb3BlbmVyOiBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBtZW51Q2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b3VyYW5jaG9yLS1pcy1hY3RpdmUnKSBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB0b3VyU2VydmljZTogTmd4bVRvdXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgdG91ckJhY2tkcm9wOiBUb3VyQmFja2Ryb3BTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLm9wZW5lciA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoXHJcbiAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICAgIFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnRcclxuICAgICAgKVxyXG4gICAgKS5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clNlcnZpY2UucmVnaXN0ZXIodGhpcy50b3VyQW5jaG9yLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dUb3VyU3RlcChzdGVwOiBJU3RlcE9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnRvdXJTdGVwVGVtcGxhdGUudGVtcGxhdGVDb21wb25lbnQuc3RlcCA9IHN0ZXA7XHJcbiAgICAvLyBJZ25vcmUgc3RlcC5wbGFjZW1lbnRcclxuICAgIGlmICghc3RlcC5wcmV2ZW50U2Nyb2xsaW5nKSB7XHJcbiAgICAgIGlmICghd2l0aGludmlld3BvcnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgc2lkZXM6ICdib3R0b20nIH0pKSB7XHJcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2xlZnQgdG9wIHJpZ2h0JyB9KVxyXG4gICAgICApIHtcclxuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgKDxhbnk+dGhpcy5vcGVuZXIudHJpZ2dlcikuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgICB0aGlzLm9wZW5lci50cmlnZ2VyLm1lbnUgPSB0aGlzLnRvdXJTdGVwVGVtcGxhdGUudGVtcGxhdGVDb21wb25lbnQudG91clN0ZXA7XHJcbiAgICB0aGlzLm9wZW5lci50cmlnZ2VyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xyXG4gICAgdGhpcy5vcGVuZXIudHJpZ2dlci5vcGVuTWVudSgpO1xyXG5cclxuICAgIGlmIChzdGVwLmVuYWJsZUJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLnNob3codGhpcy5lbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RlcC5wcmV2QnRuVGl0bGUgPSBzdGVwLnByZXZCdG5UaXRsZSB8fCAnUHJldic7XHJcbiAgICBzdGVwLm5leHRCdG5UaXRsZSA9IHN0ZXAubmV4dEJ0blRpdGxlIHx8ICdOZXh0JztcclxuICAgIHN0ZXAuZW5kQnRuVGl0bGUgPSBzdGVwLmVuZEJ0blRpdGxlIHx8ICdFbmQnO1xyXG5cclxuICAgIGlmICh0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLm9wZW5lci50cmlnZ2VyLm1lbnVDbG9zZWRcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgIT09IFRvdXJTdGF0ZS5PRkYpIHtcclxuICAgICAgICAgIHRoaXMudG91clNlcnZpY2UuZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVUb3VyU3RlcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcGVuZXIudHJpZ2dlci5jbG9zZU1lbnUoKTtcclxuICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpID09PSBUb3VyU3RhdGUuT0ZGKSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBJU3RlcE9wdGlvbiwgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3VyLXN0ZXAtdGVtcGxhdGUnLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOjpuZy1kZWVwIC50b3VyLXN0ZXAgLm1hdC1tZW51LWNvbnRlbnQgeyBcclxuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXHJcbiAgICAgIH1cclxuICBgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1tZW51IFtvdmVybGFwVHJpZ2dlcl09XCJmYWxzZVwiIGNsYXNzPVwidG91ci1zdGVwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGVwVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlOyBjb250ZXh0OiB7IHN0ZXA6IHN0ZXAgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1zdGVwPVwic3RlcFwiPlxyXG4gICAgICA8bWF0LWNhcmQgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgIHt7c3RlcD8udGl0bGV9fVxyXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICB7e3N0ZXA/LmNvbnRlbnR9fVxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFtkaXNhYmxlZF09XCIhdG91clNlcnZpY2UuaGFzUHJldihzdGVwKVwiIChjbGljayk9XCJ0b3VyU2VydmljZS5wcmV2KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmNoZXZyb25fbGVmdDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFtkaXNhYmxlZF09XCIhdG91clNlcnZpY2UuaGFzTmV4dChzdGVwKVwiIChjbGljayk9XCJ0b3VyU2VydmljZS5uZXh0KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmNoZXZyb25fcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInRvdXJTZXJ2aWNlLmVuZCgpXCI+e3tzdGVwPy5lbmRCdG5UaXRsZX19PC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoTWF0TWVudSkgcHVibGljIHRvdXJTdGVwOiBNYXRNZW51O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcclxuXHJcbiAgcHVibGljIHN0ZXA6IElTdGVwT3B0aW9uID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLCBwdWJsaWMgdG91clNlcnZpY2U6IE5neG1Ub3VyU2VydmljZSkge1xyXG4gICAgc3VwZXIodG91clNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVDb21wb25lbnQgPSB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWFuY2hvci1vcGVuZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgVG91ck1vZHVsZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5pbXBvcnQgeyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7VG91ckJhY2tkcm9wU2VydmljZX0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHsgVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIE5neG1Ub3VyU2VydmljZSB9O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG91ckFuY2hvck9wZW5lckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBUb3VyTW9kdWxlXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUb3VyTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSwgTWF0Q2FyZE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3VyTWF0TWVudU1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRvdXJNYXRNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcclxuICAgICAgICBUb3VyQmFja2Ryb3BTZXJ2aWNlLFxyXG4gICAgICAgIC4uLlRvdXJNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcclxuICAgICAgICAgIE5neG1Ub3VyU2VydmljZVxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFPRSw2QkFBWSxlQUFpQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVEOzs7OztJQUVNLGtDQUFJOzs7O0lBQVgsVUFBWSxhQUF5Qjs7WUFDN0IsWUFBWSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzlCOzs7O0lBRU0sbUNBQUs7OztJQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lB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