import axios from 'axios';
import { e } from 'vite-node/index-6fb787b2';

// 1
export function lenString(str: string): number {
    return str.length
}

// 2
export function isPolindrome(str: string): boolean {
    const reverse: string = str.split('').reverse().join('');
    return reverse === str;
}

// 3
export function sortArray(arr: number[]): number[] {
    return arr.sort();
}

// 4
export function sqrt(num: number): number | string {
    if (num <= 0) {
        return "The number is negative or zero";
    } else {
        return num ** 0.5;
    }
}

// 5
export function sumArray(arr: number[]): number {
    return arr.reduce((sum: number, i: number) => sum + i, 0);
}

// 6
export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
}

export async function fetchUserData(userId: number): Promise<UserData> {
    try {
        return (await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)).data;
    } catch {
        throw new Error("User data not found");
    }
}

// 7
export function fibonacci(arr: number[]): number | string {
    for(let i = 2; i < arr.length; i++) {
        if(arr[i - 2] + arr[i - 1] !== arr[i]) {
            return "Not a Fibonacci sequence";
        }
    }
    return arr[arr.length-1] + arr[arr.length-2];
}