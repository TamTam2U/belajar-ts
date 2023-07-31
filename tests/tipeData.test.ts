// import {Product} from "../src/main";

describe('Tipe Data', function () {
  it("should must Declare", function () {
    function removeDuplicates(arr: number[]): number[] {
      const uniqueNumbers: number[] = [];
      const seenNumbers = new Set<number>();

      for (const num of arr) {
        if (!seenNumbers.has(num)) {
          seenNumbers.add(num);
          uniqueNumbers.push(num);
        }
      }
      return uniqueNumbers;
    }
    let total = 45;
    const money = [1, 2, 5, 10, 20, 50, 100];
    let moneyC = [];
    let payback = []
    // let moneyA = []
    for (let i = 0; i < money.length; i++) {
      let totalA = 0;
      while (total > totalA) {
        totalA += money[i];
      }
      moneyC.push(totalA);
    }
    for (let j = 0; j < moneyC.length; j++) {
      payback.push(moneyC[j] - total);
    }
    const result = removeDuplicates(moneyC);
    const result2 = removeDuplicates(payback);
    // console.log(result);
    // console.log(result2)
  })
})