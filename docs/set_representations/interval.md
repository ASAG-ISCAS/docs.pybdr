---
sidebar_position: 1
---

# Interval

## Definition

$$
{\cal I} \coloneqq \{ x \in \mathbb{R}^n | {\underline{x}}_{i} \leq x_{i} \leq \overline{x}_{i}, \forall i =1, \cdots ,
n \}
$$

:::caution
In order to do computation simultaneously for intervals, we use tensor as bounds but a real number in our
implementation, this is the difference between the theoretical definition and our real implementation, for more detail,
please check our source code.
:::

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

$$
[x] + [y] = [\underline{x} + \underline{y}, \overline{x} + \overline{y}]
$$

</details>


<details>
<summary>subtraction or '-'</summary>

$$
[x] - [y] = [\underline{x} - \underline{y}, \overline{x} - \overline{y}]
$$

</details>

<details>
<summary>multiplication or '*'</summary>


$$
[x] \cdot [y] = [
\min{(\underline{x} \underline{y}, \underline{x} \overline{y}, \overline{x} \underline{y}, \overline{x} \overline{y})},
\max{(\underline{x} \underline{y}, \underline{x} \overline{y}, \overline{x} \underline{y}, \overline{x} \overline{y})}
]
$$

</details>

<details>
<summary>division or '/'</summary>

$$
[x]/[y] = [x] \cdot (1/[y]), 1/[y]=
\begin{cases}
\emptyset & \text{if} \ y = [0,0] \\
[1/\overline{y}, 1/\underline{y}] & \text{if} \ 0 \notin [y] \\
[1/\overline{y}, \infty[ & \text{if} \ (\underline{y}=0) \land  (\overline{y}>0) \\
] - \infty, 1/\underline{y} & \text{if} \ (\underline{y}<0) \land (\overline{y}=0) \\
] - \infty, \infty[ & \text{if} \ (\underline{y}<0) \land (\overline{y}>0)
\end{cases}
$$

</details>

### non-periodic functions

<details>
<summary>power or '**'</summary>

$$
[x]^n = \begin{cases}  
[\underline{x}^n,\overline{x}^n] & \text{if} \ (\underline{x} < 0) \lor (n \ \text{uneven})\\
[\overline{x}^n, \underline{x}^n] & \text{if} \ (\overline{x} < 0) \land (n \ \text{even}) \\
[0,\max(|\underline{x}|,|\overline{x}|)^n] & \text{if} \ (0 \in [x]) \land (n \ \text{even})
\end{cases}
$$

where $n \in \N$

</details>

<details>
<summary>absolute or '||'</summary>

$$
|[x]| =\begin{cases}
[|\overline{x}|,|\underline{x}|] & \text{if} \ \overline{x}<0 \\
[\underline{x}, \overline{x}] & \text{if} \ \underline{x}>0 \\
[0,\max(|\underline{x}|,|\overline{x}|)] & \text{if} \ 0 \in [x]
\end{cases}
$$

</details>

<details>
<summary>matrix multiplication or '@'</summary>

+ real matrix with interval

$$
(X[Y])_{ij} = \sum_{k=1}^{n} X_{ik} [Y]_{kj}
$$

+ interval with real matrix

$$
([X]Y)_{ij} = \sum_{k=1}^{n} [X]_{ik} Y_{kj}
$$

+ with another interval matrix

$$
([X][Y])_{ij} = \sum_{k=1}^{n} [X]_{ik} [Y]_{kj}
$$

where $[X] \sube \R^{o \times n}$ and $[Y] \sube \R^{n \times p}$

</details>

<details>
<summary>exponential</summary>

$$
e^{[x]} = [e^{\underline{x}}, e^{\overline{x}}]
$$

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

[3]: Rump, S. M. (1999). Fast and parallel interval arithmetic. BIT Numerical Mathematics, 39(3), 534-554.

