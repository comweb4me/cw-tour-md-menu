/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
            providers: tslib_1.__spread([
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
export { TourMatMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1tZC1tZW51LyIsInNvdXJjZXMiOlsibGliL21kLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLENBQUM7QUFFbEY7SUFBQTtJQW9CQSxDQUFDOzs7O0lBWGUseUJBQU87OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVM7Z0JBQ1AsdUJBQXVCO2dCQUN2QixtQkFBbUI7ZUFDaEIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Z0JBQy9CLGVBQWU7Y0FDbEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsQ0FBQztvQkFDaEcsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQzVDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLFVBQVUsQ0FBQztvQkFDNUUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVU7d0JBQ2hDLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWE7cUJBQzdEO2lCQUNGOztJQWFELHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FaWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWFuY2hvci1vcGVuZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgVG91ck1vZHVsZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xyXG5pbXBvcnQgeyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7VG91ckJhY2tkcm9wU2VydmljZX0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IHsgVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIE5neG1Ub3VyU2VydmljZSB9O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG91ckFuY2hvck9wZW5lckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBUb3VyTW9kdWxlXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUb3VyTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSwgTWF0Q2FyZE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3VyTWF0TWVudU1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRvdXJNYXRNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcclxuICAgICAgICBUb3VyQmFja2Ryb3BTZXJ2aWNlLFxyXG4gICAgICAgIC4uLlRvdXJNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcclxuICAgICAgICAgIE5neG1Ub3VyU2VydmljZVxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19