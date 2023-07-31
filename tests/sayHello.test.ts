// import { sayHello } from "../src/hello";

describe("", function () {
    it("should return ", () => {
        // expect(sayHello("tamtam")).toBe("Hello tamtam");
        function diagonalDifference(arr: number[][]): number {
            const n = arr.length;
            let leftDiagonalSum = 0;
            let rightDiagonalSum = 0;
            for (let i = 0; i < n; i++) {
                leftDiagonalSum += arr[i][i];
                rightDiagonalSum += arr[i][n - 1 - i];
            }
            return Math.abs(leftDiagonalSum - rightDiagonalSum);
        }

    });
})