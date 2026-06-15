import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-all-referrals',
  imports: [CommonModule,FormsModule,MatIconModule,MatExpansionModule,MatFormFieldModule,MatSelectModule,MatNativeDateModule,MatDatepickerModule,MatInputModule, OwlDateTimeModule, OwlNativeDateTimeModule],
  templateUrl: './all-referrals.html',
  styleUrl: './all-referrals.scss',
})
export class AllReferrals {

  selectedAttempt: string | null = null;

  formattedDateTime = '04/24/2026 10:00 AM';

  options = [
    'All',
    'New Lead',
    'Follow Up',
    'Overdue',
    'Scheduled',
    'Not Interested',
    'Completed'
  ];

  selectedOption = 'All';

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  @ViewChild('scrollContainer', { static: false })
  scrollContainer!: ElementRef;

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  startDragging(event: MouseEvent): void {
    this.isDragging = true;

    const container = this.scrollContainer.nativeElement;

    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;

    container.style.cursor = 'grabbing';
  }

  onDragging(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }

    event.preventDefault();

    const container = this.scrollContainer.nativeElement;

    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1.5; // scroll speed

    container.scrollLeft = this.scrollLeft - walk;
  }

  stopDragging(): void {
    this.isDragging = false;

    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.style.cursor = 'grab';
    }
  }

  startTouchDrag(event: TouchEvent) {
    const touch = event.touches[0];
    this.isDragging = true;

    const container = this.scrollContainer.nativeElement;

    this.startX = touch.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
  }

  onTouchDrag(event: TouchEvent) {
    if (!this.isDragging) return;

    const touch = event.touches[0];
    const container = this.scrollContainer.nativeElement;

    const x = touch.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1.5;

    container.scrollLeft = this.scrollLeft - walk;
  }

}
