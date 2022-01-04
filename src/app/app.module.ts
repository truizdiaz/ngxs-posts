import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Mopdulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';

// Componentes
import { AppComponent } from './app.component';
import { ListarPostComponent } from './components/listar-post/listar-post.component';
import { NuevoPostComponent } from './components/nuevo-post/nuevo-post.component';

// NgXs
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { PostsState } from './components/store/posts.state';

@NgModule({
  declarations: [
    AppComponent,
    ListarPostComponent,
    NuevoPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsModule.forRoot([PostsState],
      {
        developmentMode: !environment.production  
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
