import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlertDialog } from '../../comman/alert-dialog/alert-dialog'; 

@Component({
  selector: 'app-profile',
  imports: [MatIconModule,CommonModule,MatButtonModule,MatDialogModule,MatCheckboxModule ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  readonly dialog = inject(MatDialog);

 
 

  // alert() {
  //   this.dialog.open(AlertDialog, {
  //     width: '510px',
  //     panelClass: 'modal--wrapper',
  //     autoFocus: false,
  //     data: {
  //       title: 'Warning',
  //       message: 'Are you sure you would like to proceed with this?',
  //       button1: 'Yes',
  //       button2: 'May be',
  //       button3: 'No',
  //     }
  //   });
  // }
 
  // changePhoneNumber() {
  //   this.dialog.open(ChangePhoneNumber, {
  //     width: '510px',
  //     panelClass: 'modal--wrapper',
  //     autoFocus: false, 
  //   });
  // }

  

}
