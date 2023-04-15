import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/rick-app/interface/rick-app.interface';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
      if(!this.url) throw new Error('URL property is required');
  }

  onLoad(): void{
    this.hasLoaded = true;
    console.log(this.hasLoaded)
  }

}
