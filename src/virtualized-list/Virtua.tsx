import { WindowVirtualizer } from "virtua";

import { Layout } from "../Layout";

export const Virtua = () => {
  const handleRangeChange = (startIndex: number, endIndex: number) => {
    console.log({startIndex, endIndex});
  };

  return (
    <Layout>
      {/* cf. https://github.com/inokawa/virtua#window-scroll */}
      <div style={{ padding: 200 }}>
        <WindowVirtualizer onRangeChange={handleRangeChange}>
          {Array.from({ length: 1000 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: Math.floor(Math.random() * 10) * 10 + 10,
                borderBottom: "solid 1px gray",
                background: "white",
              }}
            >
              {i}
            </div>
          ))}
        </WindowVirtualizer>
      </div>
    </Layout>
  );
};
