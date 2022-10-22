import {insert} from "../utils/insertToArray";

/**
 * Сервис, принимающий на вход два числа(возможно отрицательных) и знак между ними.
 * Возвращает вычисленное значение, либо сообщение с ошибкой
 * @param firstNumber
 * @param secondNumber
 * @param operator
 */
export const compute = (firstNumber: number, secondNumber: number, operator: string) => {
  let result;
  switch(operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "/":
      result = (secondNumber !== 0) ? result = firstNumber / secondNumber: "Division by 0 is not allowed"
      //if(secondNumber !== 0) { result = firstNumber / secondNumber;} else { result = "Division by 0 is not allowed"}
      break;
    default:
      result = "Invalid expression entry"
      break;
  }
  return result;
}

/**
 * Сервис для рефакторинга массива, содержащего выражение.
 * Данный метод необходим из-за того, что split игнорирует отрицательный знак у числа.
 * Если в получившемся split массиве находится минус, он "присоединяется"
 * к следующему числу и удаляется.
 * @param arrExpression
 */
export const refactoring = (arrExpression) => {
  console.log(arrExpression)
  for (let i = 0; i < arrExpression.length - 1; i++) {
    if(arrExpression[i] === "-" ) {
      arrExpression[i+1] = arrExpression[i] + arrExpression[i+1]
      arrExpression.splice(i,1)
    }
  }
  if(Number(arrExpression.length === 2 && (Number(arrExpression[0]) < 0 || Number(arrExpression[1]) < 0))) {
    arrExpression = insert(arrExpression, 1, "+")
  }
  //console.log(arrExpression)
  return arrExpression
}