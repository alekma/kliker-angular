import { Component } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ClickService]
})
export class AppComponent {

  allClicks = 0;


  constructor(private clickService: ClickService) {

  }
  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks => {
      this.allClicks = clicks;
    });

  }
}
