describe("", function () {
    it("should return ", function () {
        function plusminus(arr: number[]) {
            let positive = 0;
            let negative = 0;
            let zero = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    positive++;
                } else if (arr[i] < 0) {
                    negative++;
                } else {
                    zero++;
                }
            }return [positive/arr.length, negative/arr.length, zero/arr.length];
        }
        const arr = [1, 2, -5, 0, -20, 50, -100];
        const result = plusminus(arr);
        console.log(result);
    })
})