---
sidebar_position: 1
---

# Linear System

## Definition

$$
\dot{x}(t)=Ax(t)+Bu(t)+c \\\\
y(t)=Cx(t)+Du(t)+k
$$

where $x(t) \in \mathbb{R}^{n}$ is the system state, $u(t) \in \mathbb{R}^{m}$ is teh system input, $y(t) \in
\mathbb{R}^{p}$ is the system output, and $A \in \mathbb{R}^{n \times n}$, $B \in \mathbb{R}^{n}$, $c \in
\mathbb{R}^{n}$, $C \in \mathbb{R}^{p \times n}$, $D \in \mathbb{R}^{p \times m}$, $k \in \mathbb{R}^{p}$.

## Example

$$
\begin{bmatrix}
\dot{x\_{0}} \\\\
\dot{x\_{1}}
\end{bmatrix} =
\begin{bmatrix}
-2 & 0 \\\\
1 & -3
\end{bmatrix}
\begin{bmatrix}
x\_{0} \\\\
x\_{1}
\end{bmatrix} +
\begin{bmatrix}
1 \\\\
1
\end{bmatrix} u \\\\
y=
\begin{bmatrix}
1 \\ 0
\end{bmatrix}
\begin{bmatrix}
x\_{0} \\\\
x\_{1}
\end{bmatrix}
$$

```python
from pyrat.dynamic_system import LinSyS
import numpy as np

# TODO
```

## Operations

### evaluate