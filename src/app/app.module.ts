import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';
import { CalcModule } from './calc/calc.module';
import { TasksModule } from './tasks/tasks.module';
import { LibMgmtModule } from './lib-mgmt/lib-mgmt.module';

@NgModule({
  declarations: [
    AppComponent,
    NameGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonUtilitiesModule,
    CalcModule,
    TasksModule,
    LibMgmtModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
