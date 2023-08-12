export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (amount: number): void => {
    if(amount <= 0){
      return console.log('O valor para depósito deve ser maior que R$0,00')
    }
    if(this.validateStatus()){
        this.balance += amount
        return console.log(`
        Operação realizada com sucesso!
        Saldo atualizado: R$${this.balance.toFixed(2)}
        `)
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus()){
      if(amount > 0 && amount <= this.balance){
        this.balance -= amount
        return console.log(`
        Operação realizada com sucesso!
        Saldo atualizado: R$${this.balance.toFixed(2)}
        `)
      } else if(amount <= 0){
        return console.log('O valor para saque deve ser maior que R$0,00')
      } else{
        return console.log('Valor inválido! Verifique se tem esse saldo disponível para saque.')
      }
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
