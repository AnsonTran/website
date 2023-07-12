# Interest
Money loses value with time due to economic factors (i.e. inflation), so we prefer to have it today, the **time value of money**. When you borrow money today, you have to repay more in the future to make it even.

Interest is the amount charged for borrowing money over a period of time
$$I=\$today - \$tomorrow$$
For a simple loan or investment, an amount is borrowed for a specified period of time, and then repaid at the end of the period. The amount paid is:
$$Amount\ Paid = Initial\ Amount + Interest\ for\ the\ period$$
A transaction can take place over any period of time, and interest rates can be quoted for any period of time. The conventional way of quoting an interest rate is the **annual rate**.

The interest rate, denoted $i$ for the time period is equal to:
$$i=\frac{Amount\ of\ interest\ for\ the\ period}{Amount\ borrowed\ at\ the\ start\ of\ the\ period}$$
## Accumulation Function
For an investment of 1 made at time 0, the value of the investment at time $t$ can be described in terms of an accumulation function $a(t)$. 

The accumulated value is also called the future value, and can be applied to the combined value of several amounts at a particular time point in the future.

## Time Measurements
Time $t$ can be measured in various number of ways:
1. **Ordinary simple interest** - $t=m/12$, where $m$ is the exact number of months in the time period
2. **Exact simple interest** - $t=d/365$, where $d$ is the exact number of days of the loan
3. **Bankers rule** - $t=d/360$, where $d$ is the exact number of days of the loan

## Simple Interest
At annual simple interest rate $i$, an initial investment of amount 1 accumulates to:
$$a(t)=1+(i\times t)$$
The amount of interest paid for the length of $t$ years is given by:
$$I=i\times t$$
In this expression, $t$ represents time and is usually measured in years.
![[Screenshot_20220612-194113_Obsidian.jpg]]

## Compound Interest
At an annual effective compound interest rate $i$, an initial investment of 1 accumulates to $a(t)$ at time $t$ years.
$$a(t)=(1+i)^t$$
The amount of interest paid is given by:
$$I=(1+i)^t-1$$
![[Screenshot_20220612-194854_Obsidian.jpg]]
Effective interest rate can also be specified for any period of time (such as monthly effective rate, quarterly effective rate, etc.) and compounding can be done accordingly, in which case it will be measured in appropriate units of time (months, quarters, etc.)

## Simple vs Compound Interest
* Simple interest grows faster than compound interest for periods less than a year.
* Compound interest grows faster than simple interest for periods larger than a year.
* They are equal for exactly $t=1$ year
![[Screenshot_20220612-195940_Obsidian.jpg]]

### Example
Money accumulates in a fund at an annual effective interest rate of $i$ during the first 5 years, and at an annual effective interest rate of $2i$ thereafter. A deposit of 1 is made into the fund at time 0. It accumulates to $3.09$ at the end of 10 years and to $13.62$ at the end of 20 years. What is the value of the deposit at the end of 7 years?
![[Screenshot_20220612-201130_Obsidian.jpg]]

## Present Value
The present value of 1 due in $t$ years is the amount required now to accumulate to amount 1 as of the end of $t$ years from now.

Present value is denoted $v(t)$, and is the inverse of the accumulation function. If an amount of 1 invested now accumulates to $a(t)$ in $t$ years, then the PV of 1 due in $t$ years based on the accumulation function is:
$$v(t)a(t)=1 \rightarrow v(t)=\frac{1}{a(t)}$$
For compound interest:
$$v(t)=\frac{1}{(1+i)^t}=(1+i)^{-t}=v^t$$
For simple interest:
$$v(t)=\frac{1}{1+it}$$

## Equation of Value
An equation of value for a financial transaction equates, at a particular point in time, the present accumulated value of all amounts received with the present and accumulated values of all amounts to be paid out.

Suppose we denote by $C_k$ the new outflow/inflow at time point $k$, where a negative value indicates an outflow. Then the net present value of the investment based on a rate of return $i$ is:
$$\sum_{k=0}^{n}C_k\times v(k)$$

### Example
At an annual effective interest rate of $i>0$, each of the following two sets of payments has present value $K$:
1. A payment of $121$ immediately and another payment of $121$ at the end of one year.
2. A payment of $141$ at the end of two years and another payment of $144$ at the end of three years.
Calculate $K$.
![[Screenshot_20220612-202812_Obsidian.jpg]]