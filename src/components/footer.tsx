import { footerLinks } from "@/constants";
import { Instagram, Linkedin, Mail, MapPin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import ReportsDropdown from "./annual-report";

export const socialLinks = [
  {
    label: "X (formerly Twitter)",
    href: "https://x.com/mici_org",
    ariaLabel: "X",
    className: "x-link",
    icon: (
      <Twitter />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mici_org/",
    ariaLabel: "Instagram",
    className: "ig-link",
    icon: (
      <Instagram />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mikaelson-initiative/",
    ariaLabel: "LinkedIn",
    className: "li-link",
    icon: (
      <Linkedin />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheMikaelsonCommunity",
    ariaLabel: "YouTube",
    className: "yt-link",
    icon: (
      <Youtube />
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="pt-10 mt-5 pb-5 px-5 border-t">
      <div className="max-w-7xl mx-auto">
        {/* header 
        <div className="w-full max-w-sm py-10 mx-auto space-y-4 text-center">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/mikaelsonlogo.png"
              alt="mikaelinitiativelogo"
              width={50}
              height={50}
            />
            <h1 className="font-extrabold text-2xl">Mikaelson Initiative</h1>
          </div>
          <p className="">
            Elevating humanity through technology and community.
          </p>
        </div> */}

        {/* other links */}
        <div className="mx-auto py-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:flex md:place-content-center">
            <div className="footer-nav nav-section">
              <div className="max-w-80 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/mikaelsonlogo.png"
                    alt="mikaelinitiativelogo"
                    width={50}
                    height={50}
                  />
                  <h1 className="font-extrabold text-xl">Mikaelson Initiative</h1>
                </div>
                <p className="text-sm">
                  Elevating humanity through technology and community.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:mikaelsoninitiative@gmail.com" className="flex flex-row items-center gap-2 hover:text-blue-400">
                    <Mail className="text-2xl" />
                    <span className="text-sm">mikaelsoninitiative@gmail.com</span>
                  </a>
                  <a href="mailto:mikaelsoninitiative@gmail.com" className="flex flex-row items-center gap-2 hover:text-blue-400">
                    <MapPin className="text-2xl" />
                    <span className="text-sm">Location here</span>
                  </a>
                </div>
              </div>
            </div>
            {footerLinks.map((section) => (
              <div key={section.section} className="footer-nav nav-section">
                <h3 className="mb-2 font-extrabold text-lg">
                  {section.section}
                </h3>
                <nav className="flex flex-col gap-2 text-sm text-gray-700">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-blue-500"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
            <div className="social-links flex flex-col col-span-2 md:col-span-1 items-center gap-4">
              <h1 className="font-extrabold text-lg">Connect With Us</h1>
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    target="_blank"
                    rel="noreferrer"
                    title={item.label}
                    aria-label={item.ariaLabel}
                    href={item.href}
                    className={`${item.className} hover:opacity-80 transition text-2xl`}
                  >
                    <div className="bg-brand-bg-color p-4 rounded-full">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
              {/* <ReportsDropdown /> */}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center mt-5">
        © 2025 Mikaelson Initiative. All rights reserved.
      </p>
    </footer>
  );
};
