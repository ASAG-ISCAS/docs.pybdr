---
sidebar_position: 3
---

# Zonotope

## Definition

$$
{\cal Z} \coloneqq \{
c+\sum_{i=1}^{p} \beta_{i} g^{i} \ \big| \ \beta_{i} \in [-1,1]
\}
$$

## Example

```python
from pyrat.geometry import Zonotope

# TODO
```

## Operations

### enclose

### reduce

### quadratic map

${\cal Z_{Q}}=\{\lambda | \lambda_{i}= x^T Q^{i} x, x \in {\cal Z}\}$ can be over approximated by a zonotope
${\cal Z}=(d,h^0, h^1, \cdots , h^{\delta})$ where $$\delta = \begin{pmatrix} p+2 \\ 2 \end{pmatrix} -1$$, the center is
computed as

$$
d_{i} = c^T Q^i c + 0.5 \sum_{s=1}^{p} {g^s}^T Q^i g^s
$$

and the generators are computed as

$$
\begin{cases}
h_i^j = c^T Q^i g^j + {g^j}^T Q^i c, j=1 \cdots p \\
h_i^{p+j} = 0.5 {g^j}^T Q^i g^j, j=1 \cdots p \\
h_i^{2p+l} = {g^j}^T Q^i g^k + {g^k}^T Q^i g^j, l= \sum_{j=1}^{p-1} \sum_{k=j+1}^{p} 1
\end{cases}
$$

check reference [2] for more.

## Arithmetic

<details>
<summary>addition or '+'</summary>
</details>

<details>
<summary>multiplication or '*'</summary>
</details>

<details>
<summary>matrix multiplication or '@'</summary>
</details>

## References

[1]: Kühn, W. (1998). Rigorously computed orbits of dynamical systems without the wrapping effect. Computing, 61(1),
47-67.

[2]: Althoff, M., & Krogh, B. H. (2012, April). Avoiding geometric intersection operations in reachability analysis of
hybrid systems. In Proceedings of the 15th ACM international conference on Hybrid Systems: Computation and Control (pp.
45-54).
