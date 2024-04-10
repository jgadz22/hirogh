import Banner from "@/components/shared/Banner";
import Collection from "@/components/shared/Collection";

export default function Home() {
  return (
    <>
      <div className="flex-1">
        <section id="first">
          <div className="max-h-[500px] h-[75dvh] lg:max-h-[725px] bg-main-img bg-cover bg-center flex items-center justify-center transition-all duration-500">
            <Banner />
          </div>
        </section>

        <section id="second" className="w-full text-white py-3 lg:py-10">
          <div className="wrapper flex items-center justify-center flex-col md:flex-row gap-8 md:gap-12">
            <Collection />
          </div>
        </section>
      </div>
    </>
  );
}
