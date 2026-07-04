# Transform Nested Arrays

## Problem Statement

Given a JSON object and a value `n`, create a deep clone of the JSON object.

Append the value `n` to every array found in the JSON object, regardless of how deeply nested it is.

The original input must not be modified.

---

## Example 1

### Input

```js
jsonObj = [1, 2, [3, 4], 5, [6, 7, 8]];
n = 10;
```

### Output

```js
[1, 2, [3, 4, 10], 5, [6, 7, 8, 10], 10];
```

---

## Example 2

### Input

```js
jsonObj = {
  a: [1],
  b: {
    c: [2],
  },
};

n = "yayyy";
```

### Output

```js
{
  a: [1, "yayyy"],
  b: {
    c: [2, "yayyy"]
  }
}
```

---

## Constraints

- Create a **deep clone**.
- Do **not** mutate the original object.
- Traverse nested arrays and objects recursively.

---

## Time Complexity

O(N)

## Space Complexity

O(N)
