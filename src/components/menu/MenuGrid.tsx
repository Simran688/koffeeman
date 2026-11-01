import { menuCategories } from "@/data/menu";
import { MenuCategoryCard } from "./MenuCategoryCard";

export function MenuGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[17px] max-sm:gap-2.5">
      {menuCategories.map((category) => (
        <MenuCategoryCard key={category.slug} category={category} />
      ))}
    </div>
  );
}

