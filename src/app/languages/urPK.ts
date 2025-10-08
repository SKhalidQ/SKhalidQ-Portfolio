import { LanguageStrings } from './enGB';

export const urPKLanguage: LanguageStrings = {
  navigationButtons: {
    home: 'ہوم',
    curriculum: 'نصاب',
    projects: 'پروجیکٹس',
    about: 'کے بارے میں'
  },
  languageMenu: {
    title: 'زبان',
    options: {
      enGB: 'انگلیسی',
      esES: 'ہسپانوی',
      caES: 'کاتالان',
      urPK: 'اردو'
    }
  },
  themeMenu: {
    title: 'تھیم',
    options: {
      LightMode: 'ہلکا موڈ',
      DarkMode: 'تاریک موڈ',
      SystemDefault: 'سسٹم ڈیفالٹ'
    }
  },
  pages: {
    Home: 'ہوم',
    Curriculum: 'نصاب',
    Projects: 'پروجیکٹس',
    About: 'کے بارے میں'
  },
  snackbar: {
    dismiss: 'ختم کریں',
    themeChanged: 'تھیم تبدیل کر دی گئی ہے {0}',
    languageChanged: 'زبان تبدیل کر دی گئی ہے {0}',
    copiedToClipboard: 'کاپی کیا گیا ہے'
  },
  projectCard: {
    repoTooltip: 'GitHub ریپوزٹری کا لنک',
    privateRepoTooltip: 'درخواست پر دستیاب',
    websiteTooltip: 'پروجیکٹ کی ویب سائٹ دیکھیں',
    unavailableWebsiteTooltip: 'ویب سائٹ دستیاب نہیں ہے'
  },
  projectsPage: {
    filter: 'پروجیکٹ کی قسم کے لحاظ سے فلٹر کریں',
    noProjectsError: 'تمام ڈیٹا حاصل کرنے میں کوئی مسئلہ لگ رہا ہے۔',
    visitSite: 'ویب سائٹ پر جائیں',

    ProjectTypeFilter: {
      All: 'سب',
      WorkProject: 'کام کے پروجیکٹس',
      PersonalProject: 'ذاتی پروجیکٹس',
      UniversityProject: 'یونیورسٹی پروجیکٹس'
    }
  },
  errorPage: {
    forbidden: 'آپ کو اس پیج تک رسائی کی اجازت نہیں ہے۔',
    notFound: 'پہلے سے موجود صفحہ نہیں ملا یا لنک ٹوٹ گیا ہے۔',
    genericError: 'ہمارے طرف سے کچھ غلط ہو گیا۔ براہ کرم بعد میں دوبارہ کوشش کریں۔'
  },
  projects: {
    mediaPlay: {
      title: 'MediaPlay',
      subtitle: 'ذاتی پروجیکٹ',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quo voluptates? Quas placeat fugiat libero eveniet saepe et minima veniam quisquam doloremque. Quia esse autem fugit odio tenetur saepe delectus.'
    },
    fileExplorer: {
      title: 'File Explorer (Alpha)',
      subtitle: 'ذاتی پروجیکٹ',
      description:'ایک جدید فائل ایکسپلورر جو میری نیٹ ورک ڈرائیوز کو دور سے منظم کرنے کے لیے استعمال ہوتا ہے۔ مجھے فائلیں شامل کرنے، ترمیم کرنے یا حذف کرنے، ان کی جگہ اپڈیٹ کرنے اور یہاں تک کہ مواد کا اشتراک کرنے کی اجازت دیتا ہے۔ Angular استعمال کرکے کلائنٹ بنایا گیا اور ASP.NET Core استعمال کرکے بیک اینڈ بنایا گیا جو Docker کنٹینر میں چل رہا ہے۔'
    },
    myList: {
      title: 'MyList (Beta)',
      subtitle: 'ذاتی پروجیکٹ',
      description: 'ایک ویب ایپلیکیشن جو صارفین کو ان سیریز اور فلموں کا ٹریک کرنے کی اجازت دیتا ہے جو وہ دیکھ رہے ہیں۔ وہ کوئی سیریز شامل کر سکتے ہیں اور اپڈیٹ کر سکتے ہیں کہ وہ کس ایپیسوڈ کے نمبر اور منٹ پر آخری بار رک گئے تھے۔ یہ پروجیکٹ Angular اور ASP.NET Core استعمال کرکے تیار کیا گیا ہے۔'
    },
    adminCommands: {
      title: 'Administrative Commands (Deprecated)',
      subtitle: 'ذاتی پروجیکٹ',
      description: 'آسان رسائی کے لیے کمانڈز کے مجموعے کے ساتھ ایک batch script۔ کمانڈز جیسے مقامی ایڈمنسٹریٹر اکاؤنٹ کو فعال کرنا تاکہ ڈیوائس سے متعلق تمام معلومات نکالی جا سکیں اور دیگر فنکشنز۔'
    },
    bbisa: {
      title: 'Beer Bottle Inventory System App',
      subtitle: 'آنرز اسٹیج پروجیکٹ',
      description: 'حتمی سال کا پروجیکٹ جو Angular اور ASP.NET Core استعمال کرکے بنایا گیا۔ یہ صارفین کو بیئر بوتل کی تفصیلات شامل کرکے انوینٹری کا ٹریک کرنے کی اجازت دیتا ہے۔ صارف آرڈرز اور فروخت کی تاریخ لاگ کر سکتا ہے جو پروڈکٹ کے اسٹاک کی مقدار پر اثر ڈالتی ہے۔'
    },
    distributedSystems: {
      title: 'API and Client Development',
      subtitle: 'تقسیم شدہ نظام کی پروگرامنگ - تیسرے سال کا ماڈیول',
      description: 'ASP.NET Core Web API پروجیکٹ جس میں symmetric اور asymmetric encryption استعمال کرکے مختلف cryptographic functions کے لیے endpoints ہیں۔ Claims-based authorization اور Entity Framework Core استعمال کرتا ہے۔'
    },
    jumble: {
      title: 'Jumble!',
      subtitle: 'موبائل ڈیولپمنٹ اور ڈیوائسز - تیسرے سال کا ماڈیول',
      description: 'Android Studio (Java) استعمال کرکے بنایا گیا موبائل ایپ گیم جو صارف کو انٹرنیٹ پر دستیاب تصاویر کی فہرست مکمل کرنے کی اجازت دیتا ہے۔ کھلاڑی کو کم سے کم حرکات میں پزل ختم کرنا ہوتا ہے اور وہ اپنا سکور محفوظ کرکے دوسرے کھلاڑیوں کے ساتھ شیئر کر سکتا ہے۔'
    },
    dataMining: {
      title: 'Medical Data Analysis',
      subtitle: 'ڈیٹا مائننگ اور فیصلہ سازی کے نظام - تیسرے سال کا ماڈیول',
      description: 'یہ Data Mining پروجیکٹ طبی تاریخ کے ڈیٹاسیٹ کا تجزیہ کرتا ہے مختلف algorithms استعمال کرکے یہ پیش گوئی کرنے کے لیے کہ مریض اپنی بیماریوں کی وجہ سے کتنے زیادہ خطرے میں ہیں۔ Python اور Jupyter Notebook استعمال کرکے بنایا گیا۔'
    },
    networking: {
      title: 'Networking and UI Design',
      subtitle: 'نیٹ ورکنگ اور صارف انٹرفیس ڈیزائن - دوسرے سال کا ماڈیول',
      description: 'C# اور WPF استعمال کرکے تیار کیا گیا کلائنٹ، جو WPF میں بنے سرور کو مختلف HTTP Protocols کے ساتھ درخواستیں بھیجتا ہے جن میں \'Whois\' اور HTTP 0.9 - 1.1 شامل ہیں۔'
    },
    webTech: {
      title: 'Web Location Interface Design',
      subtitle: 'انفارمیشن سسٹمز اور ویب ٹیکنالوجیز - دوسرے سال کا ماڈیول',
      description: 'HTML، CSS اور PHP استعمال کرکے بنائی گئی ویب سائٹ جو SQL ڈیٹابیس میں تمام ڈیٹا محفوظ کرکے طالب علم یا عملے کی جگہ کا ٹریک کرنے کی اجازت دیتی ہے۔'
    },
    agentChatBot: {
      title: 'Agent Chatbot',
      subtitle: 'مصنوعی ذہانت - دوسرے سال کا ماڈیول',
      description: 'SWI Prolog استعمال کرکے بنایا گیا سادہ chatbot agent جو input جملے کی بنیاد پر recursive search استعمال کرکے سفارش کے ساتھ جواب دیتا ہے۔ ایجنٹ سادہ اصولوں کا استعمال کرتے ہوئے بہترین میچ کی بنیاد پر پہلے عمل کے ساتھ جواب دیگا۔'
    }
  },
  homePage: {
    title: 'میرے پورٹ فولیو میں خوش آمدید!',
    cvHighlight: {
      description: 'میرے سی وی میں میرا پیشہ ورانہ سفر، مہارتیں، تجربات اور دلچسپیاں دریافت کریں۔',
      navigationButton: {
        text: 'سی وی دیکھیں'
      }
    },
    projectsHighlight: {
      description: 'میرے پروجیکٹس اور وہ ٹیکنالوجیز دیکھیں جو میں نے استعمال کی ہیں۔',
      navigationButton: {
        text: 'پروجیکٹس دیکھیں'
      }
    }
  },
  curriculumPage: {
    copyToClipboard: 'کاپی کریں',
    header: {
      name: 'سعد خالد قیوم',
      title: 'سافٹ ویئر انجینئر - فل اسٹیک ڈیولپر'
    },
    profile: {
      title: 'پروفائل',
      description: 'حال ہی میں کمپیوٹر سائنس میں دوسری کلاس (ڈویژن 1) کے ساتھ فارغ التحصیل، سافٹ ویئر کی ترقی کی صنعت میں ملازمت کی تلاش میں۔ اپنی مہارتوں کو استعمال کرنے کے لیے تیار ہوں جو میں نے اپنی تعلیم اور اپنے فارغ وقت میں حاصل کی ہیں۔ مزید سیکھنے اور نئی ٹیکنالوجیز آزمانے کے لیے پرجوش۔'
    },
    employmentHistory: {
      title: 'ملازمت کی تاریخ',
      jobs: {
        weatherford: {
          title: 'سافٹ ویئر انجینئر - Weatherford Ltd (Reeves Wireline Technologies)',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sit magnam fugiat illo sapiente fuga rem quae. Qui similique laboriosam, esse eum blanditiis fugiat ducimus dolorum perferendis aspernatur, quas quibusdam consectetur odio excepturi, veniam odit ut tenetur quidem totam repellat?',
          dates: 'دسمبر 2021 - موجودہ'
        },
        greenwood: {
          title: 'IT سپورٹ ٹیکنیشن - Greenwood Academies Trust',
          description: 'تیز رفتار IT سپورٹ ڈیپارٹمنٹ کا حصہ۔ اکیڈمی کے عملے کے اراکین کو تکنیکی مدد فراہم کی اور مختلف کام انجام دیے جن میں سرور کی دیکھ بھال، ڈیوائس کا انتظام اور مسائل کا حل شامل ہے۔',
          dates: 'جنوری 2020 - نومبر 2021'
        },
        homeFundraising: {
          title: 'گھر گھر جا کر فنڈز اکٹھے کرنے والا - Home Fundraising',
          description: 'اس بات کی آگاہی پھیلانا کہ یہ تنظیم لوگوں کی کس طرح مدد کر رہی ہے اور دوسرے کس طرح مدد کر سکتے ہیں۔',
          dates: 'فروری 2017'
        }
      }
    },
    educationHistory: {
      title: 'تعلیم',
      institutions: {
        university: {
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull',
          description: 'متنوع موضوعات کا مطالعہ کیا جن میں شامل ہیں: تقسیم شدہ نظام کی پروگرامنگ، موبائل ایپلیکیشن کی ترقی، ڈیٹا مائننگ اور فیصلہ سازی کے نظام، اور ویب ٹیکنالوجیز۔ ماڈیولز کی مکمل فہرست درخواست پر دستیاب ہے۔',
        },
        academy: {
          title: 'Nottingham Academy',
          description: 'A-Level ہسپانوی اور BTEC Level 3 Diploma in Business,\n5 GCSEs بشمول ریاضی اور انگریزی، 3 BTECs بشمول سائنسز'
        }
      }

    },
    technicalSkills: {
      title: 'تکنیکی مہارتیں',
    },
    nonTechnicalSkills: {
      title: 'غیر تکنیکی مہارتیں',
      skills: {
        teamwork: {
          title: 'ٹیم ورک',
          description: 'تیز رفتار ماحول میں گرین ووڈ اکیڈمیز ٹرسٹ میں آئی ٹی ٹیکنیشن کے طور پر کام کیا، جس میں اہم حالات کو حل کرنے کے لیے ٹیم کے ساتھ تعاون کرنا شامل تھا۔ اپنی تعلیم کے دوران متعدد گروپ ورک پروجیکٹس کیے اور ٹیم کے ساتھ تعاون کرکے چیلنجز پر قابو پایا تاکہ مقاصد حاصل کیے جا سکیں۔'
        },
        communication: {
          title: 'مواصلات',
          description: 'دوستانہ، مددگار سپورٹ سروس فراہم کی اور آئی ٹی ٹیکنیشن کے طور پر کام کرتے ہوئے ساتھیوں کے ساتھ بات چیت کی۔ فنڈ ریزر کے طور پر ایک خیراتی ادارے کے بارے میں آگاہی بڑھانے میں مدد کی۔ یونیورسٹی کی پیشکشوں کے لیے تکنیکی معلومات کو واضح اور مختصر طور پر پیش کیا۔ کالج میں مختلف ڈراموں میں کامیابی کے ساتھ شرکت اور پرفارم کیا۔'
        },
        organisation: {
          title: 'تنظیم',
          description: 'IT سپورٹ کے معاملات کو ان کی شدت کے لحاظ سے دوبارہ ترتیب دے کر ترجیح دی اور جتنا ممکن ہو سکے جلد مدد فراہم کی۔ وقت کا انتظام کرکے اور اہم خصوصیات کو ترجیح دے کر یونیورسٹی اور کالج کے دوران بے شمار منصوبے مخصوص ڈیڈ لائنز کے لیے فراہم کیے۔'
        }
      }
    },
    achievements: {
      title: 'کامیابیاں',
      list: {
        azureFundamentals: {
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'نومبر 2024',
          description: 'میں نے AZ-900 کی سند مکمل کی جو کلاؤڈ سروسز کے بنیادی علم اور یہ سروسز Microsoft Azure کے ساتھ کیسے فراہم کی جاتی ہیں، کو ظاہر کرتی ہے۔'
        }
      }
    },
    hobbies: {
      title: 'مشاغل',
      hobbies: {
        movies: 'فلمیں اور سیریز',
        gaming: 'ویڈیو گیمز',
        music: 'موسیقی',
        videoEditing: 'ویڈیو ایڈیٹنگ',
        code: 'کوڈنگ',
        fitness: 'فٹنس'
      }
    }
  }
};
