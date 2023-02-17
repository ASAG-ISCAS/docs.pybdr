---
sidebar_position: 5
---

# Models

We also provide several frequently used models for tests.

---

### Van der Pol oscillator

$$
\frac{d^2X}{dt^2}-\mu (1-X^2) \frac{dX}{dt} +X =0
$$

We provide a two-dimensional form as

$$
\begin{align*}
\dot{x} &=y \\
\dot{y} &=\mu (1-x^2)y-x \\
\mu &=1
\end{align*}
$$

#### References

\[1\]: Wikipedia contributors. (2022, May 3). Van der Pol oscillator. In Wikipedia, The Free Encyclopedia. Retrieved 09:
47, June 8, 2022, from https://en.wikipedia.org/w/index.php?title=Van_der_Pol_oscillator&oldid=1085958541

---

### Coupled Van der Pol oscillator

$$
\begin{align*}
\dot{x}_{0} &= x_{1} \\
\dot{x}_{1} &= (1-x_{0}^{2})x_{1} - x_{0} + (x_{2}-x_{0}) \\
\dot{x}_{2} &= x_{3} \\
\dot{x}_{3} &= (1-x_{2}^{2})x_{3} - x_{2} + (x_{0}-x_{2})
\end{align*}
$$

#### References

\[1\]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).

---

### 2D LTV System

$$
\begin{align*}
\dot{x} &= -x +ty+t+u_{1} +v_{1} \\
\dot{y} &= t^2x+y-t+u_{2} +v_{2}
\end{align*}
$$

#### References

[1]: 2-dimensional Linear Time-Varying(LTV) system with Time-Varying(TV) and Time-Invariant(TI)
uncertainties, from https://flowstar.org/benchmarks/2-dimensional-ltv-system/

---

### Laub-Loomis

$$
\begin{align*}
\dot{x}_{0} &= 1.4 x_{2} - 0.9 x_{0} \\
\dot{x}_{1} &= 2.5 x_{4} - 1.5 x_{1} \\
\dot{x}_{2} &= 0.6x_{6} - 0.8 x_{1} x_{2} \\
\dot{x}_{3} &= 2 - 1.3 x_{2} x_{3} \\
\dot{x}_{4} &= 0.7 x_{0} - x_{3}x_{4} \\
\dot{x}_{5} &= 0.3 x_{1} - 3.1 x_{5} \\
\dot{x}_{6} &= 1.8 x_{5} - 1.5 x_{1} x_{6}
\end{align*}
$$

#### References

[1]: Laub, M. T., & Loomis, W. F. (1998). A molecular network that produces spontaneous oscillations in excitable cells
of Dictyostelium. Molecular biology of the cell, 9(12), 3521-3532.

---

### Cellular p53

$$
\begin{align*}
\dot{x}_{0} &= (0.5 - 9.963 \times 10^{-6} x_{0} x_{4} - 1.925 \times 10^{-5} x_{0}) \times 3600 \\
\dot{x}_{1} &= (1.5 \times 10^{-3} + 1.5 \times 10^{-2} (x_{0}^{2} / (547600 + x_{0}^{2})) - 8 \times 10^{-4} x_{1})
\times 3600 \\
\dot{x}_{2} &= (8 \times 10^{-4} x_{1} - 1.444 \times 10^{-4} x_{2}) \times 3600 \\
\dot{x}_{3} &= (1.66 \times 10^{-2} x_{2} - 9 \times 10^{-4} x_{3}) \times 3600 \\
\dot{x}_{4} &= (9 \times 10^{-4} x_{3} - 1.66 \times 10^{-7} x_{3} 2 - 9.963 \times 10^{-6} x_{4} x_{5}) \times 3600 \\
\dot{x}_{5} &= (0.5 - 3.209 \times 10^{-5} x_{5} - 9.963 \times 10^{-6} x_{4} x_{5}) \times 3600
\end{align*}
$$

#### References

[1]: Leenders, G. B., & Tuszynski, J. A. (2013). Stochastic and deterministic models of cellular p53 regulation.
Frontiers in oncology, 3, 64.

---

### 9D Genetic oscillator

