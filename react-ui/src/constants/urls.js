export const PRODUCTION_ROOT_URL = 'https://app.chinese-me.com';
export const PDF_VERSION = '1.0';

export const STATIC_ASSETS_ROOT_URL = 'https://d1vi6gdem0f6wt.cloudfront.net';

// Those images are available in the s3 bucket at STATIC_ASSETS_ROOT_URL/images/
export const imageNames = {
  S1E1: [
    'illustrations/1-1.jpg',
    'tone1_diagram.png',
    'tone2_diagram.png',
    'tone3_diagram.png',
    'tone4_diagram.png',
    'shell.png',
    'yi_er_san.png',
    'combinations.png',
    'wang_stroke_order.png'
  ],
  S1E2: [
    'illustrations/2-1.jpg',
    'illustrations/2-2.jpg'
  ],
  S1E3: [
    'illustrations/3-2.jpg',
    'pie_stroke.png',
    'na_stroke.png',
    'broken_ren.png'
  ],
  S1E4: [
    'illustrations/4-1.jpg',
    'hanwriting_numbers_2.png'
  ],
  S1E5: [
    'illustrations/5-1.jpg',
    'illustrations/5-2.jpg'
  ],
  S1E6: [
    'illustrations/6-1.jpg'
  ],
  S1E7: [
    'illustrations/7-1_cut.png',
    'illustrations/7-2.jpg'
  ],
  S1E8: [
    'illustrations/9-1.jpg',
    'illustrations/8-1.jpg'
  ],
  S1E9: [
    'illustrations/9-2.jpg'
  ],
  S1E10: [
    'illustrations/10-1.jpg'
  ]
};

export const audioUrls = {
  basePath: STATIC_ASSETS_ROOT_URL + '/audio',
  exercisesPath: STATIC_ASSETS_ROOT_URL + '/audio/exercises',
  charactersPath: STATIC_ASSETS_ROOT_URL + '/audio/characters',
  wordsPath: STATIC_ASSETS_ROOT_URL + '/audio/words',
  examplesPath: STATIC_ASSETS_ROOT_URL + '/audio/examples',
  othersPath: STATIC_ASSETS_ROOT_URL + '/audio/others',
  sentencesPath: STATIC_ASSETS_ROOT_URL + '/audio/sentences'
};

export const pdfCourse = STATIC_ASSETS_ROOT_URL + '/pdf/ChineseMe_Season_1.pdf';
export const practiceSheet = STATIC_ASSETS_ROOT_URL + '/pdf/practice_sheet.pdf';
