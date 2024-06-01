import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface campProps {
  backgroundImage: String;
  title: String;
  subTitle: String;
  peopleJoined: String;
}

const CampSite = ({
  backgroundImage,
  title,
  subTitle,
  peopleJoined,
}: campProps) => {
  return (
    <>
      <div
        className={`w-full h-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${backgroundImage}`}
      >
        <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-4">
            <div className="rounded-full bg-green-50 p-4">
              <Image src="/folded-map.svg" alt="map" width={28} height={28} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-white bold-18">{title}</h4>
              <p className="text-white regular-14">{subTitle}</p>
            </div>
          </div>
          <div className="gap-6 flexCenter">
            <span className="flex -space-x-4 overflow-hidden">
              {PEOPLE_URL.map((url) => (
                <Image
                  src={url}
                  key={url}
                  alt="people"
                  width={52}
                  height={52}
                  className="inline-block w-10 h-10 rounded-full"
                />
              ))}
            </span>
            <p className="text-white bold-16 md:bold-20">{peopleJoined}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Camp = () => {
  return (
    <section className=" flex flex-col 2xl:max-container relative py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="50+ joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 md:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
