# Nominal Rates
Nominal rates are interest rates that are not to be paid at once, but periodically. Nominal rates can also be used for discount rates.

Suppose a credit card quotes its rate as follows, and you have an outstanding balance of $1$:
> Annual interest rate of $24\%$ payable monthly

If you pay interest of $2\%$ each month, it is equivalent to paying $24\%$ of interest.
$$1(1+12(2\%))=1.24$$
If you do not pay $2\%$ each month, then the $2\%$ per month would be compounded over 12 months.
$$1(1+2\%)^{12}=1.2683$$The effective annual interest rate in this case is $26.83\%$.

## Nominal Interest Rate
An interest rate quoted on an annual basis, but compounded based on a period other than 1 year. Referred to as a **nominal annual rate of interest**.

If a nominal annual rate is compounded $m$ times per year, it is denoted $i^{(m)}$.
>The previous example is compounded 12 times a year, and is denoted $i^{(12)}=24\%$

Other ways to refer to the same thing:
1. Nominal annual interest rate of $24\%$ compounded monthly
2. Nominal annual interest rate of $24\%$ convertible monthly
3. Nominal interest rate of $24\%$ compounded monthly
4. Nominal interest rate of $24\%$ convertible monthly
5. Annual interest rate of $24\%$ compounded monthly
6. Annual interest rate of $24\%$ convertible monthly

With an initial investment amount of $1$, and quoted nominal annual interest rate $i^{(m)}$, the accumulated value after $k$ successive $1/m$-ths of a year is:
$$a(t)=(1+\frac{i^{(m)}}{m})^k$$
If we want to look at this in $t$ years, then $k=t\times m$.

Given a nominal interest rate compounded $m$ times, we can calculate an equivalent effective yearly rate
$$1+i=(1+\frac{i^{(m)}}{m})^m$$
### Example
Suppose that the nominal annual interest rate compouned 12 times per year is $18\%$. FInd the equivalent annual effective rate of interest and the equivalent nominal annual interest rate compounded twice per year.
 ![[Screenshot_20220612-211818_Obsidian.jpg]]
### Example
Brian and Jennifer each take out a loan of $X$. Jennifer will repay her loan by making one payment of $800$ at the end of year $10$. Brian will repay his loan by making one payment of $1120$ at the end of year $10$. The nominal rate compounded semi-annually being charged to Jennifer is exactly one-half the nominal semi-annual rate being charged to Brian. Calculate $X$.
![[Screenshot_20220612-212910_Obsidian.jpg]]
## Nominal Discount Rate
Same story works but instead of using rates of interest, we use rates of discount and their associated accumulation functions. The **nominal annual rate of discount** compounded $m$ times per year is denoted $d^{(m)}$.

With an initial investment of $1$, and a quoted nominal annual discount rate $d^{(m)}$, the accumulated value after $k$ successive $1/m$-ths of a year is:
$$a(t)=(1+\frac{i^{(m)}}{m})^k=(1-\frac{d^{(m)}}{m})^{-k}$$
Similarly, we can define an equivalent annual effective rate of discount.
$$1-d=(1-\frac{d^{(m)}}{m})^{-m}$$
At equivalent rates, we have the following relationships:
$$(1+\frac{i^{(m)}}{m})^m=1+i=1-d=(1-\frac{d^{(m)}}{m})^{-m}$$
$$\frac{1}{d^{(m)}}-\frac{1}{i^{(m)}}=\frac{1}{m}$$
$$i^{(m)}-d^{(m)}=\frac{i^{(m)}d^{(m)}}{m}$$


### Example
At time $t=0$, John deposits $1000$ into a fund which credits interest at a nominal interest rate of $10\%$ compounded semiannually. At the same time, he deposits $P$ into a different fund which credits interest at a nominal discount rate of $6\%$ compounded monthly. At time $t=20$, the amounts in the funds are equal. What is the annual effective interest rate earned on the total deposits, $1000+P$, over the 20-year period?
![[Screenshot_20220612-222405_Obsidian.jpg]]