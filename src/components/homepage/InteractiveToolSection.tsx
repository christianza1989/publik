// src/components/homepage/InteractiveToolSection.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Card } from "src/components/ui/card";
import { Check, Info, Link as LinkIcon, Sparkles, Star, RefreshCw, X, FileText } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Link } from "i18n/navigation";
import { getImageForTopic } from "src/lib/image-map";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "src/components/ui/tooltip";
import { Badge } from "src/components/ui/badge";

// --- Pagalbiniai komponentai (lieka nepakitę) ---
const StepIndicator = ({ step, totalSteps }: { step: number; totalSteps: number }) => (
  <div className="flex justify-center items-center gap-2 mb-6">
    {Array.from({ length: totalSteps }).map((_, i) => (
      <motion.div
        key={i}
        animate={{
          width: i + 1 === step ? '2.5rem' : '1.5rem',
          backgroundColor: i + 1 < step ? '#4f46e5' : i + 1 === step ? '#818cf8' : '#e5e7eb'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-2 rounded-full"
      />
    ))}
  </div>
);

const InfoTooltip = ({ content }: { content: React.ReactNode }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild><button type="button" className="ml-2 text-gray-400 hover:text-gray-600"><Info size={16} /></button></TooltipTrigger>
      <TooltipContent><p className="max-w-xs">{content}</p></TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// <<< DUOMENYS IŠKELTI Į ATSKIRUS OBJEKTUS >>>
const demoDataFirst = {
  topic: "Dirbtinis intelektas",
  url: "https://geranaujiena.lt/dirbtinis-intelektas", // <<< PRIDĖTI
  titles: [
    "5 būdai, kaip dirbtinis intelektas keičia verslo pasaulį 2025 metais",
    "Dirbtinis intelektas: ar Jūsų verslas pasiruošęs ateities revoliucijai?",
    "Praktinis gidas: Kaip pritaikyti AI sprendimus smulkiam verslui?",
    "Efektyvumo didinimas su AI: realūs pavyzdžiai ir sėkmės strategijos",
    "Dirbtinio intelekto ateitis: prognozės ir galimybės, kurių negalima ignoruoti"
  ],
  keywords: ["dirbtinis intelektas", "AI verslui", "mašininis mokymasis", "automatizavimas", "duomenų analizė", "AI įrankiai", "ateities technologijos", "efektyvumas"],
  imageIdentifier: "intelektas",
  // <<< NAUJA: Kiekvienam pavadinimui - atskira ištrauka >>>
  snippets: {
    "5 būdai, kaip dirbtinis intelektas keičia verslo pasaulį 2025 metais": `
      <p>2025-ieji žymi naują verslo erą, kurioje <strong>dirbtinis intelektas (AI)</strong> nebėra tik ateities prognozė – tai galingas įrankis, šiandien lemiantis rinkos lyderius. Nuo hiperpersonalizuotos rinkodaros iki autonominių tiekimo grandinių, AI įtaka tampa fundamentali.</p>
      <p>Šiame straipsnyje išsamiai nagrinėsime <strong>penkias pagrindines sritis</strong>, kuriose AI jau dabar kuria didžiausią vertę:</p>
      <ul>
        <li><strong>Klientų Patirtis:</strong> Kaip realiu laiku veikiančios sistemos numato klientų poreikius ir kuria unikalias patirtis.</li>
        <li><strong>Veiklos Efektyvumas:</strong> Kurios pasikartojančios užduotys yra pilnai automatizuojamos, atlaisvinant komandos laiką strateginiams darbams.</li>
        <li><strong>Strateginiai Sprendimai:</strong> Kaip didžiųjų duomenų (Big Data) analizė leidžia priimti tikslesnius ir greitesnius sprendimus.</li>
        <li><strong>Saugumas:</strong> Kaip AI padeda apsisaugoti nuo nuolat augančių kibernetinių grėsmių.</li>
        <li><strong>Inovacijos:</strong> Kaip AI tampa naujų produktų ir paslaugų kūrimo katalizatoriumi.</li>
      </ul>`,
    "Dirbtinis intelektas: ar Jūsų verslas pasiruošęs ateities revoliucijai?": `
      <p>Dirbtinio intelekto revoliucija jau vyksta, ir ji nelaukia tų, kurie dvejoja. Įmonės, kurios šiandien nediegia AI, rizikuoja ne tik prarasti konkurencinį pranašumą, bet ir apskritai išnykti iš rinkos. Tačiau ar jūsų verslas yra <strong>tikrai pasiruošęs</strong>?</p>
      <p>Sėkminga integracija – tai daugiau nei technologijų pirkimas. Tai – strateginis pokytis, apimantis visą organizaciją. Svarbiausi pasiruošimo žingsniai:</p>
      <ul>
        <li><strong>Strategijos Apsibrėžimas:</strong> Aiškiai įvardinkite, kurias problemas spręsite su AI ir kokio rezultato tikitės.</li>
        <li><strong>Duomenų Kultūra:</strong> Užtikrinkite, kad jūsų duomenys yra kokybiški, prieinami ir paruošti analizei.</li>
        <li><strong>Komandos Kompetencijos:</strong> Investuokite į darbuotojų mokymus ir naujų įgūdžių ugdymą.</li>
        <li><strong>Etiškas Naudojimas:</strong> Nusistatykite aiškias ribas ir principus, kaip AI bus naudojamas jūsų veikloje.</li>
      </ul>`,
    "Praktinis gidas: Kaip pritaikyti AI sprendimus smulkiam verslui?": `
      <p>Egzistuoja klaidingas įsitikinimas, kad <strong>dirbtinis intelektas</strong> yra prabangos prekė, prieinama tik technologijų gigantams. Tiesa yra visiškai kitokia: šiandien egzistuoja daugybė prieinamų ir net nemokamų AI įrankių, galinčių suteikti milžinišką postūmį smulkiam verslui.</p>
      <p>Šis praktinis gidas padės jums pradėti be didelių investicijų. Aptarsime konkrečius, lengvai pritaikomus įrankius:</p>
      <ul>
        <li><strong>Klientų Aptarnavimas:</strong> Kaip įsidiegti išmanų pokalbių robotą (chatbot), kuris dirbs 24/7.</li>
        <li><strong>Rinkodara:</strong> Įrankiai, kurie padės generuoti soc. tinklų įrašus, rašyti el. laiškus ir kurti vizualus.</li>
        <li><strong>Pardavimai:</strong> Sistemos, padedančios automatiškai identifikuoti potencialius klientus (leads).</li>
        <li><strong>Efektyvumas:</strong> Kaip automatizuoti sąskaitų išrašymą, duomenų suvedimą ir kitas administracines užduotis.</li>
      </ul>`,
    "Efektyvumo didinimas su AI: realūs pavyzdžiai ir sėkmės strategijos": `
      <p>Didžiausia, apčiuopiamiausia AI nauda – <strong>veiklos efektyvumo didinimas</strong>. Tačiau kaip tai atrodo realybėje? Vietoj teorijos, panagrinėkime konkrečius pavyzdžius iš skirtingų industrijų, kur AI jau šiandien taupo tūkstančius valandų ir eurų.</p>
      <p>Sėkmės paslaptis slypi ne technologijoje, o jos taikymo strategijoje. Sėkmingos įmonės laikosi šių principų:</p>
      <ul>
        <li><strong>Identifikuoja "Butelio Kakliukus":</strong> Pirmiausia automatizuoja tuos procesus, kurie reikalauja daugiausiai rankinio darbo ir stabdo augimą.</li>
        <li><strong>Pradeda nuo Mažų Žingsnių:</strong> Įgyvendina pilotinius projektus, kad įvertintų naudą prieš diegiant sprendimus visoje organizacijoje.</li>
        <li><strong>Matuoja Viską:</strong> Nustato aiškius rodiklius (KPIs) ir nuolat stebi, kaip AI sprendimai veikia pelningumą.</li>
        <li><strong>Įtraukia Komandą:</strong> Užtikrina, kad darbuotojai suprastų pokyčių naudą ir būtų jų dalimi.</li>
      </ul>`,
    "Dirbtinio intelekto ateitis: prognozės ir galimybės, kurių negalima ignoruoti": `
      <p>Jei dabartinė AI banga atrodo įspūdingai, tai ateitis – tiesiog stulbinanti. Technologijos tobulėja eksponentiniu greičiu, atverdamos galimybes, kurios dar vakar atrodė kaip mokslinė fantastika. Verslo lyderiams, ignoruojantiems šias tendencijas, gresia didelis atsilikimas.</p>
      <p>Šiame straipsnyje aptarsime <strong>keturias pagrindines kryptis</strong>, kurios lems verslo ateitį artimiausią dešimtmetį:</p>
      <ul>
        <li><strong>Generatyvinis AI:</strong> Ne tik tekstas ar vaizdai, bet ir sudėtingi kodai, strategijos bei produktų dizainai, kuriami AI.</li>
        <li><strong>Hiper-automatizavimas:</strong> Pilnai autonominės sistemos, valdančios ištisus verslo procesus be žmogaus įsikišimo.</li>
        <li><strong>AI ir Žmogaus Sinergija:</strong> Nauji bendradarbiavimo modeliai, kur AI veikia kaip asmeninis asistentas kiekvienam darbuotojui.</li>
        <li><strong>Paaiškinamas AI (XAI):</strong> Sistemos, kurios ne tik pateikia atsakymą, bet ir geba logiškai pagrįsti, kodėl priėmė būtent tokį sprendimą.</li>
      </ul>`,
  }
};

const demoDataSecond = {
  topic: "Kaip publikuota.lt padės jūsų verslui",
  url: "https://mano-verslas.lt", // <<< PRIDĖTI
  titles: [
      "Verslo augimas su Publikuota.lt: 3 pagrindinės naudos",
      "Kaip Publikuota.lt automatizuoja jūsų turinio rinkodarą?",
      "Sėkmės istorija: Kaip padidinome srautą 300% su Publikuota.lt",
      "Nuo idėjos iki publikacijos per kelias minutes: Publikuota.lt galia",
      "Investicija, kuri atsiperka: Kodėl verta rinktis Publikuota.lt?"
  ],
  keywords: ["publikuota.lt", "turinio rinkodara", "SEO straipsniai", "automatizavimas", "verslo augimas", "skaitmeninė rinkodara", "atgalinės nuorodos", "naujienų portalai"],
  imageIdentifier: "kaip-publikuota-pades",
  // <<< NAUJA: Kiekvienam pavadinimui - atskira ištrauka >>>
  snippets: {
    "Verslo augimas su Publikuota.lt: 3 pagrindinės naudos": `
      <p>Verslo augimas – tai ne atsitiktinumas, o strategijos rezultatas. <strong>Publikuota.lt</strong> siūlo aiškią ir patikrintą strategiją, paremtą trimis pamatinėmis naudomis, kurios tiesiogiai didina jūsų matomumą ir pajamas.</p>
      <p>Užuot investavę į brangią ir ne visada atsiperkančią reklamą, jūs investuojate į ilgalaikį turtą – savo prekės ženklo autoritetą. Štai kaip tai veikia:</p>
      <ul>
        <li><strong>Organinis Srautas:</strong> Kiekviena publikacija su atgaline nuoroda yra tarsi naujas kelias, vedantis klientus tiesiai į jūsų svetainę iš paieškos sistemų.</li>
        <li><strong>Prekės Ženklo Patikimumas:</strong> Straipsniai žinomuose portaluose veikia kaip trečiosios šalies patvirtinimas, keliantis jūsų įmonės reputaciją klientų akyse.</li>
        <li><strong>Tikslinė Auditorija:</strong> Galimybė rinktis nišinius portalus leidžia pasiekti būtent tuos žmones, kurie jau domisi jūsų paslaugomis ar produktais.</li>
      </ul>`,
    "Kaip Publikuota.lt automatizuoja jūsų turinio rinkodarą?": `
      <p>Jūsų komandos laikas yra per brangus, kad jį švaistytumėte monotoniškoms užduotims. <strong>Publikuota.lt</strong> buvo sukurta su viena misija: grąžinti jums laiką, automatizuojant visą turinio publikavimo grandinę.</p>
      <p>Įsivaizduokite procesą be dešimčių el. laiškų, skambučių ir atskirų Excel lentelių. Mūsų platforma tai paverčia realybe:</p>
      <ul>
        <li><strong>Viskas Vienoje Vietoje:</strong> Nuo rašytojo suradimo ir AI pagalbos iki portalo pasirinkimo ir apmokėjimo – viskas vienoje sistemoje.</li>
        <li><strong>Centralizuotas Katalogas:</strong> Momentinė prieiga prie šimtų portalų su aiškiomis kainomis ir SEO metrika. Jokių derybų.</li>
        <li><strong>Automatinis Publikavimas:</strong> Pateikite straipsnį ir stebėkite jo statusą realiu laiku. Jokių "ar jau publikavote?" skambučių.</li>
        <li><strong>Viena Sąskaita:</strong> Pamirškite dešimtis atskirų sąskaitų. Mėnesio pabaigoje gaukite vieną bendrą sąskaitą už visas paslaugas.</li>
      </ul>`,
    "Sėkmės istorija: Kaip padidinome srautą 300% su Publikuota.lt": `
      <p>Teorija yra viena, o realūs rezultatai – visai kas kita. Panagrinėkime konkrečią sėkmės istoriją: kaip e. komercijos įmonė, prekiaujanti sporto prekėmis, per 6 mėnesius su <strong>Publikuota.lt</strong> padidino savo organinį srautą <strong>net 300%</strong>.</p>
      <p>Šis įspūdingas rezultatas nebuvo atsitiktinumas, o tikslingos strategijos vaisius. Konkretūs žingsniai, kuriuos jie atliko:</p>
      <ul>
        <li><strong>Pradinė Analizė:</strong> Atlikta konkurentų atgalinių nuorodų analizė ir identifikuotos pagrindinės temos.</li>
        <li><strong>Tikslinių Portalų Atranka:</strong> Pasirinkti sporto ir sveikos gyvensenos portalai su aukštu domeno autoritetu.</li>
        <li><strong>Nuoseklus Publikavimas:</strong> Kiekvieną savaitę publikuotas vienas išsamus, naudingas straipsnis su nuoroda į tikslinę kategoriją.</li>
        <li><strong>Rezultatų Stebėjimas:</strong> Naudojantis Google Analytics, stebėtas organinio srauto augimas ir konversijos.</li>
      </ul>`,
    "Nuo idėjos iki publikacijos per kelias minutes: Publikuota.lt galia": `
      <p>Tradicinėje rinkodaroje procesas nuo idėjos iki publikacijos gali trukti savaites. Su <strong>Publikuota.lt</strong> mes sutalpiname šį procesą į jūsų kavos pertraukėlę. Tai – didžiausias mūsų platformos privalumas.</p>
      <p>Leiskite mums parodyti, kaip atrodo pagreitintas procesas, kuris leis jums aplenkti konkurentus:</p>
      <ul>
        <li><strong>1 minutė: Idėja ir generavimas.</strong> Įveskite temą ir raktinius žodžius – mūsų AI akimirksniu pasiūlys antraštes ir sugeneruos straipsnio juodraštį.</li>
        <li><strong>2 minutės: Peržiūra ir tobulinimas.</strong> Greitai peržiūrėkite ir, jei reikia, patobulinkite tekstą su mūsų patogiu redaktoriumi.</li>
        <li><strong>1 minutė: Portalo pasirinkimas.</strong> Filtruokite ir išsirinkite tinkamiausią portalą iš mūsų didžiulio katalogo.</li>
        <li><strong>30 sekundžių: Publikavimas.</strong> Vienu mygtuko paspaudimu jūsų straipsnis iškeliauja tiesiai į portalo redakciją.</li>
      </ul>`,
    "Investicija, kuri atsiperka: Kodėl verta rinktis Publikuota.lt?": `
      <p>Protingas verslas kiekvieną investiciją vertina pagal jos grąžą (ROI). <strong>Publikuota.lt</strong> yra ne išlaidos, o viena geriausių investicijų į jūsų ilgalaikį skaitmeninį marketingą.</p>
      <p>Lyginant su kitomis alternatyvomis, mūsų platforma siūlo neprilygstamą vertę. Štai kodėl:</p>
      <ul>
        <li><strong>Efektyvumas:</strong> Jūs sutaupote dešimtis valandų, kurias galite skirti savo tiesioginiam verslui. Laikas – pinigai.</li>
        <li><strong>Kaina:</strong> Mokate tik už konkretų rezultatą – publikaciją. Jokių mėnesinių mokesčių ar ilgalaikių įsipareigojimų.</li>
        <li><strong>Ilgalaikė Vertė:</strong> Skirtingai nei mokama reklama, kuri nustoja veikti vos tik nustojate mokėti, kokybiškas straipsnis su atgaline nuoroda generuoja srautą ir kelia jūsų SEO autoritetą metų metus.</li>
      </ul>`,
  }
};

// --- Pagrindinis komponentas ---
export const InteractiveToolSection = () => {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [titles, setTitles] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [snippet, setSnippet] = useState('');
  const [image, setImage] = useState('');
  const [seo, setSeo] = useState<{ metaTitle: string; metaDescription: string; keywords: string[] } | null>(null);
  const [selectedPortals, setSelectedPortals] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [url, setUrl] = useState(""); // <<< PRIDĖTI

  // <<< NAUJA BŪSENA GENERACIJAI SEkti >>>
  const [generationCount, setGenerationCount] = useState(1);
  const activeDemoData = generationCount === 1 ? demoDataFirst : demoDataSecond;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasStarted, setHasStarted] = useState(false);

const fakePortals = [
  { name: "geranaujiena.lt", DR: 45, price: 50, description: "Lyderiaujantis bendrų naujienų portalas." },
  { name: "infoerdve.lt", DR: 38, price: 65, description: "Technologijų ir inovacijų naujienos." },
  { name: "welovelithuania.lt", DR: 52, price: 200, description: "Populiarus turizmo ir kultūros portalas." },
  { name: "gerosnaujienos.lt", DR: 35, price: 85, description: "Pozityvių naujienų ir bendruomenių svetainė." },
  { name: "kulturosmeniu.lt", DR: 41, price: 75, description: "Specializuotas kultūros ir meno portalas." },
];
  
  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      startTyping(demoDataFirst.topic, () => startUrlTyping(demoDataFirst.url));
    }
  }, [isInView, hasStarted]);

  const handleKeywordRemove = (keywordToRemove: string) => {
    setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
  };

  const startTyping = (text: string, onComplete: () => void) => {
    let i = 0;
    const intervalId = setInterval(() => {
      setTopic(text.slice(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        onComplete(); // <<< IŠKVIESTI CALLBACK
      }
    }, 50);
  };

  const startUrlTyping = (text: string) => {
    let i = 0;
    const intervalId = setInterval(() => {
      setUrl(text.slice(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        setIsPulsing(true);
      }
    }, 50);
  };

  const handleStepLogic = () => {
    setIsLoading(true);
    setIsPulsing(false);
    setTimeout(() => {
      const nextStep = step + 1;
      switch(nextStep) {
        case 2:
          setTitles(activeDemoData.titles);
          break;
        case 3:
          setKeywords(activeDemoData.keywords);
          break;
        case 4:
          setSnippet(
            generationCount === 1
              ? (demoDataFirst.snippets as any)[selectedTitle] || `<p>Klaida: tekstas nerastas.</p>`
              : (demoDataSecond.snippets as any)[selectedTitle] || `<p>Klaida: tekstas nerastas.</p>`
          );
          break;
        case 5:
          setImage(getImageForTopic(activeDemoData.imageIdentifier));
          break;
        case 6:
          setSeo({ metaTitle: `${selectedTitle} | Publikuota.lt`, metaDescription: `Sužinokite viską apie temą "${activeDemoData.topic}". Mūsų platforma padės Jums pasiekti geriausius rezultatus.`, keywords: keywords });
          break;
      }
      setStep(nextStep);
      setIsLoading(false);
    }, 1500 + Math.random() * 500);
  };

const resetDemo = (startNewGeneration = false) => {
  // <<< NAUJA SLINKIMO LOGIKA >>>
  const section = document.getElementById('demo');
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // 80px atsitraukimas nuo viršaus
      behavior: 'smooth',
    });
  }

  if (startNewGeneration) {
    setGenerationCount(2);
    const newTopic = demoDataSecond.topic;
    setTopic('');
    setTitles([]);
    setSelectedTitle('');
    setKeywords([]);
    setSnippet('');
    setImage('');
    setSeo(null);
    setUrl(""); // <<< NEPAMIRŠK IŠVALYTI URL
    setIsPulsing(false);
    setStep(1);
    setTimeout(() => startTyping(newTopic, () => startUrlTyping(demoDataSecond.url)), 500);
  } else {
    setGenerationCount(1);
    const originalTopic = demoDataFirst.topic;
    setTopic('');
    setTitles([]);
    setSelectedTitle('');
    setKeywords([]);
    setSnippet('');
    setImage('');
    setSeo(null);
    setUrl(""); // <<< NEPAMIRŠK IŠVALYTI URL
    setIsPulsing(false);
    setStep(1);
    setTimeout(() => startTyping(originalTopic, () => startUrlTyping(demoDataFirst.url)), 500);
  }
};
  
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as any } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" as any } },
  };

  return (
    <AnimatedSection id="demo" className="py-20 sm:py-28 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Pajuskite AI galią. Gyvai.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Išbandykite interaktyvią kelionę ir pamatykite, kaip idėja virsta publikacija.</p>
        
        <Card ref={ref} className="mt-10 max-w-3xl mx-auto text-left dark:bg-slate-800/50 p-4 sm:p-6 shadow-2xl transition-all duration-500">
            <div className="flex justify-between items-center mb-4">
                <StepIndicator step={step} totalSteps={7} />
                <Button variant="ghost" size="sm" onClick={() => resetDemo(false)}>Pradėti iš naujo</Button>
            </div>
            
            <AnimatePresence>
                {step >= 1 && (
                    <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold text-lg flex items-center mb-2">1. Jūsų tema <InfoTooltip content="Viskas prasideda nuo idėjos. Mūsų AI ją pavers įtraukiančiu turiniu." /></h3>
                          <div className="relative">
                            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input value={topic} readOnly className="bg-gray-100 dark:bg-slate-700 h-12 font-medium pl-10" />
                            {topic.length < activeDemoData.topic.length && <span className="blinking-cursor absolute right-3 top-1/2 -translate-y-1/2 h-6 bg-indigo-500" />}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg flex items-center mb-2">2. Jūsų nuoroda <InfoTooltip content="Įveskite URL, į kurį norite gauti atgalinę nuorodą iš straipsnio." /></h3>
                          <div className="relative">
                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input value={url} readOnly className="bg-gray-100 dark:bg-slate-700 h-12 font-medium pl-10" />
                            {topic.length >= activeDemoData.topic.length && url.length < activeDemoData.url.length && <span className="blinking-cursor absolute right-3 top-1/2 -translate-y-1/2 h-6 bg-indigo-500" />}
                          </div>
                        </div>
                      </div>

                      {step === 1 && (
                          <div className="mt-6">
                              <Button size="lg" onClick={handleStepLogic} disabled={isLoading || url.length < activeDemoData.url.length} className={isPulsing ? 'animate-button-pulse' : ''}>
                                  {isLoading ? "Generuojama..." : "Generuoti Pavadinimus"}
                              </Button>
                          </div>
                      )}
                    </motion.div>
                )}

                {step >= 2 && (
                    <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="mt-6">
                        <h3 className="font-semibold text-lg flex items-center">2. Pavadinimo pasirinkimas <InfoTooltip content="Geras pavadinimas pritraukia daugiau skaitytojų. Pasirinkite vieną iš AI sugeneruotų variantų." /></h3>
                        <div className="my-4 space-y-2">
                            {isLoading && step === 2 ? Array(5).fill(0).map((_,i) => <div key={i} className="h-12 w-full rounded-md shimmer-bg" />) :
                            titles.map(title => <Button key={title} variant={selectedTitle === title ? 'default' : 'outline'} onClick={() => setSelectedTitle(title)} className="w-full justify-start text-left h-auto whitespace-normal p-3"><Check className={`mr-2 h-4 w-4 transition-opacity ${selectedTitle === title ? 'opacity-100' : 'opacity-0'}`} />{title}</Button>)}
                        </div>
                        {step === 2 && (
                            <Button size="lg" onClick={handleStepLogic} disabled={!selectedTitle || isLoading}>{isLoading ? "..." : "Generuoti Raktinius Žodžius"}</Button>
                        )}
                    </motion.div>
                )}
                
                {step >= 3 && (
                    <motion.div key="step3-keywords" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="mt-6">
                        <h3 className="font-semibold text-lg flex items-center">3. Raktinių žodžių generavimas <InfoTooltip content="Tinkami raktiniai žodžiai padeda Jūsų straipsniui pasiekti aukštesnes pozicijas paieškos sistemose." /></h3>
                        {keywords.length > 0 && (
                            <div className="my-4 flex flex-wrap gap-2 p-3 border rounded-md min-h-[50px]">
                              <AnimatePresence>
                                {keywords.map(k => (
                                  <motion.div
                                    key={k}
                                    layout
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                  >
                                    <Badge variant="secondary" className="flex items-center gap-2 py-1 px-3">
                                      {k}
                                      <button onClick={() => handleKeywordRemove(k)} className="rounded-full hover:bg-black/10 dark:hover:bg-white/10 p-0.5">
                                        <X className="h-3 w-3" />
                                      </button>
                                    </Badge>
                                  </motion.div>
                                ))}
                              </AnimatePresence>
                            </div>
                        )}
                        {step === 3 && (
                             <Button size="lg" onClick={handleStepLogic} disabled={isLoading}>{isLoading ? "Generuojama..." : "Kurti Turinį"}</Button>
                        )}
                    </motion.div>
                )}

                {step >= 4 && (
                    <motion.div key="step4-content" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="mt-6">
                        <p className="text-sm font-medium text-muted-foreground">Pasirinktas pavadinimas:</p>
                        <h3 className="font-semibold text-lg mb-4">{selectedTitle}</h3>

                        {step >= 5 && (
                            <motion.div key="step5-image" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden relative my-4">
                                {image && <img src={image} className="w-full h-full object-cover"/>}
                            </motion.div>
                        )}
                        
                        <div className="prose prose-sm dark:prose-invert max-w-none p-4 border rounded-md" dangerouslySetInnerHTML={{ __html: snippet }} />

                        {step >= 6 && (
                             <motion.div key="step6-seo" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-3 p-3 border rounded-md mt-4">
                                <p className="text-xs font-semibold uppercase text-muted-foreground">Meta Title</p>
                                <p className="font-mono text-sm">{seo?.metaTitle}</p>
                                <p className="text-xs font-semibold uppercase text-muted-foreground">Meta Description</p>
                                <p className="text-sm">{seo?.metaDescription}</p>
                                <div className="flex flex-wrap gap-2 pt-2">{seo?.keywords.map(k => <Badge key={k} variant="secondary">{k}</Badge>)}</div>
                             </motion.div>
                        )}

                        {step === 4 && (<Button size="lg" onClick={handleStepLogic} disabled={isLoading} className="mt-4">{isLoading ? "..." : "Generuoti Paveikslėlį"}</Button>)}
                        {step === 5 && (<Button size="lg" onClick={handleStepLogic} disabled={isLoading} className="mt-4">{isLoading ? "..." : "Sukurti SEO"}</Button>)}
                        {step === 6 && (<Button size="lg" onClick={handleStepLogic} disabled={isLoading} className="mt-4">{isLoading ? "..." : "Ruošti Publikavimui"}</Button>)}
                    </motion.div>
                )}

                {step === 7 && (
                    <motion.div key="step7-publish" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="mt-6">
                      <h3 className="font-semibold text-lg flex items-center">7. Pasirinkite portalus <InfoTooltip content="Užveskite pelę ant portalo, kad pamatytumėte SEO metriką ir kainą." /></h3>
                      <p className="text-sm text-muted-foreground mb-4">Realiame produkte matysite šimtus portalų su detaliais duomenimis.</p>
                      
                      {/* Portalų Tinklelis su Tooltip'ais */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {fakePortals.map(portal => (
                          <TooltipProvider key={portal.name}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div 
                                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${selectedPortals.includes(portal.name) ? 'bg-indigo-100 dark:bg-indigo-900 border-indigo-300 ring-2 ring-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-slate-700'}`} 
                                  onClick={() => {
                                    const isSelected = selectedPortals.includes(portal.name);
                                    setSelectedPortals(isSelected ? selectedPortals.filter(p => p !== portal.name) : [...selectedPortals, portal.name]);
                                  }}
                                >
                                   <LinkIcon className="h-5 w-5 text-gray-500"/>
                                   <span className="font-medium">{portal.name}</span>
                                   <Check className={`ml-auto h-5 w-5 text-indigo-600 transition-opacity ${selectedPortals.includes(portal.name) ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="p-1 text-sm">
                                  <p className="font-bold">{portal.description}</p>
                                  <p className="mt-2">Domeno Autoritetas (DA): <strong className="text-indigo-500">{portal.DR}</strong></p>
                                  <p>Publikacijos kaina: <strong className="text-indigo-500">{portal.price} €</strong></p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>

                      {/* Dinaminė Santrauka ir CTA Mygtukas */}
                      <div className="mt-8 pt-6 border-t">
                        <h4 className="font-semibold text-center mb-4">Jūsų pasirinkimas:</h4>
                        {selectedPortals.length > 0 ? (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center text-lg font-bold">
                              <span>Bendra suma:</span>
                              <span>
                                {selectedPortals.reduce((total, currentPortalName) => {
                                  const portal = fakePortals.find(p => p.name === currentPortalName);
                                  return total + (portal ? portal.price : 0);
                                }, 0)} €
                              </span>
                            </div>
                            <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-base py-6 px-8 animate-pulse">
                                <Link href="https://portal.publikuota.lt/lt/signup"><Star className="mr-2 h-5 w-5"/>Publikuoti Nemokamai</Link>
                            </Button>
                          </div>
                        ) : (
                          <p className="text-center text-muted-foreground">Pasirinkite bent vieną portalą.</p>
                        )}
                      </div>

                      {/* Mygtukas "Generuoti naują" */}
                      {generationCount === 1 && (
                          <div className="mt-8 pt-6 border-t text-center">
                              <p className="text-sm text-muted-foreground mb-3">Nepatiko straipsnis?</p>
                              <Button variant="secondary" onClick={() => resetDemo(true)}>
                                  <RefreshCw className="mr-2 h-4 w-4"/>
                                  Generuoti naują
                              </Button>
                          </div>
                      )}
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
      </div>
    </AnimatedSection>
  );
};
