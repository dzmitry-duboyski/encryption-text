const characterList = {

  /**
   * template:
   * 'HTML-code'(a-&#1072;): ['HTML-code-alternative-symbol№1,'...№2','...№3']
   *  example:
   * '1072': ['97'], // а - (cyrillic symbol)
   */

  
  /**
   * RUS
   * 
   * абвгдеёжзийклмнопрстуфхцчшщъыьэюя
   * АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
   * 
   */
  '1040': ['65','913','5034'],          // А - (cyrillic letter)
  '1041': ['386'],                      // Б - (cyrillic letter)
  '1042': ['914','5108'],               // B - (cyrillic letter)
  '1043': ['915','5041'],               // Г - (cyrillic letter)
  // '1044': ['','','','','','',''],      // Д - (cyrillic letter)
  '1045': ['69','917','5036'],          // Е - (cyrillic letter)
  '1025': ['203'],                      // Ё - (cyrillic letter)
  // '1046': ['','','','','','','',''],   // Ж - (cyrillic letter)
  // '1047': ['','','','','','','',''],   // З - (cyrillic letter)
  '1048': ['886'],                      // И - (cyrillic letter)
  // '1049': ['','','','','','','','',''],// Й - (cyrillic letter)
  '1050': ['922','5094'],               // К - (cyrillic letter)
  // '1051': ['','','','','','','','',''],// Л - (cyrillic letter)
  '1052': ['5047','8559','924'],        // М - (cyrillic letter)
  '1053': ['72','919','5051'],          // Н - (cyrillic letter)
  '1054': ['79','927'],                 // О - (cyrillic letter)
  '1055': ['928'],                      // П - (cyrillic letter)
  '1056': ['80','929','5090'],          // Р - (cyrillic letter)
  '1057': ['67','5087','8557'],         // С - (cyrillic letter)
  '1058': ['932','5026'],               // Т - (cyrillic letter)
  '1059': ['5033'],                     // У - (cyrillic letter)
  '1060': ['934'],                      // Ф - (cyrillic letter)
  '1061': ['935'],                      // Х - (cyrillic letter)
  // '1062': ['','','','','','','','',''],// Ц - (cyrillic letter)
  // '1063': ['','','','','','','','',''],// Ч - (cyrillic letter)
  // '1064': ['','','','','','','','',''],// Ш - (cyrillic letter)
  // '1065': ['','','','','','','','',''],// Щ - (cyrillic letter)
  // '1066': ['','','','','','','','',''],// Ъ - (cyrillic letter)
  // '1067': ['','','','','','','','',''],// Ы - (cyrillic letter)
  '1068': ['5071'],                     // Ь - (cyrillic letter)
  // '1069': ['','','','','','','','',''],// Э - (cyrillic letter)
  // '1070': ['','','','','','','','',''],// Ю - (cyrillic letter)
  // '1071': ['','','','','','','','',''],// Я - (cyrillic letter)

  '1072': ['97'],                       // а - (cyrillic letter)
  // '1073': ['','','','','','','','',''],// б - (cyrillic letter)
  '1074': ['665','5116'],               // в - (cyrillic letter)
  '1075': ['43905','7462'],             // г - (cyrillic letter)
  // '1076': ['','','','','','','','',''],// д - (cyrillic letter)
  '1077': ['101'],                      // е - (cyrillic letter)
  '1105': ['235'],                      // ё - (cyrillic letter)
  // '1078': ['','','','','','','','',''],// ж - (cyrillic letter)
  // '1079': ['','','','','','','','',''],// з - (cyrillic letter)
  '1080': ['887'],                      // и - (cyrillic letter)
  // '1081': ['','','','','','','','',''],// й - (cyrillic letter)
  '1082': ['954','43958','7435'],       // к - (cyrillic letter)
  '1083': ['7467'],                     // л - (cyrillic letter)
  '1084': ['43911'],                    // м - (cyrillic letter)
  '1085': ['668','43915'],              // н - (cyrillic letter)
  '1086': ['111','959','7439'],         // о - (cyrillic letter)
  '1087': ['7464'],                     // п - (cyrillic letter)
  '1088': ['112'],                      // р - (cyrillic letter)
  '1089': ['99','43951','7428','8573'], // с - (cyrillic letter)
  '1090': ['43890','7451'],             // т - (cyrillic letter)
  '1091': ['121'],                      // у - (cyrillic letter)
  // '1092': ['','','','','','','','',''],// ф - (cyrillic letter)
  // '1093': ['','','','','','','','',''],// х - (cyrillic letter)
  // '1094': ['','','','','','','','',''],// ц - (cyrillic letter)
  // '1095': ['','','','','','','','',''],// ч - (cyrillic letter)
  // '1096': ['','','','','','','','',''],// ш - (cyrillic letter)
  // '1097': ['','','','','','','','',''],// щ - (cyrillic letter)
  // '1098': ['','','','','','','','',''],// ъ - (cyrillic letter)
  // '1099': ['','','','','','','','',''],// ы - (cyrillic letter)
  '1100': ['43935'],                    // ь - (cyrillic letter)
  // '1101': ['','','','','','','','',''],// э - (cyrillic letter)
  // '1102': ['','','','','','','','',''],// ю - (cyrillic letter)
  // '1103': ['','','','','','','','',''],// я - (cyrillic letter)



 /**
  * 
  *  EN
  *  abcdefghiklmnopqrstvxyz
  *  ABCDEFGHIKLMNOPQRSTVXYZ
  *  
  */
  '97': ['1072'],                       // a - (latin letter)
  '98': ['','','',''],                  // b - (latin letter)
  '99': ['','','',''],                // c - (latin letter)
  '100': ['','','',''],                  // d - (latin letter)
  '101': ['','','',''],                  // e - (latin letter)
  '102': ['','','',''],                  // f - (latin letter)
  '103': ['','','',''],                  // g - (latin letter)
  '104': ['','','',''],                  // h - (latin letter)
  '105': ['','','',''],                  // i - (latin letter)
  '107': ['','','',''],                  // k - (latin letter)
  '108': ['','','',''],                  // l - (latin letter)
  '109': ['','','',''],                  // m - (latin letter)
  '110': ['','','',''],                  // n - (latin letter)
  '111': ['','','',''],                  // o - (latin letter)
  '112': ['','','',''],                  // p - (latin letter)
  '113': ['','','',''],                  // q - (latin letter)
  '114': ['','','',''],                  // r - (latin letter)
  '115': ['','','',''],                  // s - (latin letter)
  '116': ['','','',''],                  // t - (latin letter)
  '118': ['','','',''],                  // v - (latin letter)
  '120': ['','','',''],                  // x - (latin letter)
  '121': ['','','',''],                  // y - (latin letter)
  '122': ['','','',''],                  // z - (latin letter)
  '65': ['','','',''],                  // A - (latin letter)
  '66': ['','','',''],                  // B - (latin letter)
  '67': ['','','',''],                  // C - (latin letter)
  '68': ['','','',''],                  // D - (latin letter)
  '69': ['','','',''],                  // E - (latin letter)
  '70': ['','','',''],                  // F - (latin letter)
  '71': ['','','',''],                  // G - (latin letter)
  '72': ['','','',''],                  // H - (latin letter)
  '73': ['','','',''],                  // I - (latin letter)
  '75': ['','','',''],                  // K - (latin letter)
  '76': ['','','',''],                  // L - (latin letter)
  '77': ['','','',''],                  // M - (latin letter)
  '78': ['','','',''],                  // N - (latin letter)
  '79': ['1054','927'],                 // O - (latin letter)
  '80': ['','','',''],                  // P - (latin letter)
  '81': ['','','',''],                  // Q - (latin letter)
  '82': ['','','',''],                  // R - (latin letter)
  '83': ['','','',''],                  // S - (latin letter)
  '84': ['','','',''],                  // T - (latin letter)
  '86': ['','','',''],                  // V - (latin letter)
  '88': ['','','',''],                  // X - (latin letter)
  '89': ['','','',''],                  // Y - (latin letter)
  '90': ['','','',''],                  // Z - (latin letter)

  
}

export {characterList};

/**
 * 
 * Materials:
 * 
 * пробел https://unicode-table.com/en/03A2/
 * 
 * https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C:%D0%9F%D0%BE%D1%85%D0%BE%D0%B6%D0%B8%D0%B5_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D1%8B
 */
