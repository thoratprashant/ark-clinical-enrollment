import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import AOS from 'aos';

interface PriorityTodo {
  initials: string;
  name: string;
  phone: string;
  due: string;
}

interface TodoSlide {
  id: number;
  type: 'gold' | 'silver' | 'bronze';
  userName: string;
  initials: string;
  medalimage: string;
  horizon: string;
  contactno: string;
  noteData: string;
  hours: string;
  minite: string;
  leftdata: string;
  pulsing: string;
}

@Component({
  selector: 'app-todo',
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}

  showCongratulationPopup = false;

  private openTimer?: ReturnType<typeof setTimeout>;
  private closeTimer?: ReturnType<typeof setTimeout>;

  confettiItems = Array.from({ length: 120 }, (_, i) => {
    const side = Math.random() > 0.5 ? 1 : -1;

    return {
      id: i,
      x: (Math.random() * window.innerWidth - window.innerWidth / 2) * 1.8,
      y: (Math.random() * window.innerHeight - window.innerHeight / 2) * 1.4,
      rotate: Math.random() * 900 * side,
      delay: Math.random() * 0.16,
      size: 6 + Math.random() * 12
    };
  });

  stripItems = Array.from({ length: 14 }, (_, i) => i);

  ngOnInit(): void {
    this.openTimer = setTimeout(() => {
      this.openCongratulationPopup();
    }, 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.openTimer);
    clearTimeout(this.closeTimer);
  }

  openCongratulationPopup(): void {
    this.generateConfetti();
    this.showCongratulationPopup = true;
    this.cdr.detectChanges();

    this.closeTimer = setTimeout(() => {
      this.closeCongratulationPopup();
    }, 3000);
  }
  closeCongratulationPopup(): void {
    this.showCongratulationPopup = false;
    this.cdr.detectChanges();
  }

  generateConfetti(): void {
    this.confettiItems = Array.from({ length: 120 }, (_, i) => {
      const side = Math.random() > 0.5 ? 1 : -1;

      return {
        id: i,
        x: (Math.random() * window.innerWidth - window.innerWidth / 2) * 1.8,
        y: (Math.random() * window.innerHeight - window.innerHeight / 2) * 1.4,
        rotate: Math.random() * 900 * side,
        delay: Math.random() * 0.16,
        size: 6 + Math.random() * 12
      };
    });
  }

  activeIndex = 0;

  slides: TodoSlide[] = [
    {
      id: 1,
      type: 'gold',
      userName: 'Meghna Shah',
      initials: 'MS',
      horizon: 'HORIZON-1 Trial',
      contactno: '+1 345 678 9012',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'gold-medal.png',
      hours: '1',
      minite: '32',
      leftdata: 'left for GOLD',
      pulsing: '0-2 hrs Â· Pulsing'
    },
    {
      id: 2,
      type: 'silver',
      userName: 'Anish Pandey',
      initials: 'AP',
      horizon: 'HORIZON-2 Trial',
      contactno: '+1 895 547 2154',
      noteData: 'Lorem ipsum dolor  it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'silver-medal.png',
      hours: '2',
      minite: '24',
      leftdata: 'left for SILVER',
      pulsing: '0-3 hrs Â· Pulsing'
    },
    {
      id: 3,
      type: 'bronze',
      userName: 'Pankaj Khairnar',
      initials: 'PK',
      horizon: 'HORIZON-3 Trial',
      contactno: '+1 741 852 9632',
      noteData: 'Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'bronze-medal.png',
      hours: '3',
      minite: '44',
      leftdata: 'left for BRONZE',
      pulsing: '0-4 hrs Â· Pulsing'
    },
      {
      id: 4,
      type: 'gold',
      userName: 'Manoj Nemade',
      initials: 'MN',
      horizon: 'HORIZON-1 Trial',
      contactno: '+1 345 678 9012',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'gold-medal.png',
      hours: '1',
      minite: '32',
      leftdata: 'left for GOLD',
      pulsing: '0-2 hrs Â· Pulsing'
    },
    {
      id: 5,
      type: 'silver',
      userName: 'Laxman Gatade',
      initials: 'LG',
      horizon: 'HORIZON-2 Trial',
      contactno: '+1 895 547 2154',
      noteData: 'Lorem ipsum dolor  it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'silver-medal.png',
      hours: '2',
      minite: '24',
      leftdata: 'left for SILVER',
      pulsing: '0-3 hrs Â· Pulsing'
    },
    {
      id: 6,
      type: 'bronze',
      userName: 'Satyajeet Mane',
      initials: 'SM',
      horizon: 'HORIZON-3 Trial',
      contactno: '+1 741 852 9632',
      noteData: 'Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'bronze-medal.png',
      hours: '3',
      minite: '44',
      leftdata: 'left for BRONZE',
      pulsing: '0-4 hrs Â· Pulsing'
    },
        {
      id: 7,
      type: 'gold',
      userName: 'Prashant Thorat',
      initials: 'PT',
      horizon: 'HORIZON-1 Trial',
      contactno: '+1 345 678 9012',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'gold-medal.png',
      hours: '1',
      minite: '32',
      leftdata: 'left for GOLD',
      pulsing: '0-2 hrs Â· Pulsing'
    },
    {
      id: 8,
      type: 'silver',
      userName: 'Michael Hunt',
      initials: 'MH',
      horizon: 'HORIZON-2 Trial',
      contactno: '+1 895 547 2154',
      noteData: 'Lorem ipsum dolor  it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'silver-medal.png',
      hours: '2',
      minite: '24',
      leftdata: 'left for SILVER',
      pulsing: '0-3 hrs Â· Pulsing'
    },
    {
      id: 9,
      type: 'bronze',
      userName: 'Jessica Smith',
      initials: 'JS',
      horizon: 'HORIZON-3 Trial',
      contactno: '+1 741 852 9632',
      noteData: 'Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'bronze-medal.png',
      hours: '3',
      minite: '44',
      leftdata: 'left for BRONZE',
      pulsing: '0-4 hrs Â· Pulsing'
    },
    {
      id: 10,
      type: 'bronze',
      userName: 'Alice Brown',
      initials: 'AB',
      horizon: 'HORIZON-3 Trial',
      contactno: '+1 741 852 9632',
      noteData: 'Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      medalimage: 'bronze-medal.png',
      hours: '3',
      minite: '44',
      leftdata: 'left for BRONZE',
      pulsing: '0-4 hrs Â· Pulsing'
    },
  ];

  get nextIndex(): number {
    return (this.activeIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.activeIndex =
      (this.activeIndex + 1) % this.slides.length;
  }

  todos: PriorityTodo[] = [
    {
      initials: 'MS',
      name: 'Meghna Shah',
      phone: '+1 278 826 2866',
      due: 'Due in 4 hrs'
    },
    {
      initials: 'AS',
      name: 'Anish Pandey',
      phone: '+1 345 678 9012',
      due: 'Due in 2 hrs'
    },
    {
      initials: 'PK',
      name: 'Pankaj Khairnar',
      phone: '+1 234 567 8901',
      due: 'Due in 4 hrs'
    },
    {
      initials: 'MN',
      name: 'Manoj Nemade',
      phone: '+1 456 789 0123',
      due: 'Due in 1 hr'
    },
    {
      initials: 'LG',
      name: 'Laxman Gatade',
      phone: '+1 456 789 0123',
      due: 'Due in 1 hr'
    },
    {
      initials: 'SM',
      name: 'Satyajeet Mane',
      phone: '+1 278 826 2866',
      due: 'Due in 4 hrs'
    },
    {
      initials: 'PT',
      name: 'Prashant Thorat',
      phone: '+1 278 826 2866',
      due: 'Due in 4 hrs'
    },
    {
      initials: 'MH',
      name: 'Michael Hunt',
      phone: '+1 345 678 9012',
      due: 'Due in 2 hrs'
    },
    {
      initials: 'JS',
      name: 'Jessica Smith',
      phone: '+1 234 567 8901',
      due: 'Due in 4 hrs'
    },
    {
      initials: 'AB',
      name: 'Alice Brown',
      phone: '+1 456 789 0123',
      due: 'Due in 1 hr'
    }
  ];

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });

    AOS.refresh();
  }
}