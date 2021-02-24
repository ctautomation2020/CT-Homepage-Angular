import { NgModule } from '@angular/core';
import { AlertboxComponent } from './alertbox/alertbox.component';
import { GraphQLModule } from './graphql/graphql.module';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AlertboxComponent
  ],
  imports: [
    GraphQLModule,
    MaterialModule
  ],
  exports: [
    GraphQLModule,
    MaterialModule
  ],
})
export class SharedModule {
}
