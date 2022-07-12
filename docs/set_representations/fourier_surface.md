---
sidebar_position: 6
---

# Fourier Surface

## Definition

$$
{\cal FS} := \left\{
c+ \sum_k^n \bigg[ a_k cos(kt) + b_k sin(kt) \bigg] + I_{\infty}, t \in D
\right\}
$$

where $I_{\infty} = \sum_{k=n+1}^{\infty} \bigg[ a_k cos(kt) + b_k sin(kt) \bigg]$ refers to the remainder.

shorthand as ${\cal FS}=\left< c,A,B,I_{\infty} \right>$.

## Arithmetic

### addition or '+'

$$
{\cal FS_0} + {\cal FS_1} = <c_0+c_1, A_0+A_1,B_0+B_1,I_{\infty}>
$$

### multiplication or '*'

+ with another real number
  $$
  a \cdot {\cal FS} = < ac , a A, aB,I_{\infty} >
  $$

+ with another fourier surface

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