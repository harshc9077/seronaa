'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface ProductToolbarProps {
  resultCount: number;
}

export function ProductToolbar({ resultCount }: ProductToolbarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', e.target.value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const currentSort = searchParams.get('sort') || 'featured';

  return (
    <div className="flex flex-row items-center justify-between mb-8 pb-4 border-b border-cream">
      <div className="text-[11px] uppercase tracking-widest text-taupe">
        {resultCount} {resultCount === 1 ? 'Piece' : 'Pieces'}
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="sr-only">Sort by</label>
        <select
          id="sort"
          value={currentSort}
          onChange={handleSort}
          className="bg-transparent text-[11px] uppercase tracking-widest text-charcoal outline-none cursor-pointer pr-4 appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23171514%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '8px auto' }}
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}
