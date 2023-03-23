import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-Item';
import { AdDirective } from '../ad.directive';

interface adComponent {
  data:any
}

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})

export class AdComponent implements OnInit,OnDestroy {
  @Input() ads:AdItem[] = []
  currentAdIndex = -1;
  
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: NodeJS.Timer | undefined;
  constructor() { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  loadComponent(){
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;

    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<adComponent>(adItem.component);
    componentRef.instance.data = adItem.data
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
