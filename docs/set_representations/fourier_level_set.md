---
sidebar_position: 6
---

# Fourier Level Set

## Definition

$$
{\cal FLS} := \left\{
c+ \beta \sum_k^n \bigg[ a_k cos(k\theta) + b_k sin(k\theta) \bigg] + R^n(\theta), \theta \in D, \beta \in [0,1]
\right\}
$$

where $I_{\infty}^n = \sum_{k=n+1}^{\infty} \bigg[ a_k cos(k\theta) + b_k sin(k\theta) \bigg]$ refers to the max error
remainder, only depends on $n$.

shorthand as ${\cal FLS}=\left< c,A,B,I_{\infty}^n \right>$.

## Pre

$$
\begin{align*}
cos(\alpha + \beta) &= cos(\alpha) cos(\beta) - sin(\alpha) sin(\beta) \\
cos(\alpha - \beta) &= cos(\alpha) cos(\beta) + sin(\alpha) sin(\beta) \\
sin(\alpha + \beta) &= sin(\alpha) cos(\beta) + cos(\alpha) sin(\beta) \\
sin(\alpha - \beta) &= sin(\alpha) cos(\beta) - cos(\alpha) sin(\beta) \\
Asin(\alpha) + B sin(\beta) &= A sin(\frac{\alpha + \beta}{2} + \frac{\alpha - \beta}{2}) +
B sin(\frac{\alpha + \beta}{2} - \frac{\alpha - \beta}{2}) \\&=
A sin(\frac{\alpha + \beta}{2})cos(\frac{\alpha - \beta}{2}) + A cos(\frac{\alpha + \beta}{2})sin(\frac{\alpha -
\beta}{2}) \\ &+
B sin(\frac{\alpha + \beta}{2})cos(\frac{\alpha - \beta}{2}) - B cos(\frac{\alpha + \beta}{2})sin(\frac{\alpha -
\beta}{2}) \\ &=
(A+B) sin(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) + (A-B) cos(\frac{\alpha+
\beta}{2}) sin(\frac{\alpha- \beta}{2})
\\& \subseteq
(A+B) sin(\frac{\alpha + \beta}{2}) + (A-B) cos(\frac{\alpha + \beta}{2}), \alpha, \beta \in [0,2\pi] \\
Acos(\alpha) + B cos(\beta) &= A cos(\frac{\alpha + \beta}{2} + \frac{\alpha - \beta}{2}) +
B cos(\frac{\alpha + \beta}{2} - \frac{\alpha - \beta}{2}) \\ &=
A cos(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) -
A sin(\frac{\alpha + \beta}{2})sin(\frac{\alpha - \beta}{2}) \\&+
B cos(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) +
B sin(\frac{\alpha + \beta}{2})sin(\frac{\alpha - \beta}{2})  \\ &=
(A+B) cos(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) +
(B-A) sin(\frac{\alpha + \beta}{2}) sin(\frac{\alpha - \beta}{2})
\\ &\subseteq
(A+B) cos(\frac{\alpha + \beta}{2}) + (B-A) sin(\frac{\alpha + \beta}{2}), \alpha, \beta \in [0, 2\pi]
\end{align*}
$$

## Arithmetic

### addition or '+'

$$
\begin{align*}
{\cal FLS_0} + {\cal FLS_1} &= \left\{
x_0 + x_1 | x_0 \in {\cal FLS_0}, x_1 \in {\cal FLS_1}
\right\} \\ &= \left\{
{x | x=c_0 + \beta_0 \sum_i^n \bigg[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \bigg] +
c_1 + \beta_1 \sum_i^n \bigg[a_i^1 cos(i\theta_1) + b_i^1 sin(i\theta_1) \bigg]}, \theta_{0,1} \in D, \beta_{0,1}
\in [0,1] \right\} \\&=
\left\{
x | x = c_0 + c_1 + \sum_i^n
\bigg[ \beta_0 a_i^0 cos(i\theta_0) + \beta_1 a_i^1 cos(i\theta_1)+
\beta_0 b_i^0 sin(i\theta_0) + \beta_1 b_i^1 sin(i\theta_1)\bigg], \theta_{0,1} \in D, \beta_{0,1} \in [0,1]
\right\} \\ & \subseteq
\left\{
x | x= c_0 + c_1 + \sum_i^n \bigg[ (\beta_0 a_i^0 + \beta_1 a_i^1) cos(\frac{i(\theta_0+\theta_1)}{2}) +
(\beta_1 a_i^1 - \beta_0 a_i^0) sin(\frac{i(\theta_0+\theta_1)}{2}) +
(\beta_0 b_i^0 + \beta_1 b_i^1) sin(\frac{i(\theta_0+\theta_1)}{2}) +
(\beta_0 b_i^0 - \beta_1 b_i^1) cos(\frac{i(\theta_0 + \theta_1)}{2})
\bigg] \right\} \\&=
\left\{
x| x= c_0 + c_1 + \sum_i^n \bigg[
[\beta_0(a_i^0+b_i^0) + \beta_1(a_i^1-b_i^1)] cos(\frac{i(\theta_0 + \theta_1)}{2}) +
[\beta_0(b_i^0 - a_i^0) + \beta_1(a_i^1+b_i^1)] sin(\frac{i(\theta_0 + \theta_1)}{2})
\bigg]\right\} \\ &\subseteq
\left\{
x | x =c_0+ c_1 + \beta \sum_i^n \bigg[
(a_i^0+b_i^0+a_i^1-b_i^1) cos(i\theta) + (-a_i^0+b_i^0+a_i^1+b_i^1) sin(i\theta)\bigg], \theta \in D, \beta \in [0,1]
\right\} \\&=
\left<c_0+c_1, A_0+B_0+A_1-B_1, -A_0 +B_0 +A_1 +B_1, I_{\infty}^n \right>
\end{align*}
$$

