import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "faq", component: FaqPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
