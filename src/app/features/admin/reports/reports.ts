import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import AOS from 'aos';
import { ApexDataLabels, ApexFill, ApexPlotOptions, ApexStates, ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
  ApexLegend,
  ApexTooltip,
  ApexAnnotations
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  grid: ApexGrid;
  markers: ApexMarkers;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  annotations: ApexAnnotations;
  colors: string[];
};


@Component({
  selector: 'app-reports',
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, ChartComponent],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  @ViewChild('attemptDistributionSection') attemptDistributionSection!: ElementRef;
  @ViewChild('utilitiesSection') utilitiesSection!: ElementRef;

  @ViewChild('outcomeDistributionSection') outcomeDistributionSection!: ElementRef;
  isOutcomeDistributionVisible = false;


  distributioncardVisible: boolean[] = [false, false, false, false];

  totalAttempt = 0;
  targettotalAttempt = 23;
  totalAttempt1 = 0;
  targettotalAttempt1 = 78;
  totalAttempt2 = 0;
  targettotalAttempt2 = 89;
  totalAttempt3 = 0;
  targettotalAttempt3 = 57;

  utilitiescardVisible: boolean[] = [false, false, false, false, false, false, false];

  totalReferrals = 0;
  targettotalReferrals = 247;
  contactRate = 0;
  targetcontactRate = 84;
  conversionRate = 0;
  targetconversionRate = 23;
  siteScore = 0;
  targetsiteScore = 92;
  firstTimeContact = 0;
  targetfirstTimeContact = 18;
  avgAttempts = 0;
  targetavgAttempts = 3.2;
  avgFollowUp = 0;
  targetavgFollowUp = 3.2;

  chartData = [
    {
      label: 'No Contact',
      count: 68,
      value: 96,
      animatedValue: 0,
      color: '#1C306E'
    },
    {
      label: 'Converted',
      count: 55,
      value: 81,
      animatedValue: 0,
      color: '#1FAD91'
    },
    {
      label: 'DNQ',
      count: 44,
      value: 54,
      animatedValue: 0,
      color: '#F97015'
    },
    {
      label: 'Screening',
      count: 38,
      value: 32,
      animatedValue: 0,
      color: '#C79857'
    },
    {
      label: 'Onsite',
      count: 23,
      value: 23,
      animatedValue: 0,
      color: '#68A1D9'
    },
    {
      label: 'Screening/Closed',
      count: 19,
      value: 13,
      animatedValue: 0,
      color: '#CDB6D8'
    }
  ];

  @ViewChild('weeklyActivitySection') weeklyActivitySection!: ElementRef;
  showChart = false;

  public chartOptions: any = {
    series: [
      {
        name: 'Leads',
        data: [1.2, 3.8, 2.5, 7.4, 4.8, 12.2, 19.3]
      }
    ],
    chart: {
      type: 'line',
      height: '400',
      zoom: { enabled: false },
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 2000,
        animateGradually: {
          enabled: true,
          delay: 250
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1000
        }
      }
    },
    colors: ['#1C306E'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      strokeColors: '#1C306E',
      colors: ['#1C306E'],
      hover: {
        size: 8
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: { style: { colors: '#6B7280', fontSize: '11px' } },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      min: 0,
      max: 20,
      tickAmount: 4,

      labels: {
        formatter: (value: number) => value.toFixed(0),
        style: {
          colors: '#6B7280',
          fontSize: '11px'
        }
      }
    },
    grid: {
      borderColor: '#DCDFE4',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        left: 8,
        right: 8
      }
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        formatter: () => {
          return "Student’s Achievement Level";
        }
      },
      y: {
        formatter: (val: number) => `ELA - ${val} SS`
      },
      marker: {
        show: true
      }
    }
  }

  @ViewChild('slaComplianceSection') slaComplianceSection!: ElementRef;
  value = 92;
  radius = 50;
  circumference = 2 * Math.PI * this.radius;
  strokeDashoffset = this.circumference;
  displayValue = 0;
  private animationStarted = false;

  animateProgress(): void {

    const duration = 2500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Ease Out
      const easeOut =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(
        this.value * easeOut
      );

      this.displayValue = currentValue;

      this.strokeDashoffset =
        this.circumference -
        (currentValue / 100) *
          this.circumference;

      this.cdr.detectChanges();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  animateProgressBars(): void {

    this.chartData.forEach((item, index) => {

      setTimeout(() => {

        let current = 0;

        const duration = 1200; // 1.2 sec
        const fps = 60;
        const increment = item.value / (duration / (1000 / fps));

        const timer = setInterval(() => {

          current += increment;

          if (current >= item.value) {
            current = item.value;
            clearInterval(timer);
          }

          item.animatedValue = Math.round(current);

        }, 1000 / fps);

      }, index * 150); // stagger animation

    });

  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private animateCounter(
    target: number,
    setter: (value: number) => void,
    duration: number = 1000
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
    this.distributioncardVisible[0] = true;
    await this.animateCounter(
      this.targettotalAttempt,
      value => this.totalAttempt = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.distributioncardVisible[1] = true;
    await this.animateCounter(
      this.targettotalAttempt1,
      value => this.totalAttempt1 = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.distributioncardVisible[2] = true;
    await this.animateCounter(
      this.targettotalAttempt2,
      value => this.totalAttempt2 = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.distributioncardVisible[3] = true;
    await this.animateCounter(
      this.targettotalAttempt3,
      value => this.totalAttempt3 = value
    );
    this.cdr.detectChanges();
    await this.delay(10);
  }

  private animateCounter1(
    target: number,
    setter: (value: number) => void,
    duration: number = 1200
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
    this.utilitiescardVisible[0] = true;
    await this.animateCounter1(
      this.targettotalReferrals,
      value => this.totalReferrals = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.utilitiescardVisible[1] = true;
    await this.animateCounter1(
      this.targetcontactRate,
      value => this.contactRate = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.utilitiescardVisible[2] = true;
    await this.animateCounter1(
      this.targetconversionRate,
      value => this.conversionRate = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.utilitiescardVisible[3] = true;
    await this.animateCounter1(
      this.targetsiteScore,
      value => this.siteScore = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.utilitiescardVisible[4] = true;
    await this.animateCounter1(
      this.targetfirstTimeContact,
      value => this.firstTimeContact = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.utilitiescardVisible[5] = true;
    await this.animateCounter1(
      this.targetavgAttempts,
      value => this.avgAttempts = value
    );
    this.cdr.detectChanges();
    await this.delay(10);

    this.utilitiescardVisible[6] = true;
    await this.animateCounter1(
      this.targetavgFollowUp,
      value => this.avgFollowUp = value
    );
    this.cdr.detectChanges();
    await this.delay(10);
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
    observer.observe(this.attemptDistributionSection.nativeElement);

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
    )
    observer1.observe(this.utilitiesSection.nativeElement);

    const slaCompliaceobserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting &&
            !this.animationStarted
          ) {

            this.animationStarted = true;

            this.animateProgress();
            this.cdr.detectChanges();
            slaCompliaceobserver.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.4
      }
    );

    slaCompliaceobserver.observe(
      this.slaComplianceSection.nativeElement
    );


    const outcomeDistributionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting && !this.isOutcomeDistributionVisible) {

          this.isOutcomeDistributionVisible = true;
          this.animateProgressBars();
          this.cdr.detectChanges();

          outcomeDistributionObserver.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.3
    }
  );

  outcomeDistributionObserver.observe(
    this.outcomeDistributionSection.nativeElement
  );

    const weeklyActivityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {

          if (entry.isIntersecting && !this.showChart) {
            this.showChart = true;
            this.cdr.detectChanges();
            weeklyActivityObserver.unobserve(this.weeklyActivitySection.nativeElement);
          }

        });
      },
      {
        threshold: 0.3
      }
    );
    weeklyActivityObserver.observe(this.weeklyActivitySection.nativeElement);

  }
}
