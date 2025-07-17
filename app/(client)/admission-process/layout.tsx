import React from "react";
import { Metadata } from "next";
import { MainNavbar } from "@/components/MyComponents/MainNavbar";
import MainFooter from "@/components/MyComponents/MainFooter";

export const metadata: Metadata = {
	title: "Admission Process - Jharkhand Public School | Step-by-Step Guide",
	description:
		"Complete guide to admission process at Jharkhand Public School, Barharwa. Visit our office, take eligibility test, submit documents and secure your child's future with us.",
	keywords: [
		"admission process",
		"Jharkhand Public School admission",
		"school enrollment",
		"Barharwa school admission",
		"JAC board admission",
		"primary school admission",
		"nursery admission",
		"class eligibility test",
		"school documents required",
		"offline admission",
		"visit school office",
		"admission requirements",
		"Sahibganj school",
		"Hindi medium school",
		"quality education admission",
	],
	openGraph: {
		title: "Admission Process - Jharkhand Public School",
		description:
			"Step-by-step guide to join Jharkhand Public School. Visit office, take test, submit documents and secure admission.",
		url: "https://www.jpsbarharwa.in/admission-process",
		siteName: "Jharkhand Public School",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Jharkhand Public School Admission Process",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Admission Process - Jharkhand Public School",
		description:
			"Complete guide to admission process. Visit office, take test, submit documents.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://www.jpsbarharwa.in/admission-process",
	},
};

export default function AdmissionProcessLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<MainNavbar />
			{children}
			<MainFooter />
		</>
	);
}
