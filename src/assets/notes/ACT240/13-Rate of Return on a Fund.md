# Rate of Return on a Fund
The rate of return on a fund is concerned with solving for $i$ from equations of value. At what interest rate is the present value of an annuity is equal to some predefined value $P$. i.e. solve for $i$ from:
$$P=\ani{n}{i}$$
The interest rate $i$ can be interpreted as the return in our investment. Usually, that is the measure we first check to see if an investment is attractive or not. Similarly for a loan, $i$ measures the extra amount we have to pay on top of the value of the loan.

## Internal Rate of Return
Suppose we have at times $0=t_0<t_1<\dots<t_n$.
1. Payments received $A_0,A_1,\dots,A_n$
2. Payments disbursed $B_0,B_1,\dots,B_n$

The net amount received at time $t_k$ is given by:
$$C_k=A_k-B_k$$
The internal rate of return $i$, is calculated by equating the inflows and outflows:
$$A_0+A_1v_1^{t1}+A_2v_2^{t2}+\dots+A_nv_n^{tn}=B_0+B_1v_1^{t1}+B_2v_2^{t2}+\dots+B_nv_n^{tn}$$
Equivalently, it's the sum of the net amount.
$$C_0+C_1v_1^{t1}+C_2v_2^{t2}+\dots+C_nv_n^{tn}=0$$
However, solving for this equation requires that we solve a polynomial of degree $n$. 

### Example
A fund has a balance of $1000$ at the start of the year. Deposits of $100$ each are made to the fund at the end of 2 months and at the end of 9 months. A withdrawal of $50$ is made at the end of $10$ months. The balance in the fund at the end of the year is $1300$. Find the dollar-weighted rate of return on the fund for the year.
![[SmartSelect_20220620-203828_Samsung Notes.jpg]]

## Dollar-Weighted Rate of Return
Since IRR cannot be found analytically in most cases, dollar-weighted method uses an approximation. Instead of using compound interest, use simple interest when computing present values.

### Example
A fund has a balance of $1000$ at the start of the year. Deposits of $100$ each are made to the fund at the end of 2 months and at the end of 9 months. A withdrawal of $50$ is made at the end of $10$ months. The balance in the fund at the end of the year is $1300$. Find the dollar-weighted rate of return on the fund for the year.
![[SmartSelect_20220620-204704_Samsung Notes.jpg]]

## Time-Weighted Rate of Return
The time-weighted rate of return requires that we know the balance at times at which the deposit/withdrawals takes place.

### Example
Find the time-weighted rate of return for the year based on the situation in the previous example. The following information is given:
* the balance is $1050$ just before the deposit at the end of $2$ months
- the balance is $1200$ just before the deposit at the end of $9$ months
* the balance is $1325$ just before the withdrawal at the end of $10$ months.
![[SmartSelect_20220620-205814_Samsung Notes.jpg]]
