//  understanding hoe generics work in typescript
function getItem<T>(item:T[]):T {
    return item[0];
}

const num = getItem<number>([1,2,3]);
console.log(num); // Output: 1

async function fetchData<T>(url:string):Promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    return data as T;
}


