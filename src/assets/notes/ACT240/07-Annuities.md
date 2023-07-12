# Annuities
Financial transactions may involve a series of payments, such as periodic dividend payments to stock holders, monthly loan payments, or annual interest payments on a coupon bond.

An **annuity** describes a series of payments. The geometric series summation formula is useful for these calcuiations:
$$1+x^2+\dots+x^k=\frac{1-x^{k+1}}{1-x}=\frac{x^{k+1}-1}{x-1}$$
## Annuity-Immediate
An annuity immediate is a series of $n$ equally spaced periodic payments of amount 1 each, with interest at effect rate $i$ per payment period.

### Present Value
The present value one period before the first payment, denoted as $a_{\angl{n},i}$, is given by:
$$a_{\angl{n},i}=\sum_{t=1}^{n}v(t)$$
In the case of compound interest, $v(t)=v^t$, so this expression simplifies to:
$$\ani{n}{i}=v+v^2+v^3+\dots+v^n=\frac{1-v^n}{i}$$
If a loan of amount $L$ is to be repaid by $n$ level payments of amount $K$ each, starting one period after the loan is made, and if interest rate is $i$ per period, then:
$$L=K\ai{n}$$
This equation links the loan amount to the present value of the series of payments that repays the loan.

### Example
Consider an investment of $\$5000$ at $6\%$ convertible semiannually. How much can be withdrawn each half-year to use up the fund exactly at the end of 20 years?
![[Screenshot_20220613-015640_Obsidian.jpg]]

### Accumulated Value
Similarly, the accumulated value denoted $\sni{n}{i}$, is computed as:
$$\sni{n}{i}=\sum_{t=1}^{n}\frac{A(n)}{A(t)}$$
For compound interest, $v(t)=v^t$, so this expression simplifies to:
$$\sni{n}{i}=1+(1+i)+(1+i)^2+\dots+(1+i^{n-1})=\frac{(1+i)^n-1}{i}$$
This is useful when making a series of level deposits at the same frequency into an account earning interest. We would like to know the total accumulation.

Some obvious relationships arise from the definitions:
$$\ai{n}=v^n\si{n}$$
$$\si{n}=(1+i)^n\ai{n}$$
Some recursive relationships are:
$$\ai{n+1}=v(1+\ai{n})$$
$$\si{n+1}=1+(1+i)\si{n}$$

### Example
$10000$ can be invested under two options:
1. Deposit the $10000$ into a fund earning an annual effective rate of $i$
2. Purchase an annuity-immediate with $24$ level annual payments at an annual effective interest rate of $10\%$. The payments are deposited into a fund earning an annual effective rate of $5\%$. Both options produce the same accumulated value at the end of $24$ years. Calculate $i$.
![[Screenshot_20220613-022841_Obsidian.jpg]]

## Annuity-Due
An annuity-due is a series of $n$ equally spaced periodic payments of $1$ each, starting NOW, with interest at effective rate $i$ per payment period.

### Present Value
The present value at the SAME period in which the first payment takes place is:
$$\and{n}{i}=\sum_{t=0}^{n-1}v(t)$$
In the case of compound interest, $v(t)=v^t$, so this expression simplifies to:
$$\and{n}{i}=1+v+v^2+v^3+\dots+v^{n-1}=\frac{1-v^n}{d}$$
Here, $d$ is the discount rate equivalent to the interest rate $i$.

### Accumulated Value
The accumulated value is denoted as $s$, and can be computed as:
$$\snd{n}{i}=\sum_{t=0}^{n-1}\frac{A(n)}{A(t)}$$
In the case of compound interest, $v(t)=v^t$, so this expression simplifies to:
$$\snd{n}{i}=(1+i)+(1+i)^2+\dots+(1+i)^n=\frac{(1+i)^n-1}{d}$$
Some obvious relationships arise from the definitions:
$$\ad{n}=v^n\sd{n}$$
$$\sd{n}=(1+i)^n\ad{n}$$
Some recursive relationships are:
$$\ad{n+1}=1+v\ad{n}$$
$$\sd{n+1}=(1+i)(1+\sd{n})$$
## Annuity-Due and Annuity-Immediate
Relationships between annuities immediate and annuities due:
$$\ad{n}=(1+i)\ai{n}=1+\ai{n-1}$$
$$\sd{n}=(1+i)\si{n}=\si{n+1}-1$$

### Example
Jeff and John shared equally in an inheritance. Using his inheritance, John immediately bought a 10-year annuity-due with annual payments of 2500 each. Jeff put his inheritance in an investment fund earning an annual effective interest rate of $9\%$. Two years later, Jeff bought a 15-year annuity-immediate with annual payments of $Z$. The present value of both annuities were determined using an annual effective interest rate of $8\%$. Calculate $Z$.
![[Screenshot_20220613-105057_Obsidian.jpg]]

## Perpetuities
A perpetuity is an annuity that continues forever. The present value of a perpetuity-immediate can be expressed in a number of ways:
$$\ani{\infty}{i}=\ai{\infty}=\lim_{n\rightarrow \infty}\ai{n}=\lim_{n\rightarrow\infty}\frac{1-v^n}{i}=\frac{1}{i}$$
Similarly, for present value of a perpetuity-due of 1 per period:
$$\and{\infty}{i}=\ad{\infty}=\lim_{n\rightarrow \infty}\ad{n}=\lim_{n\rightarrow\infty}\frac{1-v^n}{d}=\frac{1}{d}$$

## Deferred Annuity
A deferred annuity is one for which the first payment starts sometime in the future. Consider an annuity with $n$ unit payments for which the first payment is due at time $m+1$.

%Insert cash flow image

The present value at time $t=0$ is denoted as $_{m|}\ani{n}{i}$, and under compound interest, we have:
$$_{m|}\ani{n}{i}=v^m\ani{n}{i}=\ani{m+n}{i}-\ani{n}{i}$$
Similarly, if we consider the due case, in which the payment starts from time $m$ and ends in time $m+n-1$, then the present value, $_{m|}\and{n}{i}$, under compound interest is:
$$_{m|}\and{n}{i}=v^m\and{n}{i}=\and{m+n}{i}-\ad{n}{i}$$
## Annuities as Lego Pieces
We can use these schemes we've defined so far as "lego" pieces to compute present/future values of more complicated schemes.

This idea is helpful when the interest rate is not level but changes with time. We must be careful to decompose the payments into the intervals in which the interest rate is level, and also be careful to use the appropriate interest rate during the appropriate time interval.

### Example
Eloise plans to accumulate $100000$ at the end of 42 years. She makes the following deposits:
1. $X$ at the beginning of year 1-14
2. No deposits at the beginning of years 15-32
3. $Y$ at the beginning of years 33-42
The annual effective interest rate is $7\%$. $X-Y=100$. Calculate $Y$.
![[Screenshot_20220613-114211_Samsung Notes.jpg]]

### Example
John deposits 100 at the end of each year for 20 years into a fund earning an annual effective interest rate of $7\%$. Mary makes 20 deposits into a fund at the end of each year for 20 years. The first 10 deposits are 100 each, while the last 10 deposits are $100+X$ each. Mary's fund earns an annual effective interest rate of $8\%$ during the first 10 years and $6\%$ annual effective thereafter. At the end of 20 years, the amount in John's fund equals the amount in Mary's fund. Calculate $X$.
![[Screenshot_20220613-115521_Samsung Notes.jpg]]