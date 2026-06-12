import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialog } from '@angular/material/dialog';
import { Logout } from '../../features/comman/logout/logout';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MatIconModule, MatButtonModule, MatBadgeModule,RouterModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {
  readonly dialog = inject(MatDialog);
  mobileMenuOpen = signal(false);

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }

  logout(){
    this.dialog.open(Logout, {
      width: '450px',
      panelClass: 'modal--wrapper',
      autoFocus: false, 
    });
  }
}
