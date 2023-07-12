# Ammortization of a Loan
A loan ammortized at a rate $i$ means that the loan amount is equal to the present value of the loan payments.

For a loan of amount $L$, made at time 0, it is to be repaid by payments of amounts $K_1,\dots K_n$ at times $1,\dots,n$
$$L=K_1v+K_2v^2+K_3v^3+\dots+K_nv^n$$

## Outstanding Balance
The **outstanding balance** just after the payment at time t is defined as the amount that is still owing just after the payment at time $t$, denoted as $OB_t$.

### Prospective Form
The present value as of time $t$ of all remaining payments ($t+1$-st to the $n$-th)
$$OB_t=K_{t+1}v+K_{t+2}v^2+\dots+K_{n-1}v^{n-t-1}+K_nv^{n-t}$$
### Pretrospective Form
Accumulated value to time $t$ of the initial loan amount minus the accumulated value to time $t$ of the loan payments up to, and including, the payment at time $t$
$$OB_t=L(1+i)^t-K_1(1+i)^{t-1}-K_2(1+i)^{t-2}-\dots-K_{t-1}(1+i)-K_t$$
### Recursive Form
Outstanding balance at time $t$ can be written in terms of time $t-1$.
$$OB_t=OB_{t-1}-PR_t=OB_{t-1}-(K_t-I_t)=OB_{t-1}\times(1+i)-K_t$$
## Payments
Payment at time $t$ can be divided into an interest payment, and the remainder paying towards the principal
$$K_t=PR_t+I_t$$
### Interest Due
Interest due in the $t$-th payment is the interest produced on the previous period's outstanding balance
$$I_t=OB_{t-1}\times i$$
### Principal Repaid
The amount of oustanding balance reduced from time $t-1$ to $t$. It is equal to the amount of the $t$-th payment minus the interest due in the $t$-th payment.
$$PR_t=OB_{t-1}-OB_t=K_t-I_t$$
### Total Amount Paid
The total amount paid by the borrower over the duration of the loan
$$K_T=K_1+K_2+\dots+K_n=\sum_{s=1}^{n}K_s$$

### Total Interest Paid
The total amount of interest paid by the borrower over the course of the loan
$$I_T=I_1+I_2+\dots+I_n=\sum_{s=1}^{n}I_s$$
### Total Principal Repaid
The total amount of principal repaid over the course of the loan
$$L=PR_1+PR_2+\dots+PR_n=\sum_{s=1}^{n}PR_s$$
This can also be rewritten in terms of amount paid and interest paid.
$$PR_T=\sum_{s=1}^{n}PR_s=\sum_{s=1}^{n}K_s-I_s=K_T-I_T$$

### Example
A loan of $1000 at a nominal rate of $12\%$ convertible monthly is to be repaid by six monthly payments with the first payment due at the end of one month. The first three payments are $x$ each, and the final three payments are $3x$ each. Determine the sum of the principal repaid in the third payment and the interest in the fifth payment.
![[Screenshot_20220612-160454_Obsidian.jpg]]
Nikita takes out a 10-year loan. The loan is repaid by making 10 annual repayments at the end of each year. The first loan repayment is equal to $X$, with each subsequent repayment $10.16\%$ greater than the previous year's repayment. The annual effective rate being charged on the loan is $8\%$. The amount of interest repaid during the first year is equal to $\$892.20$. Calculate $X$.
![[Screenshot_20220612-162639_Obsidian 1.jpg]]

## Level Payments
Suppose an ammortized loan of amount $L$ is to be repaid by $n$ equally spaced level payments, each of amount $K$, with the first payment occuring one period after the loan is made, and with an interest rate of $i$ per period.

Then, the loan is amount is just an annuity-immediate with $K$ payments.
$$L=K\ai{n}$$

Persepctively, the oustanding balance at time $t$, is the present value of future remaining annuity-immediate payments.
$$OB_t=K\ai{n-t}$$
Pretrospectively, the outstanding balance at time $t$, is the future value of the loan, subtracting the future value of past payments.
$$OB_t=L(1+i)^t-K\si{t}$$
Interest at time $t$, is derived from the outstanding balance
$$I_t=i\times OB_{t-1}=iK\ai{n-(t-1)}=iK\frac{1-v^{n-t+1}}{i}=K(1-v^{n-t+1})$$
Principal repaid at time $t$
$$PR_t=K_t-I_t=K-K(1-v^{n-t+1})=Kv^{n-t+1}$$
Recursive relationship for principal repaid
$$PR_t=PR_{t-m}(1+i)^m$$

### Example
Ming borrows $X$ for 10 years at an annual effective interest rate of $8\%$. If he pays the principal and accumulated interest in one lump sum at the end of 10 years, he would pay $\$468.05$ more in interest than if he repaid the loan with 10 level payments at the end of each year. Calculate $X$.

![[Screenshot_20220612-174454_Obsidian.jpg]]
### Example
A loan at a nominal annual interest rate of $24\%$ convertible monthly, is to be repaid with equal payments at the end of each month for $2n$ months. The $n$-th payment consists of equal payments of interest and principal. Calculate $n$.
![[Screenshot_20220612-180347_Obsidian.jpg]]