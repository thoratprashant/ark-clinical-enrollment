import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import AOS from 'aos';

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

  @ViewChildren('todoItem') todoItems?: QueryList<ElementRef<HTMLElement>>;

  activeIndex = 0;

  showCongratulationPopup = false;

  private openTimer?: ReturnType<typeof setTimeout>;
  private closeTimer?: ReturnType<typeof setTimeout>;

  confettiItems: any[] = [];
  stripItems = Array.from({ length: 14 }, (_, i) => i);

  slides: TodoSlide[] = [
    {
      id: 1,
      type: 'gold',
      userName: '01- Meghna Shah',
      initials: 'MS',
      horizon: 'HORIZON-1 Trial',
      contactno: '+1 345 678 9012',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      medalimage: 'gold-medal.png',
      hours: '1',
      minite: '32',
      leftdata: 'left for GOLD',
      pulsing: '0-2 hrs · Pulsing'
    },
    {
      id: 2,
      type: 'silver',
      userName: '02- Anish Pandey',
      initials: 'AP',
      horizon: 'HORIZON-2 Trial',
      contactno: '+1 895 547 2154',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      medalimage: 'silver-medal.png',
      hours: '2',
      minite: '24',
      leftdata: 'left for SILVER',
      pulsing: '0-3 hrs · Pulsing'
    },
    {
      id: 3,
      type: 'bronze',
      userName: '03- Pankaj Khairnar',
      initials: 'PK',
      horizon: 'HORIZON-3 Trial',
      contactno: '+1 741 852 9632',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      medalimage: 'bronze-medal.png',
      hours: '3',
      minite: '44',
      leftdata: 'left for BRONZE',
      pulsing: '0-4 hrs · Pulsing'
    },
    {
      id: 4,
      type: 'gold',
      userName: '04- Manoj Nemade',
      initials: 'MN',
      horizon: 'HORIZON-1 Trial',
      contactno: '+1 345 678 9012',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      medalimage: 'gold-medal.png',
      hours: '1',
      minite: '32',
      leftdata: 'left for GOLD',
      pulsing: '0-2 hrs · Pulsing'
    },
    {
      id: 5,
      type: 'silver',
      userName: '05- Laxman Gatade',
      initials: 'LG',
      horizon: 'HORIZON-2 Trial',
      contactno: '+1 895 547 2154',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      medalimage: 'silver-medal.png',
      hours: '2',
      minite: '24',
      leftdata: 'left for SILVER',
      pulsing: '0-3 hrs · Pulsing'
    },
    {
      id: 6,
      type: 'bronze',
      userName: '06- Satyajeet Mane',
      initials: 'SM',
      horizon: 'HORIZON-3 Trial',
      contactno: '+1 741 852 9632',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      medalimage: 'bronze-medal.png',
      hours: '3',
      minite: '44',
      leftdata: 'left for BRONZE',
      pulsing: '0-4 hrs · Pulsing'
    },
    {
      id: 6,
      type: 'gold',
      userName: '07- Prashant Thorat',
      initials: 'PT',
      horizon: 'HORIZON-1 Trial',
      contactno: '+1 345 678 9012',
      noteData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      medalimage: 'gold-medal.png',
      hours: '1',
      minite: '32',
      leftdata: 'left for GOLD',
      pulsing: '0-2 hrs · Pulsing'
    },
  ];

  get todos() {
    return this.slides.map((slide) => ({
      id: slide.id,
      initials: slide.initials,
      name: slide.userName,
      phone: slide.contactno,
      due: `Due in ${slide.hours} hrs`
    }));
  }

  get nextIndex(): number {
    return (this.activeIndex + 1) % this.slides.length;
  }

  ngOnInit(): void {
    this.openTimer = setTimeout(() => {
      this.openCongratulationPopup();
    }, 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.openTimer);
    clearTimeout(this.closeTimer);
  }

  selectSlide(index: number): void {
    this.activeIndex = index;
    this.cdr.detectChanges();
    this.scrollActiveTodoIntoView();
  }

  prevSlide(): void {
    this.selectSlide((this.activeIndex - 1 + this.slides.length) % this.slides.length);
  }

  nextSlide(): void {
    this.selectSlide((this.activeIndex + 1) % this.slides.length);
  }

 scrollActiveTodoIntoView(): void {
  setTimeout(() => {
    const activeItem = this.todoItems?.get(this.activeIndex)?.nativeElement;
    const list = activeItem?.closest('.todo-list') as HTMLElement | null;

    if (!activeItem || !list) return;

    const listRect = list.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const topGap = 12;
    const bottomGap = 12;

    if (itemRect.top < listRect.top + topGap) {
      list.scrollTo({
        top: list.scrollTop - ((listRect.top + topGap) - itemRect.top),
        behavior: 'smooth'
      });
      return;
    }

    if (itemRect.bottom > listRect.bottom - bottomGap) {
      list.scrollTo({
        top: list.scrollTop + (itemRect.bottom - (listRect.bottom - bottomGap)),
        behavior: 'smooth'
      });
    }
  }, 80);
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

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });

    AOS.refresh();
  }
}