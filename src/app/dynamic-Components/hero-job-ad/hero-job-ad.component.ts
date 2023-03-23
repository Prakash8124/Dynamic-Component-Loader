import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.scss']
})
export class HeroJobAdComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
