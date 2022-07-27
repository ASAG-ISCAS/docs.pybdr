---
sidebar_position: 6
---

# Fourier Set

## Definition

$$
{\cal FS}= \{x | x= c+ \sum_{i=1}^n \big[a_i cos(i\theta) + b_i sin(i\theta) \big] \} , \theta \in [0,2\pi]
$$

structure the error distributed inside the given interval, this mapping makes us can describe the error chang explicitly

shorthand as ${\cal FS}=\left< c ,A, B, \Alpha \right>$. where $n$ defines the max allowed frequency used to describe
the error
inside one interval.

## Pre

$$
\begin{align*}
cos(\alpha + \beta) &= cos(\alpha) cos(\beta) - sin(\alpha) sin(\beta) \\
cos(\alpha - \beta) &= cos(\alpha) cos(\beta) + sin(\alpha) sin(\beta) \\
sin(\alpha + \beta) &= sin(\alpha) cos(\beta) + cos(\alpha) sin(\beta) \\
sin(\alpha - \beta) &= sin(\alpha) cos(\beta) - cos(\alpha) sin(\beta) \\
sin\alpha \cdot cos\beta &= \frac{1}{2} [sin(\alpha+ \beta) + sin(\alpha - \beta) ] \\
cos\alpha \cdot sin\beta &= \frac{1}{2} [sin(\alpha+ \beta) - sin(\alpha - \beta) ] \\
cos\alpha \cdot cos\beta &= \frac{1}{2} [cos(\alpha+ \beta) + cos(\alpha - \beta) ] \\
sin\alpha \cdot sin\beta &= \frac{1}{2} [cos(\alpha+ \beta) - cos(\alpha - \beta) ] \\
\big\{ x| x=Asin(\alpha) + B sin(\beta), \alpha,\beta \in [0,2\pi] \big\}&= A sin(\frac{\alpha + \beta}{2} +
\frac{\alpha - \beta}{2}) +
B sin(\frac{\alpha + \beta}{2} - \frac{\alpha - \beta}{2}) \\&=
A sin(\frac{\alpha + \beta}{2})cos(\frac{\alpha - \beta}{2}) + A cos(\frac{\alpha + \beta}{2})sin(\frac{\alpha -
\beta}{2}) \\ &+
B sin(\frac{\alpha + \beta}{2})cos(\frac{\alpha - \beta}{2}) - B cos(\frac{\alpha + \beta}{2})sin(\frac{\alpha -
\beta}{2}) \\ &=
(A+B) sin(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) + (A-B) cos(\frac{\alpha+
\beta}{2}) sin(\frac{\alpha- \beta}{2})
\\& \subseteq
(A+B) sin(\frac{\alpha + \beta}{2}) + (A-B) cos(\frac{\alpha + \beta}{2}), \alpha, \beta \in [0,2\pi] \\&=
\big\{x | x = (A+B)sin(\theta) + (A-B) cos(\theta), \theta \in [0, 2\pi] \big\} \\
\big\{x| x= Acos(\alpha) + B cos(\beta),\alpha, \beta \in [0,2\pi] \big\}&= A cos(\frac{\alpha + \beta}{2} +
\frac{\alpha - \beta}{2}) +
B cos(\frac{\alpha + \beta}{2} - \frac{\alpha - \beta}{2}) \\ &=
A cos(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) -
A sin(\frac{\alpha + \beta}{2})sin(\frac{\alpha - \beta}{2}) \\&+
B cos(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) +
B sin(\frac{\alpha + \beta}{2})sin(\frac{\alpha - \beta}{2})  \\ &=
(A+B) cos(\frac{\alpha + \beta}{2}) cos(\frac{\alpha - \beta}{2}) +
(B-A) sin(\frac{\alpha + \beta}{2}) sin(\frac{\alpha - \beta}{2})
\\ &\subseteq
(A+B) cos(\frac{\alpha + \beta}{2}) + (B-A) sin(\frac{\alpha + \beta}{2}), \alpha, \beta \in [0, 2\pi] \\&=
\big\{x| x= (A+B) cos(\theta) + (B-A) sin(\theta), \theta \in [0,2\pi] \big\}
\end{align*}
$$

## Operation

### Conversion

from interval to fourier set

$$
\begin{align*}
[a,b]&=\{x | x= \frac{a+b}{2} + \frac{b-a}{2} sin(\theta)\}, \theta \in [0,2\pi] \\
&=\left< \frac{a+b}{2},[0,\cdots, 0],[\frac{b-a}{2}, \cdots, 0] \right>
\end{align*}
$$

## Arithmetic

### addition or '+'

+ with another real number
  $$
  \begin{align*}
  a+ {\cal FS} &= \big\{a+x| x \in {\cal FS} \big\} \\ &=
  \big\{ a +c + \sum_{i=1}^n \big[a_i cos(i\theta) + b_i sin(i\theta) \big] \big\} \\&=
  \left<a+c, A,B \right>
  \end{align*}
  $$

