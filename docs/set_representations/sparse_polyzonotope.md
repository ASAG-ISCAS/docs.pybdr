---
sidebar_position: 4
---

# Sparse Polynomial Zonotope

## Definition

$$
{\cal PZ} \coloneqq \left\{
\sum_{i=1}^{h} ( \prod_{k=1}^{p} \alpha_{k}^{E_{(k,i)}} ) G_{(\cdot, i)}^{D} +
\sum_{j=1}^{q} \beta_{j} G_{(\cdot, j)}^{I} \ \big| \
\alpha_{k}, \beta_{j} \in [-1,1]
\right\}
$$

shorthand as ${\cal PZ} = \left< G^{D}, G^{I},E,\mathrm{U}\right>_{\cal PZ} \in \R^{n}$, where $\mathrm{U} \in \N_{>
0}^{1 \times p}$ introduced as a row vector storing all unambiguous integer identifier for each dependent factor
$\alpha_{k}$.

## Example

$$
{\cal PZ}=\left<
\begin{bmatrix}
4 & 2 & 1 & 2 \\
4 & 0 & 2 & 2
\end{bmatrix},
\begin{bmatrix}
1 \\ 0
\end{bmatrix},
\begin{bmatrix}
0 & 1 & 0 & 3 \\
0 & 0 & 1 & 1
\end{bmatrix},
\begin{bmatrix}
0 & 1
\end{bmatrix}
\right>_{\cal PZ}
$$

defines the set

$$
{\cal PZ}=\left\{
\begin{bmatrix}
4 \\ 4
\end{bmatrix} +
\begin{bmatrix}
2 \\ 0
\end{bmatrix} \alpha_{0} +
\begin{bmatrix}
1 \\ 2
\end{bmatrix} \alpha_{1} +
\begin{bmatrix}
2 \\ 2
\end{bmatrix} \alpha_{0}^{3} \alpha_{1} +
\begin{bmatrix}
1 \\ 0
\end{bmatrix} \beta_{0} \ \bigg| \
\alpha_{0},\alpha_{1}, \beta_{0} \in [-1,1]
\right\}
$$

```python
from pyrat.geometry import SPZono
from pyrat.util.visualization import plot

# TODO
```

## Operations

### Exact Addition

### Cartesian Product

### Quadratic Map

### Convex Hull

### Order Reduction

### Restructure

## Arithmetic

<details>
<summary>addition or '+'</summary>

+ with another spzono
  $$
  {\cal PZ}_{0} \oplus {\cal PZ}_{1} =
  \left<
  \begin{bmatrix}
  G_{0}^{D} & G_{1}^{D}
  \end{bmatrix},
  \begin{bmatrix}
  G_{0}^{I} & G_{1}^{I}
  \end{bmatrix},
  \begin{bmatrix}
  E_{0} & \bold{0}^{p_{0},h_{1}} \\
  \bold{0}^{p_{1},h_{0}} & E_{1}
  \end{bmatrix}, \mathrm{U}(p_{0}+p_{1})
  \right>_{\cal PZ}
  $$
+ with another zonotope
  $$
  {\cal PZ} \oplus {\cal Z} =
  \left<
  \begin{bmatrix}
  c_{z} & G_{D}
  \end{bmatrix},
  \begin{bmatrix}
  G_{I,0} & G_{z}
  \end{bmatrix},
  \begin{bmatrix}
  \bold{0} & E_{0}
  \end{bmatrix},\mathrm{U}
  \right>_{\cal PZ}
  $$

</details>

<details>
<summary>Matrix multiplication or '@'</summary>

$$
M \otimes {\cal PZ} =
\left< M \otimes G,M \otimes G_{I},E,\mathrm{U} \right>_{PZ}
$$

</details>

## References

[1]: Kochdumper, N., & Althoff, M. (2020). Sparse polynomial zonotopes: A novel set representation for reachability
analysis. IEEE Transactions on Automatic Control, 66(9), 4043-4058.