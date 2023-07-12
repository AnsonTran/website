# Effective Rate of Discount
There are alternate ways for measuring investment behaviour. That is, for an effective interest rate, we can define an equivalent rate of discount.

The annual effective rate of discount measures investment growth, but in the context of formulating present value. $1-d$ is the present value of 1 due in 1 year.
$$d=\frac{\text{Amount of interest for the period}}{\text{Amount owing at the end of the period}}$$
From the definition of present value, we get:
$$v=\frac{1}{1+i}=1-d$$
Interest and rate of discount measure the same thing. We say $i$ and $d$ are equivalent rates when:
$$d=\frac{i}{1+i}=i\times v$$
$$i=\frac{d}{1-d}$$
Numerically, $d<i$ for positive rates. 

## Compound Discount
Compound discount can also be formulated, with the present value of 1 due in $n$ years being:
$$v(n)=(1-d)^n=v^n$$
At annual effective discount rate $d$, the accumulated value of 1 in $n$ years is:
$$a(n)=\frac{1}{v(n)}=(1-d)^{-n}$$
If the discount rate is equivalent to $i$, then accumulating/discounting using these functions should be the same as accumulating/discounting using the expressions involving the interest rate $i$.

### Example
A deposit of $X$ is made into a fund which pays an annual effective interest rate of $6\%$ for 10 years. At the same time, $X/2$ is deposited into another fund which pays an annual effective rate of discount of $d$ for 10 years. The amounts of interest earned over the 10 years are equal for both funds. Calculate $d$.
![[Screenshot_20220612-204758_Obsidian.jpg]]
