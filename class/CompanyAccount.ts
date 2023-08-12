import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus()){
      if(amount > 0){
        return this.deposit(amount)
      }
    }
    return console.log('Operação não realizada! Solicite um valor válido para empréstimo')
  }
}
