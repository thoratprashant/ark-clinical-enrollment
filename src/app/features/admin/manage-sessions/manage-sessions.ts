import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-sessions',
  imports: [MatIconModule,CommonModule,MatButtonModule,RouterLink],
  templateUrl: './manage-sessions.html',
  styleUrl: './manage-sessions.scss',
})
export class ManageSessions {
sessions = [
  {
    device: 'Chrome on MacBook Pro',
    deviceType: 'desktop',
    location: 'San Francisco, CA, United States',
    ip: '192.168.1.105',
    lastActive: '2 hours ago',
    isCurrentSession: true,
    isThisDevice: true
  },
  {
    device: 'Safari on iPhone 15',
    deviceType: 'mobile',
    location: 'San Francisco, CA, United States',
    ip: '192.168.1.106',
    lastActive: '5 hours ago',
    isCurrentSession: false,
    isThisDevice: false
  }
];

logoutSession(session: any) {
  console.log('Logout:', session);
}
}
