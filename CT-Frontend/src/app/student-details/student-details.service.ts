import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import  gql  from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {
  constructor(private apollo:Apollo) { }
  getURL(){
    const url="http://localhost:8080/";
    return url;
  }
  getRegisterNo(){
    const regno=parseInt(localStorage.getItem('regno'));
    return regno;
  }
  getDropDown(str: string) {
    const req = gql`
      query personReference($data: Person_Reference_Input) {
        personReference(data: $data){
          Ref_Code
          Category
          Ref_Name
        }
      }`;
    return this.apollo.watchQuery({
        query: req,
        variables: {
          data: {
            Category: str
          }
        }
      })
      .valueChanges.pipe(map((result: any) =>
      JSON.parse(JSON.stringify(result.data['personReference']))
      ));
  }
  getFA() {
    const req = gql`
      query allPersons{
        allPersons{
          Person_ID
          First_Name
          Last_Name
        }
      }`;
    return this.apollo.watchQuery({
      query:req
    }).valueChanges.pipe(map((result: any) =>
    JSON.parse(JSON.stringify(result.data['allPersons']))
    ));
  }
}
