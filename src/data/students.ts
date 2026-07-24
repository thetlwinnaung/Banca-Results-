import { StudentResult } from '../types';

export const OFFICIAL_EXAM_SUBJECT = {
  code: 'MOTOR-101',
  name: 'Motor',
  fullName: 'Motor Product Subject',
  fullNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
  department: 'Bancassurance Department',
  departmentMm: 'ဘဏ်အာမခံဌာန',
  examYear: '2026'
};

export const MOCK_STUDENTS: StudentResult[] = [
  {
    no: 1,
    id: 'std-001',
    rollNo: 'JSI',
    prefix: 'JSI',
    name: 'Ja Seng Ing',
    nameMm: 'ဂျာဆိုင်းအင်း',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 100,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 100,
    maxTotal: 100,
    percentage: 100,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 100,
        maxScore: 100,
        isDistinction: true,
        grade: 'A+',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 2,
    id: 'std-002',
    rollNo: 'SMMO',
    prefix: 'SMMO',
    name: 'Shun Moh Moh Oo',
    nameMm: 'ရှန်းမို့မို့ဦး',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 90,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 90,
    maxTotal: 100,
    percentage: 90,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 90,
        maxScore: 100,
        isDistinction: true,
        grade: 'A+',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 3,
    id: 'std-003',
    rollNo: 'PTW',
    prefix: 'PTW',
    name: 'Paing Thet Win',
    nameMm: 'ပိုင်သက်ဝင်း',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 85,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 85,
    maxTotal: 100,
    percentage: 85,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 85,
        maxScore: 100,
        isDistinction: true,
        grade: 'A+',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 4,
    id: 'std-004',
    rollNo: 'AKS',
    prefix: 'AKS',
    name: 'Aung Kaung Sett',
    nameMm: 'အောင်ကောင်းဆက်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 85,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 85,
    maxTotal: 100,
    percentage: 85,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 85,
        maxScore: 100,
        isDistinction: true,
        grade: 'A+',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 5,
    id: 'std-005',
    rollNo: 'PPH',
    prefix: 'PPH',
    name: 'Phoo Pwint Htike',
    nameMm: 'ဖူးပွင့်ထိုက်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 85,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 85,
    maxTotal: 100,
    percentage: 85,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 85,
        maxScore: 100,
        isDistinction: true,
        grade: 'A+',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 6,
    id: 'std-006',
    rollNo: 'HLN',
    prefix: 'HLN',
    name: 'Hsu Latt Nway',
    nameMm: 'ဆုလတ်နွယ်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 85,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 85,
    maxTotal: 100,
    percentage: 85,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 85,
        maxScore: 100,
        isDistinction: true,
        grade: 'A+',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 7,
    id: 'std-007',
    rollNo: 'TTH',
    prefix: 'TTH',
    name: 'Theint Thiri Htike',
    nameMm: 'သိမ့်သီရိထိုက်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 85,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 85,
    maxTotal: 100,
    percentage: 85,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 85,
        maxScore: 100,
        isDistinction: true,
        grade: 'A+',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 8,
    id: 'std-008',
    rollNo: 'THS',
    prefix: 'THS',
    name: 'Thet Htar San',
    nameMm: 'သက်ထားဆန်း',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 82.5,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 82.5,
    maxTotal: 100,
    percentage: 82.5,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 82.5,
        maxScore: 100,
        isDistinction: true,
        grade: 'A',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 9,
    id: 'std-009',
    rollNo: 'ZLH',
    prefix: 'ZLH',
    name: 'Zin Lin Htet',
    nameMm: 'ဇင်လင်းထက်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 80,
    maxMark: 100,
    rank: 'Distinction',
    rankMm: 'ဂုဏ်ထူး',
    isPassed: true,
    isDistinction: true,
    totalScore: 80,
    maxTotal: 100,
    percentage: 80,
    summaryRemarks: 'ဂုဏ်ထူးဖြင့် အောင်မြင်သည် (Distinction)',
    distinctions: [
      { name: 'Motor Product Subject', nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်' }
    ],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 80,
        maxScore: 100,
        isDistinction: true,
        grade: 'A',
        status: 'Distinction'
      }
    ]
  },
  {
    no: 10,
    id: 'std-010',
    rollNo: 'SSZ',
    prefix: 'SSZ',
    name: 'Su Sandi Zaw',
    nameMm: 'စုစန္ဒီဇော်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 77.5,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 77.5,
    maxTotal: 100,
    percentage: 77.5,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 77.5,
        maxScore: 100,
        isDistinction: false,
        grade: 'B+',
        status: 'Pass'
      }
    ]
  },
  {
    no: 11,
    id: 'std-011',
    rollNo: 'PPT',
    prefix: 'PPT',
    name: 'Phyu Phyu Thin',
    nameMm: 'ဖြူဖြူသင်း',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 75,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 75,
    maxTotal: 100,
    percentage: 75,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 75,
        maxScore: 100,
        isDistinction: false,
        grade: 'B+',
        status: 'Pass'
      }
    ]
  },
  {
    no: 12,
    id: 'std-012',
    rollNo: 'ESH',
    prefix: 'ESH',
    name: 'Ei Sandar Htun',
    nameMm: 'အိစန္ဒာထွန်း',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 75,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 75,
    maxTotal: 100,
    percentage: 75,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 75,
        maxScore: 100,
        isDistinction: false,
        grade: 'B+',
        status: 'Pass'
      }
    ]
  },
  {
    no: 13,
    id: 'std-013',
    rollNo: 'KZL',
    prefix: 'KZL',
    name: 'Khaing Zin Linn',
    nameMm: 'ခိုင်ဇင်လင်း',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 72.5,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 72.5,
    maxTotal: 100,
    percentage: 72.5,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 72.5,
        maxScore: 100,
        isDistinction: false,
        grade: 'B',
        status: 'Pass'
      }
    ]
  },
  {
    no: 14,
    id: 'std-014',
    rollNo: 'EKZ',
    prefix: 'EKZ',
    name: 'Ei Kay Zin',
    nameMm: 'အိကေဇင်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 72.5,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 72.5,
    maxTotal: 100,
    percentage: 72.5,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 72.5,
        maxScore: 100,
        isDistinction: false,
        grade: 'B',
        status: 'Pass'
      }
    ]
  },
  {
    no: 15,
    id: 'std-015',
    rollNo: 'SYP',
    prefix: 'SYP',
    name: 'Shwe Yi Phyo',
    nameMm: 'ရွှေရည်ဖြိုး',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 72.5,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 72.5,
    maxTotal: 100,
    percentage: 72.5,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 72.5,
        maxScore: 100,
        isDistinction: false,
        grade: 'B',
        status: 'Pass'
      }
    ]
  },
  {
    no: 16,
    id: 'std-016',
    rollNo: 'STT',
    prefix: 'STT',
    name: 'Sai Thiha Thu',
    nameMm: 'စိုင်းသီဟသူ',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 70,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 70,
    maxTotal: 100,
    percentage: 70,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 70,
        maxScore: 100,
        isDistinction: false,
        grade: 'B-',
        status: 'Pass'
      }
    ]
  },
  {
    no: 17,
    id: 'std-017',
    rollNo: 'AMT',
    prefix: 'AMT',
    name: 'Aung Myo Tun',
    nameMm: 'အောင်မျိုးထွန်း',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 70,
    maxMark: 100,
    rank: 'Pass',
    rankMm: 'အောင်',
    isPassed: true,
    isDistinction: false,
    totalScore: 70,
    maxTotal: 100,
    percentage: 70,
    summaryRemarks: 'အောင်မြင်သည် (Pass)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 70,
        maxScore: 100,
        isDistinction: false,
        grade: 'B-',
        status: 'Pass'
      }
    ]
  },
  {
    no: 18,
    id: 'std-018',
    rollNo: 'THA',
    prefix: 'THA',
    name: 'Than Htet Aung',
    nameMm: 'သန်းထက်အောင်',
    department: 'Bancassurance Department',
    batch: 'Bancassurance Motor Exam 2026',
    examYear: '2026',
    subjectName: 'Motor Product Subject',
    subjectNameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
    mark: 67.5,
    maxMark: 100,
    rank: 'Fail',
    rankMm: 'ကျ',
    isPassed: false,
    isDistinction: false,
    totalScore: 67.5,
    maxTotal: 100,
    percentage: 67.5,
    summaryRemarks: 'မအောင်မြင်ပါ (Fail - ၇၀ မှတ်အောက်)',
    distinctions: [],
    subjects: [
      {
        code: 'MOTOR-101',
        name: 'Motor Product Subject',
        nameMm: 'မော်တော်ယာဉ် အာမခံ ဘာသာရပ်',
        score: 67.5,
        maxScore: 100,
        isDistinction: false,
        grade: 'F',
        status: 'Fail'
      }
    ]
  }
];

// Helper to search exact or fuzzy match in official record list
export function searchOrGenerateStudent(query: string): StudentResult | null {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return null;
  
  // 1. Try finding exact or partial match in official MOCK_STUDENTS
  const match = MOCK_STUDENTS.find(
    s => s.name.toLowerCase() === cleanQuery || 
         s.nameMm.includes(cleanQuery) || 
         s.prefix.toLowerCase() === cleanQuery ||
         s.rollNo.toLowerCase() === cleanQuery ||
         s.name.toLowerCase().includes(cleanQuery)
  );
  
  return match || null;
}
