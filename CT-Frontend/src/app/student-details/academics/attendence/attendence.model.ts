export interface AttendenceModel {
  cattend_id: number;
  course_code: string;
  reg_no: number;
  session_ref: number;
  group_ref: number;
  date: Date;
  period: number;
  presence: string;
}
