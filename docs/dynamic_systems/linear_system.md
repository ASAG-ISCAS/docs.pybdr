---
sidebar_position: 1
---

# Linear System

## Definition

$$
\begin{align*}
\dot{x}(t)=Ax(t)+Bu(t)+c \\
y(t)=Cx(t)+Du(t)+k
\end{align*}
$$

where $x(t) \in \mathbb{R}^{n}$ is the system state, $u(t) \in \mathbb{R}^{m}$ is the system input, $y(t) \in
\mathbb{R}^{p}$ is the system output, and $A \in \mathbb{R}^{n \times n}$, $B \in \mathbb{R}^{n}$, $c \in
\mathbb{R}^{n}$, $C \in \mathbb{R}^{p \times n}$, $D \in \mathbb{R}^{p \times m}$, $k \in \mathbb{R}^{p}$.

## Example

$$
\begin{align*}
\begin{bmatrix}
\dot{x_{0}} \\
\dot{x_{1}}
\end{bmatrix} &=
\begin{bmatrix}
-2 & 0 \\
1 & -3
\end{bmatrix}
\begin{bmatrix}
x_{0} \\
x_{1}
\end{bmatrix} +
\begin{bmatrix}
1 \\
1
\end{bmatrix} u \\
y &=
\begin{bmatrix}
1 \ 0
\end{bmatrix}
\begin{bmatrix}
x_{0} \\
x_{1}
\end{bmatrix}
\end{align*}
$$
