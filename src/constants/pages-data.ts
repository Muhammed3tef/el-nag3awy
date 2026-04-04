import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiSofa, GiStarsStack } from "react-icons/gi";
import {
  furn1,
  furn2,
  furn3,
  furn4,
  furn5,
  furn6,
  furn7,
  furn8,
} from "../../public/imgs/furns";
import {
  IoAlertCircleSharp,
  IoBedOutline,
  IoBriefcaseOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { RiSofaLine } from "react-icons/ri";
import { BsCurrencyDollar, BsForkKnife } from "react-icons/bs";
import {
  alumetalKitchen,
  modernKitchen,
  woodKitchen,
} from "../../public/imgs/kitchens";
import { LuMessageCircle } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiClock, FiUsers } from "react-icons/fi";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const ourServices = [
  {
    icon: GiSofa,
    title: "شراء الأثاث المستعمل",
    description:
      "نشتري جميع أنواع الأثاث والأجهزة المستعملة بأفضل الأسعار في الرياض. خدمة سريعة، دفع فوري نقداً، ونقل مجاني.",
  },
  {
    icon: CgSmartHomeRefrigerator,
    title: "بيع المطابخ الجديده",
    description:
      "نقدم أفضل المطابخ الحديثة بتصاميم عصرية وجودة عالية. مطابخ ألمنيوم وخشب بأسعار منافسة.",
  },
];

export const whatWeBuy = [
  {
    imgPath: furn1,
    imgAlt: "بيع غرف النوم في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: IoBedOutline,
    title: "غرف النوم",
    description: "جميع أنواع غرف النوم المستعملة",
  },
  {
    imgPath: furn2,
    imgAlt: "بيع مكيفات هواء في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: TbAirConditioning,
    title: "المكيفات",
    description: "مكيفات سبليت ومكيفات شباك",
  },
  {
    imgPath: furn3,
    imgAlt: "بيع ثلاجات في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: CgSmartHomeRefrigerator,
    title: "الثلاجات",
    description: "ثلاجات بجميع الأحجام والأنواع",
  },
  {
    imgPath: furn4,
    imgAlt: "بيع اثائث في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: IoHomeOutline,
    title: "الأجهزة المنزلية",
    description: "غسالات، مجففات، وأفران",
  },
  {
    imgPath: furn5,
    imgAlt: "بيع مطابخ مستعملة في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: BsForkKnife,
    title: "المطابخ المستعملة",
    description: "مطابخ ألمنيوم وخشب",
  },
  {
    imgPath: furn6,
    imgAlt: "بيع  اثاث غرف المعيشة في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: RiSofaLine,
    title: "أثاث غرف المعيشة",
    description: "كنب، طاولات، وخزائن",
  },
  {
    imgPath: furn7,
    imgAlt: "بيع اثاث المكتبي في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: IoBriefcaseOutline,
    title: "الأثاث المكتبي",
    description: "مكاتب، كراسي، وخزائن",
  },
  {
    imgPath: furn8,
    imgAlt: "بيع اثاث متنوع  في النجعاوي لشراء الاثائث المستعمل بالرياض",
    icon: IoBriefcaseOutline,
    title: "أثاث متنوع",
    description: "جميع أنواع الأثاث الأخرى",
  },
];

export const newKitchens = [
  {
    imgPath: modernKitchen,
    imgAlt: "شراء مطابخ حديثة في النجعاوي لشراء الاثائث المستعمل بالرياض",
    title: "المطابخ الحديثة",
    description: "تصاميم عصرية بأحدث الخامات",
  },
  {
    imgPath: alumetalKitchen,
    imgAlt: "شراء مطابخ الألمنيوم في النجعاوي لشراء الاثائث المستعمل بالرياض",
    title: "مطابخ الألمنيوم",
    description: "قوية ومقاومة للرطوبة",
  },
  {
    imgPath: woodKitchen,
    imgAlt: "شراء مطابخ الخشب في النجعاوي لشراء الاثائث المستعمل بالرياض",
    title: "مطابخ الخشب",
    description: "فخامة وأناقة طبيعية",
  },
];

export const howWeWork = [
  {
    icon: LuMessageCircle,
    title: "تواصل معنا",
    description: "اتصل بنا عبر واتساب أو الهاتف وأرسل صور الأثاث",
  },
  {
    icon: BsCurrencyDollar,
    title: "تقييم الأثاث",
    description: "نقوم بتقييم الأثاث وتقديم أفضل سعر",
  },
  {
    icon: CiDeliveryTruck,
    title: "النقل والدفع",
    description: "النقل والدفع",
  },
];

export const whyChooseUs = [
  {
    icon: BsCurrencyDollar,
    title: "أفضل الأسعار",
    description: "نقدم أعلى الأسعار في السوق",
  },
  {
    icon: CiDeliveryTruck,
    title: "نقل مجاني",
    description: "خدمة النقل مجانية تماماً",
  },
  {
    icon: FiClock,
    title: "دفع فوري",
    description: "نقوم بالدفع نقداً فوراً",
  },
  {
    icon: LiaCertificateSolid,
    title: "خبرة 5+ سنوات",
    description: "خبرة طويلة في المجال",
  },
  {
    icon: LiaCertificateSolid,
    title: "جميع أحياء الرياض",
    description: "نخدم كافة مناطق الرياض",
  },
];

