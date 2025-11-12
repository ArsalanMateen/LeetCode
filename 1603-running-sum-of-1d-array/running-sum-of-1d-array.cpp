class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int arr_len = nums.size();
        vector<int> runningSum(arr_len,0);
        for(int i=0; i<arr_len; i++)
        {
            for (int j=0; j<=i; j++)
            {
                runningSum[i] += nums[j]; 
            }
        }

        return runningSum;
    }
};