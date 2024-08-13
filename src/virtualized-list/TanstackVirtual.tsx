import { useWindowVirtualizer } from "@tanstack/react-virtual";

import { Layout } from "../Layout";
import { useDataSet } from "./useDataSet";
import { ListWrapper, Card } from "./styles";
import { useEffect, useRef } from "react";

export const TanstackVirtual = () => {
  const { dataSet, appendData } = useDataSet();
  const listWrapperRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const threshold = dataSet.length - 2;

  useEffect(() => {
    if (loaderRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("load more");
            appendData();
            observer.disconnect();
          }
        },
        {
          rootMargin: "0px",
          threshold: 1.0,
        }
      );
      observer.observe(loaderRef.current);
    }
  }, [appendData]);

  const virtualizer = useWindowVirtualizer({
    count: dataSet.length,
    estimateSize: () => 32,
    scrollMargin: listWrapperRef.current?.offsetTop ?? 0,
    overscan: 5,
  });

  return (
    <Layout>
      <ListWrapper ref={listWrapperRef}>
        <ul
          style={{
            height: `${virtualizer.getTotalSize()}px`,
          }}
        >
          {virtualizer.getVirtualItems().map((item) => {
            return (
              <li
                key={item.key}
                data-index={item.index}
                className={item.index % 2 ? "ListItemOdd" : "ListItemEven"}
                ref={virtualizer.measureElement}
              >
                <Card>{dataSet[item.index]}</Card>
                {item.index === threshold && <div ref={loaderRef} />}
              </li>
            );
          })}
        </ul>
      </ListWrapper>
    </Layout>
  );
};
