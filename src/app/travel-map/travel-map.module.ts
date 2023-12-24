import { NgModule } from '@angular/core';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { TravelMapComponent } from './travel-map.component';

@NgModule({
  declarations: [TravelMapComponent],
  imports: [GoogleMapsModule],
  exports: [TravelMapComponent],
  providers: [provideHttpClient(withJsonpSupport())]
})
export class TravelMapModule {}