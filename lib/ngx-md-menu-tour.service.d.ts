import { TourService } from 'ngx-tour-core';
import { INgxmStepOption } from './step-option.interface';
import { TourBackdropService } from './tour-backdrop.service';
import { Router } from '@angular/router';
export declare class NgxmTourService extends TourService<INgxmStepOption> {
    private tourBackdrop;
    constructor(router: Router, tourBackdrop: TourBackdropService);
    protected hideStep(step: any): void;
}
