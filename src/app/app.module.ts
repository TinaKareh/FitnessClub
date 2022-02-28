import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { CreateTrainerComponent } from './create-trainer/create-trainer.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { MembersListComponent } from './members-list/members-list.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { PackageListComponent } from './package-list/package-list.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    CreateTrainerComponent,
    CreatePackageComponent,
    MembersListComponent,
    TrainersListComponent,
    PackageListComponent,
    UpdateTrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
