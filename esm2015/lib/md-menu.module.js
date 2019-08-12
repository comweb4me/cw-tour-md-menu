/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { TourModule } from 'ngx-tour-core';
import { TourAnchorMatMenuDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { TourBackdropService } from './tour-backdrop.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export { TourAnchorMatMenuDirective, TourStepTemplateComponent, NgxmTourService };
export class TourMatMenuModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1tZC1tZW51LyIsInNvdXJjZXMiOlsibGliL21kLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsQ0FBQztBQVVsRixNQUFNLE9BQU8saUJBQWlCOzs7O0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLG1CQUFtQjtnQkFDbkIsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUztnQkFDL0IsZUFBZTthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFuQkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixDQUFDO2dCQUNoRyxlQUFlLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsVUFBVSxDQUFDO2dCQUM1RSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVTtvQkFDaEMsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYTtpQkFDN0Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnQgfSBmcm9tICcuL3RvdXItYW5jaG9yLW9wZW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBUb3VyTW9kdWxlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XHJcbmltcG9ydCB7IFRvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUb3VyQmFja2Ryb3BTZXJ2aWNlfSBmcm9tICcuL3RvdXItYmFja2Ryb3Auc2VydmljZSc7XHJcbmltcG9ydCB7Tmd4bVRvdXJTZXJ2aWNlfSBmcm9tICcuL25neC1tZC1tZW51LXRvdXIuc2VydmljZSc7XHJcblxyXG5leHBvcnQgeyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgTmd4bVRvdXJTZXJ2aWNlIH07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIFRvdXJNb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRvdXJNb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvdXJNYXRNZW51TW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVG91ck1hdE1lbnVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgICAgIFRvdXJCYWNrZHJvcFNlcnZpY2UsXHJcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxyXG4gICAgICAgICAgTmd4bVRvdXJTZXJ2aWNlXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=