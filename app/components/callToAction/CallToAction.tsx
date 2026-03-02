import { getFooter } from "@/app/lib/api";
import CallToActionButton from "./CallToActionButton";
import Fork from "../../../public/pattern-fork.svg";
import Knife from "../../../public/pattern-knife.svg";
import Image from "next/image";

const CallToAction = async () => {
  const callToAction = await getFooter();
  return (
    <div className="relative bg-[#E0E6E3] p-8 text-center rounded-lg mt-10 flex flex-col gap-6 items-center justify-center lg:h-100 overflow-hidden">
      <h2 className="text-5xl lg:text-5xl font-extrabold mb-1 lg:text-center">
        {callToAction?.callToActionTitle}
      </h2>
      <p className="text-lg text-center">
        {callToAction?.callToActionSubtitle}
      </p>
      <Image
        src={Fork}
        alt="Fork"
        className="hidden lg:block mx-auto absolute top-10 -left-20 "
        width={350}
        height={350}
      />
      <Image
        src={Knife}
        alt="Knife"
        className="hidden lg:block mx-auto absolute top-0 -right-20"
        height={350}
        width={350}
      />
      <CallToActionButton className="lg:mx-auto" />
    </div>
  );
};

export default CallToAction;
