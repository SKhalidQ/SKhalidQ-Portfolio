import { LanguageStrings } from './en-gb';

export const urPK: LanguageStrings = {
  navigationButtons: {
    home: 'ہوم', // Home
    curriculum: 'نصاب', // Nisaab
    projects: 'پروجیکٹس', // Projects
    about: 'کے بارے میں' // Ke baare mein
  },
  languageMenu: {
    title: 'زبان', // Zubaan
    options: {
      enGB: 'انگلیسی', // Angrezi
      esES: 'ہسپانوی', // Hispanvi
      caES: 'کاتالان', // Catalan
      urPK: 'اردو' // Urdu
    }
  },
  themeMenu: {
    title: 'تھیم', // Theme
    options: {
      LightMode: 'ہلکا موڈ', // Halka mode
      DarkMode: 'تاریک موڈ', // Tareek mode
      SystemDefault: 'سسٹم ڈیفالٹ' // System default
    }
  },
  pages: {
    Home: 'ہوم', // Home
    Curriculum: 'نصاب', // Nisaab
    Projects: 'پروجیکٹس', // Projects
    About: 'کے بارے میں' // Ke baare mein
  },
  snackbar: {
    dismiss: 'ختم کریں', // Khatam karein
    themeChanged: 'تھیم تبدیل کر دی گئی ہے {0}', // Theme tabdeel kar di gayi hai {0}
    languageChanged: 'زبان تبدیل کر دی گئی ہے {0}', // Zubaan tabdeel kar di gayi hai {0}
    copiedToClipboard: 'کاپی کیا گیا ہے', // Copy kiya gaya hai
    connectionRestored: 'کنکشن بحال ہو گیا ہے' // Connection bahal ho gaya hai
  },
  projectCard: {
    repoTooltip: 'GitHub ریپوزٹری کا لنک', // GitHub repository ka link
    privateRepoTooltip: 'درخواست پر دستیاب', // Darkhwast par dastiyab
    websiteTooltip: 'پروجیکٹ کی ویب سائٹ دیکھیں', // Project ki web site dekhein
    unavailableWebsiteTooltip: 'ویب سائٹ دستیاب نہیں ہے' // Web site dastiyab nahin hai
  },
  projectsPage: {
    filter: 'پروجیکٹ کی قسم کے لحاظ سے فلٹر کریں', // Project ki qism ke lehaz se filter karein
    noProjectsError: 'تمام ڈیٹا حاصل کرنے میں کوئی مسئلہ لگ رہا ہے۔', // Tamam data hasil karne mein koi masla lag raha hai
    visitSite: 'ویب سائٹ پر جائیں', // Web site par jayen

    ProjectTypeFilter: {
      All: 'سب', // Sab
      WorkProject: 'کام کے پروجیکٹس', // Kaam ke projects
      PersonalProject: 'ذاتی پروجیکٹس', // Zaati projects
      UniversityProject: 'یونیورسٹی پروجیکٹس' // University projects
    }
  },
  errorPage: {
    forbidden: 'آپ کو اس پیج تک رسائی کی اجازت نہیں ہے۔', // Aap ko is page tak rasayi ki ijazat nahin hai
    notFound: 'پہلے سے موجود صفحہ نہیں ملا یا لنک ٹوٹ گیا ہے۔', // Pehle se mojood safha nahin mila ya link toot gaya hai
    genericError: 'ہمارے طرف سے کچھ غلط ہو گیا۔ براہ کرم بعد میں دوبارہ کوشش کریں۔' // Hamare taraf se kuch ghalat ho gaya. Barah karm baad mein dobara koshish karein
  },
  aboutPage: {
    changelog: 'تبدیلی کا لاگ', // Tabdeeli ka log
    checkUpdates: 'اپ ڈیٹس چیک کریں', // Updates check karein
    checkUpdatesDialog: {
      newUpdate: {
        title: 'نئی اپ ڈیٹ!', // Nayi update!
        message: 'اس صفحہ پر نیا مواد دستیاب ہے۔ کیا آپ اپ ڈیٹ کرنا چاہیں گے؟', // Is safhe par naya mawad dastiyab hai. Kya aap update karna chahen ge?
        action: 'اپ ڈیٹ' // Update
      },
      disabledUpdate: {
        title: 'اپ ڈیٹ غیر فعال ہیں', // Update ghair faal hain
        message: 'خودکار اپ ڈیٹس اس ماحول میں فعال نہیں ہیں۔', // Khudkar updates is mahol mein faal nahin hain.
        action: 'بند کریں' // Band karein
      },
      noNewUpdate: {
        title: 'کوئی نئی اپ ڈیٹ دستیاب نہیں ہے', // Koi nayi update dastiyab nahin hai
        message: 'آپ پہلے ہی اس ایپلیکیشن کا تازہ ترین ورژن چلا رہے ہیں۔', // Aap pehle hi is application ka taza tareen version chala rahe hain.
        action: 'بند کریں' // Band karein
      },
      updateError: {
        title: 'اپ ڈیٹ چیک کرنے میں ناکامی', // Update check karne mein nakami
        message: 'اس وقت اپ ڈیٹس چیک کرنے میں ناکامی ہوئی ہے۔ براہ کرم بعد میں دوبارہ کوشش کریں۔', // Is waqt updates check karne mein nakami hui hai. Barah karam baad mein dobara koshish karein.
        action: 'بند کریں' // Band karein
      },
      lostConnection: {
        title: 'کنکشن کھو گیا', // Connection kho gaya
        message: 'لگتا ہے کہ آپ کا کنکشن منقطع ہو گیا ہے۔ ہو سکتا ہے کہ کچھ فیچرز کام نہ کریں۔', // Lagta hai ke aap ka connection munqata ho gaya hai. Ho sakta hai ke kuch features kaam na karen.
        action: 'بند کریں' // Band karein
      }
    }
  },
  projects: {
    mediaPlay: {
      title: 'MediaPlay',
      subtitle: 'ذاتی پروجیکٹ', // Zaati project
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quo voluptates? Quas placeat fugiat libero eveniet saepe et minima veniam quisquam doloremque. Quia esse autem fugit odio tenetur saepe delectus.'
    },
    angularI18n: {
      title: 'Angular Library - i18n',
      subtitle: 'ذاتی پروجیکٹ', // Zaati project
      description: 'ایک Angular i18n لائبریری جس میں قسم محفوظ ترجمہ کیز اور ری ایکٹیو زبان کی تبدیلی ہے تاکہ UI ایپلیکیشن میں فوری طور پر اپ ڈیٹ ہو جائے۔ انٹرپولیشن اور جمعیت، زبان کی مستقل مزاجی، بیک اپ ترجمے، اور چھوٹے ابتدائی بنڈلز کے لیے زبان کے پیکجز کے اختیاری سست لوڈنگ کی حمایت کرتا ہے۔' // Ek Angular i18n library jis mein type-safe tarjuma keys aur reactive zaban ki tabdeeli hai taque UI application mein fori tor par update ho jaye. Interpolation aur jamaayat, zaban ki mustaqil mizaji, back up tarjume, aur chotay ibtidaai bundles ke liye zaban ke packages ke ikhtiyari sust loading ki himayat karta hai.
    },
    fileExplorer: {
      title: 'File Explorer (Alpha)',
      subtitle: 'ذاتی پروجیکٹ', // Zaati project
      description:'ایک جدید فائل ایکسپلورر جو میری نیٹ ورک ڈرائیوز کو دور سے منظم کرنے کے لیے استعمال ہوتا ہے۔ مجھے فائلیں شامل کرنے، ترمیم کرنے یا حذف کرنے، ان کی جگہ اپڈیٹ کرنے اور یہاں تک کہ مواد کا اشتراک کرنے کی اجازت دیتا ہے۔ Angular استعمال کرکے کلائنٹ بنایا گیا اور ASP.NET Core استعمال کرکے بیک اینڈ بنایا گیا جو Docker کنٹینر میں چل رہا ہے۔' // Ek jadeed file explorer jo meri network drives ko door se munazzam karne ke liye istemal hota hai. Mujhe files shamil karne, tarmeem karne ya hazf karne, un ki jagah update karne aur yahan tak ke mawad ka ishtarak karne ki ijazat deta hai. Angular istemal karke client banaya gaya aur ASP.NET Core istemal karke back end banaya gaya jo Docker container mein chal raha hai.
    },
    myList: {
      title: 'MyList (Beta)',
      subtitle: 'ذاتی پروجیکٹ', // Zaati project
      description: 'ایک ویب ایپلیکیشن جو صارفین کو ان سیریز اور فلموں کا ٹریک کرنے کی اجازت دیتا ہے جو وہ دیکھ رہے ہیں۔ وہ کوئی سیریز شامل کر سکتے ہیں اور اپڈیٹ کر سکتے ہیں کہ وہ کس ایپیسوڈ کے نمبر اور منٹ پر آخری بار رک گئے تھے۔ یہ پروجیکٹ Angular اور ASP.NET Core استعمال کرکے تیار کیا گیا ہے۔' // Ek web application jo sarfeen ko un series aur filmon ka track karne ki ijazat deta hai jo woh dekh rahe hain. Woh koi series shamil kar sakte hain aur update kar sakte hain ke woh kis episode ke number aur minute par aakhri bar ruk gaye the. Yeh project Angular aur ASP.NET Core istemal karke tayyar kiya gaya hai.
    },
    adminCommands: {
      title: 'Administrative Commands (Deprecated)',
      subtitle: 'ذاتی پروجیکٹ', // Zaati project
      description: 'آسان رسائی کے لیے کمانڈز کے مجموعے کے ساتھ ایک batch script۔ کمانڈز جیسے مقامی ایڈمنسٹریٹر اکاؤنٹ کو فعال کرنا تاکہ ڈیوائس سے متعلق تمام معلومات نکالی جا سکیں اور دیگر فنکشنز۔' // Aasaan rasayi ke liye commands ke majmoye ke sath ek batch script. Commands jaise maqami administrator account ko faal karna taque device se mutaliq tamam malomat nikali ja sakein aur degar functions.
    },
    bbisa: {
      title: 'Beer Bottle Inventory System App',
      subtitle: 'آنرز اسٹیج پروجیکٹ', // Honours stage project
      description: 'حتمی سال کا پروجیکٹ جو Angular اور ASP.NET Core استعمال کرکے بنایا گیا۔ یہ صارفین کو بیئر بوتل کی تفصیلات شامل کرکے انوینٹری کا ٹریک کرنے کی اجازت دیتا ہے۔ صارف آرڈرز اور فروخت کی تاریخ لاگ کر سکتا ہے جو پروڈکٹ کے اسٹاک کی مقدار پر اثر ڈالتی ہے۔' // Hatmi saal ka project jo Angular aur ASP.NET Core istemal karke banaya gaya. Yeh sarfeen ko beer bottle ki tafseelat shamil karke inventory ka track karne ki ijazat deta hai. Sarf orders aur farokht ki tareekh log kar sakta hai jo product ke stock ki miqdaar par asar dalti hai.
    },
    distributedSystems: {
      title: 'API and Client Development',
      subtitle: 'تقسیم شدہ نظام کی پروگرامنگ - تیسرے سال کا ماڈیول', // Taqseem shuda nizam ki programming - teesre saal ka module
      description: 'ASP.NET Core Web API پروجیکٹ جس میں symmetric اور asymmetric encryption استعمال کرکے مختلف cryptographic functions کے لیے endpoints ہیں۔ Claims-based authorization اور Entity Framework Core استعمال کرتا ہے۔' // ASP.NET Core Web API project jis mein symmetric aur asymmetric encryption istemal karke mukhtalif cryptographic functions ke liye endpoints hain. Claims-based authorization aur Entity Framework Core istemal karta hai.
    },
    jumble: {
      title: 'Jumble!',
      subtitle: 'موبائل ڈیولپمنٹ اور ڈیوائسز - تیسرے سال کا ماڈیول', // Mobile development aur devices - teesre saal ka module
      description: 'Android Studio (Java) استعمال کرکے بنایا گیا موبائل ایپ گیم جو صارف کو انٹرنیٹ پر دستیاب تصاویر کی فہرست مکمل کرنے کی اجازت دیتا ہے۔ کھلاڑی کو کم سے کم حرکات میں پزل ختم کرنا ہوتا ہے اور وہ اپنا سکور محفوظ کرکے دوسرے کھلاڑیوں کے ساتھ شیئر کر سکتا ہے۔' // Android Studio (Java) istemal karke banaya gaya mobile app game jo sarf ko internet par dastiyab tasaweer ki fehrist mukammal karne ki ijazat deta hai. Khiladi ko kam se kam harkat mein puzzle khatam karna hota hai aur woh apna score mahfooz karke doosre khiladiyon ke sath share kar sakta hai.
    },
    dataMining: {
      title: 'Medical Data Analysis',
      subtitle: 'ڈیٹا مائننگ اور فیصلہ سازی کے نظام - تیسرے سال کا ماڈیول', // Data mining aur faisla sazi ke nizam - teesre saal ka module
      description: 'یہ Data Mining پروجیکٹ طبی تاریخ کے ڈیٹاسیٹ کا تجزیہ کرتا ہے مختلف algorithms استعمال کرکے یہ پیش گوئی کرنے کے لیے کہ مریض اپنی بیماریوں کی وجہ سے کتنے زیادہ خطرے میں ہیں۔ Python اور Jupyter Notebook استعمال کرکے بنایا گیا۔' // Yeh Data Mining project tibbi tareekh ke dataset ka tajziya karta hai mukhtalif algorithms istemal karke yeh pesh goi karne ke liye ke mareez apni bimariyon ki wajah se kitne zyada khatre mein hain. Python aur Jupyter Notebook istemal karke banaya gaya.
    },
    networking: {
      title: 'Networking and UI Design',
      subtitle: 'نیٹ ورکنگ اور صارف انٹرفیس ڈیزائن - دوسرے سال کا ماڈیول', // Networking aur sarf interface design - doosre saal ka module
      description: 'C# اور WPF استعمال کرکے تیار کیا گیا کلائنٹ، جو WPF میں بنے سرور کو مختلف HTTP Protocols کے ساتھ درخواستیں بھیجتا ہے جن میں \'Whois\' اور HTTP 0.9 - 1.1 شامل ہیں۔' // C# aur WPF istemal karke tayyar kiya gaya client, jo WPF mein bane server ko mukhtalif HTTP Protocols ke sath darkhwasten bhejta hai jin mein 'Whois' aur HTTP 0.9 - 1.1 shamil hain.
    },
    webTech: {
      title: 'Web Location Interface Design',
      subtitle: 'انفارمیشن سسٹمز اور ویب ٹیکنالوجیز - دوسرے سال کا ماڈیول', // Information systems aur web technologies - doosre saal ka module
      description: 'HTML، CSS اور PHP استعمال کرکے بنائی گئی ویب سائٹ جو SQL ڈیٹابیس میں تمام ڈیٹا محفوظ کرکے طالب علم یا عملے کی جگہ کا ٹریک کرنے کی اجازت دیتی ہے۔' // HTML, CSS aur PHP istemal karke banayi gayi web site jo SQL database mein tamam data mahfooz karke talib ilm ya amle ki jagah ka track karne ki ijazat deti hai.
    },
    agentChatBot: {
      title: 'Agent Chatbot',
      subtitle: 'مصنوعی ذہانت - دوسرے سال کا ماڈیول', // Masnooi zehanat - doosre saal ka module
      description: 'SWI Prolog استعمال کرکے بنایا گیا سادہ chatbot agent جو input جملے کی بنیاد پر recursive search استعمال کرکے سفارش کے ساتھ جواب دیتا ہے۔ ایجنٹ سادہ اصولوں کا استعمال کرتے ہوئے بہترین میچ کی بنیاد پر پہلے عمل کے ساتھ جواب دیگا۔' // SWI Prolog istemal karke banaya gaya sada chatbot agent jo input jumle ki bunyaad par recursive search istemal karke sifarish ke sath jawab deta hai. Agent sada usoolon ka istemal karte hue behtareen match ki bunyaad par pehle amal ke sath jawab dega.
    }
  },
  homePage: {
    title: 'میرے پورٹ فولیو میں خوش آمدید!', // Mere portfolio mein khush aamdeed!
    cvHighlight: {
      description: 'میرے سی وی میں میرا پیشہ ورانہ سفر، مہارتیں، تجربات اور دلچسپیاں دریافت کریں۔', // Mere CV mein mera pesha warana safar, maharatein, tajurbaat aur dilchaspiyan daryaft karein.
      navigationButton: {
        text: 'سی وی دیکھیں' // CV dekhein
      }
    },
    projectsHighlight: {
      description: 'میرے پروجیکٹس اور وہ ٹیکنالوجیز دیکھیں جو میں نے استعمال کی ہیں۔', // Mere projects aur woh technologies dekhein jo main ne istemal ki hain.
      navigationButton: {
        text: 'پروجیکٹس دیکھیں' // Projects dekhein
      }
    }
  },
  curriculumPage: {
    copyToClipboard: 'کاپی کریں', // Copy karein
    header: {
      name: 'سعد خالد قیوم', // Saad Khalid Qayoom
      title: 'سافٹ ویئر انجینئر - فل اسٹیک ڈیولپر' // Software engineer - full stack developer
    },
    profile: {
      title: 'پروفائل', // Profile
      description: 'فل اسٹیک ڈویلپر جس کے پاس ایجائل، کراس فنکشنل ٹیموں میں ویب ایپلیکیشنز اور کلاؤڈ انفراسٹرکچر کی تعمیر اور دیکھ بھال کا چار سالہ تجربہ ہے۔ اسکیل ایبل، اعلی معیار کے سافٹ ویئر کی فراہمی کے لیے پرعزم، ویب ڈویلپمنٹ میں مضبوط بنیاد کے ساتھ اور مسلسل سیکھنے کا جذبہ رکھتا ہے۔' // Full stack developer jis ke paas Agile, cross-functional teams mein web applications aur cloud infrastructure ki tameer aur dekh bhaal ka char saal ka tajurba hai. Scalable, aala mayaar ke software ki farahmi ke liye par azm, web development mein mazboot bunyaad ke sath aur musalsal seekhne ka jazba rakhta hai.
    },
    employmentHistory: {
      title: 'ملازمت کی تاریخ', // Mulazmat ki tareekh
      jobs: {
        weatherford: {
          title: 'سافٹ ویئر انجینئر - Weatherford Ltd (Reeves Wireline Technologies)', // Software engineer - Weatherford Ltd (Reeves Wireline Technologies)
          description: 'Weatherford کی Wireline ڈویژن میں کام کرتا ہوں، جو ڈاؤن ہول ڈیٹا حاصل کرنے، فائل مینجمنٹ، اور ریئل ٹائم لاگ ویژولائزیشن کے لیے سافٹ ویئر تیار کرتا ہے، دونوں CAPEX اور OPEX پروجیکٹس میں تیل کے میدان کی کارروائیوں کی حمایت کے لیے۔', // Weatherford ki Wireline division mein kaam karta hoon, jo downhole data hasil karne, file management, aur real-time log visualisation ke liye software tayar karta hai, dono CAPEX aur OPEX projects mein tail ke maidan ki karwaiyon ki himayat ke liye.
          dates: 'دسمبر 2021 - موجودہ' // December 2021 - mojoodah
        },
        greenwood: {
          title: 'IT سپورٹ ٹیکنیشن - Greenwood Academies Trust', // IT support technician - Greenwood Academies Trust
          description: 'تیز رفتار IT سپورٹ ڈیپارٹمنٹ کا حصہ۔ اکیڈمی کے عملے کے اراکین کو تکنیکی مدد فراہم کی اور مختلف کام انجام دیے جن میں سرور کی دیکھ بھال، ڈیوائس کا انتظام اور مسائل کا حل شامل ہے۔', // Tez raftar IT support department ka hissa. Academy ke amle ke arakin ko takneeki madad faraham ki aur mukhtalif kaam anjam diye jin mein server ki dekhbhaal, device ka intizam aur masail ka hal shamil hai.
          dates: 'جنوری 2020 - نومبر 2021' // January 2020 - November 2021
        },
        homeFundraising: {
          title: 'گھر گھر جا کر فنڈز اکٹھے کرنے والا - Home Fundraising', // Ghar ghar ja kar funds akthe karne wala - Home Fundraising
          description: 'اس بات کی آگاہی پھیلانا کہ یہ تنظیم لوگوں کی کس طرح مدد کر رہی ہے اور دوسرے کس طرح مدد کر سکتے ہیں۔', // Is baat ki agaahi phailana ke yeh tanzeem logon ki kis tarah madad kar rahi hai aur doosre kis tarah madad kar sakte hain.
          dates: 'فروری 2017' // February 2017
        }
      }
    },
    educationHistory: {
      title: 'تعلیم', // Taleem
      institutions: {
        university: {
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull',
          description: 'متنوع موضوعات کا مطالعہ کیا جن میں شامل ہیں: تقسیم شدہ نظام کی پروگرامنگ، موبائل ایپلیکیشن کی ترقی، ڈیٹا مائننگ اور فیصلہ سازی کے نظام، اور ویب ٹیکنالوجیز۔ ماڈیولز کی مکمل فہرست درخواست پر دستیاب ہے۔', // Mutanawwe mozoat ka mutala kiya jin mein shamil hain: taqseem shuda nizam ki programming, mobile application ki taraqqi, data mining aur faisla sazi ke nizam, aur web technologies. Modules ki mukammal fehrist darkhwast par dastiyab hai.
        },
        academy: {
          title: 'Nottingham Academy',
          description: 'A-Level ہسپانوی اور BTEC Level 3 Diploma in Business,\n5 GCSEs بشمول ریاضی اور انگریزی، 3 BTECs بشمول سائنسز' // A-Level Hispanvi aur BTEC Level 3 Diploma in Business, 5 GCSEs bashmool riazi aur angrezi, 3 BTECs bashmool sciences
        }
      }

    },
    technicalSkills: {
      title: 'تکنیکی مہارتیں', // Takneeki maharatein
      sections: {
        backendDevelopment: {
          title: 'بیک اینڈ ڈویلپمنٹ', // Back end development
          skills: {
            dotNet: {
              title: 'C#/.Net, ASP.NET Core, Entity Framework',
              description: 'تجربہ کار بیک اینڈ ڈویلپر جو C# اور ASP.NET Core میں مہارت رکھتا ہے، جس میں Entity Framework کے ساتھ ڈیٹا بیس انٹریکشن شامل ہے۔ پروڈکشن ایپلیکیشنز کے لیے مضبوط اور اسکیل ایبل APIs بنانے کا تجربہ ہے۔' // Tajurba kar back end developer jo C# aur ASP.NET Core mein maharat rakhta hai, jis mein Entity Framework ke sath database interaction shamil hai. Production applications ke liye mazboot aur scalable APIs banane ka tajurba hai.
            },
            sql: {
              title: 'SQL',
              description: 'ریلیشنل ماڈلز ڈیزائن کرنے، کوئریز لکھنے، اور پروڈکشن ڈیٹا بیسز کے ساتھ کام کرنے کا مضبوط تجربہ۔' // Relational models design karne, queries likhne, aur production databases ke sath kaam karne ka mazboot tajurba.
            }
          }
        },
        frontendDevelopment: {
          title: 'فرنٹ اینڈ ڈویلپمنٹ', // Front end development
          skills: {
            angular: {
              title: 'Angular',
              description: 'متعدد ذاتی منصوبوں میں ذاتی تجربہ؛ کمپوننٹ آرکیٹیکچر، روٹنگ، سروسز، گارڈز، اور مزید سے واقف۔' // Mutadid zaati mansoobon mein zaati tajurba; component architecture, routing, services, guards, aur mazeed se waqif.
            },
            react: {
              title: 'React',
              description: 'پیشہ ورانہ تجربہ کمپوننٹ پر مبنی UI بنانے، یونٹ ٹیسٹ لکھنے اور دوبارہ قابل استعمال ویژولائزیشن لائبریری تیار کرنے میں۔' // Pesha warana tajurba component-based UI banane, unit tests likhne aur reusable visualization library tayar karne mein.
            },
            others: {
              title: 'Javascript/TypeScript, CSS/SCSS',
              description: 'مختلف فریم ورکز میں UI ٹولز اور انٹرایکٹو ایپلیکیشنز بنانے کے لیے استعمال کیا گیا۔' // Mukhtalif frameworks mein UI tools aur interactive applications banane ke liye istemal kiya gaya.
            }
          }
        },
        cloudAndInfrastructure: {
          title: 'کلاؤڈ اور انفراسٹرکچر', // Cloud & Infrastructure
          skills: {
            msAzure: {
              title: 'Microsoft Azure',
              description: 'پروڈکشن ایپلیکیشنز کے لیے کلاؤڈ انفراسٹرکچر کو برقرار رکھنے کا تجربہ، جس میں سروسز بنانا اور اپ ڈیٹ کرنا، ہوسٹ کی گئی ایپلیکیشنز کی نگرانی کرنا، اور انفراسٹرکچر کو بطور سروس استعمال کرتے ہوئے ٹیررا فارم کے ساتھ کلاؤڈ وسائل فراہم کرنا شامل ہے۔' // Production applications ke liye cloud infrastructure ko barqarar rakhne ka tajurba, jis mein services banana aur update karna, hosted applications ki nigrani karna, aur infrastructure ko as a service istemal karte hue terraform ke sath cloud resources faraham karna shamil hai.
            },
            docker: {
              title: 'Docker/Kubernetes',
              description: 'کنٹینرائزڈ ایپلیکیشنز کو ڈپلائے اور برقرار رکھنے کا تجربہ، جس میں دونوں کسٹم پروجیکٹس اور عوامی طور پر دستیاب امیجز شامل ہیں۔' // Containerized applications ko deploy aur barqarar rakhne ka tajurba, jis mein dono custom projects aur publicly available images shamil hain.
            }
          }
        },
        devOpsAndTooling: {
          title: 'ڈیو اوپس اور ٹولنگ', // DevOps & Tooling
          skills: {
            devOpsAndSourceControl: {
              title: 'Azure DevOps, Git, GitHub',
              description: 'Azure DevOps کے ساتھ بورڈز، بیک لاگز، سپرنٹ پلاننگ اور CI/CD پائپ لائنز پر کام کرنے کا تجربہ؛ GitHub کے ساتھ ذاتی منصوبوں کے لیے ورک فلو آٹومیشن اور ریلیزز؛ اور دونوں پلیٹ فارمز پر ریپوزٹری مینجمنٹ، برانچنگ، پل ریکویسٹ اور کوڈ ریویوز کے لیے Git کے ساتھ کام کرنے کا تجربہ۔' // Azure DevOps ke sath boards, backlogs, sprint planning aur CI/CD pipelines par kaam karne ka tajurba; GitHub ke sath zaati mansoobon ke liye workflow automation aur releases; aur dono platforms par repository management, branching, pull requests aur code reviews ke liye Git ke sath kaam karne ka tajurba.
            }
          }
        }
      }
    },
    achievements: {
      title: 'کامیابیاں', // Kamyabiyan
      list: {
        azureFundamentals: {
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'نومبر 2024', // November 2024
          description: 'میں نے AZ-900 کی سند مکمل کی جو کلاؤڈ سروسز کے بنیادی علم اور یہ سروسز Microsoft Azure کے ساتھ کیسے فراہم کی جاتی ہیں، کو ظاہر کرتی ہے۔' // Main ne AZ-900 ki sanad mukammal ki jo cloud services ke bunyaadi ilm aur yeh services Microsoft Azure ke sath kaise faraham ki jaati hain, ko zahir karti hai.
        }
      }
    },
    languages: {
      title: 'زبانیں', // Zubaanen
      english: 'انگریزی (پیشہ ورانہ)', // Angrezi (Pesha warana)
      spanish: 'ہسپانوی (مادری)', // Hispanvi (Madri)
      catalan: 'کاتالان (مادری)', // Katalan (Madri)
      urdu: 'اردو (مادری)', // Urdu (Madri)
      punjabi: 'پنجابی (مادری)' // Punjabi (Madri)
    },
    hobbies: {
      title: 'مشاغل', // Mashaghal
      hobbies: {
        movies: 'فلمیں اور سیریز', // Filmein aur series
        gaming: 'ویڈیو گیمز', // Video games
        music: 'موسیقی', // Musiqi
        videoEditing: 'ویڈیو ایڈیٹنگ', // Video editing
        code: 'کوڈنگ', // Coding
        fitness: 'فٹنس' // Fitness
      }
    }
  }
};
