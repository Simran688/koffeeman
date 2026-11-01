import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { menuCategories, getMenuCategory } from "@/data/menu";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return menuCategories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getMenuCategory(category);
  if (!cat) {
    return {
      title: "Menu Category Not Found — Koffee Man",
    };
  }

  return {
    title: `${cat.title} — ${siteConfig.brandName} Menu`,
    description: `${cat.title} menu at ${siteConfig.brandName}, NSP, Pitampura. ${cat.description}`,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getMenuCategory(category);

  if (!cat) {
    notFound();
  }

  return (
    <main className="min-h-[80vh] py-8 md:py-12 bg-[#F4E4CA]">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-[11px] text-[#866D5B] mb-6">
          <Link
            href="/#menu"
            className="text-[#7F5738] font-bold hover:text-[#C84B36] transition-colors"
          >
            ← Back to menu
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#392929] font-medium">{cat.title}</span>
        </nav>

        {/* Detail Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] bg-[#392929] rounded-[18px] overflow-hidden mb-8 shadow-[0_16px_42px_rgba(57,41,41,0.12)]">
          <div className="p-8 md:p-12 text-[#FFF8EE] flex flex-col justify-center">
            <div className="section-kicker text-[#D6B66C]">
              Explore the KoffeeMan menu
            </div>
            <h1 className="font-bree text-[36px] md:text-[48px] text-[#F4E4CA] my-3 leading-tight">
              {cat.title}
            </h1>
            <p className="text-[13px] text-[#e8d9cb] leading-[1.7] max-w-[520px] mb-6">
              {cat.description}
            </p>
            <div>
              <Button
                variant="gold"
                href={siteConfig.ordering.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on Swiggy ↗
              </Button>
            </div>
          </div>

          <div className="relative min-h-[240px] lg:min-h-[300px] w-full bg-[#2D2020]">
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Detail Item Catalogue List */}
        <div className="bg-[#FFF8EE] border border-[#D9C4A5] rounded-[16px] p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6">
            <div>
              <div className="section-kicker">The selection</div>
              <h2 className="font-bree text-[24px] md:text-[28px] text-[#392929] m-0">
                Explore the range
              </h2>
            </div>
            <span className="eyebrow">Good food · Good coffee</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {cat.groups.map((group) => (
              <section
                key={group.title}
                className="border border-[#D9C4A5] bg-[#FBF1E4] rounded-[11px] p-[18px]"
              >
                <h3 className="font-bree text-[18px] text-[#7F5738] m-0 mb-3">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="text-[12px] leading-[1.45] text-[#4e3b30] relative pl-3.5"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 text-[#D6B66C] text-[9px]"
                      >
                        ✦
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#392929] text-[#FFF8EE] p-6 md:p-7 rounded-[14px] mt-6">
            <div>
              <h3 className="font-bree text-[21px] md:text-[23px] text-[#F4E4CA] m-0 mb-1">
                Found your favourite?
              </h3>
              <p className="text-[11px] text-[#ddcdbd] m-0">
                Order online or visit us at NSP, Pitampura.
              </p>
            </div>
            <Button
              variant="gold"
              href={siteConfig.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on Swiggy ↗
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

