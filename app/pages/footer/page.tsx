export default function Footer() {
    return (
        <footer className="bg-[#373e51] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-[#ff6219] mb-4">ForgeTech</div>
              <p className="text-gray-300 mb-4">Leading ICT solutions provider in East Africa, delivering reliable technology infrastructure and support.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#ff6219] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ff6219] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#ff6219] transition-colors">ICT Consultancy</a></li>
                <li><a href="#" className="hover:text-[#ff6219] transition-colors">Networking</a></li>
                <li><a href="#" className="hover:text-[#ff6219] transition-colors">Security Systems</a></li>
                <li><a href="#" className="hover:text-[#ff6219] transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-[#ff6219] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[#ff6219] transition-colors">Our Services</a></li>
                <li><a href="#contact" className="hover:text-[#ff6219] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#ff6219] transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Arusha, Tanzania</li>
                <li>+255 XXX XXX XXX</li>
                <li>info@forgetech.co.tz</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 ForgeTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );

}