import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AcademicsModel } from '../academics.model';
import { AcademicsService } from '../academics.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  sessions: AcademicsModel[];
  queryRef: QueryRef<AcademicsModel[], any>;
  category = 'Session';

  constructor(private apollo: Apollo, private router: Router, private academicsService: AcademicsService) { }

  ngOnInit(): void {
    const req = gql`
    query courseReference($data: Course_Reference_Input) {
      courseReference(data: $data) {
        reference_id
        ref_code
        category
        ref_name
        description
      }
    }`;
    this.queryRef = this.apollo.watchQuery({
      query: req,
      variables: {
        data: {
          category: this.category
        }
      }
    });
    this.queryRef.valueChanges.subscribe(((result: any) => {
      this.sessions = JSON.parse(JSON.stringify(result.data.courseReference));
      console.log(this.sessions);
    }));
  }
  onSessionSelect(s: AcademicsModel): void{
    this.router.navigate(['/student-details', 'academics', 'course-list', s.reference_id]);

  }

}
