import { WindowVirtualizer } from "virtua";

import { Layout } from "../Layout";
import { useDataSet } from "./useDataSet";
import { ListWrapper, Card } from "./styles";

export const Virtua = () => {
  const { loading, dataSet, appendData } = useDataSet();

  const handleRangeChange = async (_startIndex: number, endIndex: number) => {
    // console.log({ startIndex, endIndex });
    const threshold = dataSet.length - 5;
    if (endIndex > threshold) {
      await appendData();
    }
  };

  return (
    <Layout>
      {/* cf. https://github.com/inokawa/virtua#window-scroll */}
      <ListWrapper>
        <WindowVirtualizer
          onRangeChange={handleRangeChange}
          as={"ul"}
          item={"li"}
          itemSize={dataSet.length}
        >
          {Array.from({ length: dataSet.length }).map((_, i) => (
            <Card key={i}>{dataSet[i]}</Card>
          ))}
          {loading && <Card>Loading...</Card>}
        </WindowVirtualizer>
      </ListWrapper>
    </Layout>
  );
};
