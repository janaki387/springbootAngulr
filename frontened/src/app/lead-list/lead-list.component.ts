import { Component, OnInit } from '@angular/core';
import { Solar } from '../solar';
import { MenageService } from '../menage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeadFilterComponent } from '../lead-filter/lead-filter.component';

@Component({
  selector: 'app-lead-list',
  standalone: true,
  imports: [CommonModule, LeadFilterComponent],
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']   // ✅ fixed
})
export class LeadListComponent implements OnInit {
  leads: Solar[] = [];

  constructor(private menageService: MenageService, private router: Router) {}

  ngOnInit(): void {
    this.menageService.fetchDetails().subscribe(data => this.leads = data);
  }

  viewLead(id?: number) {
    if (id !== undefined) {
      this.router.navigate(['/lead', id]);   // ✅ corrected path
    }
  }

  editLead(id?: number) {
    if (id !== undefined) {
      this.router.navigate(['/edit', id]);
    }
  }

  deleteLead(id?: number) {
    if (id !== undefined) {
      this.menageService.deleteById(id).subscribe(() => {
        alert('Lead deleted');
        this.leads = this.leads.filter(l => l.id !== id);
      });
    }
  }
}
