import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/Logo.png'

const Footer = () => {
    return (
        <footer className="min-w-[375px] w-full bg-[#131313] text-white border-t border-white/10 mt-auto">
            <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 py-12 grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center text-center">

                <div className="flex flex-col items-center gap-4">
                    <Link href="/" className="relative w-12 h-12">
                        <Image
                            src={logoImg}
                            alt="logo"
                            fill
                            className="object-cover"
                        />
                    </Link>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-[280px]">
                        Loughi &ndash; unde fiecare masă devine o experiență de neuitat.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-3 font-serif-playfair text-sm">
                    <span className="text-slate-400 uppercase tracking-wider text-xs mb-1">Navigare</span>
                    <Link href="/meniu" className="hover:text-slate-300 transition-colors">Meniu</Link>
                    <Link href="/programari" className="hover:text-slate-300 transition-colors">Programari</Link>
                    <Link href="/recenzii" className="hover:text-slate-300 transition-colors">Recenzii</Link>
                    <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
                </div>


                <div className="col-center col-span-2 sm:col-span-1 gap-3  font-serif-playfair text-sm text-slate-300 ">
                    <span className="text-slate-400 uppercase tracking-wider text-xs mb-1">Contact</span>
                    <span>Str. Exemplu nr. 10, Chișinău</span>
                    <span>+373 60 000 000</span>
                    <span>contact@loughi.com</span>
                </div>

            </div>

            <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} Loughi. Toate drepturile rezervate.
            </div>
        </footer>
    )
}

export default Footer