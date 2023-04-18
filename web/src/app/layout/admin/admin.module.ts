import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin.routing';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { TypographyComponent } from '../../components/typography/typography.component';
import { IconsComponent } from '../../components/icons/icons.component';
import { MapsComponent } from '../../components/maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
// import { NgChartsModule } from 'ng2-charts';
// import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AdminLayoutComponent } from './admin.component';
// import { ComponentsModule } from 'src/app/components/components.module';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    // NgChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    // AdminLayoutComponent,
    // ComponentsModule,
    
    
  ],
  declarations: [
    HomeComponent,
    UserProfileComponent,
    TableListComponent,
    // UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    AdminLayoutComponent,
    // SidebarComponent,
    // ComponentsModule
  ],
  exports:[
    // AdminLayoutComponent
    // SidebarComponent
    // ComponentsModule
  ],
  // bootstrap: [SidebarComponent]
})

export class AdminModule { }
