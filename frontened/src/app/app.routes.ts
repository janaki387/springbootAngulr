import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadDetailComponent } from './lead-details/lead-details.component';
import { LeadFilterComponent } from './lead-filter/lead-filter.component';
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-lead', component: LeadFormComponent },
  { path: 'leads', component: LeadListComponent },
  { path: 'lead/:id', component: LeadDetailComponent },
  { path: 'edit/:id', component: LeadFormComponent },   // ✅ added
  { path: 'filter', component: LeadFilterComponent },
  { path: '**', redirectTo: '/dashboard' }
];

