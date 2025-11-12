class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int arr_len = nums.size();
        vector<int> runningSum(arr_len,0);
        runningSum[0] = nums[0];
        for(int i=1; i<arr_len; i++)
        {
           runningSum[i] = runningSum[i-1] + nums[i];
        }

        return runningSum;
    }
};