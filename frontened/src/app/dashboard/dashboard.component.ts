import { Component, OnInit } from '@angular/core';
import { Solar } from '../solar';
import { MenageService } from '../menage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']   // ✅ fixed
})
export class DashboardComponent implements OnInit {
  totalLeads = 0;
  conversionRate = 0;
  statusCounts: { name: string, count: number }[] = [];
  recentLeads: Solar[] = [];

  constructor(private menageService: MenageService) {}

  ngOnInit(): void {
    this.menageService.fetchDetails().subscribe(leads => {
      this.totalLeads = leads.length;
      this.statusCounts = this.calculateStatusCounts(leads);
      this.conversionRate = this.calculateConversionRate(leads);
      this.recentLeads = leads.slice(-5).reverse();
    });
  }

  calculateStatusCounts(leads: Solar[]) {
    const statuses = ['New Lead','Contacted','Site Visit Scheduled','Proposal Sent','Won','Lost'];
    return statuses.map(s => ({ name: s, count: leads.filter(l => l.status === s).length }));
  }

  calculateConversionRate(leads: Solar[]) {
    const won = leads.filter(l => l.status === 'Won').length;
    return leads.length ? Math.round((won / leads.length) * 100) : 0;
  }
}
