import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import gql from 'graphql-tag';
import {Apollo, QueryRef} from 'apollo-angular';
import { AttendenceModel } from './attendence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademicsService } from '../academics.service';
import { StudentDetailsService } from './../../student-details.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttendenceComponent implements OnInit {
  months = ["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
  days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  presence = ['P','A','P','P','P','P','P','P','P','P','P','A','P','P','P','P','P','P','P','P','P','P','P','P','-','-','-','-','-','-','-'];
  displayValues = [];
  startMonth: number;
  endMonth: number;
  curMonth: number;
  curYear: number;
  session;
  cregst_id: number;
  courseTitle: string;
  attendance: AttendenceModel[];
  monthAttendance: AttendenceModel[];
  queryRef: QueryRef<AttendenceModel[], any>;

  constructor(private academicsService: AcademicsService,private apollo: Apollo, private studentDetailsService: StudentDetailsService, private router: Router, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    
     this.route.params.subscribe(params => {
      this.cregst_id = +params['cregst_id'];
      const reg_no=this.studentDetailsService.getRegisterNo();
      const query = {
        reg_no:  reg_no,
        cregst_id: this.cregst_id
      }
      this.academicsService.getStudentCourses(query).subscribe((result: any) => {
        if(result.length == 0) {
          this.router.navigate(['/student-details', 'academics']);
        }
        else {
          
          this.courseTitle=result[0].course_list.title
          this.academicsService.getSession(result[0].session_ref).subscribe((session: any) => {
            this.session = session[0];
            
            let months=session[0].description.split(" ");
            
            this.startMonth=this.getMonth(months[0])-1
            this.curMonth=this.startMonth
            this.endMonth=this.getMonth(months[3])-1
            this.curYear=parseInt(months[1])
          });
          const query2 = {
            group_ref: result[0].group_ref,
            session_ref: result[0].session_ref,
            course_code: result[0].course_code,
            reg_no: reg_no
          }
          const req=gql`
          query studentAttendance($data: studentAttendanceQueryInput) {
            studentAttendance(data: $data) {
              cattend_id
              course_code
              group_ref
              session_ref
              reg_no
              date
              period
              presence
            }
          }`;
          this.queryRef = this.apollo.watchQuery({
            query: req,
            variables: {
            data: query2
          }
          });
          this.queryRef.valueChanges.subscribe(((result: any) => {
            this.attendance = JSON.parse(JSON.stringify(result.data.studentAttendance));
            

            while(this.curMonth != this.endMonth){
              this.displayValues.push({month: this.curMonth, year: this.curYear, values: this.getStructure()});
              this.next();
            }
            this.displayValues.push({month: this.curMonth, year: this.curYear, values: this.getStructure()});
            
            
          }));    
        }
      })
    });
  }

  getMonth(month){
    return new Date(month+'-1-01').getMonth()+1
  }

  getStructure(){
    this.filterMonth()
    let presence:any = [];
    let pArray=[];
    this.monthAttendance.forEach((day) => {
      //presence[this.convertDate(day.date).getDate()]=day.presence
      let x = this.convertDate(day.date).getDate()
      if(presence[x])
        presence[x].push({period: day.period, presence: day.presence})
      else
        presence[x] = [{period: day.period, presence: day.presence}]
    })
    for(let i=1;i<=31;i++){
      /* if(presence[i])
        pArray.push(presence[i])
      else
        pArray.push("-") */
      if(presence[i]){ 
        presence[i].sort((p1,p2) => {return p1.period-p2.period})
        pArray.push(presence[i])
      }
      else pArray.push("-")
    }
    const day = new Date(this.curYear, this.curMonth, 1).getDay()
    var matrix = [], week = []
    for(var i=0;i<day;i++) week.push(' ')
    var curDate = 0, lastDate = new Date(this.curYear, this.curMonth+1, 0).getDate()
    while(curDate < lastDate){
        
        week.push({date: curDate+1, periods: pArray[curDate++]})//change presence to periods
        if(week.length === 7){
            matrix.push(week)
            week = []
        }
    }
    if(week.length){ 
        while(week.length<7) week.push(' ')
        matrix.push(week)
    }
    
    return matrix
  }
  next(){
     if(this.curMonth == this.endMonth) return;
     if(this.curMonth == 11) {
        this.curMonth = 0;
        this.curYear++;
     }
     else {
        this.curMonth++;
     }
  }

  getColor(periods): String{
    /* if(!periods||!periods.length||periods=='-') return 'white'
    let total = periods.length
    let pre = 0
    let perc = 100/total
    let present = 0
    let color = 'linear-gradient(135deg, '
    for(let i=0;i<total-1;i++){
       if(periods[i].presence=='P') 
         color += '#2be40d '+' '+pre+'%, #2be40d '+(pre+perc)+'%,'
       else
         color += '#f71515 '+' '+pre+'%, #f71515 '+(pre+perc)+'%,'
       pre += perc
    }
    if(periods[total-1].presence=='P') 
      color += '#2be40d '+' '+pre+'%, #2be40d 100%)'
    else
      color += '#f71515 '+' '+pre+'%, #f71515 100%)'
    return color */

     if(!periods||!periods.length||periods=='-') return 'white'
     let total = periods.length
     let present = 0
     for(let i=0;i<total;i++)
        if(periods[i].presence=='P') 
          present++
     present = (present/total)*100
     return 'linear-gradient(135deg, #2be40d '+present+'%, #f71515 '+present+'%, #f71515 100%)'
  }

  convertDate(inputDate){
    let day=inputDate.toString();
    let sec=parseInt(day);
    let d = new Date(sec);   
    return d
  }

  filterMonth(){
    this.monthAttendance=this.attendance.filter(l => this.convertDate(l.date).getMonth()==this.curMonth)
    
  }

  attendanceCount(){
    let temp=this.attendance.filter(l => l.presence=="P");
    
    return temp.length
  }

  getString(periods): String {
     if(!periods||periods=='-') return '';
     let displayString = '';
     for(let i=0;i<periods.length;i++)
      displayString += 'period '+periods[i].period+': '+periods[i].presence+'\n'
     return displayString;
  }

}
