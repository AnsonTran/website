# Average Costs
![[08-Production 2022-07-29 20.30.16.excalidraw]]

## Marginal Cost
The marginal cost curve is J-shaped and upward sloping.
* Increased specialization initially causes a decrease in marginal costs
* Fixed capital inputs are spread thinner, leading to diminishing returns and increasing MC.

Since fixed costs are constant, the marginal cost only depends on the variable cost.
$$MC=\frac{\Delta TC}{\Delta q}=\frac{\Delta VC}{\Delta q}$$

Marginal productivity is maximized when marginal cost is minimized.
$$MC=\frac{P_L\Delta L}{\Delta q}=\frac{P_L}{(\Delta q/\Delta L)}=\frac{P_L}{MP_L}$$

![[SmartSelect_20220629-004959_Samsung Notes.jpg]]

## Average Cost
Average cost is total cost divided over the quantity supplied
$$AC=(\frac{TC}{q})=\frac{FC}{q}+\frac{VC}{q}$$
Fixed costs do not change, so as quantity increases, the fixed costs affect the average cost less and less.

The minimum of average cost intersects with the marginal cost function.
$$\begin{align}
\frac{\Delta AC}{\Delta Q}&=0\\
-FC(Q^{-2})+\frac{\Delta VC}{\Delta Q}(Q^{-1})-VC(Q^{-2})&=0\\
-FC(Q^{-1})+\frac{\Delta VC}{\Delta Q}-VC(Q^{-1})&=0\\
\frac{\Delta VC}{\Delta Q}&=AC\\
MC&=AC\\
\end{align}$$

## Average Variable Cost
Average variable comes from the average cost definition.
$$AVC=\frac{VC}{q}$$
The minimum of average variable intersects with the marginal cost function.
$$\begin{align}
\frac{\Delta AVC}{\Delta Q}&=0\\
\frac{\Delta VC}{\Delta Q}Q^{-1}-VC(Q^{-2})&=0\\
MC(Q^{-1})&=VC(Q^{-2})\\
MC&=VC(Q^{-1})\\
MC&=AVC
\end{align}$$

The average variable cost is at its minimum point when average product of labour is at its maximum point.
$$AVC=\frac{VC}{q}=\frac{P_LL}{q}=P_L\frac{L}{q}=\frac{P_L}{AP_L}$$

![[SmartSelect_20220629-003941_Samsung Notes.jpg]]

## Average Fixed Costs
As quantity increases, fixed costs are spread thinner across more units. It is the difference between average costs and average variable costs, so we don't usually draw it on the graph.
$$\begin{align}
AC&=AFC+AVC\\
AFC&=AC-AVC\\
\end{align}$$
![[Pasted image 20220809194701.png]]

## Example
Suppose we have the following cost curve:
$$TC=400+5q+q^2,\ FC=300$$

We can determine the variable cost curve:
$$VC=100+5q+q^2$$

Marginal cost is determined as:
$$MC=\frac{\Delta VC}{\Delta q}=5+2q$$

Average cost is found from the total cost, which can then be split between average fixed and average variable:
$$\begin{align}
AC&=\frac{400}{q}+5+q\\
&=\frac{300}{q}+\frac{100}{q}+5+q\\
\end{align}$$

Minimums of $AC$ and $AVC$ can be calculated by setting them equal to the marginal cost curve, or through calculus.
1. Minimum of $AC$
$$\begin{align}
\frac{400}{q}+5+q&=5+2q\\
q&=20\\
AC&=45\\
\end{align}$$
2. Minimum of $AVC$
$$\begin{align}
\frac{100}{q}+5+q&=5+2q\\
q&=10\\
AVC&=25
\end{align}$$

## Quadratic Cost Curve
In more general terms, suppose:
$$\begin{align}
VC&=Aq^2+Bq+C\\
FC&=D\\
\end{align}$$

Then, the following curves can be determined:
|Term|Curve|
|---|---|
|Total cost|$TC=Aq^2+Bq+C+D$|
|Marginal cost|$MC=2Aq+B$|
|Average cost|$AC=Aq+B+\frac{C+D}{q}$|
|Average variable cost|$AVC=Aq+B+\frac{C}{q}$|
|Average fixed cost|$AFC=\frac{D}{q}$|
|Min quantity average cost|$q=\sqrt{\frac{C+D}{A}}$|
|Min quantity average variable cost|$q=\sqrt{\frac{C}{A}}$|
|Min average cost|$2\sqrt{A}\sqrt{C+D}+B$|
|Min average variable cost|$2\sqrt{A}\sqrt{C}+B$|