+ with another fourier set
  $$
  \begin{align*}
  {\cal FS_0} + {\cal FS_1} &= \big\{x_0+ x_1| x_0 \in {\cal FS_0}, x_1 \in {\cal FS_1} \big\} \\&=
  \big\{ x| x= c_0 + c_1 + \sum_{i=1}^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big] +
  \sum_{i=1}^n \big[a_i^1 cos(i\theta_1) + b_i^1 sin(i\theta_1) \big], \theta_{0,1} \in [0,2\pi]
  \big\} \\&=
  \big\{ x| x=c_0 + c_1 + \sum_{i=1}^n
  \big[ a_i^0 cos(i\theta_0) + a_i^1 cos(i\theta_1) + b_i^0 sin(i\theta_0)  + b_i^1 sin(i\theta_1) \big], \theta_{0,1}
  \in [0,2\pi] \big\}
  \\&\subseteq
  \big\{ x| x= c_0+c_1 + \sum_{i=1}^n
  \big[(a_i^0 + a_i^1) cos(\frac{\theta_0 + \theta_1}{2}) + (a_i^1-a_i^0) sin(\frac{\theta_0+\theta_1}{2}) +
  (b_i^0+ b_i^1) sin(\frac{\theta_0+\theta_1}{2}) + (b_i^0-b_i^1) cos(\frac{\theta_0+\theta-1}{2})
  \big], \theta_{0,1} \in [0,2\pi] \big\} \\ &=
  \big\{
  x| x=c_0+ c_1 + \sum_{i=1}^n
  \big[ (a_i^0+b_i^0+a_i^1-b_i^1) cos(\theta) + (-a_i^0 +b_i^0+a_i^1+b_i^1) sin(\theta) \big]
  ,\theta \in [0,2\pi]
  \big\} \\&=
  \left<c_0+c_1, A_0 +B_0+A_1-B_1,-A_0+B_0+A_1+B_1 \right>
  \end{align*}
  $$

### multiplication or '*'

with another real number

$$
\begin{align*}
a \cdot {\cal FS}&=\big\{x | x= ac + \sum_{i=1}^n \big[aa_i cos(i\theta) + ab_i sin(i\theta) \big], \theta \in [0,2\pi]
\big\} \\&=\left<ac,aA,aB \right>
\end{align*}
$$

with another fourier set

$$
\begin{align*}
{\cal FS_0} \cdot {\cal FS_1} &= \big\{x_0 x_1 | x_0 \in {\cal FS_0}, x_1 \in {\cal FS_1} \big\} \\&=
\big\{x| x= c_0 c_1 +
c_0 \sum_{j=1}^n \big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big] +
c_1 \sum_{i=1}^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big] +
\\&+
\sum_{i=1}^n \sum_{j=1}^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big]
\big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big], \theta_{0,1} \in [0, 2\pi]
\big\} \\&=
\big\{x | x= c_0 c_1 + \sum_{i=1}^n \big[  c_1 a_i^0 cos(i\theta_0)+c_0 a_i^1 cos(i\theta_1) +
c_1 b_i^0 sin(i\theta_0) + c_0 b_i^1 sin(i\theta_1)  \big] \\&+
\sum_{i=1}^n \sum_{j=1}^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big]
\big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big], \theta_{0,1} \in [0, 2\pi]
\big\} \\&\subseteq
\big\{x | x=c_0 c_1 + \sum_{i=1}^n \big[
(c_1 a_i^0 + c_0 a_i^1) cos(\frac{\theta_0 + \theta_1}{2}) +
(c_0 a_i^1 - c_1 a_i^0) sin(\frac{\theta_0 + \theta_1}{2}) +
(c_1 b_i^0 + c_0 b_i^1) sin(\frac{\theta_0 + \theta_1}{2}) +
(c_1 b_i^0 - c_0 b_i^1) cos(\frac{\theta_0 + \theta_1}{2})
\big] \\&+
\sum_{i=1}^n \sum_{j=1}^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big]
\big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big], \theta_{0,1} \in [0, 2\pi]
\big\} \\&=
\big\{
x | c_0 c_1 + \sum_{i=1}^n \big[
(c_1 a_i^0 + c_0 a_i^1 + c_1 b_i^0 - c_0 b_i^1) cos(\theta) +
(c_0 a_i^1 - c_1 a_i^0 + c_1 b_i^0 + c_0 b_i^1) sin(\theta)
\big] \\&+
\sum_{i=1}^n \sum_{j=1}^n \big[a_i^0 cos(i\theta_0) + b_i^0 sin(i\theta_0) \big]
\big[a_j^1 cos(j\theta_1) + b_j^1 sin(j\theta_1) \big],\ \ \theta,\theta_{0,1} \in [0, 2\pi]
\big\} \\&=
\big\{
x | x = c_0 c_1 + \sum_{i=1}^n \big[
(c_1 a_i^0 + c_0 a_i^1 + c_1 b_i^0 - c_0 b_i^1) cos(\theta) +
(c_0 a_i^1 - c_1 a_i^0 + c_1 b_i^0 + c_0 b_i^1) sin(\theta)
\big] \\&+
\sum_{i=1}^n \sum_{j=1}^n \big[
a_i^0 a_j^1 cos(i\theta_0)cos(j\theta_1) +
a_i^0 b_j^1 cos(i\theta_0)sin(j\theta_1) +
b_i^0 a_j^1 sin(i\theta_0)cos(j\theta_1) +
b_i^0 b_j^1 sin(i\theta_0)sin(j\theta_1)
\big]
\big\}
\end{align*}
$$
