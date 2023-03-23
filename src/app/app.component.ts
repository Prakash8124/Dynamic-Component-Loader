import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './ad-Item';
import { AdService } from './service/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-Component';
  data:AdItem[] = []

  constructor(private adData:AdService){

  }

  ngOnInit(): void {
    this.data = this.adData.getAds();
  }

}
