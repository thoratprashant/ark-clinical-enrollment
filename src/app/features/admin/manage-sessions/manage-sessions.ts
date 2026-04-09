import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Logout } from '../../comman/logout/logout';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-sessions',
  imports: [MatIconModule,CommonModule,MatButtonModule,RouterLink],
  templateUrl: './manage-sessions.html',
  styleUrl: './manage-sessions.scss',
})
export class ManageSessions {
   readonly dialog = inject(MatDialog);

  logout() { 
    this.dialog.open(Logout, {
      width: '384px',
      panelClass: 'modal--wrapper',
      autoFocus: false, 
    });
  }
}
