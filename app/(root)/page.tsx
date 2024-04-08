import Collection from "@/components/shared/Collection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex-1">
        <section id="first">
          <div className="max-h-[500px] h-[75dvh] lg:max-h-[725px] bg-main-img bg-cover bg-center flex items-center justify-center transition-all duration-500">
            <div className="w-full h-full flex items-center flex-col justify-center gap-5 bg-black/50">
              <div className="max-w-xs md:max-w-xl flex items-center justify-center">
                <Image
                  src="/assets/images/logo_hirogh2.png"
                  width={500}
                  height={150}
                  alt="Horogh logo"
                />
              </div>

              <div className="p-bold-20 md:h5-bold flex flex-col items-center justify-center text-white">
                <div className="">
                  <p className="flex text-center justify-center">
                    大宇宙の論理を尊び
                  </p>
                </div>
                <div className="">
                  <p className="flex text-center justify-center">
                    英知を結集し未知の可能性を追求し
                  </p>
                </div>
                <div className="">
                  <p className="flex text-center justify-center">
                    創造的発展を目指す企業である
                  </p>
                </div>
              </div>
            </div>
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
