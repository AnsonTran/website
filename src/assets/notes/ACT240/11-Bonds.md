# Bonds
A bond is a security which obligates the bond issuer (usually a government or corporation) to make a series of specified payments over a period of time.

The payments consist of a series of (usually) level coupon payments along with a single lump sum payment called the **redemption amount** paid at the time of the final coupon, which is the maturity date of the bond.

A bond is sometimes referred to as a fixed-income investment since the purchaser of the bond will receive specified fixed payments.
![[Screenshot_20220612-183329_Obsidian.jpg]]
## Bond Valulation
The following notation is commonly used to describe the components of a coupon bond:
* $F$ - face amount or par value of the bond
* $r$ - coupon rate (per coupon period)
* $C$ - redemption amount
* $n$ - number of coupons to maturity
* $P$ - purchase price of the bond
* $j$ - yield-to-maturity on the bond (per coupon period)

>yield-to-maturity is the average interest rate over the coupon period

### Coupon Amount
The coupon amount is calculated using the face amount and coupon rate
$$Coupon=F\times r$$
The bond is said to be:
* **redeemed at par** - if $C=F$
* **redeemed at a premium** - if $C>F$
* **redeemed at a discount** - if $C<F$
![[Screenshot_20220612-190050_Obsidian.jpg]]

### Price of the Bond
The price of the bond we should pay, is the present value of each of the payments.
$$P=(Fr)\ani{n}{j}+Cv_j^n$$
Recall the following identity:
$$
\begin{align}
\ani{n}{j} & =\frac{1-v_j^n}{j}\\
v_j^n & =1-j\ani{n}{j}\\
\end{align}
$$
Equivalent expression for price of the bond is:
$$
\begin{align}
P &=(Fr)\ani{n}{j}+C[1-j\ani{n}{j}]\\
  &=C+(Fr-Cj)\ani{n}{j}\\
\end{align}
$$
The bond is said to be:
* **bought at par** - if $P=C$
* **bought at a discount** - if $P<C$. This happens if $Fr<Cj$
* **bought at a premium** - if $P>C$. This happens if $Fr>Cj$

### Example
A $1000$ bond with annual coupons is redeemable at par at the end of 10 years. At a purchase price of $870$, the yield rate is $j$. The coupon rate is $j-.02$. Calculate $j$.
![[Screenshot_20220612-192404_Obsidian.jpg]]
### Example
Two $1000$ par value bonds are purchased. The $2n$ year bond costs $250$ more than the $n$-year bond. Each has $13\%$ annual coupons and each is purchased to yield $6.5\%$ annual effective. Calculate the price of the $n$-year bond.
![[SmartSelect_20220616-153000_Samsung Notes.jpg]]

### Example
You are given two $n$-year par value $1000$ bonds. Bond $X$ has $14\%$ semi-annual coupons and a price of $1407.70$, to yield $i$, compounded semi-annually. Bond $Y$ has $12\%$ semi-annual coupons and a price of $1271.80$, to yield the same rate $i$, compounded semi-annually. Calculate $i$.
![[SmartSelect_20220620-143833_Samsung Notes.jpg]]

## Bond Price Between Coupon Dates
Previous bond pricing formulations considered so far have been based on bond valuation made one full coupon period before the next coupon is paid. In practice, bonds are bought and sold at any time between coupon dates.

First, find the bond price in the usual way at the beginning of the coupon period. Then we apply the compound interest coupond interest factor $(1+i)^t$ to accumulate that price to the valuation date, where:
$$t=\frac{\text{actual number of days since last coupon}}{\text{actual number of days from last to next coupon}}$$
![[SmartSelect_20220620-145803_Samsung Notes.jpg]]

## Clean/Dirty Price of a Bond
If we plot the price of the bond based on valuation time, we can see that the price increases as $t$ approaches the next payment period, and drops once the payment is made.

![[1655752053.png]]

This is problematic, because it doesn't tell us what factors are affecting the price of the bond. The **dirty** price of a bond includes this increasing behavior on the price, while a **clean** price of a bond subtracts the effect of the time value of money.

The clean price is given by the dirty price, minus the linear fraction of the coupon for the time since the beginning of the coupon period.
$$\text{Clean Price} = \text{Dirty Price} - Fr\times \tilde{t}$$
> $\tilde{t}$ is the fraction of time since the last coupon payment.

Prices quoted in the financial press is the market price or flat price or clean price of the bond.

### Example
A 100,000 bond matures on January 15, 2037. The bond pays coupons at an annual rate of $6\%$ payable semiannually (every January 15 and July 15 until maturity). Find the clean price of the bond on April 1, 2017 at a nominal annual yield to maturity of $4\%$ compounded semi-annually.
![[SmartSelect_20220620-154850_Samsung Notes.jpg]]

## Callable Bonds
A callable bond is one that can be redeemed on one of several dates at the option of the bond issuer. What should the fair price of the bond be in this context?

The purchaser should price the bond at all the callable dates, and pick the minimum price in order to guarantee a minimum yield rate of $j$.
![[SmartSelect_20220620-160121_Samsung Notes.jpg]]

Consider the pricing formula for bonds:
$$P=C+(Fr-Cj)\ani{n}{j}$$
The price of the bond **increases** in $n$, if $Fr>Cj$ (bought at a premium). Hence, the minimum is reached at the **earliest** redeemable date.

The price of the bond **decreases** in $n$, if $Fr<Cj$ (bought at discount). Hence, the minimum is reached at the **latest** redeemable date.

If it is a par-value bond, we can just compare the coupon rate with the yield rate.

### Example
A bond can be redeemed by the bond issuer on a coupone date anytime between 18 and 22 coupon periods from now. The bond has face amount $100$ and coupon rate $10\%$ per coupon period. Find the range of prices depending upon redemption date if the yield rate is:
1. $5\%$ per coupon period
2. $15\%$ per coupon period
![[SmartSelect_20220620-162648_Samsung Notes.jpg]]
