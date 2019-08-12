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
class TourBackdropService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxmTourService extends TourService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourAnchorOpenerComponent {
    constructor() {
        this.menu = new MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true, backdropClass: '' });
    }
}
TourAnchorOpenerComponent.decorators = [
    { type: Component, args: [{
                selector: 'tourAnchorOpener',
                template: `<span [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"></span>`,
                styles: [`:host { display: none; }`]
            }] }
];
TourAnchorOpenerComponent.propDecorators = {
    menu: [{ type: Input }],
    trigger: [{ type: ViewChild, args: [MatMenuTrigger,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourStepTemplateService {
}
TourStepTemplateService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourAnchorMatMenuDirective {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} injector
     * @param {?} viewContainer
     * @param {?} element
     * @param {?} tourService
     * @param {?} tourStepTemplate
     * @param {?} tourBackdrop
     */
    constructor(componentFactoryResolver, injector, viewContainer, element, tourService, tourStepTemplate, tourBackdrop) {
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
    ngOnInit() {
        this.tourService.register(this.tourAnchor, this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    showTourStep(step) {
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
            .subscribe(() => {
            if (this.tourService.getStatus() !== TourState.OFF) {
                this.tourService.end();
            }
            this.tourBackdrop.close();
        });
    }
    /**
     * @return {?}
     */
    hideTourStep() {
        this.isActive = false;
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.opener.trigger.closeMenu();
        if (this.tourService.getStatus() === TourState.OFF) {
            this.tourBackdrop.close();
        }
    }
}
TourAnchorMatMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tourAnchor]'
            },] }
];
/** @nocollapse */
TourAnchorMatMenuDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: NgxmTourService },
    { type: TourStepTemplateService },
    { type: TourBackdropService }
];
TourAnchorMatMenuDirective.propDecorators = {
    tourAnchor: [{ type: Input }],
    isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourStepTemplateComponent extends TourHotkeyListenerComponent {
    /**
     * @param {?} tourStepTemplateService
     * @param {?} tourService
     */
    constructor(tourStepTemplateService, tourService) {
        super(tourService);
        this.tourStepTemplateService = tourStepTemplateService;
        this.tourService = tourService;
        this.step = {};
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }
}
TourStepTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'tour-step-template',
                template: `
    <mat-menu [overlapTrigger]="false" class="tour-step">
      <ng-container *ngTemplateOutlet="stepTemplate || defaultTemplate; context: { step: step }"></ng-container>
    </mat-menu>
    <ng-template #defaultTemplate let-step="step">
      <mat-card (click)="$event.stopPropagation()">
        <mat-card-title>
          {{step?.title}}
        </mat-card-title>
        <mat-card-content>
          {{step?.content}}
        </mat-card-content>
        <mat-card-actions>
          <button mat-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">
            <mat-icon>chevron_left</mat-icon>
          </button>
          <button mat-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">
            <mat-icon>chevron_right</mat-icon>
          </button>
          <button mat-button (click)="tourService.end()">{{step?.endBtnTitle}}</button>
        </mat-card-actions>
      </mat-card>
    </ng-template>
  `,
                styles: [`
      ::ng-deep .tour-step .mat-menu-content { 
          padding: 0 !important; 
      }
  `]
            }] }
];
/** @nocollapse */
TourStepTemplateComponent.ctorParameters = () => [
    { type: TourStepTemplateService },
    { type: NgxmTourService }
];
TourStepTemplateComponent.propDecorators = {
    tourStep: [{ type: ViewChild, args: [MatMenu,] }],
    stepTemplate: [{ type: Input }, { type: ContentChild, args: [TemplateRef,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourMatMenuModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourMatMenuModule,
            providers: [
                TourStepTemplateService,
                TourBackdropService,
                ...TourModule.forRoot().providers,
                NgxmTourService
            ],
        };
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxmTourService as TourService, TourMatMenuModule, TourAnchorMatMenuDirective, TourStepTemplateComponent, NgxmTourService as ɵa, TourAnchorOpenerComponent as ɵd, TourBackdropService as ɵb, TourStepTemplateService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvdXItbWQtbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRvdXItbWQtbWVudS9saWIvdG91ci1iYWNrZHJvcC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG91ci1tZC1tZW51L2xpYi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL3RvdXItYW5jaG9yLW9wZW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG91ci1tZC1tZW51L2xpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL3RvdXItc3RlcC10ZW1wbGF0ZS5jb21wb25lbnQudHMiLCJuZzovL25neC10b3VyLW1kLW1lbnUvbGliL21kLW1lbnUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG91ckJhY2tkcm9wU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3codGFyZ2V0RWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGFyZ2V0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGlmICghdGhpcy5iYWNrZHJvcEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYmFja2Ryb3BFbGVtZW50LCAnbmd4LXRvdXJfYmFja2Ryb3AnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCB0aGlzLmJhY2tkcm9wRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdHlsZXMoYm91bmRpbmdSZWN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmJhY2tkcm9wRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoYm91bmRpbmdSZWN0OiBET01SZWN0KSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICB3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgJ3B4JyxcclxuICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAncHgnLFxyXG4gICAgICAnYm94LXNoYWRvdyc6ICcwIDAgMCA5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjcpJyxcclxuICAgICAgJ3otaW5kZXgnOiAnMTAwJ1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoc3R5bGVzKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYmFja2Ryb3BFbGVtZW50LCBuYW1lLCBzdHlsZXNbbmFtZV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvdXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJTmd4bVN0ZXBPcHRpb24gfSBmcm9tICcuL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRvdXJCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3htVG91clNlcnZpY2UgZXh0ZW5kcyBUb3VyU2VydmljZTxJTmd4bVN0ZXBPcHRpb24+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgdG91ckJhY2tkcm9wOiBUb3VyQmFja2Ryb3BTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihyb3V0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhpZGVTdGVwKHN0ZXApOiB2b2lkIHtcclxuICAgIGNvbnN0IGFuY2hvciA9IHRoaXMuYW5jaG9yc1tzdGVwICYmIHN0ZXAuYW5jaG9ySWRdO1xyXG4gICAgaWYgKCFhbmNob3IpIHtcclxuICAgICAgdGhpcy50b3VyQmFja2Ryb3AuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuY2hvci5oaWRlVG91clN0ZXAoKTtcclxuICAgICAgdGhpcy5zdGVwSGlkZSQubmV4dChzdGVwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyLCBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3VyQW5jaG9yT3BlbmVyJyxcclxuICBzdHlsZXM6IFtgOmhvc3QgeyBkaXNwbGF5OiBub25lOyB9YF0sXHJcbiAgdGVtcGxhdGU6IGA8c3BhbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiICN0cmlnZ2VyPVwibWF0TWVudVRyaWdnZXJcIj48L3NwYW4+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbWVudTogTWF0TWVudSA9IG5ldyBNYXRNZW51KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7IHhQb3NpdGlvbjogJ2FmdGVyJywgeVBvc2l0aW9uOiAnYmVsb3cnLCBvdmVybGFwVHJpZ2dlcjogdHJ1ZSwgYmFja2Ryb3BDbGFzczogJycgfSk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIHB1YmxpYyB0cmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIHtcclxuICBwdWJsaWMgdGVtcGxhdGVDb21wb25lbnQ6IFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgVG91ckFuY2hvckRpcmVjdGl2ZSxcclxuICBUb3VyU3RhdGVcclxufSBmcm9tICduZ3gtdG91ci1jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB3aXRoaW52aWV3cG9ydCBmcm9tICd3aXRoaW52aWV3cG9ydCc7XHJcblxyXG5pbXBvcnQgeyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWFuY2hvci1vcGVuZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7VG91ckJhY2tkcm9wU2VydmljZX0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJTmd4bVN0ZXBPcHRpb24gYXMgSVN0ZXBPcHRpb24gfSBmcm9tICcuL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7Tmd4bVRvdXJTZXJ2aWNlfSBmcm9tICcuL25neC1tZC1tZW51LXRvdXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVG91ckFuY2hvckRpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgcHVibGljIHRvdXJBbmNob3I6IHN0cmluZztcclxuICBwdWJsaWMgb3BlbmVyOiBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBtZW51Q2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b3VyYW5jaG9yLS1pcy1hY3RpdmUnKSBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB0b3VyU2VydmljZTogTmd4bVRvdXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgdG91ckJhY2tkcm9wOiBUb3VyQmFja2Ryb3BTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLm9wZW5lciA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoXHJcbiAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICAgIFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnRcclxuICAgICAgKVxyXG4gICAgKS5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clNlcnZpY2UucmVnaXN0ZXIodGhpcy50b3VyQW5jaG9yLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dUb3VyU3RlcChzdGVwOiBJU3RlcE9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnRvdXJTdGVwVGVtcGxhdGUudGVtcGxhdGVDb21wb25lbnQuc3RlcCA9IHN0ZXA7XHJcbiAgICAvLyBJZ25vcmUgc3RlcC5wbGFjZW1lbnRcclxuICAgIGlmICghc3RlcC5wcmV2ZW50U2Nyb2xsaW5nKSB7XHJcbiAgICAgIGlmICghd2l0aGludmlld3BvcnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgc2lkZXM6ICdib3R0b20nIH0pKSB7XHJcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2xlZnQgdG9wIHJpZ2h0JyB9KVxyXG4gICAgICApIHtcclxuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgKDxhbnk+dGhpcy5vcGVuZXIudHJpZ2dlcikuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgICB0aGlzLm9wZW5lci50cmlnZ2VyLm1lbnUgPSB0aGlzLnRvdXJTdGVwVGVtcGxhdGUudGVtcGxhdGVDb21wb25lbnQudG91clN0ZXA7XHJcbiAgICB0aGlzLm9wZW5lci50cmlnZ2VyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xyXG4gICAgdGhpcy5vcGVuZXIudHJpZ2dlci5vcGVuTWVudSgpO1xyXG5cclxuICAgIGlmIChzdGVwLmVuYWJsZUJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLnNob3codGhpcy5lbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RlcC5wcmV2QnRuVGl0bGUgPSBzdGVwLnByZXZCdG5UaXRsZSB8fCAnUHJldic7XHJcbiAgICBzdGVwLm5leHRCdG5UaXRsZSA9IHN0ZXAubmV4dEJ0blRpdGxlIHx8ICdOZXh0JztcclxuICAgIHN0ZXAuZW5kQnRuVGl0bGUgPSBzdGVwLmVuZEJ0blRpdGxlIHx8ICdFbmQnO1xyXG5cclxuICAgIGlmICh0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLm9wZW5lci50cmlnZ2VyLm1lbnVDbG9zZWRcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgIT09IFRvdXJTdGF0ZS5PRkYpIHtcclxuICAgICAgICAgIHRoaXMudG91clNlcnZpY2UuZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVUb3VyU3RlcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm1lbnVDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcGVuZXIudHJpZ2dlci5jbG9zZU1lbnUoKTtcclxuICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpID09PSBUb3VyU3RhdGUuT0ZGKSB7XHJcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBJU3RlcE9wdGlvbiwgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3VyLXN0ZXAtdGVtcGxhdGUnLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOjpuZy1kZWVwIC50b3VyLXN0ZXAgLm1hdC1tZW51LWNvbnRlbnQgeyBcclxuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXHJcbiAgICAgIH1cclxuICBgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1tZW51IFtvdmVybGFwVHJpZ2dlcl09XCJmYWxzZVwiIGNsYXNzPVwidG91ci1zdGVwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGVwVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlOyBjb250ZXh0OiB7IHN0ZXA6IHN0ZXAgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1zdGVwPVwic3RlcFwiPlxyXG4gICAgICA8bWF0LWNhcmQgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgIHt7c3RlcD8udGl0bGV9fVxyXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICB7e3N0ZXA/LmNvbnRlbnR9fVxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFtkaXNhYmxlZF09XCIhdG91clNlcnZpY2UuaGFzUHJldihzdGVwKVwiIChjbGljayk9XCJ0b3VyU2VydmljZS5wcmV2KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmNoZXZyb25fbGVmdDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFtkaXNhYmxlZF09XCIhdG91clNlcnZpY2UuaGFzTmV4dChzdGVwKVwiIChjbGljayk9XCJ0b3VyU2VydmljZS5uZXh0KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmNoZXZyb25fcmlnaHQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInRvdXJTZXJ2aWNlLmVuZCgpXCI+e3tzdGVwPy5lbmRCdG5UaXRsZX19PC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoTWF0TWVudSkgcHVibGljIHRvdXJTdGVwOiBNYXRNZW51O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcclxuXHJcbiAgcHVibGljIHN0ZXA6IElTdGVwT3B0aW9uID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLCBwdWJsaWMgdG91clNlcnZpY2U6IE5neG1Ub3VyU2VydmljZSkge1xyXG4gICAgc3VwZXIodG91clNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVDb21wb25lbnQgPSB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWFuY2hvci1vcGVuZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgVG91ck1vZHVsZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5pbXBvcnQgeyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7VG91ckJhY2tkcm9wU2VydmljZX0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHsgVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIE5neG1Ub3VyU2VydmljZSB9O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG91ckFuY2hvck9wZW5lckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBUb3VyTW9kdWxlXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUb3VyTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSwgTWF0Q2FyZE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3VyTWF0TWVudU1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRvdXJNYXRNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcclxuICAgICAgICBUb3VyQmFja2Ryb3BTZXJ2aWNlLFxyXG4gICAgICAgIC4uLlRvdXJNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcclxuICAgICAgICAgIE5neG1Ub3VyU2VydmljZVxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BR2EsbUJBQW1COzs7O0lBSTlCLFlBQVksZUFBaUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1RDs7Ozs7SUFFTSxJQUFJLENBQUMsYUFBeUI7O2NBQzdCLFlBQVksR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFO1FBRXhFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUM5Qjs7OztJQUVNLEtBQUs7UUFDVixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFB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