import {NgModule} from "@angular/core";
import {UserBookmarksComponent} from "./user-bookmarks-home.component";
import {AsyncUserBookmarksListComponent} from "./async-list/async-user-bookmark-list.component";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserBookmarkStore} from "./store/UserBookmarkStore";
import {UserBookmarkService} from "./user-bookmark.service";
import {CommonModule} from "@angular/common";
import {UserBookmarksRoutingModule} from "./user-bookmarks-routing.module";
import {UserBookmarkFormComponent} from "./new-user-bookmark/new-user-bookmark-form.component";
import {BookmarkDetailComponent} from "./detail/bookmark-detail.component";
import {PersonalBookmarksComponent} from "./personal-bookmarks.component";
import {PersonalBookmarkSearchComponent} from "./search/personal-bookmark-search.component";

export const routerConfig = [{
  path: '',
  component: UserBookmarksComponent
}];

@NgModule({
  declarations : [
    UserBookmarksComponent,
    UserBookmarkFormComponent,
    AsyncUserBookmarksListComponent,
    BookmarkDetailComponent,
    PersonalBookmarksComponent,
    PersonalBookmarkSearchComponent
  ],
  imports: [
    CommonModule, //in the root module comes via the BrowserModule
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UserBookmarksRoutingModule
  ],
  providers: [
    UserBookmarkStore,
    UserBookmarkService,
    /*
    {
      provide: Http,
      useFactory:
          (
              backend: XHRBackend,
              defaultOptions: RequestOptions,
              keycloakService: KeycloakService
          ) => new KeycloakHttp(backend, defaultOptions, keycloakService),
      deps: [XHRBackend, RequestOptions, KeycloakService]
    }
    */
  ]
})
export class UserBookmarksModule {

  // I initialize the module.
  /*
  constructor() {

    console.log( "UserBookmarksModule Constructor." );
    KeycloakService.init()
      .then(() => {
        console.log("***** Keycloak correctly initialized ******");
      })
      .catch(() => window.location.reload());
    console.groupEnd();

  }

  constructor() {

    console.log( "UserBookmarksModule Constructor." );
    KeycloakService.initKeycloak('keycloak/keycloak.json').subscribe(() => {
      console.log( "UserBookmarksModule Constructor. - AFTER INIT" );
    });

  }
   */

}
