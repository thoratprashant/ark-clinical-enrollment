import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-locked',
  imports: [CommonModule,RouterLink,MatIconModule],
  templateUrl: './account-locked.html',
  styleUrl: './account-locked.scss',
})
export class AccountLocked implements OnInit, OnDestroy{
  minutes: number = 4;
  seconds: number = 37;

  private totalSeconds: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.totalSeconds = this.minutes * 60 + this.seconds;
    this.startTimer();
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.totalSeconds <= 0) {
        clearInterval(this.intervalId);
        return;
      }

      this.totalSeconds--;

      this.minutes = Math.floor(this.totalSeconds / 60);
      this.seconds = this.totalSeconds % 60;
    }, 1000);
  }

  format(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
