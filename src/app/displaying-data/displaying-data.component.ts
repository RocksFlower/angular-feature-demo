import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-displaying-data',
  template: `
    <nz-divider nzText="显示数据" nzOrientation="left"></nz-divider>
    <h3>{{title}}</h3>
    <h4>My favorite hero is: {{myHero.name}}</h4>
    <nz-list [nzDataSource]="heroes" nzBordered
        [nzHeader]="'Heroes'"
        [nzRenderItem]="item">
    <ng-template #item let-item><nz-list-item [nzContent]="item.name"></nz-list-item></ng-template>
    </nz-list>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `,
  styleUrls: ['./displaying-data.component.css']
})
export class DisplayingDataComponent implements OnInit {

  title: string;
  myHero: Hero;
  heroes: Array<Hero>;

  constructor() { 
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[1];
  }

  ngOnInit() {
  }

}
