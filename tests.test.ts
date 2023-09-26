import { describe, expect, test } from "vitest";
import * as _ from "./funtions";

test("return length of string", () => {
    expect(_.lenString('string')).toBe(6);
})

test("Returns if string palindrome", () => {
    expect(_.isPolindrome('aba')).toBe(true);
});

test("Returns an array in ascending order", () => {
    expect(_.sortArray([2, 1, 5, 3, 4])).toEqual([1, 2, 3, 4, 5]);
});

describe("sqrt of number", () => {
    test("Returns the square root of a number", () => {
        expect(_.sqrt(16)).toBe(4);
    });

    test("If the number is negative or zero", () => {
        expect(_.sqrt(-3)).toBe("The number is negative or zero");
    });
})

describe("sum array", () => {
    test("Returns the sum of array", () => {
        expect(_.sumArray([1, 2, 3, 4, 5])).toBe(15);
    });

    test("If sum array is grater than number", () => {
        expect(_.sumArray([1, 2, 3, 4, 5])).greaterThan(10);
    });
});

describe("Fetch user data", () => {
    test("If user not found", async () => {
        await expect(_.fetchUserData(200)).rejects.toThrowError("User data not found");
    });

    test("Returns user data", async () => {
        await expect(_.fetchUserData(1)).resolves.toEqual(
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
            });
    });
});

describe("Fibonacci sequence", () => {
    test("Returns next fibonacci sequence", () => {
        expect(_.fibonacci([0, 1, 1, 2, 3, 5, 8])).toBe(13);
    });

    test("If is not a fibonacci sequence", () => {
        expect(_.fibonacci([0, 1, 1, 2, 3, 5, 9])).toBe("Not a Fibonacci sequence");
    });
});