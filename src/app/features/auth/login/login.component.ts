import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink,MatButtonModule, MatIconModule,MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
 
  showNewPassword = true;  
  
  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  
 
}
