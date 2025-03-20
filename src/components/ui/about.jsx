import { Timeline } from "@/components/ui/timeline";
import { Skeleton } from "@/components/ui/skeleton";
export function About() {
  const data = [
    {
      title: "2024-2025",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Launched my personal portfolio website and also Joined few clubs in
            my institution for tech and leadership webwiz and gdsc
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.2)]" />
            <Skeleton className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.2)]" />
            <Skeleton className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.2)]" />
            <Skeleton className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.2)]" />
          </div>
        </div>
      ),
    },
    {
      title: "2022-2024",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Completed my schooling and preparation for Jee and joined NIT
            Rourkela
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Explored python ,django ,discord.py and much more
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.2)]" />
            <Skeleton className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.2)]" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full dark bg-neutral-950">
      <Timeline data={data} />
    </div>
  );
}
