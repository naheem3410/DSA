function binarySearch(arr:number[],start:number, end:number, target:number): number{
    if(start > end){
        return -1
    }
    
    let mid = Math.floor((end + start) / 2)
    if(arr[mid] == target){
        return mid
    }else{
        if(target > arr[mid]){
            start = mid + 1
            return binarySearch(arr,start,end,target)
        }else{
            start = 0
            end = mid - 1
            return binarySearch(arr,start,end, target)
        }
        
    }
    
}

console.log("hi")
let list = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(list,0,list.length - 1,7))