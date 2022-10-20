export default class Sort {
  constructor() {}

  /**
   * クイックソート
   * @param {number[]} array - 未整列の配列
   * @return {number[]} 整列済みの配列
   */
  static quick(array) {
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
}
