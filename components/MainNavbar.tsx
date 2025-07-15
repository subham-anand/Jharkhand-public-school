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
import { IconPhoneCall } from "@tabler/icons-react";
import { useState } from "react";

export function MainNavbar() {


	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="relative w-full">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4">
						<NavbarButton
							variant="gradient"
							className="flex items-center justify-center gap-x-1 flex-nowrap"
						>
							<IconPhoneCall size={20} /> Contact Now
						</NavbarButton>
						{/* <NavbarButton variant="primary">Book a call</NavbarButton> */}
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
							>
								<span className="block">{item.name}</span>
							</a>
						))}
						<div className="flex w-full flex-col gap-4">
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="gradient"
								className="w-full flex items-center justify-center gap-x-1 flex-nowrap"
							>
								<IconPhoneCall size={20} /> Contact Now
							</NavbarButton>
							{/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton> */}
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
			{/*  */}
			{/* Navbar */}
		</div>
	);
}
