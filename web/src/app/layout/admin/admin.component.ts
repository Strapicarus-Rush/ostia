import { filter } from 'rxjs/operators';
import { Component, OnInit, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import {CommonModule, Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
// import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';

// @NgModule({
//   // declarations: [NavbarComponent],
//   // exports: [NavbarComponent],
//   imports: [
//     CommonModule,
//     // NavbarComponent,
//     ComponentsModule
//   ]
// })

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  private _router!: Subscription;
  private lastPoppedUrl: string | undefined;
  private yScrollStack: number[] | any[] = [];

  constructor(public location: Location, private router: Router) { }

  ngOnInit() {
    const isWindows = this.checkOS(navigator); ///navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
      // if we are on windows OS we activate the perfectScrollbar function

      document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
    }
    const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else
          window.scrollTo(0, 0);
      }
    });
    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      elemMainPanel.scrollTop = 0;
      elemSidebar.scrollTop = 0;
    });
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      let ps = new PerfectScrollbar(elemMainPanel);
      ps = new PerfectScrollbar(elemSidebar);
    }
  }

  checkOS(n: any) {
    if (n.userAgentData) {
      const hints = ["architecture", "model", "platform", "platformVersion", "uaFullVersion"];
      n.userAgentData.getHighEntropyValues(hints)
        .then((ua: any) => {
          console.log(ua);
          return true;
        }).catch((err: any) => {
          console.log(err.stack)
        });
    } else {
      console.log(n.userAgent);
    }
    return false;
  }


  ngAfterViewInit() {
    this.runOnRouteChange();
  }
  isMaps(path: any) {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path == titlee) {
      return false;
    }
    else {
      return true;
    }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

}
