/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import DisplayError from './DisplayError';
import { perPage } from '../config';
import { PaginationStyles } from './styles/PaginationStyles';
import { PAGINATION_QUERY } from '../lib/graphql/pagination';

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return null;
  if (error) return <DisplayError error={error} />;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          fivensix - Page {page} of {pageCount}
        </title>
      </Head>

      <Link href={`/products/${page - 1}`} scroll={false}>
        <a aria-disabled={page <= 1} className="pagination-control">
          Prev
        </a>
      </Link>
      <div className="pagination-number">
        <p>
          <span>{page}</span> of {pageCount}
        </p>
      </div>
      <div className="hide-for-desktop">
        <p>{count} Items total</p>
      </div>
      <Link href={`/products/${page + 1}`} scroll={false}>
        <a aria-disabled={page >= pageCount} className="pagination-control">
          Next
        </a>
      </Link>
    </PaginationStyles>
  );
}
