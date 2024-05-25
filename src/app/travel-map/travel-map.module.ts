import { NgModule } from '@angular/core';
import { TravelMapComponent } from './travel-map.component';
import { TravelMapService } from './travel-map.service';
import { DBService } from './db.service';

@NgModule({
  declarations: [TravelMapComponent],
  exports: [TravelMapComponent],
  providers: [TravelMapService, DBService]
})
export class TravelMapModule {}