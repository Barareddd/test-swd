import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Move shape": "เลื่อนรูปแบบ",
      "Move position": "เลื่อนตำแหน่ง",
      "Forms management": "การจัดการหน้าฟอร์ม",
      prefix: "คำนำหน้า",
      name: "ชื่อ",
      mr: "นาย",
      ms: "นางสาว",
      surname: "นามสกุล",
      birthDate: "วันเกิด",
      nationality: "สัญชาติ",
      id: "เลขบัตรประชาชน",
      gender: "เพศ",
      male: "ชาย",
      female: "หญิง",
      notSpecified: "ไม่ระบุ",
      phoneNumber: "หมายเลขโทรศัพท์",
      passport: "หนังสือเดินทาง",
      expectedSalary: "เงินเดือนที่คาดหวัง",
      thai: "ไทย",
      eng: "อังกฤษ",
      "Go to Test 2": "ไปแบบทดสอบที่ 2",
      "Back to Test 1": "กลับแบบทดสอบที่ 1",
      submit: "ส่งแบบฟอร์ม",
    },
  },
  en: {
    translation: {
      "Layout & Style": "Layout & Style",
      "Move shape": "Move shape",
      "Move position": "Move position",
      prefix: "prefix",
      name: "name",
      mr: "Mr.",
      ms: "Ms.",
      surname: "surname",
      birthDate: "birthdate",
      nationality: "nationality",
      id: "ID",
      gender: "gender",
      male: "male",
      female: "female",
      notSpecified: "not specified",
      phoneNumber: "phone number",
      passport: "passport",
      expectedSalary: "expected salary",
      thai: "Thai",
      eng: "English",
      "Go to Test 2": "Go to Test 2",
      "Back to Test 1": "Back to Test 1",
      submit: "submit",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
