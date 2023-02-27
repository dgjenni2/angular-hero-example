import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeroDetailComponent } from './features/hero-detail/hero-detail.component';
import { HeroesComponent } from './features/heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailComponent},
  { path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
