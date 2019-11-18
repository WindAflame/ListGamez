import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { SessionService } from '../_other/session.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public showSearchBar = false;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.subscribeRouteUrlEvent();
  }

  private subscribeRouteUrlEvent() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = (event.url === '/');
      }
    });
  }
}
