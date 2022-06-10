---
sidebar_position: 1
---

# Interval

## Definition

$$
I := \\{ x \in \mathbb{R}^n | {\underline{x}}_{i} \leq x\_{i} \leq \overline{x}\_{i}, \forall i =1, \cdots , n \\}
$$

## Example

```python
from pyrat.geoemtry import Interval
from pyrat.util.visualization import vis2dGeo

I = Interval([-1,-2],[3,5])
vis2dGeo([I],[0,1])
```

## Operations

### enclose

### boundary

## Arithmetic

### scalar operations

<details>
<summary> addition or '+'</summary>

+ with another real number
  $$
  [x] + c = [\underline{x} + c, \overline{x} + c]
  $$
+ with another real vector
  $$
  [x] + C = [\underline{x} + C, \overline{x} + C]
  $$
+ with another interval
  $$
  [x] + [y] = [\underline{x} + \underline{y}, \overline{x} + \overline{y}]
  $$

</details>


<details>
<summary>subtraction or '-'</summary>

+ with another real number
  $$
  [x] - c = [\underline{x} - c, \overline{x} - c]
  $$
+ with another real vector
  $$
  [x] - C = [\underline{x} - C, \overline{x} - C]
  $$
+ with another interval
  $$
  [x] - [y] = [\underline{x} - \underline{y}, \overline{x} - \overline{y}]
  $$

</details>

<details>
<summary>multiplication or '*'</summary>

+ with another real number
  $$
  [x] \cdot c = [c \underline{x}, c \overline{x}]
  $$
+ with another real vector
  $$
  [x] \cdot C = [\min{(C \underline{x} , C \overline{x})},\max{(C \underline{x} ,C \overline{x})} ]
  $$
+ with another interval
  $$
  [x] \cdot [y] = [
  \min{(\underline{x} \underline{y}, \underline{x} \overline{y}, \overline{x} \underline{y}, \overline{x} \overline{y})},
  \max{(\underline{x} \underline{y}, \underline{x} \overline{y}, \overline{x} \underline{y}, \overline{x} \overline{y})}
  ]
  $$

</details>

<details>
<summary>division or '/'</summary>

+ with another real number
+ with another vector
+ with another interval
  $$
  [x]/[y] = [x] \cdot ([1]/[y]), [1]/[y] = 
  \\left\\{ 
  x \\\\
  $$

</details>

### non-periodic functions

<details>
<summary>power or '**'</summary>
</details>

<details>
<summary>matrix multiplication or '@'</summary>
</details>

<details>
<summary>exponential</summary>
</details>

<details>
<summary>log</summary>
</details>

<details>
<summary>sqrt</summary>
</details>

<details>
<summary>arcsin</summary>
</details>

<details>
<summary>arccos</summary>
</details>

<details>
<summary>arctan</summary>
</details>

<details>
<summary>arctan</summary>
</details>

<details>
<summary>sinh</summary>
</details>

<details>
<summary>cosh</summary>
</details>

<details>
<summary>tanh</summary>
</details>

<details>
<summary>arcsinh</summary>
</details>

<details>
<summary>arccosh</summary>
</details>

<details>
<summary>arctanh</summary>
</details>

<details>
<summary>absolute</summary>
</details>

### periodic functions

<details>
<summary>mod</summary>
</details>

<details>
<summary>sin</summary>
</details>

<details>
<summary>cos</summary>
</details>

## References

[1] Althoff, M., & Grebenyuk, D. (2016). Implementation of interval arithmetic in {CORA} 2016. In Proc. of the 3rd
International Workshop on Applied Verification for Continuous and Hybrid Systems (pp. 91-105).

[2]: Wikipedia contributors. (2022, May 5). Interval arithmetic. In Wikipedia, The Free Encyclopedia. Retrieved 08:05,
June 9, 2022, from https://en.wikipedia.org/w/index.php?title=Interval_arithmetic&oldid=1086274354

