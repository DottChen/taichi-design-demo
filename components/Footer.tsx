import { toast } from "sonner";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import { IconLink } from "@tabler/icons-react";

interface FooterProps extends React.AllHTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-24 flex w-full flex-col items-center justify-center gap-6">
      <Divider />
      <div className={`flex w-full items-center justify-end`}>
        <Button
          text="Copy Link"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success('Link copied to clipboard');
          }}
        >
          <IconLink className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
