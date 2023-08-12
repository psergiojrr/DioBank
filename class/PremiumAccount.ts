// [ ] Criar um novo tipo de conta a partir da DioAccount
//   - Esta conta não deve receber novos atributos
//   - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    premiumAccountDeposit = (amount: number): void => {
        if(amount <= 0){
          return console.log('O valor para depósito deve ser maior que R$0,00')
        }
        if(this.validateStatus()){
            return this.deposit(amount + 10)
        }
      }
}