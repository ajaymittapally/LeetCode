class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def mergeSort(nums):

            n = len(nums)
            if n ==1:
                return nums
            m = n//2
            L = mergeSort(nums[:m])
            R = mergeSort(nums[m:])
            l ,r = 0,0
            L_len = len(L)
            R_len = len(R)

            sorted = [0]*n
            i =0

            while l<L_len and r <R_len:
                if L[l] <R[r]:
                    sorted[i] = L[l]
                    l+=1
                else:
                    sorted[i] = R[r]
                    r +=1
                i+=1
            while l<L_len:
                sorted[i] = L[l]
                l+=1
                i+=1
            while r<R_len:
                sorted[i] = R[r]
                r+=1
                i+=1
            return sorted
        return mergeSort(nums)