### elementwise multiplication or '*'

+ with another real number
  $$
  a \cdot {\cal FS} = < ac , a A, aB,I_{\infty}^n >
  $$

+ with another fourier surface

$$
\begin{align*}
{\cal FLS_0} \cdot {\cal FLS_1} &= \left\{x_0 x_1 | x_0 \in {\cal FLS_0}, x_1 \in {\cal FLS_1} \right\} \\ &=
\left\{
x | x= \bigg[ c_0 + \beta_0 \sum_i^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big] \bigg]
\bigg[ c_1 + \beta_1 \sum_j^n \big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big] \bigg]
\right\} \\&=
\left\{
x | x =
c_0 c_1 + \beta_1 \sum_j^n c_0 \big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big]  +
\beta_0 \sum_i^1 c_1 \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big] +
\beta_0 \beta_1 \sum_i^n \sum_j^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big]
\big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big]
\right\} \\ & \subseteq
\left\{
x | x = c_0 c_1 +
\sum_i^n \bigg[
[\beta_0 c_1(a_i^0+b_i^0) + \beta_1 c_0(a_i^1-b_i^1)] cos(\frac{i(\theta_0 + \theta_1)}{2}) +
[\beta_0 c_1(b_i^0 - a_i^0) + \beta_1 c_0(a_i^1+b_i^1)] sin(\frac{i(\theta_0 + \theta_1)}{2})
\bigg] +
\right\}
\end{align*}
$$

$$
\begin{align*}
{\cal FS_0} * {\cal FS_1} &=
\left\{ c_0 + \sum_i^n \bigg[ a_i cos(it) + b_i sin(it) \bigg]
\right\} \cdot
\left\{ c_1 + \sum_j^n \bigg[ a_j cos(jt) + b_j sin(jt) \bigg]
\right\} \\
&=c_0 c_1 + c_0\sum_j^n \bigg[ a_j cos(jt) + b_j sin(jt) \bigg] +
c_1 \sum_i^n \bigg[ a_i cos(it) + b_i sin(it) \bigg] \\ &+
\sum_i^n \sum_j^n \bigg[ a_i cos(it) + b_i sin(it) \bigg] \bigg[ a_j cos(jt) + b_j sin(jt) \bigg] \\ &=
c_0 c_1 + c_0 (A_0+B_0) + c_1 (A_1+B_1) \\& +
\sum_i^n \sum_j^n \left[
a_i a_j cos(it) cos(jt) + a_i b_j cos(it)sin(jt) + b_i a_j sin(it)cos(jt) + b_i b_j sin(it)sin(jt)
\right] \\&=
c_0 c_1 + c_0 (A_0+B_0) + c_1 (A_1+B_1) \\& +
\frac{1}{2} \sum_{i+j<=n} \left\{ a_i a_j cos[(i+j)t] + a_i b_j sin[(i+j)t] + b_i a_j sin[(i+j)t] + b_i b_j cos[(i+j)t]
\right\} \\ &+ \frac{1}{2} \sum_i^n \sum_j^n \left\{
a_i a_j cos[(i-j)t] - a_i b_j sin[(i-j)t]  + b_i a_j sin[(i-j)t] - b_i b_j cos[(i-j)t]
\right\}
\end{align*}
$$

### matrix multiplication or '@'

+ real matrix with fourier surface matrix

$$
(X[F])_{ij} = \sum_{k=1}^{n} X_{ik} [F]_{kj}
$$

+ fourier surface matrix with real matrix

$$
([F]X)_{ij} = \sum_{k=1}^{n} [F]_{ik} X_{kj}
$$

+ fourier surface matrix with fourier surface matrix

$$
([F_0][F_1])_{ij} = \sum_{k=1}^{n} [F_0]_{ik} [F_1]_{kj}
$$