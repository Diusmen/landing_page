import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <div className="text-2xl font-bold tracking-tight font-sans text-luxury-black mb-2">Lawan.</div>
                    <p className="text-gray-500 text-sm">Expert en stratégie et production vidéo pour infopreneurs.</p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-gray-600">
                    <a href="#" className="hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-black transition-colors">YouTube</a>
                    <a href="mailto:contact@lawan.com" className="hover:text-black transition-colors">Contact</a>
                </div>

                <div className="text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Lawan. Tous droits réservés.</p>
                    <div className="flex gap-4 mt-2 justify-center md:justify-end">
                        <a href="#" className="hover:text-gray-600">Mentions Légales</a>
                        <a href="#" className="hover:text-gray-600">CGV</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
