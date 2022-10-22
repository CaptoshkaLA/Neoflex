import { Router } from "express";
import * as operationService from "../services/operation.service";
export const operationRouter = Router();

/**
 * Контроллер, отвечающий за вычисляемое значение.
 * На вход в body поступает строка со значением.
 */
operationRouter.post('/', (req, res) => {
  const expression = String(req.body.expression)
  // console.log(expression)

  let arrExpression = expression.split('')
  arrExpression = operationService.refactoring(arrExpression)
  const firstNumber = Number(arrExpression[0])
  const secondNumber = Number(arrExpression[2])
  const operator = arrExpression[1]

  //console.log(firstNumber + " " + secondNumber + " " + operator)
  const result = operationService.compute(firstNumber, secondNumber, operator)
  res.send(`Result = ${result} `)
})