import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PetstoreComponent } from './petstore/petstore.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './petstore/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Dialog2Component } from './petstore/dialog2.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PetstoreComponent,
    DialogComponent,
    Dialog2Component
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: 'petStore', component: PetstoreComponent},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],

})  
export class AppModule { }
