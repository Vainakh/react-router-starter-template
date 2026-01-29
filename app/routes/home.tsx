import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "SkyView Aerial - Professional Drone Real Estate Photography & Videography" },
		{ name: "description", content: "Elevate your real estate listings with stunning aerial photography and videography. Professional drone services for realtors and property developers." },
	];
}

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								SkyView Aerial
							</div>
						</div>
						<div className="hidden md:flex space-x-8">
							<a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
							<a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
							<a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
							<a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
						</div>
						<a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
							Get Quote
						</a>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center">
						<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
							Capture Your Property from
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> New Heights</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
							Professional drone photography and videography services that showcase your real estate listings like never before
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1">
								Book a Shoot
							</a>
							<a href="#portfolio" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 transition-all">
								View Portfolio
							</a>
						</div>
					</div>
					
					{/* Hero Image Placeholder */}
					<div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
						<div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
							<div className="text-white text-center p-8">
								<svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<p className="text-xl font-semibold">Aerial Property Showcase</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Comprehensive aerial solutions tailored for real estate professionals
						</p>
					</div>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Aerial Photography</h3>
							<p className="text-gray-600 mb-4">
								High-resolution aerial photos that capture your property's best angles and showcase its full potential.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								4K Resolution
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Color Grading
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Fast Turnaround
								</li>
							</ul>
						</div>

						<div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Aerial Videography</h3>
							<p className="text-gray-600 mb-4">
								Cinematic video tours that tell your property's story and create an emotional connection with potential buyers.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Cinematic Quality
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Music & Voiceover
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Social Media Ready
								</li>
							</ul>
						</div>

						<div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
							<div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">360° Virtual Tours</h3>
							<p className="text-gray-600 mb-4">
								Immersive virtual tours that let potential buyers explore your property from anywhere in the world.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Interactive Experience
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Embeddable
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									Mobile Optimized
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Professional equipment, licensed pilots, and unmatched expertise
						</p>
					</div>
					
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">FAA Licensed</h3>
							<p className="text-gray-600">Fully certified and insured pilots with Part 107 licenses</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
							<p className="text-gray-600">Same-day or next-day delivery for most projects</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">4K Equipment</h3>
							<p className="text-gray-600">Professional-grade cameras and stabilization systems</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">Expert Editing</h3>
							<p className="text-gray-600">Professional post-production and color grading</p>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							See how we've helped showcase properties across the region
						</p>
					</div>
					
					<div className="grid md:grid-cols-3 gap-6">
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
								<div className={`w-full h-full bg-gradient-to-br ${
									i % 3 === 0 ? 'from-blue-500 to-purple-500' :
									i % 3 === 1 ? 'from-purple-500 to-pink-500' :
									'from-pink-500 to-orange-500'
								} flex items-center justify-center`}>
									<div className="text-white text-center p-4">
										<svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<p className="font-semibold">Property {i}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8 text-center text-white">
						<div>
							<div className="text-5xl font-bold mb-2">500+</div>
							<div className="text-xl opacity-90">Properties Shot</div>
						</div>
						<div>
							<div className="text-5xl font-bold mb-2">98%</div>
							<div className="text-xl opacity-90">Client Satisfaction</div>
						</div>
						<div>
							<div className="text-5xl font-bold mb-2">24hr</div>
							<div className="text-xl opacity-90">Avg. Turnaround</div>
						</div>
						<div>
							<div className="text-5xl font-bold mb-2">5★</div>
							<div className="text-xl opacity-90">Average Rating</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Your Quote</h2>
						<p className="text-xl text-gray-600">
							Ready to elevate your property listings? Let's discuss your project
						</p>
					</div>
					
					<div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
						<form className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
									<input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your name" />
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
									<input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="your@email.com" />
								</div>
							</div>
							<div>
								<label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
								<input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="(555) 123-4567" />
							</div>
							<div>
								<label htmlFor="property-type" className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
								<select id="property-type" name="property-type" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent">
									<option>Residential Home</option>
									<option>Commercial Property</option>
									<option>Land/Development</option>
									<option>Luxury Estate</option>
									<option>Other</option>
								</select>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
								<textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tell us about your property and what you need..."></textarea>
							</div>
							<button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1">
								Request Quote
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						<div>
							<div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
								SkyView Aerial
							</div>
							<p className="text-gray-400">
								Professional drone services for real estate professionals.
							</p>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Services</h4>
							<ul className="space-y-2 text-gray-400">
								<li><a href="#services" className="hover:text-white transition-colors">Aerial Photography</a></li>
								<li><a href="#services" className="hover:text-white transition-colors">Aerial Videography</a></li>
								<li><a href="#services" className="hover:text-white transition-colors">360° Tours</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-gray-400">
								<li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
								<li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
								<li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Contact</h4>
							<ul className="space-y-2 text-gray-400">
								<li>hello@skyviewaerial.com</li>
								<li>(555) 123-4567</li>
								<li>Mon-Fri: 8am-6pm</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-800 pt-8 text-center text-gray-400">
						<p>&copy; 2024 SkyView Aerial. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
