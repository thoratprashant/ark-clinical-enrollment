import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
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
  initials:string;
  medalimage: string;
  horizon: string;
  contactno:string;
  noteData:string;
  hours:string;
  minite:string;
  leftdata:string;
  pulsing:string;
}

@Component({
  selector: 'app-todo',
  imports: [CommonModule,MatSelectModule,MatIconModule,MatDatepickerModule, OwlDateTimeModule, OwlNativeDateTimeModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

  activeIndex = 0;

  slides: TodoSlide[] = [
    {
      id: 1,
      type: 'gold',
      userName: 'Emily Gold',
      initials: 'EG',
      horizon:'HORIZON-1 Trial',
      contactno:'+1 345 678 9012',
      noteData:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
      medalimage: 'gold-medal.png',
      hours:'1',
      minite:'32',
      leftdata:'left for GOLD',
      pulsing:'0-2 hrs · Pulsing'
    },
    {
      id: 2,
      type: 'silver',
      userName: 'Particia Silver', 
      initials:'PS',
      horizon:'HORIZON-2 Trial',
      contactno:'+1 895 547 2154',
      noteData:'Lorem ipsum dolor  it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit , Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing it Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
      medalimage: 'silver-medal.png',
      hours:'2',
      minite:'24',
      leftdata:'left for SILVER',
      pulsing:'0-3 hrs · Pulsing'
    },
    {
      id: 3,
      type: 'bronze',
      userName: 'Carter Bronze',
      initials: 'CB',
      horizon:'HORIZON-3 Trial',
      contactno:'+1 741 852 9632',
      noteData:'Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsu i Lorem ipsum dolor sit amet, consectetur adipiscing elit',  
      medalimage: 'bronze-medal.png',
      hours:'3',
      minite:'44',
      leftdata:'left for BRONZE',
      pulsing:'0-4 hrs · Pulsing'
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
      initials: 'SH',
      name: 'Sarah Johnson',
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
