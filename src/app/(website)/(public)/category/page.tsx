import ItemGrid from "@/components/item/item-grid";
import EmptyGrid from "@/components/shared/empty-grid";
import CustomPagination from "@/components/shared/pagination";
import { siteConfig } from "@/config/site";
import { getItems } from "@/data/item";
import {
  DEFAULT_SORT,
  ITEMS_PER_PAGE,
  SORT_FILTER_LIST,
} from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";
export const metadata = constructMetadata({
  title: "Category",
  description: "Explore by category",
  canonicalUrl: `${siteConfig.url}/category`,
});

export default async function CategoryIndexPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, page } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    SORT_FILTER_LIST.find((item) => item.slug === sort) || DEFAULT_SORT;
  const currentPage = page ? Number(page) : 1;
  const { items, totalCount } = await getItems({
    sortKey,
    reverse,
    currentPage,
  });
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  console.log(
    "CategoryIndexPage, totalCount",
    totalCount,
    ", totalPages",
    totalPages,
  );

  return (
    <div>
      {/* when no items are found */}
      {items?.length === 0 && <EmptyGrid />}

      {/* when items are found */}
      {items && items.length > 0 && (
        <section className="">
          <ItemGrid items={items} />

          <div className="mt-8 flex items-center justify-center">
            <CustomPagination routePreix="/category" totalPages={totalPages} />
          </div>
        </section>
      )}
    </div>
  );
}
