# Price Indexes and Aggregate Price Levels
Aggregate price level measures the overall level of prices in the economy. The ones we are looking at are:
* Consumer Price Index
* Producer Price Index
* GDP deflator

The inflation rate measure the percentage change of a price index.

## Consumer Price Index
Measures how fast the cost of a predetermined and fixed basket of goods and services bought by a typical Canadian household changes over time. Most commonly used measure to compute inflation rate. Statistics Canada constructs CPI, by:
1. Choosing a base year $b$
2. Determine the prices and quantities of a basket of goods and services purchased by a typical household in base year $b$
3. Compute the cost of that basket ($COB$) in year $t$
$$COB(b,t)=\sum_{i=1}^{n}P_{i,t}Q_{i,b}$$
4. Compute the CPI for year $t$
$$CPI(b,t) = \frac{COB(b,t)}{COB(b,b)}\times100$$

## Industrial Producer Price Index
Measures the wholesale cost of a typical fixed basket of goods purchased by producers, including coal, steel, and other inputs such as electricity.

Tends to respond more quickly to inflationary/deflationary pressure than CPi, and serves as a "leading indicator" of changes in the inflation rate.

## GDP Deflator
GDP deflator is the **current weighted** price index, and uses current quantities of goods and services entered into GDP as weights.
$$\text{GDP Deflator(t)} = \frac{NGDP(t)}{RGDP(t)}\times100$$

## Example
| |Price year 1|Quantity year 1|Price year 2|Quantity year 2|
|---|---|---|---|---|
|Good X|\$3|4|\$5|6|
|Good Y|\$10|2|\$30|1.5|
Let year 1 be the base year $b$

### Consumer Price Index
>$COB(1) = (\$3\times4)+(\$10\times2)=\$32$
>$COB(2) = (\$5\times4)+(\$30\times2)=\$80$
>$CPI(1) = \frac{\$32}{\$32}\times100=100$
>$CPI(2) = \frac{\$80}{\$32}\times100=250$

For the base year, the CPI is always 100. The CPI for year 2 shows us that the price of the basket of goods inflated at 250%.

### GDP Deflator
>$NGDP(2)=(\$5\times6)+(\$30\times1.5)=\$75$
>$RGDP(2)=(\$3\times6)+(\$10\times1.5)=\$33$
>$GDP\ Deflator(1)=100$
>$GDP\ Deflator(2)=\frac{\$75}{\$33}\times100=227.27$

Similarly, GDP deflator for the base year is also 100. The GDP deflator for year 2 shows us the GDP has increased by 227.27%.