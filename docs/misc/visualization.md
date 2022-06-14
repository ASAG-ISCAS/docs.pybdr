---
sidebar_position: 3
---

# Visualization

We also provide user-friendly and flexible API for interactive visualization. 2D and 3D visualization sharing same
API `plot`, different mode only depends on valid input specified dimensions for visualization. Following two demos
demonstrate very basic usage of this API.

## Example

```python title='examples/example_visualization.py'
import numpy as np
from pyrat.algorithm import HSCC2013
from pyrat.dynamic_system import NonLinSys
from pyrat.geometry import Geometry, Zonotope, cvt2, PolyZonotope
from pyrat.model import *
from pyrat.util.visualization import plot

# init dynamic system
system = NonLinSys.Entity(VanDerPol())

# settings for the computation
options = HSCC2013.Options()
options.t_end = 6.74
options.step = 0.005
options.taylor_terms = 4
options.tensor_order = 3
options.r0 = [Zonotope([1.4, 2.4], np.diag([0.17, 0.06]))]
options.u = Zonotope.zero(1, 1)
options.u_trans = np.zeros(1)

# settings for using Zonotope
Zonotope.ORDER = 50
Zonotope.INTERMEDIATE_ORDER = 50
Zonotope.ERROR_ORDER = 20

# reachable sets
reachable = HSCC2013.reach(system, options)
```

Once the computation completed, the reachable sets returned as `Reachable` container.

### 2D visualization

```python title='example/example_visualzation.py'
#...
reachable = HSCC2013.reach(system, options)
plot(reachable,[0,1])
```

### 3D visualization

```python title='example/example_visualzation.py'
#...
reachable = HSCC2013.reach(system, options)
plot(reachable,[0,1,2])
```