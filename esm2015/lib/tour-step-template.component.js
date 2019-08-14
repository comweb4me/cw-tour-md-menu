/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
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
    stepTemplate: [{ type: ContentChild, args: [TemplateRef,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFTLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBZSwyQkFBMkIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFrQzNELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSwyQkFBMkI7Ozs7O0lBUXhFLFlBQW9CLHVCQUFnRCxFQUFTLFdBQTRCO1FBQ3ZHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQURELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFGbEcsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFJOUIsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUN4RCxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBTTlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7eUJBNUJROzs7O0dBSVI7YUF5QkY7Ozs7WUFsQ1EsdUJBQXVCO1lBQ3hCLGVBQWU7Ozt1QkFtQ3BCLFNBQVMsU0FBQyxPQUFPOzJCQUVqQixZQUFZLFNBQUMsV0FBVzs7OztJQUZ6Qiw2Q0FBNkM7O0lBRTdDLGlEQUN3RDs7SUFFeEQseUNBQThCOzs7OztJQUVsQiw0REFBd0Q7O0lBQUUsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IElTdGVwT3B0aW9uLCBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcclxuXHJcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7Tmd4bVRvdXJTZXJ2aWNlfSBmcm9tICcuL25neC1tZC1tZW51LXRvdXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvdXItc3RlcC10ZW1wbGF0ZScsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6Om5nLWRlZXAgLnRvdXItc3RlcCAubWF0LW1lbnUtY29udGVudCB7IFxyXG4gICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyBcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bWF0LW1lbnUgW292ZXJsYXBUcmlnZ2VyXT1cImZhbHNlXCIgY2xhc3M9XCJ0b3VyLXN0ZXBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN0ZXBUZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGU7IGNvbnRleHQ6IHsgc3RlcDogc3RlcCB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LXN0ZXA9XCJzdGVwXCI+XHJcbiAgICAgIDxtYXQtY2FyZCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAge3tzdGVwPy50aXRsZX19XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIHt7c3RlcD8uY29udGVudH19XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW2Rpc2FibGVkXT1cIiF0b3VyU2VydmljZS5oYXNQcmV2KHN0ZXApXCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLnByZXYoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+Y2hldnJvbl9sZWZ0PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW2Rpc2FibGVkXT1cIiF0b3VyU2VydmljZS5oYXNOZXh0KHN0ZXApXCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLm5leHQoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+Y2hldnJvbl9yaWdodDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwidG91clNlcnZpY2UuZW5kKClcIj57e3N0ZXA/LmVuZEJ0blRpdGxlfX08L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZChNYXRNZW51KSBwdWJsaWMgdG91clN0ZXA6IE1hdE1lbnU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcclxuXHJcbiAgcHVibGljIHN0ZXA6IElTdGVwT3B0aW9uID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLCBwdWJsaWMgdG91clNlcnZpY2U6IE5neG1Ub3VyU2VydmljZSkge1xyXG4gICAgc3VwZXIodG91clNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVDb21wb25lbnQgPSB0aGlzO1xyXG4gIH1cclxufVxyXG4iXX0=