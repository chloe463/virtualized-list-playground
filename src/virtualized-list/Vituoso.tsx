import { Virtuoso as VirtuosoList, type ListRange } from "react-virtuoso";

import { Layout } from "../Layout";
import { useDataSet } from "./useDataSet";
import { ListWrapper, Card } from "./styles";

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
