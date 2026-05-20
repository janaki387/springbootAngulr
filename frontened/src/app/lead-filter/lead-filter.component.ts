import { Component, Input } from '@angular/core';
import { Solar } from '../solar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lead-filter.component.html',
  styleUrls: ['./lead-filter.component.css']   // ✅ fixed
})
export class LeadFilterComponent {
  @Input() leads: Solar[] = [];
  searchText: string = '';
  filteredLeads: Solar[] = [];

  selectedStatus: string = '';
  selectedPropertyType: string = '';

  statuses: string[] = ['New Lead', 'Contacted', 'Site Visit Scheduled', 'Proposal Sent', 'Won', 'Lost'];
  propertyTypes: string[] = ['Residential', 'Commercial', 'Industrial'];

  ngOnChanges(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    const text = this.searchText.toLowerCase();
    this.filteredLeads = this.leads.filter(lead =>
      (lead.fullName && lead.fullName.toLowerCase().includes(text)) ||
      (lead.email && lead.email.toLowerCase().includes(text)) ||
      (lead.phone && lead.phone.includes(this.searchText))
    ).filter(lead =>
      (!this.selectedStatus || lead.status === this.selectedStatus) &&
      (!this.selectedPropertyType || lead.propertyType === this.selectedPropertyType)
    );
  }

  resetFilter(): void {
    this.searchText = '';
    this.selectedStatus = '';
    this.selectedPropertyType = '';
    this.filteredLeads = [...this.leads];
  }
}
