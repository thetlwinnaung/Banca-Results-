export interface SubjectResult {
  code: string;
  name: string;
  nameMm: string;
  score: number;
  maxScore: number;
  isDistinction: boolean;
  grade: string;
  status: 'Pass' | 'Fail' | 'Distinction';
}

export interface StudentResult {
  no: number;
  id: string;
  rollNo: string;
  prefix: string;
  name: string;
  nameMm: string;
  department: string;
  batch: string;
  examYear: string;
  subjectName: string;
  subjectNameMm: string;
  mark: number;
  maxMark: number;
  rank: 'Distinction' | 'Pass' | 'Fail';
  rankMm: 'ဂုဏ်ထူး' | 'အောင်' | 'ကျ';
  isPassed: boolean;
  isDistinction: boolean;
  subjects: SubjectResult[];
  totalScore: number;
  maxTotal: number;
  percentage: number;
  distinctions: { name: string; nameMm: string }[];
  summaryRemarks: string;
}

