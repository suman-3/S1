import faq from "@/components/utils/faq";

export default function FAQ() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-blue-400 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">FAQ's</h2>
            <p className="text-xl text-gray-600">
              Answers of Frequently Asked Questions.
            </p>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {faq.map((data) => (
              <div key={data.key} className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {data.question}
                </h4>
                <p className="text-gray-600 text-center">{data.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