export const locationsWeServe = [
  {
    title: "شمال الرياض",
    areas: ["العليا", "الملقا", "النرجس"],
  },
  {
    title: "شرق الرياض",
    areas: ["الروضة", "النسيم", "المروج"],
  },
  {
    title: "غرب الرياض",
    areas: ["الشفا", "الياسمين", "الربوة"],
  },
  {
    title: "جنوب الرياض",
    areas: ["العزيزية", "الشميسي", "السلي"],
  },
  {
    title: "وسط الرياض",
    areas: ["العود", "المربع", "الديرة"],
  },
  {
    title: "حي السفارات",
    areas: ["حي السفارات", "المحمدية", "الورود", "الوزارات", "الرائد"],
  },
  {
    title: "طريق الملك عبدالله",
    areas: ["النخيل", "النرجس", "الياسمين", "العقيق", "الورود", "الملقا"],
  },
  {
    title: "طريق الملك فهد",
    areas: ["العليا", "الصحافة", "الملك فهد", "المروج", "الورود"],
  },
  {
    title: "شمال غرب الرياض",
    areas: ["الياسمين", "الربوة", "الصحافة", "النفل", "الندى", "الملقا"],
  },
  {
    title: "شمال شرق الرياض",
    areas: ["الحمراء", "الروضة", "المروج", "قرطبة", "الريان"],
  },
  {
    title: "جنوب غرب الرياض",
    areas: ["الدار البيضاء", "الدار البيضاء", "الخالدية", "النهضة", "المنصورة"],
  },
  {
    title: "جنوب شرق الرياض",
    areas: ["السلي", "الدوبية", "النسيم", "الفلاح", "العزيزية", "الشفاء"],
  },
];

export const kitchenTypes = [
  {
    imgPath: modernKitchen,
    imgAlt: "شراء المطابخ الحديثة في النجعاوي لشراء الاثائث المستعمل بالرياض",
    title: "المطابخ الحديثة",
    description:
      "تصاميم عصرية بأحدث الخامات والألوان العصرية التي تناسب جميع الأذواق",
    features: ["تصاميم مبتكرة", "خامات عالية الجودة", "ألوان متنوعة"],
  },
  {
    imgPath: alumetalKitchen,
    imgAlt: "شراء مطابخ الألمنيوم في النجعاوي لشراء الاثائث المستعمل بالرياض",
    title: "مطابخ الألمنيوم",
    description: "قوية ومقاومة للرطوبة والحرارة، مثالية للمناخ السعودي",
    features: ["مقاومة للصدأ", "سهلة التنظيف", "عمر افتراضي طويل"],
  },
  {
    imgPath: woodKitchen,
    imgAlt: "شراء مطابخ الخشب في النجعاوي لشراء الاثائث المستعمل بالرياض",
    title: "مطابخ الخشب",
    description: "فخامة وأناقة طبيعية تضيف دفء ورونق لمنزلك",
    features: ["مظهر فاخر", "خشب طبيعي", "تصاميم كلاسيكية"],
  },
];

export const whyChooseOurKitchens = [
  {
    icon: GiStarsStack,
    title: "تصاميم عصرية",
    description: "أحدث التصاميم العالمية",
  },
  {
    icon: AiOutlineSafetyCertificate,
    title: "جودة مضمونة",
    description: "ضمان على جميع المنتجات",
  },
  {
    icon: LiaCertificateSolid,
    title: "خامات ممتازة",
    description: "أفضل الخامات المستوردة",
  },
  {
    icon: IoMdCheckmarkCircleOutline,
    title: "تركيب احترافي",
    description: "فريق تركيب متخصص",
  },
];

export const ourPrinciples = [
  {
    icon: LiaCertificateSolid,
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في كل ما نقدمه",
  },
  {
    icon: FiUsers,
    title: "رضا العملاء",
    description: "رضاكم هو أولويتنا الأولى دائماً",
  },
  {
    icon: IoMdCheckmarkCircleOutline,
    title: "المصداقية",
    description: "نتعامل بشفافية ومصداقية كاملة",
  },
  {
    icon: IoAlertCircleSharp,
    title: "الالتزام",
    description: "ملتزمون بوعودنا ومواعيدنا",
  },
];

export const whyChooseElnagaway = [
  {
    icon: LiaCertificateSolid,
    title: "خبرة 5+ سنوات",
    description: "خبرة طويلة في المجال",
  },
  {
    icon: FiClock,
    title: "أسعار عادلة",
    description: "نقدم أفضل الأسعار في السوق بناءً على تقييم دقيق",
  },
  {
    icon: FiUsers,
    title: "فريق محترف",
    description: "فريق عمل مدرب ومحترف في جميع مراحل الخدمة",
  },
  {
    icon: AiOutlineSafetyCertificate,
    title: "سمعة ممتازة",
    description: "آلاف العملاء الراضين يثقون بنا",
  },
];
