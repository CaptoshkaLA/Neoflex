/**
 * Вспомогательный метод для вставки значения в массив по индексу
 * @param arr
 * @param index
 * @param newItem
 */
export const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
]