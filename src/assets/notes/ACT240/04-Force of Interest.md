# Force of Interest
Given an annual effective rate of interest, for any fraction of a year, we can find an equivalent interest rate compounded based on that fraction of a year.

We can extend this to a compounding period of one day, one hour, one second, etc. As the compounding time interval goes to 0, and the number of compounding periods per year, $m$, goes to $\infty$, $i^{(m)}$ approaches $i^{(\infty)}$.

The limit is referred to as continuous compounding, and the corresponding nominal annual rate limit $i^{(\infty)}$, is called the force of interest.

Recall the Euler's rule:
$$e^x=\lim_{n \rightarrow \infty}(1+\frac{x}{n})^n$$
We can derive the force of interest using nominal rate of interest:
$$ 1+i = (1+\frac{i^{(m)}}{m})^m $$
Taking the limit of the monthly part:
$$
\begin{align}
1+i &= \lim_{m \rightarrow \infty}(1+\frac{i^{(m)}}{m})^m\\
1+i &= e^{i^{(\infty)}}\\
ln(1+i) &= i^{(\infty)}
\end{align}
$$
Similarly for nominal rate of discount, we have:
$$
\begin{align}
1-d &=\lim_{m \rightarrow \infty}(1-\frac{d^{(m)}}{m})^{-m}\\
1-d &=e^{-i^{(\infty)}}\\
-ln(1-d)&=i^{(\infty)}
\end{align}
$$
Force of interest is a nominal annual interest or discount, **convertible continuously**, denoted as $i^{(\infty)}$ or $\delta$.

We have the following relationships between accumulation and discount factors:
$$a(t)=(1+i)^t=(1-d)^{-t}=e^{\delta t}$$
$$v(t)=(1+i)^{-t}=(1-d)^t=e^{-\delta t}$$
### Example
On September 1, 2017, a bank is offering a 6-month investment with a nominal annual interest rate of $8\%$ compounded semiannually. Smith invests $\$10000$ into this investment. On March 1, 2018, Smith's investment matures and the bank offers another 6-month investment with a nominal annual interest rate of $12\%$ compounded semiannually. On that date, Smith invests the proceedings from the first investment into the new 6-month investment.
1. Find Smith's equivalent annual effective return $j$ based on the first 6-month investment
2. Find Smith's equivalent annual effective return $k$, based on the second 6-month investment.
3. Find Smith's annual effective return $i$ for the one year period of the combined investments.
4. Find the equivalent force of interest $\delta_j$, on Smith's investment during the first 6-month period
5. Find the equivalent force of interest $\delta_k$ during the second 6-month period
6. Find Smith's equivalent force of interest $\delta$ for the one year period of the combined investments.
![[Screenshot_20220612-233733_Obsidian.jpg]]

## General Force of Interest
There is a more general way of defining the force of interest being earned by a fund at a particular point in time $t$ for any accumulation function.

Suppose an investment of $1$ accumulates according to an accumulation function $a(t)$. Now consider the interval of time from time $t$ to $t+1$. The annual effective interest rate for that interval is:
$$i_{t,t+1}=\frac{\text{Interest earned in} (t,t+1)}{\text{Value at time t}}=\frac{a(t+1)-a(t)}{a(t)}$$
Analagously, the nominal annual rate of interest compounded $m$ times per year for the $1/m$-th year period from time $t$ to $t+\frac{1}{m}$ is:
$$i_{t,t+\frac{1}{m}}^{(m)}=m\frac{a(t+\frac{1}{m})-a(t)}{a(t)}=\frac{a(t+\frac{1}{m})-a(t)}{a(t)(\frac{1}{m})}$$
We can take the limit as $m \rightarrow \infty$, and the resulting limit is the forst of interest at time $t$, denoted $\delta_t$.
$$\delta_t=\lim_{m \rightarrow \infty}\frac{a(t+\frac{1}{m})-a(t)}{a(t)(\frac{1}{m})}=\frac{1}{a(t)}\lim_{h\rightarrow 0}\frac{a(t+h)-a(t)}{h}=\frac{a'(t)}{a(t)}$$
Equivalently, by the chain rule:
$$\frac{a'(t)}{a(t)}=\frac{d}{dt}ln(a(t))$$
The instantaneous rate at time $t$ is $a'(t)$ at which the total investment value is changing. Hence, the ratio $\frac{a'(t)}{a(t)}$ is that rate but per dollar invested.

Accumulated value can be expressed in terms of the force of interest $\delta_t$.
$$
\begin{align}
\frac{d}{dt}ln(a(t)) &= \delta_s\\
ln(a(t)) &= \int_0^t\delta_s\\
a(t) &= exp(\int_0^t \delta_s ds)
\end{align}
$$
Equivalently, present value can be expressed as:
$$v(t)=exp(-\int_0^t\delta_sds)$$

### Compound Interest
For an accumulation function $a(t)=(1+i)^t$, the force of interest is:
$$\delta_t=\frac{a'(t)}{a(t)}=\frac{(i+1)^tln(1+i)}{(1+i)^t}=ln(1+i)=\delta$$
### Simple Interest
For an accumulation function $a(t)=1+it$, the force of interest is:
$$\delta_t=\frac{i}{1+it}$$
### Example
At a force of interest $\delta_t=\frac{.1}{1+.1t}, 0\leq t\leq 14$, the following payments have the same present value:
1. $X$ at the end of year 5 plus $2X$ at the end of year 10
2. $Y$ at the end of year 14
Calculate $\frac{Y}{X}$.
![[Screenshot_20220613-005230_Obsidian.jpg]]

### Example
On 1/1/2017, Kelly deposits $X$ into a bank account. The account is credited with simple interest at a rate of $10\%$ per year. On the same date, Tara deposits $X$ into a different bank account. The account is credited with interest using a force of interest $\delta_t=\frac{2t}{t^2+k}$. From the end of the 4th year until the end of the 8th year, both accounts earn the same dollar amount of interest. Calculate $k$.
![[Screenshot_20220613-011443_Obsidian.jpg]]

## Average Rate
In general, the average annual effective growth factor for a period of years is the geometric average of the growth factors for the various years.

For instance, if we use compound interest with different interest rates by year, then the average rate of a set of annual effective rates $i_1,\dots,i_n$ denoted as $i_a$ is given by:
$$(1+i_a)=((1+i_1)(1+i_2)\dots(1+i_n))^{\frac{1}{n}}$$
These can incorporate all the different ways interest rates are quoted:
$$(1+j)^4=(1+i)(1-d)^{-1}e^{\delta}(1+\frac{i^{(m)}}{m})^m$$