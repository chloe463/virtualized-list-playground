import { faker } from "@faker-js/faker";
import { useState } from "react";

function generateParagraphs(n: number) {
  return Array.from({ length: n }).map(() => faker.lorem.paragraphs(Math.ceil(Math.random() * 10)));
};

function wait(sec: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), sec * 1000);
  });
}

export function useDataSet() {
  const [dataSet, setDataSet] = useState(generateParagraphs(10));
  const [loading, setLoading] = useState(false);

  const appendData = async () => {
    setLoading(true);
    await wait(0.5);
    setDataSet((current) => {
      return [
        ...current,
        ...generateParagraphs(10),
      ];
    });
    setLoading(false);
  };

  return {
    dataSet,
    loading,
    appendData,
  };
}
