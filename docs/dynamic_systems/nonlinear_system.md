---
sidebar_position: 2
---

# NonLinear System

## Definition

$$
\dot{x} = f(x(t),u(t))
$$

where $x(t) \in \mathbb{R}^{n}$ is the system state, $u(t) \in \mathbb{R}^{m}$ is the system input, and $f:
\mathbb{R}^{n} \times \mathbb{R}^{m} \rightarrow \mathbb{R}^{n}$ is sufficiently smooth.

## Example

$$
\begin{bmatrix}
\dot{x}_{0} \\\\
\dot{x}\_{1}
\end{bmatrix} =
\begin{bmatrix}
x\_{1} + u \\\\
(1- x\_{0}^{2}) x\_{1} -x\_{0}
\end{bmatrix}
$$

```python
from pyrat.dynamic_system import NonLinSys
import numpy as np

# TODO
```

## Operations

### evaluate