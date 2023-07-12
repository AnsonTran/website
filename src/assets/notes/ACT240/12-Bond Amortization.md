# Bond Amortization
When a bond is purchased, the purchaser can be regarded as a lender, and bond issuer as a borrower. The bond issuer is borrowing $P$, and in return makes a series of payments (coupons plus redemption) to the purchaser that will repay the loan.

In this context, the interest rate on the loan is the yield rate on the bond, and the loan payments are the coupons plus redemption amount. Hence, a bond can be regarded as an amortized loan, so all algebraic relationships that were developed for an amortized loan apply to the amortization of a bond.

In the context of a bond amortization, the oustanding balance is called the **book value** or the amortized value of the bond, denoted as $BV_t$.
* The interest rate is the same yield to maturity $j$
* The payment at time $t$ is defined as $K_t=Fr$, $t<n$, and $K_n=Fr+C$
* The portion of interest paid at time $t$ is $I_t=BV_{t-1}\times j$
* The principal repayment/adjustment at time $t$ is then $PR_t=K_t-I_t$
* We also have a similar relationship for book values
$$BV_t=BV_{t-1}(1+j)-Fr, t<n$$
 
### Example
Three 10 year bonds all have face and redemption values of $100$ and have annual coupons. Bond 1 has an annual coupon rate of $4\%$, Bond 2 has an annual coupon rate of $5\%$, and Bond 3 has an annual coupon rate of $6\%$. All three bonds have a yield to maturity of $5\%$. Calculate the purchase price of each bond and the book value of each bond just after the 5th coupon. Calculate the book values of the bonds at the end of each year for the 10 years.
![[SmartSelect_20220620-193956_Samsung Notes.jpg]]

The ammortization of a bond appears to differ from a standard ammortization of a loan. For any bond bought at discount, the coupon payment is not large enough to cover the interest due, so the $BV_t$ increases with time. This is sometimes referred to by saying the bond is **written up**, as the principal repaid actually increases the outstanding balance.

The behaviour for bonds bought at premium is opposite. So the book value decreases over time and is said to be **written down**, as the principal repaid decreases the outstanding balance.

### Example
A bond with a par value of $1000$ and $6\%$ semiannual coupons is redeemable for $1100$. You are given:
1. The bond is purchased at $P$ to yield $8\%$, convertible semiannually
2. The amount of principal adjustment for the 16th semiannual period is $5$
Calculate $P$.
![[SmartSelect_20220620-195456_Samsung Notes.jpg]]

### Example
Dick purchases an $n$-year $1000$ par bond with $12\%$ annual coupons at an annual effective yield of $i$, $i>0$. The book value of the bond at the end of year 2 is $1479.65$, and the book value at the end of year 4 is $1439.57$. Calculate the purchase price of the bond.
![[SmartSelect_20220620-200808_Samsung Notes.jpg]]

## Market Value of a Bond
Consider an individual who purchased a bond and after a couple of years, the individual wishes to sell the bond. There is no guarantee that at after those years, the bond market will still be pricing bonds at the same yield rate at which it was bought at the beginning. Market conditions vary over time, and yield rates on bonds may change as well.

As you want to sell the bond in the market, it may be priced under the yield observed in the market, which is the **market value** of the bond.

Market value is not the same as book value after some time, since the book value is based on the original yield rate at which the bond was purchased, but the market value is based on the market yield rate that applies in the market when the bond is sold.