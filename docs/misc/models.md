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

[1]: Wikipedia contributors. (2022, May 3). Van der Pol oscillator. In Wikipedia, The Free Encyclopedia. Retrieved 09:
47, June 8, 2022, from https://en.wikipedia.org/w/index.php?title=Van_der_Pol_oscillator&oldid=1085958541

---

### 2D LTV System

$$
\begin{align*}
\dot{x} &= -x +ty+t+u\_{1} +v\_{1} \\
\dot{y} &= t^2x+y-t+u\_{2} +v\_{2}
\end{align*}
$$

#### References

[1]: 2-dimensional Linear Time-Varying(LTV) system with Time-Varying(TV) and Time-Invariant(TI)
uncertainties, from https://flowstar.org/benchmarks/2-dimensional-ltv-system/

---

### Laub-Loomis

$$
\begin{align*}
\dot{x}\_{0} &= 1.4 x\_{2} - 0.9 x\_{0} \\
\dot{x}\_{1} &= 2.5 x\_{4} - 1.5 x\_{1} \\
\dot{x}\_{2} &= 0.6x\_{6} - 0.8 x\_{1} x\_{2} \\
\dot{x}\_{3} &= 2 - 1.3 x\_{2} x\_{3} \\
\dot{x}\_{4} &= 0.7 x\_{0} - x\_{3}x\_{4} \\
\dot{x}\_{5} &= 0.3 x\_{1} - 3.1 x\_{5} \\
\dot{x}\_{6} &= 1.8 x\_{5} - 1.5 x\_{1} x\_{6}
\end{align*}
$$

#### References

[1]: Laub, M. T., & Loomis, W. F. (1998). A molecular network that produces spontaneous oscillations in excitable cells
of Dictyostelium. Molecular biology of the cell, 9(12), 3521-3532.

---

### Cellular p53

$$
\begin{align*}
\dot{x}\_{0} &= (0.5 - 9.963e-6 x_{0} x\_{4} - 1.925e-5 x\_{0}) \times 3600 \\
\dot{x}\_{1} &= (1.5e-3 + 1.5e-2 (x\_{0}^{2} / (547600 + x\_{0}^{2})) - 8e-4 x\_{1}) \times 3600 \\
\dot{x}\_{2} &= (8e-4 x\_{1} - 1.444e-4 x\_{2}) \times 3600 \\
\dot{x}\_{3} &= (1.66e-2 x\_{2} - 9e-4 x\_{3}) \times 3600 \\
\dot{x}\_{4} &= (9e-4 x\_{3} - 1.66e-7 x\_{3} 2 - 9.963e-6 x\_{4} x\_{5}) \times 3600 \\
\dot{x}\_{5} &= (0.5 - 3.209e-5 x\_{5} - 9.963e-6 x\_{4} x\_{5}) \times 3600
\end{align*}
$$

#### References

[1]: Leenders, G. B., & Tuszynski, J. A. (2013). Stochastic and deterministic models of cellular p53 regulation.
Frontiers in oncology, 3, 64.

---

### 9D Genetic oscillator

$$
\begin{align*}
\dot{x}\_{0} &= 50 x\_{2} - 0.1 x\_{0} x\_{5} \\
\dot{x}\_{1} &= 100 x\_{3} - x\_{0} x\_{1} \\
\dot{x}\_{2} &= 0.1 x\_{0} x\_{5} - 50 x\_{2} \\
\dot{x}\_{3} &= x\_{1} x\_{5} - 100 x\_{3}  \\
\dot{x}\_{4} &= 5 x\_{2} + 0.5 x\_{0} - 10 x\_{4} \\
\dot{x}\_{5} &= 50 x\_{4} + 50 x\_{2} + 100 x\_{3} - x\_{5} (0.1 x\_{0} + x\_{1} + 2 x\_{7} + 1) \\
\dot{x}\_{6} &= 50 x\_{3} + 0.01 x\_{1} - 0.5 x\_{6}  \\
\dot{x}\_{7} &= 0.5 x\_{6} - 2x\_{5} x\_{7} + x\_{8} - 0.2 x\_{7} \\
\dot{x}\_{8} &= 2 x\_{5} x\_{7} - x\_{8}
\end{align*}
$$

##### References

[1]: Vilar, J. M., Kueh, H. Y., Barkai, N., & Leibler, S. (2002). Mechanisms of noise-resistance in genetic oscillators.
Proceedings of the National Academy of Sciences, 99(9), 5988-5992.

---



