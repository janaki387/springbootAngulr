import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Solar } from '../solar';
import { ActivatedRoute, Router } from '@angular/router';
import { MenageService } from '../menage.service';

@Component({
  selector: 'app-lead-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']   // ✅ fixed
})
export class LeadDetailComponent implements OnInit {
  lead: Solar | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menageService: MenageService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.menageService.getDetailsById(id).subscribe(data => this.lead = data);
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
        this.router.navigate(['/leads']);
      });
    }
  }
}
