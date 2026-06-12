import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-change-password',
  imports: [MatIconModule,CommonModule,MatButtonModule,RouterLink],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword {
ngAfterViewInit(): void {
	AOS.init({
	  duration: 1000,
	  once: true
	}); 
	AOS.refresh();
}
}
