import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, NgModule, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import AOS from 'aos';

@Component({
  selector: 'app-all-referrals',
  imports: [CommonModule,FormsModule,MatIconModule,MatExpansionModule,MatFormFieldModule,MatSelectModule,MatNativeDateModule,MatDatepickerModule,MatInputModule, OwlDateTimeModule, OwlNativeDateTimeModule],
  templateUrl: './all-referrals.html',
  styleUrl: './all-referrals.scss',
})
export class AllReferrals{

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  @ViewChild('missionControl') missionControl!: ElementRef;
  @ViewChild('utilitiesSection') utilitiesSection!: ElementRef;

  missioncardVisible: boolean[] = [false, false, false, false, false, false, false];

  totalStreak = 0;
  targettotalStreak = 14;
  dayStreak = 0;
  targetdayStreak = 24;
  goldSaves = 0;
  targetgoldSaves = 12
  silverSaves = 0;
  targetsilverSaves = 12;
  bronzeSaves = 0;
  targetbronzeSaves = 12;
  rank = 0;
  targetrank = 3;
  conversion = 0;
  targetconversion = 34;

  cardVisible: boolean[] = [false, false, false, false, false];

  totalLeads = 0;
  targettotalLeads = 48;
  totalDueToday = 0;
  targetDueToday = 6;
  totalOverdue = 0;
  targetOverdue = 3;
  totalConverted = 0;
  targetConverted = 18;
  totalCompleted = 0;
  targetCompleted = 27;

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

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private animateCounter(
    target: number,
    setter: (value: number) => void,
    duration: number = 1400
  ): Promise<void> {
    return new Promise((resolve) => {

      const startTime = performance.now();

      const animate = (currentTime: number) => {

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setter(Math.round(target * progress));

        this.cdr.detectChanges();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setter(target);
          resolve();
        }
      };

      requestAnimationFrame(animate);
    });
  }

  async startCardAnimations() {
    this.missioncardVisible[0] = true;
    await this.animateCounter(
      this.targettotalStreak,
      value => this.totalStreak = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.missioncardVisible[1] = true;
    await this.animateCounter(
      this.targetdayStreak,
      value => this.dayStreak = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.missioncardVisible[2] = true;
    await this.animateCounter(
      this.targetgoldSaves,
      value => this.goldSaves = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.missioncardVisible[3] = true;
    await this.animateCounter(
      this.targetsilverSaves,
      value => this.silverSaves = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.missioncardVisible[4] = true;
    await this.animateCounter(
      this.targetbronzeSaves,
      value => this.bronzeSaves = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.missioncardVisible[5] = true;
    await this.animateCounter(
      this.targetrank,
      value => this.rank = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.missioncardVisible[6] = true;
    await this.animateCounter(
      this.targetconversion,
      value => this.conversion = value
    );
    this.cdr.detectChanges();
    await this.delay(10);
  }

  private animateCounter1(
    target: number,
    setter: (value: number) => void,
    duration: number = 1600
  ): Promise<void> {
    return new Promise((resolve) => {

      const startTime = performance.now();

      const animate = (currentTime: number) => {

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setter(Math.round(target * progress));

        this.cdr.detectChanges();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setter(target);
          resolve();
        }
      };

      requestAnimationFrame(animate);
    });
  }

  async startCardAnimations1() {
    this.cardVisible[0] = true;
    await this.animateCounter1(
      this.targettotalLeads,
      value => this.totalLeads = value
    );
    this.cdr.detectChanges();
    await this.delay(50);

    this.cardVisible[1] = true;
    await this.animateCounter1(
      this.targetDueToday,
      value => this.totalDueToday = value
    );
    this.cdr.detectChanges();
    await this.delay(50);

    this.cardVisible[2] = true;
    await this.animateCounter1(
      this.targetOverdue,
      value => this.totalOverdue = value
    );
    this.cdr.detectChanges();
    await this.delay(50);

    this.cardVisible[3] = true;
    await this.animateCounter1(
      this.targetConverted,
      value => this.totalConverted = value
    );
    this.cdr.detectChanges();
    await this.delay(50);

    this.cardVisible[4] = true;
    await this.animateCounter1(
      this.targetCompleted,
      value => this.totalCompleted = value
    );
    this.cdr.detectChanges();
    await this.delay(50);
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 3000,
      once: true
    }); 
    AOS.refresh();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            this.startCardAnimations();
            this.cdr.detectChanges();
            observer.unobserve(entry.target);
          }

        });
      },
      {
        threshold: 0.3
      }
    )
    observer.observe(this.missionControl.nativeElement);

    const observer1 = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            this.startCardAnimations1();
            this.cdr.detectChanges();
            observer1.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.3
      }
    );

    observer1.observe(this.utilitiesSection.nativeElement);

  }
}
