import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { StartFrameworkComponent } from './components/start-framework/start-framework.component';

const routes: Routes = [
  {path:'', component: StartFrameworkComponent},
  {path: 'about', component:AboutComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
