# Oligopolies
Oligopoly is a market in which there are only a **few** sellers. So few that they feel the effects of each other's decisions.

![[Pasted image 20220813204853.png]]
> Cigarette companies, big five banks, oil producers, steel producers, car companies, insurance companies, breakfast cereal producers, consumer electronics, etc.

They are competitors, but have *some* pricing or market power

Society can regulate oligopolies by:
1. Encouraging competition (prevent collusion)
2. Preserve possibility of entry for new firms

## Four-Firm Concentration Ratio
A general measure for oligopolies is the percentage of sales controlled by the top four firms
$$\text{Four-firm Concentration Ratio}=\text{Share held by top four firms}$$

In Canada, the four-firm concentration ratio is over $50\%$ for:
* Tobacco products
* Petroleum and coal products
* Transportation equipment
* Primary metals
* Beverages
* Metal mining

## Prisoners Dilemma
Beginning of the prisoners dilemma story:
> A robbery is committed, and police catch two ex-convicts whom they strongly suspect of the crime. There is some evidence, but not enough to convict them of the robbery itself. Without more evidence, the best the prosecutor can do is convict them of minor things (weapons possession, etc.) that will earn **two** years in jail.

The two suspects are separated and each offered the following deal:
> If you will confess, and if your partner denies the crime, we will let you off with 6 months in jail, and your partner will get 10 years in jail. If you both confess, you will both get 5 years.

Each prisoner has a dilemma. You don't know what your partner will do. Their outcome depends on their actions, as well as the other party, which is a **strategic interaction**.

![[Pasted image 20220814133621.png]]

1. Confessing is the **dominant strategy** for both prisoners:
* If your partner denies the crime, you can get off with 6 months (instead of 2 years) by confessing
* If your partner confesses, you are going to jail, but you end up with 5 years (instead of 10 years) by confessing

2. The **stable outcome**, also called the **Nash Equilibrium** occurs when neither party has an incentive to alter their behavior. Both parties confess, ending up with 5 years each

3. The **joint optimum**, where both parties maximize their joint benefit (2 years each for a total of 4 years). This is the *least* joint time spent in jail.

We often find ourselves in a situation where we are *better off* if we cooperate, but all the incentives lead us in another direction.

## Simplest Case
Suppose we have two firms competing in a given market, producing identical output (homogeneous, standardized product).
* Firm 1 decides $q_1$, given $q_2$
* Firm 2 decides $q_2$, given $q_1$

> How much output should I try to sell, given what I think the other producer might try to sell?

Each firm has $MC=AC=\$2$, no matter how much they produce.
$$TC_1=2q_1,\ TC_2=2q_2$$

Each firm chooses its own output, but price depends on **BOTH** firms decisions, making it a **strategic interaction**.
$$P=14-Q_T,\ \text{where }Q_T=q_1+q_2$$

### Collusion
Suppose both firms cooperate to maximize their joint profits.
$$\begin{align}
\Pi_{CO}=TR_T-TC_T&=[(14-Q_T)Q_T]-2Q_T\\
&=14Q_T-Q_T^2-2Q_T\\
&=12Q_T-Q_T^2
\end{align}$$

Maximizing their profits, we get a total quantity of:
$$\begin{align}
\Delta \Pi_{CO}=12-2Q_T&=0\\
Q_T&=6
\end{align}$$

Substituting into the demand curve, we get a price of:
$$P=14-Q_T=\$8$$

By forming a **cartel** (the firms act as one firm/monopoly), they get a joint profit of:
$$\Pi=(P-AC)Q_T=36$$

|Firms|Profit|
|---|---|
|Joint|$36$|
|Firm 1|$18$|
|Firm 2|$18$|

![[SmartSelect_20220814-144137_Samsung Notes.jpg]]

### Cheats
Suppose firm 1 cheats on the deal, and increases its output to 4:
$$Q_T=3+4=7,\ P=14-7=7$$
|Firms|Profit|
|---|---|
|Joint|$35$|
|Firm 1|$20$|
|Firm 2|$15$|

Firm 1's profits increase as a result of cheating on the deal, while firm 2's profits decrease. Their joint profits also decrease.

### Compete
Suppose that firm 2 also cheats on the deal, and they both increase output to 4:
$$Q_T=4+4=8,\ P=14-8=6$$
|Firms|Profit|
|---|---|
|Joint|$32$|
|Firm 1|$16$|
|Firm 2|$16$|

![[Pasted image 20220814144218.png]]

### Conclusion
The distribution of payoffs follows the prisoners dilemma. Cheating on the deal is the dominant strategy, for both firms.

Both firms competing is competitive, but not *perfectly* competitive.
* Price is above marginal cost
* Nonzero profit
* Use of market power

![[Pasted image 20220814142201.png]]

## Reaction Function
Given the decision of the other firm, we can solve for the optimal decision.
$$\begin{align}
\Pi_1=TR_1-TC_1&=[(14-Q_T)q_1]-2q_1\\
&=(14-q_1-q_2)q_1-2q_1\\
&=14q_1-q_1^2-q_1q_2-2q_1\\
&=12q_1-q_1^2-q_1q_2
\end{align}$$

Maximizing firm 1's profits, we get the following:
$$\begin{align}
\frac{\Delta\Pi_1}{q_1}=12-2q_1-q_2&=0\\
q_1=&=6-0.5q_2
\end{align}$$

Hence, we have both firm's reaction functions:
* $R_1(q_2)=6-0.5q_2$
* $R_2(q_1)=6-0.5q_1$

We can solve for the Nash equilibrium, by substituting one into the other:
$$\begin{align}
q_1&=6-0.5(6-0.5q_1)\\
&=6-3+0.25q_1\\
0.75q_1&=3\\
q_1&=4\\
\\
q_2&=6-0.5(4)=4
\end{align}$$

![[Pasted image 20220814150653.png]]