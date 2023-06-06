import Link from 'next/link';

import Divider from '@/components/local/Divider';
import { IconArrowRight } from '@tabler/icons-react';

interface DemoItemProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
  date: string;
}

const DemoItem: React.FC<DemoItemProps> = ({ title, link, date }) => {
  return (
    <Link
      className="group z-10 outline-none "
      href={`${`/demos/${link}`}`}
      target={'_self'}
    >
      <div className="flex w-full flex-col rounded-md pt-6 outline-none ">
        <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-4">
          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-2">
              <div className="overflow-hidden text-ellipsis text-sm font-normal text-[var(--label-faint)] transition duration-300 ease-out group-hover:text-[var(--label-title)] group-focus:text-[var(--label-base)]">
                {title}
              </div>
              <IconArrowRight className="h-4 w-4 text-[var(--label-faint)] transition duration-300 ease-out group-hover:text-[var(--label-muted)] group-focus:text-[var(--label-muted)]" />
            </div>
          </div>
          <div className="font-mono w-16 text-start text-sm font-normal text-[var(--label-faint)] transition duration-300 ease-out group-hover:text-[var(--label-muted)] group-focus:text-[var(--label-muted)] sm:text-end">
            {date}
          </div>
        </div>
        <Divider className="mt-6" />
      </div>
    </Link>
  );
};

export default DemoItem;
