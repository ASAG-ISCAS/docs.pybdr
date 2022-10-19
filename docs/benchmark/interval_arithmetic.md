---
sidebar_position: 1
---

# Interval Arithmetic

We test our implementation on a PC with following configurations:

| Hardware |                        Detail                        | 
|:--------:|:----------------------------------------------------:|
|   CPU    |  Intel(R) Core(TM) i7-11800H CPU @ 2.30GHz (8 CPUs)  |
|  Memory  |                         16GB                         |
|   GPU    |                       RTX3060                        |

## Settings

Numerical and interval tensors of size [100,10,10] were randomly generated to compute the addition, subtraction,
multiplication and division and matrix multiplication operations supporting the broadcast mechanism, respectively, and
the running times and operations were recorded.

```python
import numpy as np
from pyrat.geometry import Interval
from pyrat.util.functional import performance_counter_start, performance_counter

time_start = performance_counter_start()

a = Interval.rand(100, 100, 10) + Interval.rand(100, 100, 10)
b = Interval.rand(100, 100, 10) - Interval.rand(100, 100, 10)
c = Interval.rand(100, 100, 10) * Interval.rand(100, 100, 10)
d = Interval.rand(100, 100, 10) / Interval.rand(100, 100, 10)
e = Interval.rand(100, 100, 10) @ Interval.rand(100, 10, 10)
f = Interval.rand(100, 100, 10) @ np.random.rand(10, 10)

performance_counter(time_start, 'interval arithmetic')
```

| Error | Time (second) | 
|:-----:|:-------------:|
|   0   |    0.0022     |