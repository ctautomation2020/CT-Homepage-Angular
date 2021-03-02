export interface AcademicsModel {
  Reference_ID: number;
  Category: string;
  Ref_Name: string;
  Description: string;
}

export interface Assessment {
  section: Section[];
  assess_num: number;
  course_code: string;
  group_ref: number;
  session_ref: number;
  entry_date: Date;
}
export interface Section {
  name: string;
  section_mark: number;
  q_num: number;
  type: string;
  questions: Question[]
}
export interface Question {
  question_num: string;
  question_stmt: string;
  marks: number;
  blooms_level: number;
  co_num: number;
}
export interface EvaluationQuestion {
  question_num: string;
  mark: number;
}
export interface Evaluation {
  course_code: string;
  group_ref: number;
  session_ref: number;
  assess_num: number;
  reg_no: number;
  questions: EvaluationQuestion[]
}
