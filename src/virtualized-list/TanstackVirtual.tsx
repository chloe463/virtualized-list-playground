import { useWindowVirtualizer } from "@tanstack/react-virtual";

import { Layout } from "../Layout";
import { useDataSet } from "./useDataSet";
import { ListWrapper, Card } from "./styles";
import { useEffect, useRef } from "react";

export const TanstackVirtual = () => {
  const { dataSet, appendData } = useDataSet();
  const listWrapperRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: dataSet.length,
    estimateSize: () => 32,
    scrollMargin: listWrapperRef.current?.offsetTop ?? 0,
    overscan: 20,
  });

  // 公式ドキュメントにある infinite scroll のサンプルに従って無限スクロールを実現しようとすると、スクロールがおかしなことになる。
  // cf. https://tanstack.com/virtual/latest/docs/framework/react/examples/infinite-scroll
  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();
    const endIndex = lastItem.index;
    console.log({ endIndex });
    const threshold = dataSet.length - 5;
    if (endIndex > threshold) {
      void appendData();
    }
  }, [appendData, dataSet.length, virtualizer]);

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
              </li>
            );
          })}
        </ul>
      </ListWrapper>
    </Layout>
  );
};
