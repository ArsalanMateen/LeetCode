class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int firstPtr = m - 1;
        int secondPtr = n - 1;

        for (int i = (m+n)-1; i>-1; i--){
            if (secondPtr < 0){
                break;
            }

            if (firstPtr >= 0 && nums1[firstPtr]>nums2[secondPtr]){
                nums1[i] = nums1[firstPtr];
                firstPtr--;
            }
            else{
                nums1[i] = nums2[secondPtr];
                secondPtr--;
            }
        }
    }
};