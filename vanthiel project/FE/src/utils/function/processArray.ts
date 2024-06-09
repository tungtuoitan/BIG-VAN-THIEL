export default function processArray(X: string[], k: string): string[] {
  const index = X.indexOf(k);

  if (index !== -1) {
    return X.filter((item) => item !== k);
  } else {
    return [...X, k];
  }
}