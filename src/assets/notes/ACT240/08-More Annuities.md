# More Annuities
When we defined $\ani{n}{i}$, we mentioned that this valuation assumes that the compounding period for the interest rate coincides with the payment period, and the interest rate per payment period is $i$.

If a situation arises in which the interest compounding period and the payment period do not coincide, a standard way to deal with the situation is to find an equivalent rate of interest effective per payment period.

We can do this by converting the given interest rate to an equivalent rate whose compounding period is the same as the payment period.

### Example
Raj deposits 100 into a fund at the end of each 2-year period for 20 years. The fund pays interest at an annual effective rate of $i$. The total amount of interest earned by the fund during the 19th and 20th years is 250. Calculate the accumulated amount in Raj's account at the end of year 20.
![[Screenshot_20220613-121119_Samsung Notes.jpg]]

### Example
You are given a perpetuity, with annual payments as follows:
1. Payment of 1 at the end of the first year and every three years thereafter
2. Payment of 2 at the end of the second year and every three years thereafter
3. Payment of 3 at the end of the third year and every three years thereafter
The interest rate is $5\%$ convertible semi-annually. Calculate the present value of this perpetuity.
![[Screenshot_20220613-122638_Samsung Notes.jpg]]


## m-thly payable annuities
Consider the case of annuities payable more frequently than interest is convertible.

For an annuity-immediate, let $m$ denote the number of payments per one interest conversion period. Let $n$ be the total number of conversion periods in the term of the annuity. Then the total number of payments for the term of the annuity is $mn$. Let $i$ be the interest rate per conversion period.

The present value of this set of payments is:
$$\ai{n}^{(m)}=\frac{1}{m}v^{\frac{1}{m}}+\frac{1}{m}v^{\frac{2}{m}}+\dots+\frac{1}{m}v^{\frac{nm-1}{m}}+\frac{1}{m}v^{\frac{nm}{m}}=\frac{1-v^n}{i^{(m)}}$$
Similarly, the accumulated value of these payments up to time n, denoted as $\si{n}^{(m)}$ is therefore going to be:
$$\si{n}^{(m)}=(1+i)^n\ai{n}^{(m)}=\frac{(i+1)^n-1}{i^{(m)}}$$
### Example
A loan of $\$3000$ is to be repaid with quarterly installments at the end of each quarter for five years. If the rate of interest charged is $10\%$ converted semiannually, find the amount of each quarterly payment.
![[Screenshot_20220613-130143_Samsung Notes.jpg]]

We can also define the annuity-due version. The present value would be:
$$a_{n}^{(m)}=\frac{1-v^n}{d^{(m)}}$$

The accumulated value of these payments up to time $n$ is:
$$s_n^{(m)}=(1+i)^na_n^{(m)}=\frac{(i+1)^n-1}{d^{(m)}}$$

Some important relationships to have in mind:
$$\ai{n}^{(m)}=\frac{i}{i^{(m)}}\ai{n}$$
$$ \si{n}^{(m)}=\frac{i}{i^{(m)}}\si{n}$$
$$\ad{n}^{(m)}=\frac{d}{d^{(m)}}\ad{n}$$
$$\sd{n}^{(m)}=\frac{d}{d^{(m)}}\sd{n}$$

## Continuous Annuities
Following the idea of $m$ payable annuities, we can increase the frequency of the $1/m$ payments. The annual payment of $1$ is spread more and more evenly throughout the period of consideration, and the limit as it goes to $\infty$ is a continuous annuity of 1 per period of time.

The present values of a continuous annuity is defined as:
$$\ai{n}^{-}=\lim_{m\rightarrow\infty}\ai{n}^{(m)}=\lim_{m\rightarrow\infty}\frac{1-v^n}{i^{(m)}}=\frac{1-v^n}{\delta}$$
The limit is the same for an annuity-due. Similarly for an annuity-due:
$$\si{n}^{-}=\lim_{m\rightarrow\infty}\si{n}^{(m)}=\lim_{m\rightarrow\infty}\frac{(1+i)^n-1}{i^{(m)}}=\frac{(1+i)^n-1}{\delta}$$
The limits are the same for an annuity-due. The usual relationships still hold:
$$\si{n}^{-}=(1+i)^n\ai{n}^{-}$$
$$\ai{n}^{-}=v^n\si{n}^{-}$$
Recursive relationship:
$$\ai{n}^{-}=\frac{i}{\delta}\ai{n}=\frac{i^{(m)}}{\delta}\ai{n}^{(m)}$$
A perpetuity for continuous annuities can also be defined as well:
$$\ai{\infty}^{-}=\lim_{n\rightarrow\infty}\ai{n}^{-}=\lim_{n\rightarrow\infty}\frac{1-v^n}{\delta}=\frac{1}{\delta}$$
### Example
There is $\$40000$ in a fund which is accumulating at $4\%$ per annum convertible continuously. If money is withdrawn continuously at the rate of $\$2400$ per annum, how long will the fund last?