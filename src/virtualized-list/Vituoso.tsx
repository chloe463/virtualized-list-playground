import {
  Virtuoso as VirtuosoList,
  type ListRange,
  type Components,
} from "react-virtuoso";

import { Layout } from "../Layout";
import { useDataSet } from "./useDataSet";
import { ListWrapper, Card } from "./styles";
import { forwardRef } from "react";

const List: Components["List"] = forwardRef((props, ref) => {
  return (
    <ul
      ref={ref as React.RefObject<HTMLUListElement>}
      {...(props as React.HTMLAttributes<HTMLUListElement>)}
    >
      {props.children}
    </ul>
  );
});

const Item: Components["Item"] = forwardRef((props, ref) => {
  return (
    <li ref={ref as React.RefObject<HTMLLIElement>} {...props}>
      {props.children}
    </li>
  );
});

export const Virtuoso = () => {
  const { loading, dataSet, appendData } = useDataSet();

  const handleRangeChange = async (range: ListRange) => {
    const { endIndex } = range;
    const threshold = dataSet.length - 5;
    if (endIndex > threshold) {
      await appendData();
    }
  };

  return (
    <Layout>
      {/* cf. https://virtuoso.dev/window-scrolling/ */}
      {/* cf. https://virtuoso.dev/endless-scrolling/ */}
      <ListWrapper>
        <VirtuosoList
          components={{ List, Item }}
          useWindowScroll
          data={dataSet}
          // totalCount={dataSet.length}
          rangeChanged={handleRangeChange}
          itemContent={(index) => <Card key={index}>{dataSet[index]}</Card>}
        />
        {loading && <div>Loading...</div>}
      </ListWrapper>
    </Layout>
  );
};
