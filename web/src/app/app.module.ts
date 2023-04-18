import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { NotificationsModule } from './notifications/notifications.module';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layout/admin/admin.component';
// import { AdminModule } from './layout/admin/admin.module';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';
// import { TableListComponent } from './components/table-list/table-list.component';
// import { NgChartsModule } from 'ng2-charts';
// import { TypographComponent } from './components/typograph/typograph.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    // FooterComponent,
    // SidebarComponent,
    // AdminLayoutComponent
    // UserProfileComponent,
    // TableListComponent,
    // TypographComponent,
    // NotificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // MatSnackBar, 
    // MatSnackBarConfig,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    NotificationsModule,
    NgbModule,
    // ComponentsModule
    // NgChartsModule
    // AdminModule
    // SidebarComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
