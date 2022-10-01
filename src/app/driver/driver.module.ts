import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { DetailsComponent } from './details/details.component';
import { StopComponent } from './stop-list/stop/stop.component';
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './shared/data.service';

const routes: Routes = [
  { path: '', component: DriverComponent },
  { path: 'stops', component: StopListComponent },
  { path: 'details/:id', component: DetailsComponent },
]

@NgModule({
  declarations: [
    DriverComponent,
    StopListComponent,
    DetailsComponent,
    StopComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DriverModule { }
