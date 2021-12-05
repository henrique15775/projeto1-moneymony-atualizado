import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ViewCotacaoComponent } from './user-workspace/view-cotacao/view-cotacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserWorkspaceModule } from './user-workspace/user-workspace.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutMenuModule } from './layout-menu/layout-menu.module';
@NgModule({
  declarations: [
    AppComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
