export const createSearchIndex = (text: string): string[] => {
  const result: string[] = [];
  const iter = (i: number, temp: string) => {
    if (i >= text.length) {
      result.push(temp);
      return;
    }
    iter(i + 1, temp + text[i]);
    iter(i + 1, temp);
  };

  iter(0, '');
  const finalResult: string[] = result.filter(
    (elem) => text.includes(elem) && elem.length > 0,
  );
  return finalResult;
};
