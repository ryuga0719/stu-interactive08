export default class Sort {
  constructor() {}

  /**
   * クイックソート
   * @param {number[]} array - 未整列の配列
   * @return {number[]} 整列済みの配列
   */
  static quickSort(array) {
    // 配列の値が一つの場合はそのまま返す
    if (1 >= array.length) return array;

    // 配列の最初(ピボット)とそれ以外に分割する
    const [pivot, ...others] = array;

    // 配列からピボット以下のものを抽出
    const smallerOrEqual = others.filter((x) => x <= pivot);

    // 配列からピボットより大きいものを抽出
    const larger = others.filter((x) => x > pivot);

    return [...this.quick(smallerOrEqual), pivot, ...this.quick(larger)];
  }

  /**
   * バブルソート (基本交換法)
   * @param {number[]} array - 未整列の配列
   * @returns {number[]} 整列済みの配列
   */
  static bubbleSort(array) {
    // 引数の配列のクローンを作成
    const clone = Array.from(array);
    const compareNumbers = (a, b) => {
      return a - b;
    };
    return clone.sort(compareNumbers);
  }

  /**
   * セレクションソート (基本選択法)
   * @param {number[]} array - 未整列の配列
   * @returns {number[]} 整列済みの配列
   */
  static selectionSort(array) {
    // 引数の配列のクローンを作成
    const clone = Array.from(array);

    const length = clone.length; // 配列の要素数

    let temp = 0;

    for (let i = 0; i < length - 1; i++) {
      let min = i; // 最小値
      for (let j = i + 1; j < length; j++) {
        if (clone[min] > clone[j]) {
          min = j;
        }
      }
      // 入れ替え
      temp = clone[min];
      clone[min] = clone[i];
      clone[i] = temp;
    }

    return clone;
  }
}
