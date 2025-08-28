// src/components/homepage/Footer.tsx
import { Link } from "i18n/navigation";
import { Twitter, Linkedin, Facebook, Send } from 'lucide-react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { HeroParticles } from "./effects/HeroParticles";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden animated-gradient-bg text-white" aria-labelledby="footer-heading">
        <HeroParticles id="footer-particles" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Kairė pusė: Naujienlaiškis */}
          <div className="lg:col-span-5 xl:col-span-6 mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold tracking-tight">Gaukite naujienas pirmieji</h3>
            <p className="mt-4 text-base text-gray-300">
              Prenumeruokite mūsų naujienlaiškį ir sužinokite apie platformos atnaujinimus, rinkodaros tendencijas ir specialius pasiūlymus.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <Input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Jūsų el. paštas"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Button type="submit" className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Prenumeruoti <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Dešinė pusė: Nuorodų tinklelis */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Produktas</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Kaip veikia</a></li>
                  <li><a href="#pricing" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Kainodara</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Verslui</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Leidėjams</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6">Resursai</h3>
                 <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#faq" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">DUK</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Tinklaraštis</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Pagalba</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6">Įmonė</h3>
                 <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Apie mus</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Kontaktai</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Privatumo politika</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-indigo-400 transition-colors">Taisyklės</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Apatinė juosta */}
<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 text-center">
  <p className="text-xs leading-5 text-gray-400">
    &copy; {year} Publikuota.lt. Visos teisės saugomos.
  </p>
</div>
      </div>
    </footer>
  );
};
