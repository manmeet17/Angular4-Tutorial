import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { MoviesComponent } from './movies/movies.component';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitleCasePipe } from './titlecase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { TweetComponent } from './tweet/tweet.component';
import { ImportFormatDirective } from './import-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    MoviesComponent,
    SummaryPipe,
    StarComponent,
    TitlecaseComponent,
    TitleCasePipe,
    FavoriteComponent,
    BootstrapPanelComponent,
    TweetComponent,
    ImportFormatDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [CoursesService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
