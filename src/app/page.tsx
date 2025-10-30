"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BookOpen, GraduationCap, Heart, HelpCircle, Lightbulb, MessageCircle, Phone, Smile, Target, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Avaleht", id: "hero" },
            { name: "Meist", id: "about" },
            { name: "Haridus", id: "feature" },
            { name: "Kontakt", id: "contact" }
          ]}
          brandName="Rae Gümnaasium"
          button={{
            text: "Tunniplaan",
            href: "https://rae.edu.ee"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Arene. Üllata. Korda. Naudi. Rae"
          description="Rae Gümnaasium - kaasaegne haridusasutus, kus iga õpilane saab areneda, õppida ja saavutada oma eesmärke toetavas ning inspireerivas keskkonnas."
          tag="Rae Gümnaasium"
          tagIcon={GraduationCap}
          buttons={[
            {
              text: "Tutvu kooliga",
              href: "about"
            },
            {
              text: "Võta ühendust",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6084269/pexels-photo-6084269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Rae Gümnaasiumi hoone"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Meie missioon ja väärtused"
          description="Rae Gümnaasium on kaasaegne haridusasutus, mis pakub kvaliteetset haridust ja toetab iga õpilase individuaalset arengut. Meie eesmärk on kasvatada vastutustundlikke, loovaid ja enesekindlaid noori."
          tag="Meist"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Arene",
              description: "Toetame iga õpilase individuaalset arengut ja anname võimaluse avastada oma potentsiaali",
              icon: TrendingUp
            },
            {
              title: "Üllata",
              description: "Julgustate õpilasi mõtlema väljaspool raamistikku ja leidma uudseid lahendusi",
              icon: Lightbulb
            },
            {
              title: "Korda",
              description: "Õpetame vastutustundlikkust ja aitame saavutada püstitatud eesmärke",
              icon: Target
            },
            {
              title: "Naudi",
              description: "Loome rõõmsa ja toetava õhkkonna, kus õppimine on nauditav kogemus",
              icon: Smile
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Rae Gümnaasiumi õpilased"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Meie haridusprogrammid"
          description="Pakume mitmekesiseid õppevõimalusi, mis arendavad õpilaste teadmisi ja oskusi erinevates valdkondades"
          tag="Haridus"
          tagIcon={BookOpen}
          features={[
            {
              id: "01",
              title: "Loodusteadused",
              description: "Kaasaegsed laborid ja praktilised uurimistööd füüsikas, keemias ja bioloogias",
              imageSrc: "https://images.pexels.com/photos/8515133/pexels-photo-8515133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Loodusteaduste labor"
            },
            {
              id: "02",
              title: "Sport ja liikumine",
              description: "Mitmekülgne spordiprogramm kaasaegses võimlas ja väljakutel",
              imageSrc: "https://images.pexels.com/photos/6076397/pexels-photo-6076397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spordihoone"
            },
            {
              id: "03",
              title: "Kunstiained",
              description: "Loominguline õpe muusikas, visuaalkunstis ja teatrikunstis",
              imageSrc: "https://images.pexels.com/photos/7692893/pexels-photo-7692893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Kunstiklass"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Õppekavad ja erialad"
          description="Tutvuge meie põhjaliku haridusprogrammiga, mis valmistab õpilasi ette edukaks tulevikuks"
          tag="Õppekavad"
          tagIcon={BookOpen}
          products={[
            {
              id: "1",
              name: "Matemaatika süvakursus",
              price: "Tasuta",
              imageSrc: "https://images.pexels.com/photos/6256066/pexels-photo-6256066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Matemaatika klassiruumi"
            },
            {
              id: "2",
              name: "Keeleõpe",
              price: "Tasuta",
              imageSrc: "https://images.pexels.com/photos/6981110/pexels-photo-6981110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Keeleõppe klass"
            },
            {
              id: "3",
              name: "Loodusteadused",
              price: "Tasuta",
              imageSrc: "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Loodusteaduste labor"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Mida meie õpilased ütlevad"
          description="Kuulge otse meie õpilaste ja lapsevanemate käest, milline on õppimine Rae Gümnaasiumis"
          tag="Tunnustused"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Mari Kask",
              role: "11. klassi õpilane",
              company: "Rae Gümnaasium",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8147446/pexels-photo-8147446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mari Kask"
            },
            {
              id: "2",
              name: "Jaan Tamm",
              role: "12. klassi õpilane",
              company: "Rae Gümnaasium",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/16461275/pexels-photo-16461275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jaan Tamm"
            },
            {
              id: "3",
              name: "Liis Mägi",
              role: "Vilistlane",
              company: "Tallinna Ülikool",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8617729/pexels-photo-8617729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Liis Mägi"
            },
            {
              id: "4",
              name: "Peeter Kolk",
              role: "Lapsevanem",
              company: "Rae Gümnaasium",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7972728/pexels-photo-7972728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Peeter Kolk"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Tunnustatud partnerid"
          description="Teeme koostööd juhtivate haridusasutuste ja organisatsioonidega"
          tag="Partnerid"
          tagIcon={Users}
          logos={[
            "https://images.pexels.com/photos/7942529/pexels-photo-7942529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11783234/pexels-photo-11783234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5649421/pexels-photo-5649421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5912615/pexels-photo-5912615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8654130/pexels-photo-8654130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2228569/pexels-photo-2228569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Korduma kippuvad küsimused"
          description="Leidke vastused kõige sagedamini esitatavatele küsimustele Rae Gümnaasiumi kohta"
          tag="KKK"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Kuidas saab Rae Gümnaasiumi õpilaseks?",
              content: "Vastuvõtt toimub vastavalt haridusministeeriumi korrale. Täpsem informatsioon avaldatakse meie kodulehel ja sotsiaalmeedia kanalites."
            },
            {
              id: "2",
              title: "Millised on õppekeeled?",
              content: "Peamine õppekeel on eesti keel. Lisaks pakume võõrkeelte õpet inglise, saksa ja vene keeles."
            },
            {
              id: "3",
              title: "Kas koolis on võimalik süüa?",
              content: "Jah, koolis töötab kaasaegne söökla, mis pakub tervislikke ja maitsvaid toite õpilastele ja personalile."
            },
            {
              id: "4",
              title: "Millised on huvitegevuse võimalused?",
              content: "Pakume mitmekesiseid huviringi: spordiringid, muusikaringid, teadusringid, robotite ehitamine ja palju muud."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Kontakt"
          title="Võtke meiega ühendust"
          description="Kas teil on küsimusi või soovite rohkem informatsiooni? Saatke meile oma kontaktandmed ja võtame teiega ühendust."
          tagIcon={Phone}
          inputPlaceholder="Sisestage oma e-mail"
          buttonText="Saada"
          termsText="Rae Gümnaasium: Aruküla tee 22, Jüri alevik, Rae vald, Harjumaa, 75301. Tel: +372 5444 0659"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Rae Gümnaasium"
          columns={[
            {
              items: [
                {
                  label: "Avaleht",
                  href: "hero"
                },
                {
                  label: "Meist",
                  href: "about"
                },
                {
                  label: "Tunniplaan",
                  href: "https://rae.edu.ee"
                }
              ]
            },
            {
              items: [
                {
                  label: "Haridus",
                  href: "feature"
                },
                {
                  label: "Õppekavad",
                  href: "product"
                },
                {
                  label: "KKK",
                  href: "faq"
                }
              ]
            },
            {
              items: [
                {
                  label: "Kontakt",
                  href: "contact"
                },
                {
                  label: "info@rae.edu.ee",
                  href: "mailto:info@rae.edu.ee"
                },
                {
                  label: "+372 5444 0659",
                  href: "tel:+37254440659"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}