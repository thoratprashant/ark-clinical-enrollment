import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

interface PriorityTodo {
  initials: string;
  name: string;
  phone: string;
  due: string;
}
interface TodoSlide {
  id: number;
  type: 'gold' | 'silver' | 'bronze';
  label: string; 
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
      label: 'Emily Gold', 
    },
    {
      id: 2,
      type: 'silver',
      label: 'Particia Silver', 
    },
    {
      id: 3,
      type: 'bronze',
      label: 'Carter Bronze', 
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
}
