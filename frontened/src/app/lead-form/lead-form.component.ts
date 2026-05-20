import { Component, OnInit } from '@angular/core';
import { MenageService } from '../menage.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Solar } from '../solar';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css']
})
export class LeadFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private menageService: MenageService,
    private route: ActivatedRoute
  ) {}

  // ✅ systemSizeKw typed as number | null
  leadForm = this.fb.group({
    fullName: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    location: ['', Validators.required],
    propertyType: ['', Validators.required],
    systemSizeKw: [null as number | null, [Validators.required, Validators.min(1), Validators.max(100)]],
    source: ['', Validators.required],
    status: ['New Lead']
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      // ✅ Fetch lead by ID and patch form
      this.menageService.getDetailsById(id).subscribe(lead => {
        this.leadForm.patchValue({
          fullName: lead.fullName,
          phone: lead.phone,
          email: lead.email,
          location: lead.location,
          propertyType: lead.propertyType,
          systemSizeKw: lead.systemSizeKw ?? null,
          source: lead.source,
          status: lead.status
        });
      });
    }
  }

  onSubmit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.leadForm.valid) {
      const lead: Solar = this.leadForm.getRawValue();
      if (id) {
        // ✅ Update existing lead
        this.menageService.updateDettails(id, lead).subscribe(() => {
          alert('Lead updated successfully!');
        });
      } else {
        // ✅ Add new lead
        this.menageService.postDeatils(lead).subscribe(() => {
          alert('Lead added successfully!');
          this.leadForm.reset();
        });
      }
    }
  }
}