$$
\begin{align*}
\dot{x}_{0} &= 50 x_{2} - 0.1 x_{0} x_{5} \\
\dot{x}_{1} &= 100 x_{3} - x_{0} x_{1} \\
\dot{x}_{2} &= 0.1 x_{0} x_{5} - 50 x_{2} \\
\dot{x}_{3} &= x_{1} x_{5} - 100 x_{3} \\
\dot{x}_{4} &= 5 x_{2} + 0.5 x_{0} - 10 x_{4} \\
\dot{x}_{5} &= 50 x_{4} + 50 x_{2} + 100 x_{3} - x_{5} (0.1 x_{0} + x_{1} + 2 x_{7} + 1) \\
\dot{x}_{6} &= 50 x_{3} + 0.01 x_{1} - 0.5 x_{6} \\
\dot{x}_{7} &= 0.5 x_{6} - 2x_{5} x_{7} + x_{8} - 0.2 x_{7} \\
\dot{x}_{8} &= 2 x_{5} x_{7} - x_{8}
\end{align*}
$$

##### References

[1]: Vilar, J. M., Kueh, H. Y., Barkai, N., & Leibler, S. (2002). Mechanisms of noise-resistance in genetic oscillators.
Proceedings of the National Academy of Sciences, 99(9), 5988-5992.

---

### Water Tank 6Eq

$$
\begin{align*}
\dot{x}_{0} &= u_{0} + 0.1 + k_{1} (4 -x_{5}) - k_{0} \sqrt{2gx_{0}} \\
\dot{x}_{1} &= k_{0} \sqrt{2g (x_{0}-x_{1})} \\
\dot{x}_{2} &= k_{0} \sqrt{2g (x_{1}-x_{2})} \\
\dot{x}_{3} &= k_{0} \sqrt{2g (x_{2}-x_{3})} \\
\dot{x}_{4} &= k_{0} \sqrt{2g (x_{3}-x_{4})} \\
\dot{x}_{5} &= k_{0} \sqrt{2g (x_{4}-x_{5})}
\end{align*}
$$

where $k_{0} = 0.015, k_{1}= 0.01, g=9.81$

##### References

[1]: Althoff, M., Stursberg, O., & Buss, M. (2008, December). Reachability analysis of
nonlinear systems with uncertain parameters using conservative linearization. In 2008
47th IEEE Conference on Decision and Control (pp. 4042-4048). IEEE.

---

### 2D ODE

$$
\begin{align*}
\dot{x}_{0} &= -0.5x_{0}-0.5x_{1}+0.5x_{0} x_{1} \\
\dot{x}_{1} &= -0.5x_{1} + 1 + u
\end{align*}
$$

#### References

[1]: Xue, B., Li, R., Zhan, N., & Fränzle, M. (2021, May). Reach-avoid analysis for stochastic discrete-time systems. In
2021 American Control Conference (ACC) (pp. 4879-4885). IEEE.

--- 

### Lotka-Volterra model of 2 variables

$$
\begin{align*}
\dot{x}_{0} &= 1.5 x_{0} - x_{0} x_{1} \\
\dot{x}_{1} &= -3 x_{1} + x_{0} x_{1} \\
\end{align*}
$$

#### References

[1]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).

---

### Lotka-Volterra model of 5 variables

$$
\begin{align*}
\dot{x}_{0} &= x_{0} (1-(x_{0}+0.85 x_{1} + 0.5 x_{4})) \\
\dot{x}_{1} &= x_{1} (1-(x_{1}+0.85 x_{2} + 0.5 x_{1})) \\
\dot{x}_{2} &= x_{2} (1-(x_{2}+0.85 x_{3} + 0.5 x_{2})) \\
\dot{x}_{3} &= x_{3} (1-(x_{3}+0.85 x_{4} + 0.5 x_{3})) \\
\dot{x}_{4} &= x_{4} (1-(x_{4}+0.85 x_{0} + 0.5 x_{4})) \\
\end{align*}
$$

#### References

\[1\]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).

---

### 2-state with polynomial vector field

