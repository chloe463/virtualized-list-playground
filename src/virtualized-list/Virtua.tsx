import { WindowVirtualizer } from "virtua";

import { Layout } from "../Layout";
import { useDataSet } from "./useDataSet";

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
      <div style={{ padding: 200 }}>
        <WindowVirtualizer onRangeChange={handleRangeChange}>
          {Array.from({ length: dataSet.length }).map((_, i) => (
            <div
              key={i}
              style={{
                // height: Math.floor(Math.random() * 10) * 10 + 10,
                borderBottom: "solid 1px gray",
                background: "white",
              }}
            >
              {dataSet[i]}
            </div>
          ))}
        </WindowVirtualizer>
        {loading && <div>Loading...</div>}
      </div>
    </Layout>
  );
};
