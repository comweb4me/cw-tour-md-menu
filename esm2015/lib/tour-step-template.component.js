/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material';
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export class TourStepTemplateComponent extends TourHotkeyListenerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQWUsMkJBQTJCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBa0MzRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsMkJBQTJCOzs7OztJQVN4RSxZQUFvQix1QkFBZ0QsRUFBUyxXQUE0QjtRQUN2RyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFERCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBRmxHLFNBQUksR0FBZ0IsRUFBRSxDQUFDO0lBSTlCLENBQUM7Ozs7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDeEQsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQU05QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO3lCQTVCUTs7OztHQUlSO2FBeUJGOzs7O1lBbENRLHVCQUF1QjtZQUN4QixlQUFlOzs7dUJBbUNwQixTQUFTLFNBQUMsT0FBTzsyQkFFakIsS0FBSyxZQUNMLFlBQVksU0FBQyxXQUFXOzs7O0lBSHpCLDZDQUE2Qzs7SUFFN0MsaURBRXdEOztJQUV4RCx5Q0FBOEI7Ozs7O0lBRWxCLDREQUF3RDs7SUFBRSxnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0TWVudSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSVN0ZXBPcHRpb24sIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtOZ3htVG91clNlcnZpY2V9IGZyb20gJy4vbmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG91ci1zdGVwLXRlbXBsYXRlJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDo6bmctZGVlcCAudG91ci1zdGVwIC5tYXQtbWVudS1jb250ZW50IHsgXHJcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IFxyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtbWVudSBbb3ZlcmxhcFRyaWdnZXJdPVwiZmFsc2VcIiBjbGFzcz1cInRvdXItc3RlcFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3RlcFRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZTsgY29udGV4dDogeyBzdGVwOiBzdGVwIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbWF0LW1lbnU+XHJcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZSBsZXQtc3RlcD1cInN0ZXBcIj5cclxuICAgICAgPG1hdC1jYXJkIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICB7e3N0ZXA/LnRpdGxlfX1cclxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAge3tzdGVwPy5jb250ZW50fX1cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbZGlzYWJsZWRdPVwiIXRvdXJTZXJ2aWNlLmhhc1ByZXYoc3RlcClcIiAoY2xpY2spPVwidG91clNlcnZpY2UucHJldigpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5jaGV2cm9uX2xlZnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbZGlzYWJsZWRdPVwiIXRvdXJTZXJ2aWNlLmhhc05leHQoc3RlcClcIiAoY2xpY2spPVwidG91clNlcnZpY2UubmV4dCgpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5jaGV2cm9uX3JpZ2h0PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJ0b3VyU2VydmljZS5lbmQoKVwiPnt7c3RlcD8uZW5kQnRuVGl0bGV9fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKE1hdE1lbnUpIHB1YmxpYyB0b3VyU3RlcDogTWF0TWVudTtcclxuXHJcbiAgQElucHV0KClcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKVxyXG4gIHB1YmxpYyBzdGVwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgc3RlcDogSVN0ZXBPcHRpb24gfT47XHJcblxyXG4gIHB1YmxpYyBzdGVwOiBJU3RlcE9wdGlvbiA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSwgcHVibGljIHRvdXJTZXJ2aWNlOiBOZ3htVG91clNlcnZpY2UpIHtcclxuICAgIHN1cGVyKHRvdXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlQ29tcG9uZW50ID0gdGhpcztcclxuICB9XHJcbn1cclxuIl19