$$
\begin{align*}
\dot{x}_{0} &= -0.42x_{0} - 1.05 x_{1} - 2.3 x_{0}^{2} -0.5 x_{0} x_{1} - x_{0}^{3} \\
\dot{x}_{1} &= 1.98 x_{0} + x_{0} x_{1}
\end{align*}
$$

#### References

[1]: Tan, W., & Packard, A. (2008). Stability region analysis using polynomial and composite polynomial Lyapunov
functions and sum-of-squares programming. IEEE Transactions on Automatic Control, 53(2), 565-571.

---

### Synchronous Machine

$$
\begin{align*}
\dot{x}_{0} &= x_1 \\
\dot{x}_{1} &= 0.2 - 0.7 \sin{x_{0}} -0.05x_{1}
\end{align*}
$$

#### References

[1]: Xue, B., She, Z., & Easwaran, A. (2016). Under-approximating backward reachable sets by polytopes. In Computer
Aided Verification: 28th International Conference, CAV 2016, Toronto, ON, Canada, July 17-23, 2016, Proceedings, Part I
28 (pp. 457-476). Springer International Publishing.

---

### Biological model of 7 variables

$$
\begin{align*}
\dot{x}_{0} &= -0.4 x_{0} + 5 x_{2} x_{3} \\
\dot{x}_{1} &= 0.4 x_{0} - x_{1} \\
\dot{x}_{2} &= x_{1} - 5 x_{2} x_{3} \\
\dot{x}_{3} &= 5 x_{4} x_{5} - 5 x_{2} x_{3} \\
\dot{x}_{4} &= -5 x_{4} x_{5} + 5 x_{2} x_{3} \\
\dot{x}_{5} &= 0.5 x_{6} - 5 x_{4} x_{5} \\
\dot{x}_{6} &= -0.5 x_{6} + 5 x_{4} x_{5} \\
\end{align*}
$$

#### References

\[1\]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).

---

### Biolgoical model of 9 variables

$$
\begin{align*}
\dot{x}_{0} &= 3 x_{2} - x_{0} x_{5} \\
\dot{x}_{1} &= x_{3} - x_{1} x_{5} \\
\dot{x}_{2} &= x_{0} x_{5} - 3 x_{2} \\
\dot{x}_{3} &= x_{1} x_{5} - x_{3} \\
\dot{x}_{4} &= 3 x_{2} + 5 x_{0} - x_{4} \\
\dot{x}_{5} &= 5 x_{4} + 3 x_{2} + x_{3} - x_{5} (x_{0}+x_{1}+2x_{7}+1) \\
\dot{x}_{6} &= 5 x_{3} + x_{1} - 0.5 x_{6} \\
\dot{x}_{7} &= 5 x_{6} - 2 x_{5} x_{7} + x_{8} - 0.2 x_{7} \\
\dot{x}_{8} &= 2 x_{5} x_{7} - x_{8} \\
\end{align*}
$$

#### References

\[1\]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).

---

### Jet engine

$$
\begin{align*}
\dot{x}_{0} &= -x_{1} - 1.5 x_{0}^2 -0.5 x_{0}^3 -0.5 \\
\dot{x}_{1} &= 3 x_{0} - x_{1}
\end{align*}
$$

#### References

\[1\]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).

---

### Spring-pendulum

$$
\begin{align*}
\dot{x}_{0} &= x_{2} \\
\dot{x}_{1} &= x_{3} \\
\dot{x}_{2} &= x_{0} x_{3}^2 + g \cos{\theta} - k (x_{0}-L) \\
\dot{x}_{3} &= - \frac{2 x_{2} x_{3} + g \sin{\theta}}{x_{0}} \\
k &= 2 \\
L &= 1 \\
g &= 9.8
\end{align*}
$$

#### References

\[1\]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).

---

### Brusselator

$$
\begin{align*}
\dot{x}_{0} &= A + x_{0}^2 x_{1} - B x_{0} - x_{0} \\
\dot{x}_{1} &= B x_{0} - x_{0}^2 x_{1} \\
A &= 1 \\
B &= 1.5
\end{align*}
$$

#### References

\[1\]: Chen, X. (2015). Reachability analysis of non-linear hybrid systems using taylor models (Doctoral dissertation,
Fachgruppe Informatik, RWTH Aachen University).
