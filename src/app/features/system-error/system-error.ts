import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-system-error',
  imports: [CommonModule,MatButtonModule, MatIconModule],
  templateUrl: './system-error.html',
  styleUrl: './system-error.scss',
})
export class SystemError {

}
