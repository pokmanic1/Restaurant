'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from 'gsap/src/SplitText';


export interface Preparat {
  nume: string;
  gramaj: number;
  ingredient: string;
  pret: number;
  img: string;
}

export interface CategorieMeniu {
  slug: string;
  titlu: string;
  tipuri: Preparat[];
}

export const meniu: CategorieMeniu[] = [
  {
    slug: 'carne',
    titlu: 'Carne',
    tipuri: [
      {
        nume: "Steak de vită Ribeye",
        gramaj: 300,
        ingredient: "Antricot de vită Black Angus, unt aromatizat cu ierburi, sare de mare, piper roz",
        pret: 380,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Ceafă de porc la grătar",
        gramaj: 250,
        ingredient: "Ceafă de porc marinată, cimbru uscat, usturoi, ulei de măsline",
        pret: 150,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Mușchiuleț de porc în crustă de ierburi",
        gramaj: 220,
        ingredient: "Mușchiuleț de porc, rozmarin, pătrunjel, pesmet panko, muștar de Dijon",
        pret: 190,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Piept de pui la grătar",
        gramaj: 200,
        ingredient: "Piept de pui dezosat, oregano, lămâie, ulei de măsline",
        pret: 130,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Coaste de porc BBQ",
        gramaj: 450,
        ingredient: "Coaste de porc afumate, sos BBQ de casă, miere, boia dulce",
        pret: 240,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Pulpă de rață confiată",
        gramaj: 230,
        ingredient: "Pulpă de rață, untură de rață, usturoi, cimbrișor, sos de merișoare",
        pret: 230,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Cotlet de berbecuț la grătar",
        gramaj: 280,
        ingredient: "Cotlete de berbecuț, mentă proaspătă, usturoi, ulei de măsline, vin roșu",
        pret: 320,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Burger de vită Wagyu",
        gramaj: 350,
        ingredient: "Carne tocată vită Wagyu, chiflă brioche, brânză Cheddar, bacon crocant, sos special",
        pret: 210,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Șnițel din piept de curcan",
        gramaj: 220,
        ingredient: "Piept de curcan, ou, făină, pesmet, fulgi de porumb",
        pret: 145,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Mici tradiționali la grătar (4 bucăți)",
        gramaj: 320,
        ingredient: "Amestec carne vită și porc, cimbru, usturoi, bicarbonat de sodiu, muștar",
        pret: 110,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Tigaie de pui cu legume",
        gramaj: 350,
        ingredient: "Fâșii din piept de pui, ardei gras, dovlecei, ceapă, usturoi, sos de soia",
        pret: 160,
        img: "/meniu/Carne.png"
      },
      {
        nume: "Costețe de miel la cuptor",
        gramaj: 300,
        ingredient: "Costețe de miel, usturoi, rozmarin, vin alb, cartofi copti",
        pret: 290,
        img: "/meniu/Carne.png"
      }
    ]
  },
  {
    slug: 'pizza',
    titlu: 'Pizza',
    tipuri: [
      {
        nume: "Pizza Margherita",
        gramaj: 450,
        ingredient: "Sos de roșii San Marzano, mozzarella fior di latte, busuioc proaspăt, ulei de măsline extravirgin",
        pret: 135,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Diavola",
        gramaj: 480,
        ingredient: "Sos de roșii, mozzarella, salam picant Ventricina, ardei iute, oregano",
        pret: 165,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Quattro Formaggi",
        gramaj: 500,
        ingredient: "Mozzarella, gorgonzola, parmesan, emmentaler, smântână lichidă",
        pret: 180,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Prosciutto e Funghi",
        gramaj: 520,
        ingredient: "Sos de roșii, mozzarella, șuncă presată, ciuperci fresh, măsline",
        pret: 160,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Capricciosa",
        gramaj: 550,
        ingredient: "Sos de roșii, mozzarella, șuncă, ciuperci, anghinare, măsline negre",
        pret: 170,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Carnivora",
        gramaj: 580,
        ingredient: "Sos de roșii, mozzarella, șuncă, salam, bacon, cârnați, piept de pui",
        pret: 190,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Tonno e Cipolla",
        gramaj: 490,
        ingredient: "Sos de roșii, mozzarella, ton bucăți, ceapă roșie, capere, lămâie",
        pret: 170,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Tartufata",
        gramaj: 470,
        ingredient: "Cremă de trufe, mozzarella, ciuperci porcini, prosciutto crudo, rucola, parmezan",
        pret: 210,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Carbonara",
        gramaj: 500,
        ingredient: "Sos alb de smântână, mozzarella, pancetta, galbenuș de ou, parmezan, piper măcinat",
        pret: 175,
        img: "/meniu/Pizza.png"
      },
      {
        nume: "Pizza Vegetariana",
        gramaj: 480,
        ingredient: "Sos de roșii, mozzarella, dovlecei, ardei gras, porumb, ciuperci, măsline",
        pret: 145,
        img: "/meniu/Pizza.png"
      }
    ]
  },
  {
    slug: 'salata',
    titlu: 'Salată',
    tipuri: [
      {
        nume: "Salată Caesar cu pui",
        gramaj: 350,
        ingredient: "Salată romana, piept de pui la grătar, crutoane, parmezan ras, sos Caesar de casă",
        pret: 150,
        img: "/meniu/Salat.png"
      },
      {
        nume: "Salată Grecească",
        gramaj: 380,
        ingredient: "Roșii, castraveți, ardei gras, ceapă roșie, brânză Feta, măsline Kalamata, oregano, ulei de măsline",
        pret: 135,
        img: "/meniu/Salat.png"
      },
      {
        nume: "Salată cu somon afumat și avocado",
        gramaj: 320,
        ingredient: "Mix de salată verde, somon afumat, avocado, roșii cherry, capere, dressing de lămâie și miere",
        pret: 185,
        img: "/meniu/Salat.png"
      },
      {
        nume: "Salată cu brânză de capră și sfeclă",
        gramaj: 300,
        ingredient: "Rucola, brânză de capră caldă, sfeclă roșie coptă, nucă caramelizată, reducere de oțet balsamic",
        pret: 165,
        img: "/meniu/Salat.png"
      },
      {
        nume: "Salată Caprese",
        gramaj: 280,
        ingredient: "Mozzarella di Bufala, roșii proaspete, sos pesto de busuioc, ulei de măsline, muguri de pin",
        pret: 145,
        img: "/meniu/Salat.png"
      },
      {
        nume: "Salată Vitality cu mușchi de vită",
        gramaj: 340,
        ingredient: "Mix de frunze verzi, fâșii de mușchi de vită la grătar, susan prăjit, ardei copt, sos din soia și ghimbir",
        pret: 200,
        img: "/meniu/Salat.png"
      },
      {
        nume: "Salată cu creveți și fenicul",
        gramaj: 310,
        ingredient: "Mix rucola și valeriană, creveți trași laigaie, fenicul feliat, portocală, dressing de citrice",
        pret: 195,
        img: "/meniu/Salat.png"
      },
      {
        nume: "Salată uscată cu ton",
        gramaj: 360,
        ingredient: "Frunze de salată, ton bucăți, ou fiert, porumb dulce, ceapă roșie, măsline, sos de lămâie",
        pret: 140,
        img: "/meniu/Salat.png"
      }
    ]
  },
  {
    slug: 'pasta',
    titlu: 'Pasta',
    tipuri: [
      {
        nume: "Spaghetti Carbonara",
        gramaj: 380,
        ingredient: "Spaghetti, guanciale, gălbenuș de ou, brânză Pecorino Romano, piper negru proaspăt măcinat",
        pret: 165,
        img: "/meniu/Pasta.png"
      },
      {
        nume: "Penne Bolognese",
        gramaj: 400,
        ingredient: "Penne, ragu din carne tocată de vită și porc, sos de roșii, legume, parmezan",
        pret: 155,
        img: "/meniu/Pasta.png"
      },
      {
        nume: "Tagliatelle cu creveți și dovlecei",
        gramaj: 360,
        ingredient: "Tagliatelle proaspete, creveți, dovlecei, usturoi, vin alb, roșii cherry, pătrunjel",
        pret: 210,
        img: "/meniu/Pasta.png"
      },
      {
        nume: "Penne Quattro Formaggi",
        gramaj: 390,
        ingredient: "Penne, gorgonzola, parmezan, mozzarella, fontina, smântână dulce",
        pret: 175,
        img: "/meniu/Pasta.png"
      },
      {
        nume: "Tagliatelle cu hribi și trufe",
        gramaj: 350,
        ingredient: "Tagliatelle proaspete, hribi de pădure, pastă de trufe negre, unt, usturoi, parmezan",
        pret: 195,
        img: "/meniu/Pasta.png"
      },
      {
        nume: "Spaghetti Arrabbiata",
        gramaj: 350,
        ingredient: "Spaghetti, sos de roșii, usturoi, ardei iute peperoncino, pătrunjel proaspăt",
        pret: 130,
        img: "/meniu/Pasta.png"
      },
      {
        nume: "Lasagna Bolognese",
        gramaj: 420,
        ingredient: "Foi de lasagna de casă, sos ragu de vită, sos bechamel, mozzarella, parmezan la cuptor",
        pret: 180,
        img: "/meniu/Pasta.png"
      },
      {
        nume: "Ravioli cu ricotta și spanac",
        gramaj: 320,
        ingredient: "Ravioli umpluți cu ricotta și spanac, sos de unt și salvie, parmezan ras",
        pret: 160,
        img: "/meniu/Pasta.png"
      }
    ]
  },
  {
    slug: 'supe',
    titlu: 'Supe & Ciorbe',
    tipuri: [
      {
        nume: "Ciorbă rădăuțeană",
        gramaj: 400,
        ingredient: "Piept de pui, smântână, gălbenuș de ou, usturoi, gogoșari murați, oțet",
        pret: 95,
        img: "/meniu/Soup.png"
      },
      {
        nume: "Ciorbă de burtă",
        gramaj: 400,
        ingredient: "Burtă de vită, gogoșari murați, smântână, usturoi, gălbenuș de ou, ardei iute",
        pret: 105,
        img: "/meniu/Soup.png"
      },
      {
        nume: "Supă cremă de ciuperci cu trufe",
        gramaj: 350,
        ingredient: "Mix de ciuperci, ceapă, usturoi, smântână de gătit, ulei de trufe, crutoane",
        pret: 100,
        img: "/meniu/Soup.png"
      },
      {
        nume: "Supă cremă de dovleac",
        gramaj: 350,
        ingredient: "Dovleac plăcintar copt, morcov, ghimbir, lapte de cocos, semințe de dovleac prăjite",
        pret: 90,
        img: "/meniu/Soup.png"
      },
      {
        nume: "Ciorbă de văcuță",
        gramaj: 400,
        ingredient: "Carne de vită, legume de sezon (morcov, țelină, ardei), borș natural, leuștean",
        pret: 95,
        img: "/meniu/Soup.png"
      },
      {
        nume: "Zeamă moldovenească de pui",
        gramaj: 400,
        ingredient: "Carne de pui de casă, tăieței de casă, borș acru, ardei, morcov, leuştean, pătrunjel",
        pret: 85,
        img: "/meniu/Soup.png"
      },
      {
        nume: "Supă cremă de roșii cu busuioc",
        gramaj: 350,
        ingredient: "Roșii coapte, usturoi, ceapă, smântână dulce, pesto de busuioc, crutoane cu usturoi",
        pret: 85,
        img: "/meniu/Soup.png"
      }
    ]
  },
  {
    slug: 'micdejun',
    titlu: 'Mic Dejun',
    tipuri: [
      {
        nume: "Mic Dejun Englezesc (English Breakfast)",
        gramaj: 450,
        ingredient: "Ouă ochiuri, cârnăciori oltenești, bacon crocant, fasole boabe în sos de roșii, ciuperci la grătar, roșie coaptă, pâine prăjită",
        pret: 145,
        img: "/meniu/MicDejun.png"
      },
      {
        nume: "Eggs Benedict cu somon",
        gramaj: 320,
        ingredient: "Ouă poșate, somon afumat, chiflă brioche, sos Olandez, vlăstari proaspeți",
        pret: 160,
        img: "/meniu/MicDejun.png"
      },
      {
        nume: "Omletă țărănească",
        gramaj: 300,
        ingredient: "3 ouă, bacon, ardei gras, ceapă, ciuperci, brânză telemea, pătrunjel",
        pret: 110,
        img: "/meniu/MicDejun.png"
      },
      {
        nume: "Avocado Toast cu ou poșat",
        gramaj: 280,
        ingredient: "Pâine maia prăjită, piure de avocado, ou poșat, roșii cherry, semințe de susan și chia",
        pret: 130,
        img: "/meniu/MicDejun.png"
      },
      {
        nume: "Pancakes cu sirop de arțar și fructe de pădure",
        gramaj: 250,
        ingredient: "Clătite americane pufoase, sirop de arțar, afine, zmeură, zahăr pudră",
        pret: 105,
        img: "/meniu/MicDejun.png"
      },
      {
        nume: "Syrniki cu smântână și dulceață",
        gramaj: 280,
        ingredient: "Pancakes din brânză dulce de vaci, smântână proaspătă, dulceață de vișine",
        pret: 115,
        img: "/meniu/MicDejun.png"
      },
      {
        nume: "Granola cu iaurt grecesc și miere",
        gramaj: 220,
        ingredient: "Granola crocantă cu nuci, iaurt grecesc 10%, miere de albine, fructe proaspete de sezon",
        pret: 95,
        img: "/meniu/MicDejun.png"
      }
    ]
  }
];
const CategorieMeniuPage = () => {

  useGSAP(() => {
    const title = new SplitText(".title", { type: 'words,chars' });

    const tl = gsap.timeline();

    tl.from(title.chars, {
      yPercent: 100,
      autoAlpha: 0,

      ease: "expo.out",
      stagger: 0.02
    }).fromTo(
      ".card",
      { yPercent: 40, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 0.1, ease: "expo.out", stagger: 0.08 },
      "-=0.3"
    );
  });

  const params = useParams()
  const categorie = meniu.find((item) => item.slug === params.slug)

  if (!categorie) {
    return (
      <section className='col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[20px] py-[50px]'>
        <h1 className='text-center text-white text-[32px] font-serif-inria my-auto'>
          Categoria nu a fost găsită.
        </h1>
      </section>
    )
  }

  return (
    <section className='col-center principal-gradient w-full min-w-[375px] min-h-[95dvh] px-[15px] sm:px-[20px] py-[50px]'>
      <h1 className='title text-center text-white text-[42px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-serif-inria mb-8 sm:mb-12 tracking-wide'>
        {categorie.titlu}
      </h1>

      <div className="w-full max-w-[1200px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {categorie.tipuri.map((preparat) => (
          <div
            key={preparat.nume}
            className='card group col-center w-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg p-4'
          >
            <div className='relative w-full h-[180px] sm:h-[200px] rounded-xl overflow-hidden mb-4 bg-slate-900/40'>
              <img
                src={preparat.img}
                alt={preparat.nume}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute bottom-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium shadow-md'>

                <span>{preparat.gramaj}g</span>
              </div>
            </div>

            <h3 className='preparatNume text-xl text-center font-semibold tracking-wide text-white/90 group-hover:text-white mb-2 leading-tight min-h-[48px] flex items-center'>
              {preparat.nume}
            </h3>

            <div className='flex flex-col sm:flex-row items-end justify-between gap-3 mt-auto pt-2 border-t  border-white/10'>
              <p className='text-xs text-slate-300 line-clamp-3 leading-relaxed flex-1 text-center'>
                {preparat.ingredient}
              </p>

              <div className='mx-auto shrink-0 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl text-white font-bold text-base sm:text-lg tracking-wider text-center group-hover:bg-white/20 transition-colors'>
                {preparat.pret} <span className='text-xs font-normal text-white/80'>LEI</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorieMeniuPage