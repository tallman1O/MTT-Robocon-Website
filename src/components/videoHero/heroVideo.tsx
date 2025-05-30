import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/97NUYZN8uOs"
        thumbnailSrc="/images/YT-Thumbnail.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/97NUYZN8uOs"
        thumbnailSrc="/images/YT-Thumbnail.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
