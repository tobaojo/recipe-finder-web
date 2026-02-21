import { getFooter } from "@/app/lib/api";
import CallToActionButton from "./CallToActionButton";

const CallToAction = async () => {
  const callToAction = await getFooter();
  return (
    <div className="bg-[#E0E6E3] p-6 text-center rounded-lg mt-10 flex flex-col gap-6 items-center">
      <h2 className="font-extrabold text-4xl">
        {callToAction?.callToActionTitle}
      </h2>
      <p>{callToAction?.callToActionSubtitle}</p>
      <CallToActionButton />
    </div>
  );
};

export default CallToAction;
