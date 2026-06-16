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
  cardContentVisible: boolean[] = [false, false, false, false, false];

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

  animateTotalStreak(): void {
      const target = this.targettotalStreak;
      const duration = 1600;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
    
        this.totalStreak = +(target * progress).toFixed(1);
        this.cdr.detectChanges();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          
          this.totalStreak = target;

        }
      };
    requestAnimationFrame(animate);
  }

  animateDayStreak(): void {
      const target = this.targetdayStreak;
      const duration = 1400;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
    
        this.dayStreak = +(target * progress).toFixed(1);
        this.cdr.detectChanges();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          
          this.dayStreak = target;

        }
      };
    requestAnimationFrame(animate);
  }

  animateGoldSaves(): void {
      const target = this.targetgoldSaves;
      const duration = 1400;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
    
        this.goldSaves = +(target * progress).toFixed(1);
        this.cdr.detectChanges();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          
          this.goldSaves = target;

        }
      };
    requestAnimationFrame(animate);
  }

  animateSilverSaves(): void {
      const target = this.targetsilverSaves;
      const duration = 1400;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
    
        this.silverSaves = +(target * progress).toFixed(1);
        this.cdr.detectChanges();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          
          this.silverSaves = target;

        }
      };
    requestAnimationFrame(animate);
  }

  animateBronzeSaves(): void {
      const target = this.targetbronzeSaves;
      const duration = 1400;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
    
        this.bronzeSaves = +(target * progress).toFixed(1);
        this.cdr.detectChanges();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          
          this.bronzeSaves = target;

        }
      };
    requestAnimationFrame(animate);
  }

  animateRank(): void {
      const target = this.targetrank;
      const duration = 1400;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
    
        this.rank = +(target * progress).toFixed(1);
        this.cdr.detectChanges();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          
          this.rank = target;

        }
      };
    requestAnimationFrame(animate);
  }

  animateConversion(): void {
      const target = this.targetconversion;
      const duration = 1400;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
    
        this.conversion = +(target * progress).toFixed(1);
        this.cdr.detectChanges();
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          
          this.conversion = target;

        }
      };
    requestAnimationFrame(animate);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private animateCounter(
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

  async startCardAnimations() {
    this.cardVisible[0] = true;
    await this.animateCounter(
      this.targettotalLeads,
      value => this.totalLeads = value
    );
    this.cardContentVisible[0] = true;
    this.cdr.detectChanges();
    await this.delay(150);

    this.cardVisible[1] = true;
    await this.animateCounter(
      this.targetDueToday,
      value => this.totalDueToday = value
    );
    this.cardContentVisible[1] = true;
    this.cdr.detectChanges();
    await this.delay(150);

    this.cardVisible[2] = true;
    await this.animateCounter(
      this.targetOverdue,
      value => this.totalOverdue = value
    );
    this.cardContentVisible[2] = true;
    this.cdr.detectChanges();
    await this.delay(150);

    this.cardVisible[3] = true;
    await this.animateCounter(
      this.targetConverted,
      value => this.totalConverted = value
    );
    this.cardContentVisible[3] = true;
    this.cdr.detectChanges();
    await this.delay(150);

    this.cardVisible[4] = true;
    await this.animateCounter(
      this.targetCompleted,
      value => this.totalCompleted = value
    );
    this.cardContentVisible[4] = true;
    this.cdr.detectChanges();
    await this.delay(150);
  }

  ngAfterViewInit() {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            this.animateTotalStreak();
            this.animateDayStreak();
            this.animateGoldSaves()
            this.animateSilverSaves();
            this.animateBronzeSaves();
            this.animateRank();
            this.animateConversion();
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

            this.startCardAnimations();
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
