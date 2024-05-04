import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from 'src/components/demo/demo.component';
import { DescriptionComponent } from 'src/components/description/description.component';

const routes: Routes = [
  { path: 'desc', component: DescriptionComponent},
  { path: '', component: DemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
