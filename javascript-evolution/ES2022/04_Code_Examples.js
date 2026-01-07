// ES2022 Examples

// Private fields
class BankAccount {
  #balance = 0;
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
// account.#balance; // SyntaxError!

// Top-level await
// const config = await loadConfig();
// export default config;

// .at() method
const items = ['a', 'b', 'c', 'd'];
console.log(items.at(-1));  // 'd'
console.log(items.at(-2));  // 'c'

// Object.hasOwn()
const obj = { name: 'John' };
console.log(Object.hasOwn(obj, 'name'));  // true
console.log(Object.hasOwn(obj, 'age'));   // false
