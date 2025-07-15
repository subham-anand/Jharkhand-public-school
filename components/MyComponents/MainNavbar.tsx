"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/utils/navItems";
import { IconPhoneCall, IconMail, IconMapPin, IconClock, IconStar} from "@tabler/icons-react";
import { useState, useEffect } from "react";

export function MainNavbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll effect for navbar background
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="relative w-full">
			{/* Top Info Bar */}
			<div className="hidden lg:block bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 text-white py-2">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between text-sm">
						{/* Left Info */}
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<IconMapPin size={16} />
								<span>Thana road, Barharwa, Sahibganj, Jharkhand, 816101</span>
							</div>
							<div className="flex items-center gap-2">
								<IconClock size={16} />
								<span>Mon - Sat: 8:00 AM - 2:00 PM</span>
							</div>
						</div>
						
						{/* Right Contact */}
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<IconPhoneCall size={16} />
								<a href="tel:+918541061847" className="hover:text-yellow-200 transition-colors">
									+91 8541061847
								</a>
							</div>
							<div className="flex items-center gap-2">
								<IconMail size={16} />
								<a href="mailto:contact@jpsbarharwa.in" className="hover:text-yellow-200 transition-colors">
									contact@jpsbarharwa.in
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Navbar */}
			<div className={`sticky top-0 z-50 transition-all duration-300 ${
				isScrolled 
					? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
					: 'bg-white shadow-sm'
			}`}>
				<Navbar>
					{/* Desktop Navigation */}
					<NavBody>
						{/* Enhanced Logo Section */}
						<div className="flex items-center gap-3">
							<NavbarLogo />
							<div className="hidden sm:block">
								<div className="flex flex-col">
									{/* <span className="text-lg font-bold text-gray-900">JPS</span> */}
									<div className="flex items-center gap-1">
										<IconStar size={12} className="text-yellow-400 fill-yellow-400" />
										<span className="text-xs text-gray-600">Since 2010</span>
									</div>
								</div>
							</div>
						</div>

						{/* Navigation Items with Enhanced Styling */}
						<div className="hidden lg:flex">
							<NavItems items={navItems} />
						</div>

						{/* Action Buttons */}
						<div className="flex items-center gap-3">
							{/* Admission Status Badge */}
							<div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium">
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
								<span>Admissions Open</span>
							</div>

							{/* Contact Button */}
							<NavbarButton
								variant="gradient"
								className="flex items-center justify-center gap-x-2 px-4 py-2 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
							>
								<IconPhoneCall size={18} />
								<span className="hidden sm:inline">Contact Now</span>
							</NavbarButton>

							{/* Emergency Contact (Desktop Only) */}
							{/* <div className="hidden xl:flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded-xl text-red-700">
								<IconShield size={16} />
								<div className="text-xs">
									<div className="font-semibold">Emergency</div>
									<div>+91 8541061847</div>
								</div>
							</div> */}
						</div>
					</NavBody>

					{/* Enhanced Mobile Navigation */}
					<MobileNav>
						<MobileNavHeader>
							{/* Mobile Logo with Info */}
							<div className="flex items-center gap-2">
								<NavbarLogo />
								<div className="flex flex-col">
									<span className="text-base font-bold text-gray-900">JPS</span>
									<span className="text-xs text-gray-600">Est. 2010</span>
								</div>
							</div>
							
							<MobileNavToggle
								isOpen={isMobileMenuOpen}
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							/>
						</MobileNavHeader>

						<MobileNavMenu
							isOpen={isMobileMenuOpen}
							onClose={() => setIsMobileMenuOpen(false)}
						>
							{/* Mobile Contact Info */}
							<div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg mb-4">
								<div className="flex items-center gap-2 text-sm text-blue-700 mb-2">
									<IconPhoneCall size={16} />
									<a href="tel:+918541061847">+91 8541061847</a>
								</div>
								<div className="flex items-center gap-2 text-sm text-blue-700">
									<IconMail size={16} />
									<a href="mailto:contact@jpsbarharwa.in">contact@jpsbarharwa.in</a>
								</div>
							</div>

							{/* Admission Status for Mobile */}
							<div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium mb-4">
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
								<span>🎓 Admissions Open 2025-26</span>
							</div>

							{/* Navigation Links */}
							<div className="space-y-2 mb-6">
								{navItems.map((item, idx) => (
									<a
										key={`mobile-link-${idx}`}
										href={item.link}
										onClick={() => setIsMobileMenuOpen(false)}
										className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
									>
										<span className="font-medium">{item.name}</span>
										<span className="text-gray-400 group-hover:text-blue-600 transition-colors">→</span>
									</a>
								))}
							</div>

							{/* Mobile Action Buttons */}
							<div className="flex flex-col gap-3">
								<NavbarButton
									onClick={() => setIsMobileMenuOpen(false)}
									variant="gradient"
									className="w-full flex items-center justify-center gap-x-2 py-3 font-semibold rounded-xl shadow-lg"
								>
									<IconPhoneCall size={18} />
									Contact Now
								</NavbarButton>

								{/* Quick Actions */}
								<div className="grid grid-cols-2 gap-3">
									<button
										onClick={() => setIsMobileMenuOpen(false)}
										className="flex flex-col items-center gap-1 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors"
									>
										<IconMapPin size={20} />
										<span className="text-xs font-medium">Visit Us</span>
									</button>
									<button
										onClick={() => setIsMobileMenuOpen(false)}
										className="flex flex-col items-center gap-1 px-4 py-3 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors"
									>
										<IconStar size={20} />
										<span className="text-xs font-medium">Apply Now</span>
									</button>
								</div>
							</div>

							{/* Mobile Footer Info */}
							<div className="mt-6 pt-4 border-t border-gray-200 text-center">
								<p className="text-xs text-gray-500">
									🌟 Educating with Heart Since 2010
								</p>
								<p className="text-xs text-gray-400 mt-1">
									Mon - Sat: 8:00 AM - 2:00 PM
								</p>
							</div>
						</MobileNavMenu>
					</MobileNav>
				</Navbar>
			</div>
		</div>
	);
}
