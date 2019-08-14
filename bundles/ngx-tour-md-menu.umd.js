(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-tour-core'), require('@angular/router'), require('@angular/material'), require('withinviewport'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-tour-md-menu', ['exports', '@angular/core', 'ngx-tour-core', '@angular/router', '@angular/material', 'withinviewport', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global['ngx-tour-md-menu'] = {}),global.ng.core,global.ngxTourCore,global.ng.router,global.ng.material,global.withinviewport,global.rxjs.operators,global.ng.common));
}(this, (function (exports,core,ngxTourCore,router,material,withinviewport,operators,common) { 'use strict';

    withinviewport = withinviewport && withinviewport.hasOwnProperty('default') ? withinviewport['default'] : withinviewport;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        TourBackdropService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TourBackdropService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2 }
            ];
        };
        return TourBackdropService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxmTourService = /** @class */ (function (_super) {
        __extends(NgxmTourService, _super);
        function NgxmTourService(router$$1, tourBackdrop) {
            var _this = _super.call(this, router$$1) || this;
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxmTourService.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: TourBackdropService }
            ];
        };
        return NgxmTourService;
    }(ngxTourCore.TourService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TourAnchorOpenerComponent = /** @class */ (function () {
        function TourAnchorOpenerComponent() {
            this.menu = new material.MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true, backdropClass: '' });
        }
        TourAnchorOpenerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'tourAnchorOpener',
                        template: "<span [matMenuTriggerFor]=\"menu\" #trigger=\"matMenuTrigger\"></span>",
                        styles: [":host { display: none; }"]
                    }] }
        ];
        TourAnchorOpenerComponent.propDecorators = {
            menu: [{ type: core.Input }],
            trigger: [{ type: core.ViewChild, args: [material.MatMenuTrigger,] }]
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
            { type: core.Injectable }
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
                        (( /** @type {?} */(this.element.nativeElement))).scrollIntoView(false);
                    }
                    else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
                        (( /** @type {?} */(this.element.nativeElement))).scrollIntoView(true);
                    }
                }
                (( /** @type {?} */(this.opener.trigger)))._element = this.element;
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
                    .pipe(operators.first())
                    .subscribe(function () {
                    if (_this.tourService.getStatus() !== ngxTourCore.TourState.OFF) {
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
                if (this.tourService.getStatus() === ngxTourCore.TourState.OFF) {
                    this.tourBackdrop.close();
                }
            };
        TourAnchorMatMenuDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tourAnchor]'
                    },] }
        ];
        /** @nocollapse */
        TourAnchorMatMenuDirective.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: core.Injector },
                { type: core.ViewContainerRef },
                { type: core.ElementRef },
                { type: NgxmTourService },
                { type: TourStepTemplateService },
                { type: TourBackdropService }
            ];
        };
        TourAnchorMatMenuDirective.propDecorators = {
            tourAnchor: [{ type: core.Input }],
            isActive: [{ type: core.HostBinding, args: ['class.touranchor--is-active',] }]
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
            { type: core.Component, args: [{
                        selector: 'tour-step-template',
                        template: "\n    <mat-menu [overlapTrigger]=\"false\" class=\"tour-step\">\n      <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n    </mat-menu>\n    <ng-template #defaultTemplate let-step=\"step\">\n      <mat-card (click)=\"$event.stopPropagation()\">\n        <mat-card-title>\n          {{step?.title}}\n        </mat-card-title>\n        <mat-card-content>\n          {{step?.content}}\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-icon-button [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\">\n            <mat-icon>chevron_left</mat-icon>\n          </button>\n          <button mat-icon-button [disabled]=\"!tourService.hasNext(step)\" (click)=\"tourService.next()\">\n            <mat-icon>chevron_right</mat-icon>\n          </button>\n          <button mat-button (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n  ",
                        styles: ["\n      ::ng-deep .tour-step .mat-menu-content { \n          padding: 0 !important; \n      }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TourStepTemplateComponent.ctorParameters = function () {
            return [
                { type: TourStepTemplateService },
                { type: NgxmTourService }
            ];
        };
        TourStepTemplateComponent.propDecorators = {
            tourStep: [{ type: core.ViewChild, args: [material.MatMenu,] }],
            stepTemplate: [{ type: core.ContentChild, args: [core.TemplateRef,] }]
        };
        return TourStepTemplateComponent;
    }(ngxTourCore.TourHotkeyListenerComponent));

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
                    ], ngxTourCore.TourModule.forRoot().providers, [
                        NgxmTourService
                    ]),
                };
            };
        TourMatMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
                        entryComponents: [TourAnchorOpenerComponent],
                        exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, ngxTourCore.TourModule],
                        imports: [common.CommonModule, ngxTourCore.TourModule,
                            material.MatMenuModule, material.MatCardModule, material.MatButtonModule, material.MatIconModule,
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

    exports.TourService = NgxmTourService;
    exports.TourMatMenuModule = TourMatMenuModule;
    exports.TourAnchorMatMenuDirective = TourAnchorMatMenuDirective;
    exports.TourStepTemplateComponent = TourStepTemplateComponent;
    exports.ɵa = NgxmTourService;
    exports.ɵd = TourAnchorOpenerComponent;
    exports.ɵb = TourBackdropService;
    exports.ɵc = TourStepTemplateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvdXItbWQtbWVudS51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtdG91ci1tZC1tZW51L2xpYi90b3VyLWJhY2tkcm9wLnNlcnZpY2UudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL25neC1tZC1tZW51LXRvdXIuc2VydmljZS50cyIsIm5nOi8vbmd4LXRvdXItbWQtbWVudS9saWIvdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXRvdXItbWQtbWVudS9saWIvdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL3RvdXItYW5jaG9yLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LXRvdXItbWQtbWVudS9saWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXRvdXItbWQtbWVudS9saWIvbWQtbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvdXJCYWNrZHJvcFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICBwcml2YXRlIGJhY2tkcm9wRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KHRhcmdldEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHRhcmdldEVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3BFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJhY2tkcm9wRWxlbWVudCwgJ25neC10b3VyX2JhY2tkcm9wJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgdGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3R5bGVzKGJvdW5kaW5nUmVjdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICBpZiAodGhpcy5iYWNrZHJvcEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCB0aGlzLmJhY2tkcm9wRWxlbWVudCk7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3R5bGVzKGJvdW5kaW5nUmVjdDogRE9NUmVjdCkge1xyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgd2lkdGg6IGJvdW5kaW5nUmVjdC53aWR0aCArICdweCcsXHJcbiAgICAgIGhlaWdodDogYm91bmRpbmdSZWN0LmhlaWdodCArICdweCcsXHJcbiAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArICdweCcsXHJcbiAgICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgJ3B4JyxcclxuICAgICAgJ2JveC1zaGFkb3cnOiAnMCAwIDAgOTk5OXB4IHJnYmEoMCwgMCwgMCwgMC43KScsXHJcbiAgICAgICd6LWluZGV4JzogJzEwMCdcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHN0eWxlcykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmJhY2tkcm9wRWxlbWVudCwgbmFtZSwgc3R5bGVzW25hbWVdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3VyU2VydmljZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5cclxuaW1wb3J0IHsgSU5neG1TdGVwT3B0aW9uIH0gZnJvbSAnLi9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUb3VyQmFja2Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4bVRvdXJTZXJ2aWNlIGV4dGVuZHMgVG91clNlcnZpY2U8SU5neG1TdGVwT3B0aW9uPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHRvdXJCYWNrZHJvcDogVG91ckJhY2tkcm9wU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIocm91dGVyKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoaWRlU3RlcChzdGVwKTogdm9pZCB7XHJcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLmFuY2hvcnNbc3RlcCAmJiBzdGVwLmFuY2hvcklkXTtcclxuICAgIGlmICghYW5jaG9yKSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmNob3IuaGlkZVRvdXJTdGVwKCk7XHJcbiAgICAgIHRoaXMuc3RlcEhpZGUkLm5leHQoc3RlcCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRNZW51VHJpZ2dlciwgTWF0TWVudSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG91ckFuY2hvck9wZW5lcicsXHJcbiAgc3R5bGVzOiBbYDpob3N0IHsgZGlzcGxheTogbm9uZTsgfWBdLFxyXG4gIHRlbXBsYXRlOiBgPHNwYW4gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiAjdHJpZ2dlcj1cIm1hdE1lbnVUcmlnZ2VyXCI+PC9zcGFuPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG1lbnU6IE1hdE1lbnUgPSBuZXcgTWF0TWVudSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgeyB4UG9zaXRpb246ICdhZnRlcicsIHlQb3NpdGlvbjogJ2JlbG93Jywgb3ZlcmxhcFRyaWdnZXI6IHRydWUsIGJhY2tkcm9wQ2xhc3M6ICcnIH0pO1xyXG5cclxuICBAVmlld0NoaWxkKE1hdE1lbnVUcmlnZ2VyKSBwdWJsaWMgdHJpZ2dlcjogTWF0TWVudVRyaWdnZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB7XHJcbiAgcHVibGljIHRlbXBsYXRlQ29tcG9uZW50OiBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFRvdXJBbmNob3JEaXJlY3RpdmUsXHJcbiAgVG91clN0YXRlXHJcbn0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgd2l0aGludmlld3BvcnQgZnJvbSAnd2l0aGludmlld3BvcnQnO1xyXG5cclxuaW1wb3J0IHsgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1RvdXJCYWNrZHJvcFNlcnZpY2V9IGZyb20gJy4vdG91ci1iYWNrZHJvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSU5neG1TdGVwT3B0aW9uIGFzIElTdGVwT3B0aW9uIH0gZnJvbSAnLi9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdG91ckFuY2hvcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFRvdXJBbmNob3JEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b3VyQW5jaG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIG9wZW5lcjogVG91ckFuY2hvck9wZW5lckNvbXBvbmVudDtcclxuICBwdWJsaWMgbWVudUNsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG91cmFuY2hvci0taXMtYWN0aXZlJykgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdG91clNlcnZpY2U6IE5neG1Ub3VyU2VydmljZSxcclxuICAgIHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZTogVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRvdXJCYWNrZHJvcDogVG91ckJhY2tkcm9wU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5vcGVuZXIgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KFxyXG4gICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcclxuICAgICAgICBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50XHJcbiAgICAgIClcclxuICAgICkuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvciwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnVucmVnaXN0ZXIodGhpcy50b3VyQW5jaG9yKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93VG91clN0ZXAoc3RlcDogSVN0ZXBPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy50b3VyU3RlcFRlbXBsYXRlLnRlbXBsYXRlQ29tcG9uZW50LnN0ZXAgPSBzdGVwO1xyXG4gICAgLy8gSWdub3JlIHN0ZXAucGxhY2VtZW50XHJcbiAgICBpZiAoIXN0ZXAucHJldmVudFNjcm9sbGluZykge1xyXG4gICAgICBpZiAoIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IHNpZGVzOiAnYm90dG9tJyB9KSkge1xyXG4gICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAhd2l0aGludmlld3BvcnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgc2lkZXM6ICdsZWZ0IHRvcCByaWdodCcgfSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICg8YW55PnRoaXMub3BlbmVyLnRyaWdnZXIpLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG4gICAgdGhpcy5vcGVuZXIudHJpZ2dlci5tZW51ID0gdGhpcy50b3VyU3RlcFRlbXBsYXRlLnRlbXBsYXRlQ29tcG9uZW50LnRvdXJTdGVwO1xyXG4gICAgdGhpcy5vcGVuZXIudHJpZ2dlci5uZ0FmdGVyQ29udGVudEluaXQoKTtcclxuICAgIHRoaXMub3BlbmVyLnRyaWdnZXIub3Blbk1lbnUoKTtcclxuXHJcbiAgICBpZiAoc3RlcC5lbmFibGVCYWNrZHJvcCkge1xyXG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5zaG93KHRoaXMuZWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAucHJldkJ0blRpdGxlID0gc3RlcC5wcmV2QnRuVGl0bGUgfHwgJ1ByZXYnO1xyXG4gICAgc3RlcC5uZXh0QnRuVGl0bGUgPSBzdGVwLm5leHRCdG5UaXRsZSB8fCAnTmV4dCc7XHJcbiAgICBzdGVwLmVuZEJ0blRpdGxlID0gc3RlcC5lbmRCdG5UaXRsZSB8fCAnRW5kJztcclxuXHJcbiAgICBpZiAodGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5vcGVuZXIudHJpZ2dlci5tZW51Q2xvc2VkXHJcbiAgICAgIC5waXBlKGZpcnN0KCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpICE9PSBUb3VyU3RhdGUuT0ZGKSB7XHJcbiAgICAgICAgICB0aGlzLnRvdXJTZXJ2aWNlLmVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlVG91clN0ZXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3BlbmVyLnRyaWdnZXIuY2xvc2VNZW51KCk7XHJcbiAgICBpZiAodGhpcy50b3VyU2VydmljZS5nZXRTdGF0dXMoKSA9PT0gVG91clN0YXRlLk9GRikge1xyXG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0TWVudSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSVN0ZXBPcHRpb24sIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtOZ3htVG91clNlcnZpY2V9IGZyb20gJy4vbmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG91ci1zdGVwLXRlbXBsYXRlJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDo6bmctZGVlcCAudG91ci1zdGVwIC5tYXQtbWVudS1jb250ZW50IHsgXHJcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IFxyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtbWVudSBbb3ZlcmxhcFRyaWdnZXJdPVwiZmFsc2VcIiBjbGFzcz1cInRvdXItc3RlcFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3RlcFRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZTsgY29udGV4dDogeyBzdGVwOiBzdGVwIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbWF0LW1lbnU+XHJcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZSBsZXQtc3RlcD1cInN0ZXBcIj5cclxuICAgICAgPG1hdC1jYXJkIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICB7e3N0ZXA/LnRpdGxlfX1cclxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAge3tzdGVwPy5jb250ZW50fX1cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbZGlzYWJsZWRdPVwiIXRvdXJTZXJ2aWNlLmhhc1ByZXYoc3RlcClcIiAoY2xpY2spPVwidG91clNlcnZpY2UucHJldigpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5jaGV2cm9uX2xlZnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbZGlzYWJsZWRdPVwiIXRvdXJTZXJ2aWNlLmhhc05leHQoc3RlcClcIiAoY2xpY2spPVwidG91clNlcnZpY2UubmV4dCgpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5jaGV2cm9uX3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJ0b3VyU2VydmljZS5lbmQoKVwiPnt7c3RlcD8uZW5kQnRuVGl0bGV9fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKE1hdE1lbnUpIHB1YmxpYyB0b3VyU3RlcDogTWF0TWVudTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZilcclxuICBwdWJsaWMgc3RlcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7IHN0ZXA6IElTdGVwT3B0aW9uIH0+O1xyXG5cclxuICBwdWJsaWMgc3RlcDogSVN0ZXBPcHRpb24gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlU2VydmljZTogVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UsIHB1YmxpYyB0b3VyU2VydmljZTogTmd4bVRvdXJTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcih0b3VyU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VyU3RlcFRlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUNvbXBvbmVudCA9IHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnQgfSBmcm9tICcuL3RvdXItYW5jaG9yLW9wZW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBUb3VyTW9kdWxlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcbmltcG9ydCB7IFRvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUb3VyQmFja2Ryb3BTZXJ2aWNlfSBmcm9tICcuL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XHJcbmltcG9ydCB7Tmd4bVRvdXJTZXJ2aWNlfSBmcm9tICcuL25neC1tZC1tZW51LXRvdXIuc2VydmljZSc7XHJcblxyXG5leHBvcnQgeyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgTmd4bVRvdXJTZXJ2aWNlIH07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIFRvdXJNb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRvdXJNb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdXJNYXRNZW51TW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVG91ck1hdE1lbnVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgICAgIFRvdXJCYWNrZHJvcFNlcnZpY2UsXHJcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxyXG4gICAgICAgICAgTmd4bVRvdXJTZXJ2aWNlXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsIkluamVjdGFibGUiLCJSZW5kZXJlckZhY3RvcnkyIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJUb3VyU2VydmljZSIsIk1hdE1lbnUiLCJDb21wb25lbnQiLCJJbnB1dCIsIlZpZXdDaGlsZCIsIk1hdE1lbnVUcmlnZ2VyIiwiZmlyc3QiLCJUb3VyU3RhdGUiLCJEaXJlY3RpdmUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJJbmplY3RvciIsIlZpZXdDb250YWluZXJSZWYiLCJFbGVtZW50UmVmIiwiSG9zdEJpbmRpbmciLCJDb250ZW50Q2hpbGQiLCJUZW1wbGF0ZVJlZiIsIlRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCIsIlRvdXJNb2R1bGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsYUFBZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxFQUFFLEtBQUssSUFBSSxD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