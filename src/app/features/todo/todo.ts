import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

interface PriorityTodo {
  initials: string;
  name: string;
  phone: string;
  due: string;
}

@Component({
  selector: 'app-todo',
  imports: [CommonModule,MatSelectModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
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
