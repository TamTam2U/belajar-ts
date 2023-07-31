describe('', function () {
    it('', function () {
        function miniMaxSum(arr: number[]) {
            arr.sort((a, b) => a - b);
            let minSum = 0;
            let maxSum = 0;

            for (let i = 0; i < arr.length; i++) {
                minSum += arr[i];
            }
            for (let i = 1; i < arr.length; i++) {
                maxSum += arr[i];
            }
            return [minSum, maxSum];
        }
        const arr = [5,1,7,2,8,12,6];
        miniMaxSum(arr);
        console.log(miniMaxSum(arr));
    })
})