"use client";
import React from "react";

export const HowToPartner: React.FC = () => {
  return (
    <section
      className="how-to-partner"
      style={{
        padding: "4rem 1rem",
        backgroundColor: "#eef2ff",
        textAlign: "center",
      }}
    >
      <h2 className="text-2xl md:text-[2rem] font-bold mb-2 md:mb-3">
        How to Partner with Us
      </h2>
      <ol
        className="space-y-2"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "left",
          fontSize: "1.1rem",
          lineHeight: 1.6,
        }}
      >
        <li className=" text-base md:text-lg">
          Contact us at{" "}
          <a href="mailto:community@mikaelsoninitiative.org">
            community@mikaelsoninitiative.org
          </a>
        </li>
        <li className=" text-sm md:text-lg">
          Discuss partnership opportunities tailored to your organization.
        </li>
        <li className=" text-sm md:text-lg">
          Select a partnership package and sign the agreement.
        </li>
        <li className=" text-sm md:text-lg">
          Collaborate on programs and monitor impact together.
        </li>
      </ol>
    </section>
  );
};
