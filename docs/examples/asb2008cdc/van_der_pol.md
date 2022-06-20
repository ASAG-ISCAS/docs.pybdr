---
sidebar_position: 1
---

# Van der Pol oscillator

## System

$$
\begin{align*}
\dot{x} &=y \\
\dot{y} &=\mu (1-x^2)y-x \\
\mu &=1
\end{align*}
$$

## Implementation

```python
# init dynamic system
system = NonLinSys.Entity(VanDerPol())

# settings for the computation
options = ASB2008CDC.Options()
options.t_end = 3.5
options.step = 0.004
options.tensor_order = 2
options.taylor_terms = 4
options.r0 = [Zonotope([1.4, 2.4], np.diag([0.17, 0.06]))]
options.u = Zonotope.zero(1, 1)
options.u_trans = np.zeros(1)

# settings for the using geometry
Zonotope.REDUCE_METHOD = Zonotope.REDUCE_METHOD.GIRARD
Zonotope.ORDER = 50

# reachable sets computation
tps = ASB2008CDC.reach(system, options)

# visualize the results
plot(tps, [0, 1])
```

## Results

![](imgs/van_der_pol.png)

