import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

export default ({ total_pages }) => {
  const router = useRouter();
  let { page } = router.query;
  page = parseInt(page || "1", 10);
  return (
    <Pagination
      page={page}
      count={total_pages}
      renderItem={(item) => (
        <Link href={`?page=${item.page}`}>
          <PaginationItem {...item} />
        </Link>
      )}
    />
  );
};
