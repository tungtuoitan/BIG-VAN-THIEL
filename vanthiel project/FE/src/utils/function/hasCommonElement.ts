export default function hasCommonElement(A: string[], B: string[]): boolean {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        return true;
      }
    }
  }
  return false;
}