import Image from "next/image";
import Link from "next/link";
import type { MenuCategory } from "@/data/menu";

type MenuCategoryCardProps = {
  category: MenuCategory;
};

export function MenuCategoryCard({ category }: MenuCategoryCardProps) {
  return (
    <Link
      href={`/menu/${category.slug}`}
      className="group flex flex-col border border-[#D9C4A5] rounded-[13px] overflow-hidden bg-[#FFF8EE] text-left transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_42px_rgba(57,41,41,0.12)] hover:border-[#D6B66C]"
      aria-label={`Explore ${category.title}`}
    >
      <div className="relative w-full h-[175px] max-sm:h-[122px] overflow-hidden bg-[#F4E4CA]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-[17px] max-sm:p-[13px] flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bree text-[19px] max-sm:text-[16px] text-[#392929] m-0 mb-2 leading-snug">
            {category.title}
          </h3>
          <p className="text-[11px] max-sm:text-[10px] text-[#866D5B] m-0 leading-[1.5]">
            {category.subtitle}
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 text-[#7F5738] text-[11px] max-sm:text-[10px] font-bold mt-4 group-hover:text-[#C84B36] transition-colors">
          <span>Explore category</span>
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

