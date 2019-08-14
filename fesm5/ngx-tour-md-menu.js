import { __values, __extends, __spread } from 'tslib';
import { Injectable, RendererFactory2, Component, Input, ViewChild, Directive, ComponentFactoryResolver, Injector, ViewContainerRef, ElementRef, HostBinding, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { TourService, TourState, TourHotkeyListenerComponent, TourModule } from 'ngx-tour-core';
import { Router } from '@angular/router';
import { MatMenu, MatMenuTrigger, MatMenuModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxmTourService.prototype.tourBackdrop;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        trigger: [{ type: ViewChild, args: [MatMenuTrigger, { static: false },] }]
    };
    return TourAnchorOpenerComponent;
}());
if (false) {
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.menu;
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.trigger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourStepTemplateService = /** @class */ (function () {
    function TourStepTemplateService() {
    }
    TourStepTemplateService.decorators = [
        { type: Injectable }
    ];
    return TourStepTemplateService;
}());
if (false) {
    /** @type {?} */
    TourStepTemplateService.prototype.templateComponent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        tourStep: [{ type: ViewChild, args: [MatMenu, { static: false },] }],
        stepTemplate: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return TourStepTemplateComponent;
}(TourHotkeyListenerComponent));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TourAnchorMatMenuDirective, TourMatMenuModule, NgxmTourService as TourService, TourStepTemplateComponent, NgxmTourService as ɵa, TourBackdropService as ɵb, TourStepTemplateService as ɵc, TourAnchorOpenerComponent as ɵd };
//# sourceMappingURL=ngx-tour-md-menu.js.map
