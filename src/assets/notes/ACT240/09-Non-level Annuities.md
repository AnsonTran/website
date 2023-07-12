
Non-level Annuities
So far we have looked at annuities, with the same payment at each time period. Here, we will look at annuities whose payments increase geometrically and arithmetically.

## Geometric Progression
The basic form of an annuity whose payments follow a geometric progression is as follows. For an $n$-payment annuity, the payments are:
![[Screenshot_20220603-194735_Obsidian.jpg]]
Each payment increases in value, by the rate $r$, which usually means the rate of inflation. Could be decreasing geometrically, if $r$ is negative.

At an interest rate of $i$ per payment period, and $i \neq r$, the present value of the annuity, valued one period before the first payment (annuity-immediate) is:
$$Present\ Value=Kv+K(1+r)v^2+K(1+r)^2v^3+\dots+K(1+r)^{n-1}v^n=K\frac{1-(\frac{1+r}{1+i})^n}{i-r}$$
The accumulated value at the time of the final payment is:
$$Future\ Value = K\frac{1-(\frac{1+r}{1-r})^n}{i-r}(1+i)^n=K\frac{(1+i)^n-(1+r)^n}{i-r}$$
### Perpetuity
$$\lim_{n\to\infty}K\frac{1-(\frac{1+r}{1+i})^n}{i-r}$$
* If $r<i$, the perpetuity becomes $\frac{K}{i-r}$
* If $r>i$, the perpetuity becomes $0$
* If $r=i$, the perpetuity becomes $(1+r)v$, and the present value one period before the first payment becomes $nKv$.

### Example
Deposits are made at the end of each year for 25 years. The first deposit is $\$1000$ and each subsequent deposit is $4\%$ larger than the previous deposit.
1. Find the present value of the series of payments one year before the first deposit if interest is at an annual effective rate of $6\%$.
![[Screenshot_20220603-201510_Obsidian.jpg]]
2. Find accumulated value of the series of payments at the time of the final payment if interest is at an annual effective rate of $4\%$ for the first 15 years and $2\%$ for the next 10 years.

	For deposits in the last ten years, we can plug into the accumulated value formula, with $k$ and $n$ as follows.
![[Screenshot_20220603-212634_Obsidian.jpg]]
	We're not able to plug the values into the present value formula, since $i=r$, which is undetermined. Instead, we take the perpetuity:
![[Screenshot_20220603-213626_Obsidian.jpg]]
## Discount Dividends Model
Suppose a particular stock will pay dividends forever. The first dividend, of amount $K$, will be paid in one period, and all subsequent dividends are $1+r$ times as large as the previous dividend.

The price of the stock is the present value, at some yield/return rate $i$, of the perpetuity of dividends to be paid in the future.
$$Fair\ Price = \frac{K}{i-r}$$
This assumes that the payment period, geometric growth period, and compound interest period all coincide.

### Example
Stan elects to receive his retirement benefit over 20 years at the rate of $2000$ per month beginning one month from now. The monthly benefit increases by $5\%$ each year. At a nominal interest rate of $6\%$ convertible monthly, calculate the present value of the retirement benefit.
![[Screenshot_20220603-222221_Obsidian.jpg]]
## Arithmetic Progression
The n-payment increasing annuity-immediate is the annuity with payments of
* 1 at the end of the first period
* 2 at the end of the second period
* n at the end of the n-th period
![[Screenshot_20220603-222644_Obsidian.jpg]]
The present value of the annuity, valued one period before the first payment, is denoted by $(Ia)\angl{n}$, which is:
$$(Ia)\angl{n}=v+2v^2+3v+3+\dots+(n-1)v^{n-1}+nv^{n}=\frac{\ad{n}-nv^n}{i}$$
>Note that $\ad{n}$ is not annuity-due. It is an annuity-immediate.

The annuity can be decomposed as a sum of several annuities.
![[Screenshot_20220606-191820_Obsidian.jpg]]
$$\sum_{i=0}^{n-1}v^ja_{n-j} =\sum_{j=0}^{n-1}v_i^j \frac{1-v_i^{n-j}}{i}=\frac{1}{i}[\sum_{j=0}^{n-1}v^j-\sum_{j=0}^{n-1}v^n]$$

### Example
A 5 year annuity has increasing monthly payments at the end of each month. The first payment is 600, and each subsequent payment is 10 larger than the previous payment. Using an interest rate of .5% per month, find the present value of the annuity, valued one month before the first payment.
![[Screenshot_20220606-193255_Obsidian.jpg]]
## Decreasing Annuity-Immediate
The n-payment decreasing annuity-immediate is the annuity with payments starting with $n$ at the end of the first period, $n-1$ at the end of the second, up to $1$ at the end of the n-th period.

![[Screenshot_20220606-193742_Obsidian.jpg]]




The present value of the annuity, valued one period before the first payment is denoted $(Da)_n$, given by:
$$(Da)_{\angl{n}} = nv + (n-1)v^2 + (n-2)v^3+\dots+2v^{n-1}+1v^n=\frac{n-\ai{n}}{i}$$
The accumulated value of the n-payment decreasing annuity-immediate, valued at the time of the final payment is:
$$(Ds)_n=(Da)_n(1+i)^n=\frac{n(1+i)^n-s_n}{i}$$
### Example
The first payment of a perpetuity-immediate is 60. Subsequent payments decrease by 1 per year until they reach a level of $k$. Payments remain constant at $k$ tthereafter. The present value of the perpetuity is equal to the present value of a perpetuity-immediate paying 44 each year. The annual effective interest rate is 5%. Calculate $k$.![[Screenshot_20220606-194943_Obsidian.jpg]]
## Annuity-Due Versions of Geometric Progression

### Example
Coco invests 2000 at the beginning of the year in a fund which credits interest at an annual effective rate of 9%. Coco reinvests each interest payment in a separate fund accumulating at an annual effective rate of 8%. The interest payments from this fund accumulate in a bank account that guarantees an annual effective rate of 7%. Determine the sum of the principal and interest at the end of 10 years.

![[Screenshot_20220606-201844_Obsidian.jpg]]

























