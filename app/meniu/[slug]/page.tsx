'use client'

import React from 'react'
import { useParams } from 'next/navigation'


export interface Preparat {
  nume: string;
  gramaj: number; // în grame / ml
  ingredient: string;
  pret: number; // în RON
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
        pret: 95,
        img: "/meniu/steak-vita-ribeye.jpg"
      },
      {
        nume: "Ceafă de porc la grătar",
        gramaj: 250,
        ingredient: "Ceafă de porc marinată, cimbru uscat, usturoi, ulei de măsline",
        pret: 38,
        img: "/meniu/ceafa-porc.jpg"
      },
      {
        nume: "Mușchiuleț de porc în crustă de ierburi",
        gramaj: 220,
        ingredient: "Mușchiuleț de porc, rozmarin, pătrunjel, pesmet panko, muștar de Dijon",
        pret: 48,
        img: "/meniu/muschiulet-porc.jpg"
      },
      {
        nume: "Piept de pui la grătar",
        gramaj: 200,
        ingredient: "Piept de pui dezosat, oregano, lămâie, ulei de măsline",
        pret: 32,
        img: "/meniu/piept-pui.jpg"
      },
      {
        nume: "Coaste de porc BBQ",
        gramaj: 450,
        ingredient: "Coaste de porc afumate, sos BBQ de casă, miere, boia dulce",
        pret: 62,
        img: "/meniu/coaste-bbq.jpg"
      },
      {
        nume: "Pulpă de rață confiată",
        gramaj: 230,
        ingredient: "Pulpă de rață, untură de rață, usturoi, cimbrișor, sos de merișoare",
        pret: 58,
        img: "/meniu/pulpa-rata.jpg"
      },
      {
        nume: "Cotlet de berbecuț la grătar",
        gramaj: 280,
        ingredient: "Cotlete de berbecuț, mentă proaspătă, usturoi, ulei de măsline, vin roșu",
        pret: 82,
        img: "/meniu/cotlet-berbecut.jpg"
      },
      {
        nume: "Burger de vită Wagyu",
        gramaj: 350,
        ingredient: "Carne tocată vită Wagyu, chiflă brioche, brânză Cheddar, bacon crocant, sos special",
        pret: 54,
        img: "/meniu/burger-wagyu.jpg"
      },
      {
        nume: "Șnițel din piept de curcan",
        gramaj: 220,
        ingredient: "Piept de curcan, ou, făină, pesmet, fulgi de porumb",
        pret: 36,
        img: "/meniu/snitel-curcan.jpg"
      },
      {
        nume: "Mici tradiționali la grătar (4 bucăți)",
        gramaj: 320,
        ingredient: "Amestec carne vită și porc, cimbru, usturoi, bicarbonat de sodiu, muștar",
        pret: 28,
        img: "/meniu/mici-gratar.jpg"
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
        pret: 36,
        img: "/meniu/pizza-margherita.jpg"
      },
      {
        nume: "Pizza Diavola",
        gramaj: 480,
        ingredient: "Sos de roșii, mozzarella, salam picant Ventricina, ardei iute, oregano",
        pret: 42,
        img: "/meniu/pizza-diavola.jpg"
      },
      {
        nume: "Pizza Quattro Formaggi",
        gramaj: 500,
        ingredient: "Mozzarella, gorgonzola, parmesan, emmentaler, smântână lichidă",
        pret: 46,
        img: "/meniu/pizza-quattro-formaggi.jpg"
      },
      {
        nume: "Pizza Prosciutto e Funghi",
        gramaj: 520,
        ingredient: "Sos de roșii, mozzarella, șuncă presată, ciuperci fresh, măsline",
        pret: 41,
        img: "/meniu/pizza-prosciutto-funghi.jpg"
      },
      {
        nume: "Pizza Capricciosa",
        gramaj: 550,
        ingredient: "Sos de roșii, mozzarella, șuncă, ciuperci, anghinare, măsline negre",
        pret: 44,
        img: "/meniu/pizza-capricciosa.jpg"
      },
      {
        nume: "Pizza Carnivora",
        gramaj: 580,
        ingredient: "Sos de roșii, mozzarella, șuncă, salam, bacon, cârnați, piept de pui",
        pret: 48,
        img: "/meniu/pizza-carnivora.jpg"
      },
      {
        nume: "Pizza Tonno e Cipolla",
        gramaj: 490,
        ingredient: "Sos de roșii, mozzarella, ton bucăți, ceapă roșie, capere, lămâie",
        pret: 43,
        img: "/meniu/pizza-tonno.jpg"
      },
      {
        nume: "Pizza Tartufata",
        gramaj: 470,
        ingredient: "Cremă de trufe, mozzarella, ciuperci porcini, prosciuto crudo, rucola, parmezan",
        pret: 52,
        img: "/meniu/pizza-tartufata.jpg"
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
        pret: 39,
        img: "/meniu/salata-caesar.jpg"
      },
      {
        nume: "Salată Grecească",
        gramaj: 380,
        ingredient: "Roșii, castraveți, ardei gras, ceapă roșie, brânză Feta, măsline Kalamata, oregano, ulei de măsline",
        pret: 35,
        img: "/meniu/salata-greceasca.jpg"
      },
      {
        nume: "Salată cu somon afumat și avocada",
        gramaj: 320,
        ingredient: "Mix de salată verde, somon afumat, avocado, roșii cherry, capere, dressing de lămâie și miere",
        pret: 47,
        img: "/meniu/salata-somon-avocado.jpg"
      },
      {
        nume: "Salată cu brânză de capră și sfeclă",
        gramaj: 300,
        ingredient: "Rucola, brânză de capră caldă, sfeclă roșie coptă, nucă caramelizată, reducere de oțet balsamic",
        pret: 42,
        img: "/meniu/salata-branza-capra.jpg"
      },
      {
        nume: "Salată Caprese",
        gramaj: 280,
        ingredient: "Mozzarella di Bufala, roșii proaspete, sos pesto de busuioc, ulei de măsline, muguri de pin",
        pret: 38,
        img: "/meniu/salata-caprese.jpg"
      },
      {
        nume: "Salată Vitality cu mușchi de vită",
        gramaj: 340,
        ingredient: "Mix de frunze verzi, fâșii de mușchi de vită la grătar, susan prajit, ardei copt, sos din soia și ghimbir",
        pret: 52,
        img: "/meniu/salata-vita.jpg"
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
        pret: 42,
        img: "/meniu/spaghetti-carbonara.jpg"
      },
      {
        nume: "Penne Bolognese",
        gramaj: 400,
        ingredient: "Penne, ragu din carne tocată de vită și porc, sos de roșii, legume, parmezan",
        pret: 39,
        img: "/meniu/penne-bolognese.jpg"
      },
      {
        nume: "Tagliatelle cu creveți și dovlecei",
        gramaj: 360,
        ingredient: "Tagliatelle proaspete, creveți, dovlecei, usturoi, vin alb, roșii cherry, pătrunjel",
        pret: 54,
        img: "/meniu/tagliatelle-creveti.jpg"
      },
      {
        nume: "Penne Quattro Formaggi",
        gramaj: 390,
        ingredient: "Penne, gorgonzola, parmezan, mozzarella, fontina, smântână dulce",
        pret: 44,
        img: "/meniu/penne-quattro-formaggi.jpg"
      },
      {
        nume: "Tagliatelle cu hribi și trufe",
        gramaj: 350,
        ingredient: "Tagliatelle proaspete, hribi de pădure, pastă de trufe negre, unt, usturoi, parmezan",
        pret: 49,
        img: "/meniu/tagliatelle-trufe.jpg"
      },
      {
        nume: "Spaghetti Arrabbiata",
        gramaj: 350,
        ingredient: "Spaghetti, sos de roșii, usturoi, ardei iute peperoncino, pătrunjel proaspăt",
        pret: 34,
        img: "/meniu/spaghetti-arrabbiata.jpg"
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
        pret: 26,
        img: "/meniu/ciorba-radauteana.jpg"
      },
      {
        nume: "Ciorbă de burtă",
        gramaj: 400,
        ingredient: "Burtă de vită, gogoșari murați, smântână, usturoi, gălbenuș de ou, ardei iute",
        pret: 28,
        img: "/meniu/ciorba-burta.jpg"
      },
      {
        nume: "Supa cremă de ciuperci cu trufe",
        gramaj: 350,
        ingredient: "Mix de ciuperci, ceapă, usturoi, smântână de gătit, ulei de trufe, crutoane",
        pret: 27,
        img: "/meniu/supa-crema-ciuperci.jpg"
      },
      {
        nume: "Supa cremă de dovleac",
        gramaj: 350,
        ingredient: "Dovleac plăcintar copt, morcov, ghimbir, lapte de cocos, semințe de dovleac prăjite",
        pret: 25,
        img: "/meniu/supa-crema-dovleac.jpg"
      },
      {
        nume: "Ciorbă de văcuță",
        gramaj: 400,
        ingredient: "Carne de vită, legume de sezon (morcov, țelină, ardei), borș natural, leștean",
        pret: 26,
        img: "/meniu/ciorba-vacuta.jpg"
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
        pret: 38,
        img: "/meniu/english-breakfast.jpg"
      },
      {
        nume: "Eggs Benedict cu somon",
        gramaj: 320,
        ingredient: "Ouă poșate, somon afumat, chiflă brioche, sos Olandez, vlăstari proaspeți",
        pret: 42,
        img: "/meniu/eggs-benedict.jpg"
      },
      {
        nume: "Omletă țărănească",
        gramaj: 300,
        ingredient: "3 ouă, bacon, ardei gras, ceapă, ciuperci, brânză telemea, pătrunjel",
        pret: 29,
        img: "/meniu/omleta-taraneasca.jpg"
      },
      {
        nume: "Avocado Toast cu ou poșat",
        gramaj: 280,
        ingredient: "Pâine maia prăjită, piure de avocado, ou poșat, roșii cherry, semințe de susan și chia",
        pret: 34,
        img: "/meniu/avocado-toast.jpg"
      },
      {
        nume: "Pancakes cu sirop de arțar și fructe de pădure",
        gramaj: 250,
        ingredient: "Clătite americane pufose, sirop de arțar, afine, zmeură, zahăr pudră",
        pret: 28,
        img: "/meniu/pancakes.jpg"
      }
    ]
  }
];

const CategorieMeniuPage = () => {
  const params = useParams()

  // console.log("params")
  // console.log(params)
  // console.log("params slug")
  // console.log(params.slug)

  



  return (
    <div>
      Categoria aleasa este: {params.slug}
    </div>
  )
}

export default CategorieMeniuPage