export const getTimeString = (month: any, language: String) => {
  var monthEnglish = "";
  switch (month) {
    case 1:
      monthEnglish = language === "en" ? "January" : "tháng 1";
      break;
    case 2:
      monthEnglish = language === "en" ? "Febuary" : "tháng 2";
      break;
    case 3:
      monthEnglish = language === "en" ? "March" : "tháng 3";
      break;
    case 4:
      monthEnglish = language === "en" ? "April" : "tháng 4";
      break;
    case 5:
      monthEnglish = language === "en" ? "May" : "tháng 5";
      break;
    case 6:
      monthEnglish = language === "en" ? "June" : "tháng 6";
      break;
    case 7:
      monthEnglish = language === "en" ? "July" : "tháng 7";
      break;
    case 8:
      monthEnglish = language === "en" ? "August" : "tháng 8";
      break;
    case 9:
      monthEnglish = language === "en" ? "Septemper" : "tháng 9";
      break;
    case 10:
      monthEnglish = language === "en" ? "October" : "tháng 10";
      break;
    case 11:
      monthEnglish = language === "en" ? "November" : "tháng 11";
      break;
    default:
      monthEnglish = language === "en" ? "December" : "tháng 12";
  }
  return monthEnglish;
};
