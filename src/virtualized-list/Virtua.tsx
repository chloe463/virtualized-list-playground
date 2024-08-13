import styled from "styled-components";
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
      <Wrapper>
        <WindowVirtualizer
          onRangeChange={handleRangeChange}
          as={"ul"}
          item={"li"}
          itemSize={dataSet.length}
        >
          {Array.from({ length: dataSet.length }).map((_, i) => (
            <Card key={i}>{dataSet[i]}</Card>
          ))}
        </WindowVirtualizer>
        {loading && <div>Loading...</div>}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: block;
  box-sizing: content-box;
  padding: 200px;
  & ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & ul li {
    margin-top: 16px;
  }
`;

const Card = styled.div`
  display: block;
  margin-top: 16px;
  padding: 16px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.02),
    0px 2px 6px 0px rgba(0, 0, 0, 0.1); /* Elevation 4 */
`;
