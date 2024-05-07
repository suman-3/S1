import MaxWidthWrapper from "@/components/Wrapper/MaxWidthWrapper";
import Image from "next/image";

export default function About() {
  return (
    <MaxWidthWrapper>
      <section className="relative my-5">
        <div
          className="absolute inset-0 pointer-events-none mb-16"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

        <div className="relative mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h6 className="mb-4 uppercase !text-gray-500 font-semibold">
                About us
              </h6>
              <h2 className="h3 mb-2">InnoFusion Hackathon</h2>
              <p className="text-xl text-gray-600">
                Organized By University of Engineering & Management, Kolkata
              </p>
            </div>
            <h2 className="h4 mb-4 text-center">
              University of Engineering & Management
            </h2>
            <div className="flex max-lg:flex-wrap">
              <div>
                <p className="text-gray-600 max-w-2xl text-justify">
                  The University of Engineering and Management (UEM) in Kolkata
                  is renowned for its commitment to excellence in education and
                  research in engineering and technology. With state-of-the-art
                  facilities and a dynamic academic environment, UEM offers a
                  diverse range of undergraduate and postgraduate programs. Its
                  strategic location in Kolkata, a hub of culture and industry,
                  provides students with unique opportunities for experiential
                  learning and professional growth. Committed to nurturing
                  innovation and entrepreneurship, UEM equips students with the
                  skills and knowledge to thrive in a rapidly evolving global
                  landscape. Through a blend of academic rigour and practical
                  exposure, UEM prepares students to become future leaders and
                  innovators in their respective fields.
                </p>
              </div>
              <Image
                src="/images/uem.jpg"
                alt="Uem Image"
                width={400}
                height={400}
                className="rounded-xl h-[200px] w-[400px] object-cover lg:ml-4 opacity-80 max-lg:mt-5"
              />
            </div>
            <h2 className="h4 mt-10 mb-1 text-center">
              InnoFusion Hackathon Season 1
            </h2>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
