import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(peopleAccount.getName())
// console.log(peopleAccount.getAccountNumber())
// console.log(peopleAccount.getBalance())
// console.log(peopleAccount.getDocumentId())
// peopleAccount.deposit(0)
// peopleAccount.deposit(-70)
// peopleAccount.deposit(100)
// peopleAccount.withdraw(0)
// peopleAccount.withdraw(-20)
// peopleAccount.withdraw(20)

const companyAccount: CompanyAccount = new CompanyAccount('PJR S.A.', 1234567)
// console.log(companyAccount.getName())
// console.log(companyAccount.getAccountNumber())
// console.log(companyAccount.getBalance())
// companyAccount.getLoan(0)
// companyAccount.getLoan(-20)
// companyAccount.getLoan(200)
// companyAccount.deposit(100)
// companyAccount.withdraw(50)

const premiumAccount: PremiumAccount = new PremiumAccount('Paulo',12345)
// console.log(premiumAccount.getName())
// console.log(premiumAccount.getAccountNumber())
// console.log(premiumAccount.getBalance())
// premiumAccount.premiumAccountDeposit(0)
// premiumAccount.premiumAccountDeposit(-50)
// premiumAccount.premiumAccountDeposit(50)