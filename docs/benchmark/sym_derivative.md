---
sidebar_position: 2
---

# High-dimensional Partial Derivative Based on Symbolic Computation

We test our implementation on a PC with following configurations:

| Hardware |                        Detail                        | 
|:--------:|:----------------------------------------------------:|
|   CPU    |  Intel(R) Core(TM) i7-11800H CPU @ 2.30GHz (8 CPUs)  |
|  Memory  |                         16GB                         |
|   GPU    |                       RTX3060                        |

## Settings

We construct a random six-dimensional dynamical system, calculated the 1st to 3rd order partial derivative tensor of the
system for each of the two variables, then evaluate the tensor as real number and interval.

```python
import numpy as np
from pyrat.geometry import Interval
from pyrat.model import tank6eq, Model
from pyrat.util.functional import performance_counter, performance_counter_start

m = Model(tank6eq, [6, 1])

time_start = performance_counter_start()
x, u = np.random.random(6), np.random.rand(1)

np_derivative_0 = m.evaluate((x, u), "numpy", 3, 0)
np_derivative_1 = m.evaluate((x, u), "numpy", 3, 1)
np_derivative_2 = m.evaluate((x, u), 'numpy', 0, 0)

x, u = Interval.rand(6), Interval.rand(1)
int_derivative_0 = m.evaluate((x, u), 'interval', 3, 0)
int_derivative_1 = m.evaluate((x, u), 'interval', 2, 0)
int_derivative_2 = m.evaluate((x, u), 'interval', 2, 0)
int_derivative_3 = m.evaluate((x, u), 'interval', 0, 1)

performance_counter(time_start, 'sym_derivative')
```

| Error | Time (second) | 
|:-----:|:-------------:|
|   0   |     0.44      |