import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';
import { StylebindComponent } from './stylebind/stylebind.component';
import { ClassbindComponent } from './classbind/classbind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { OnewayComponent } from './oneway/oneway.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path:'', component: OnewayComponent },
  { path:'property', component: PropertyComponent },
  { path:'style', component: StylebindComponent },
  { path:'class', component: ClassbindComponent },
  { path:'event', component: EventbindComponent },
  { path:'twoway', component: TwowayComponent }, 

];
@NgModule({
  declarations: [
    OnewayComponent,
    PropertyComponent,
    StylebindComponent,
    ClassbindComponent,
    EventbindComponent,
    TwowayComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
  exports :[RouterModule]
})
export class DataModule { }
