import { getSocialMediaLinks } from "../lib/api";
import Image from "next/image";

const Footer = async () => {
  const socialMediaLinks = await getSocialMediaLinks();

  const socialMediaLinksWithUrls = socialMediaLinks.map((link: any) => ({
    ...link,
    socialIcon: {
      ...link.socialIcon,
      url: `${process.env.STRAPI_URL}${link.socialIcon?.url}`,
      alt: link.socialIcon?.alternativeText || "Social Media Icon",
      socialUrl: link.socialLinkUrl,
    },
  }));
  return (
    <footer className="py-4 mt-10">
      <div className="container mx-auto text-center flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-row gap-6 justify-center items-center">
          {socialMediaLinksWithUrls?.map((link: any) => (
            <a
              key={link.id}
              href={link.socialIcon.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.socialIcon.url}
                alt={link.socialIcon.alt}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
        <p>Made with ❤️ and 🥑</p>
      </div>
    </footer>
  );
};

export default Footer;
