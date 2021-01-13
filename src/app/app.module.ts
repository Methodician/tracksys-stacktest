// ANGULAR GUTS
import { NgModule } from '@angular/core';
import { AngularModule } from './angular.module';

// ANGULAR MATERIAL
import { MaterialModule } from './material.module';

// ANGULAR FIRE
import { NgFireModule } from './ngfire.module';

// INTERNAL COMPONENTS
import { AppComponent } from './app.component';
import { Components } from './component-list';

// INTERNAL MODULES
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [Components],
  imports: [MaterialModule, NgFireModule, AngularModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
