// Navigation item type definition
export interface NavItem {
	name: string;
	link?: string;
	dropdown?: {
		title?: string;
		items: {
			name: string;
			link: string;
			description?: string;
			icon?: string;
		}[];
	};
}

export const navItems: NavItem[] = [
	{
		name: "Home",
		link: "/"
	},
	{
		name: "About Us",
		dropdown: {
			title: "Learn About Our School",
			items: [
				{
					name: "About JPS",
					link: "/AboutUs",
					description: "Our history, mission & vision"
				},
				{
					name: "Why Choose Us",
					link: "/#whychooseus",
					description: "What makes us special"
				},
				{
					name: "School Brochure",
					link: "/schoolBroucher",
					description: "Download our official brochure"
				},
				{
					name: "FAQ",
					link: "/faq",
					description: "Frequently asked questions"
				}
			]
		}
	},
	{
		name: "Admission",
		dropdown: {
			title: "Join Our School Family",
			items: [
				{
					name: "Admission Process",
					link: "/Admission",
					description: "How to apply & requirements"
				},
				{
					name: "Admission Requirements",
					link: "/admission-requirements",
					description: "Documents & eligibility"
				},
				{
					name: "Fee Structure",
					link: "/fee-structure",
					description: "Transparent fee details"
				},
				{
					name: "Scholarship",
					link: "/scholarship",
					description: "Financial assistance programs"
				}
			]
		}
	},
	{
		name: "Academics",
		dropdown: {
			title: "Our Educational Programs",
			items: [
				{
					name: "Curriculum",
					link: "/curriculum",
					description: "JAC Board aligned curriculum"
				},
				{
					name: "Nursery Program",
					link: "/nursery",
					description: "Early childhood education"
				},
				{
					name: "Primary Education",
					link: "/primary",
					description: "Classes 1-8 programs"
				},
				{
					name: "Teachers",
					link: "/teachers",
					description: "Our qualified and experienced faculty members"
				},
				{
					name: "Activities",
					link: "/activities",
					description: "Co-curricular activities"
				}
			]
		}
	},
	{
		name: "Student Life",
		dropdown: {
			title: "Campus Life & Support",
			items: [
				{
					name: "Gallery",
					link: "/gallery",
					description: "School photos & events"
				},
				{
					name: "Calendar",
					link: "/calendar",
					description: "Academic calendar & events"
				},
				{
					name: "Transport",
					link: "/transport",
					description: "School bus services"
				},
				{
					name: "Safety",
					link: "/safety",
					description: "Student safety measures"
				}
			]
		}
	},
	{
		name: "Parents",
		dropdown: {
			title: "Parent Resources",
			items: [
				{
					name: "Parent Portal",
					link: "/parent-portal",
					description: "Access student information"
				},
				{
					name: "Testimonials",
					link: "/#testimonials",
					description: "What parents say about us"
				},
				{
					name: "Sitemap",
					link: "/sitemap",
					description: "Navigate our website"
				}
			]
		}
	},
];
