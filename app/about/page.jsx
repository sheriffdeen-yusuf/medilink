import React from "react";
import image1 from "../public/bg.png";
import image2 from "../public/pic1.png";

import Image from "next/image";

export const metadata = {
  title: "About MediLink",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to MediLink
        </h1>

        <div className="space-y-8">
          <p>
            At MediLink, we bridge the gap between patients and healthcare
            professionals through our innovative telemedicine platform. Our mission
            is to make healthcare accessible, convenient, and reliable for everyone,
            no matter where you are.
          </p>
          <p>
            With MediLink, you can consult certified doctors, get medical advice, and
            receive risk assessments from the comfort of your home. Our platform is
            designed with simplicity and user-friendliness in mind, allowing you to
            focus on your health while we take care of the rest.
          </p>
          <p>
            Whether you&apos;re managing chronic conditions like diabetes,
            hypertension, or seeking advice during pregnancy, MediLink provides a
            seamless experience tailored to your needs. Our healthcare professionals
            are just a click away, ready to provide the care and attention you
            deserve.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          placeholder="blur"
          alt="Doctor consulting with a patient virtually"
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src={image2}
          placeholder="blur"
          fill
          alt="Doctors collaborating on virtual care"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Your Health, Our Priority
        </h1>

        <div className="space-y-8">
          <p>
            MediLink has been at the forefront of telemedicine, committed to
            providing quality healthcare for everyone. We believe in the power of
            technology to transform healthcare and bring it directly to your
            fingertips.
          </p>
          <p>
            From routine checkups to urgent consultations, MediLink ensures that you
            can access the medical care you need, when you need it. Our team of
            healthcare professionals is dedicated to offering personalized care,
            tailored to meet your unique health needs.
          </p>

          <div>
            <a
              href="/"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Start Your Health Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
