# UK Housing Affordability Explorer

An interactive, viewer-friendly research project exploring housing affordability across UK regions.

## Research question

How does housing affordability vary across UK regions, and which areas face the greatest affordability pressure?

## What the project shows

The explorer compares average house prices with average annual earnings using a **price-to-earnings affordability ratio**, calculated directly in the application:

```text
affordability ratio = average house price / average annual earnings
```

Users can:

- Select a primary UK region
- Compare it with a second region
- Select a year
- View affordability, average house price and average earnings
- See how many years of full earnings would be needed to buy
- See the 10% deposit required
- Compare affordability pressure across regions

## Affordability pressure legend

| Pressure level | Price-to-earnings ratio |
|---|---|
| Lower | Below 6 |
| Moderate | 6 to 7.9 |
| High | 8 to 9.9 |
| Very high | 10 or above |

The same thresholds are used for the pressure label and the regional comparison chart colours.

## Data and limitations

This project currently uses **illustrative regional estimates** for demonstration and portfolio purposes. It is not an official statistical release and should not be used for policy, financial or academic decision-making.

The estimates use average values rather than the median-based measures commonly used in official affordability statistics, so they are not directly comparable with official publications.

A future version will replace the embedded estimates with openly licensed data from the [Office for National Statistics](https://www.ons.gov.uk/) and [HM Land Registry UK House Price Index](https://www.gov.uk/government/collections/uk-house-price-index-reports), calculate ratios directly from source values, and record the data download date.

## Methods

1. Select a region and year.
2. The application retrieves the stored average house price and average annual earnings.
3. It calculates the affordability ratio as price divided by earnings.
4. It calculates years of full earnings needed to buy and the 10% deposit requirement.
5. It classifies affordability pressure using the thresholds above.

## Related research

This project connects to [Public Value Recovery Research](https://github.com/Swastika0710/public-value-recovery-research). Housing affordability is one dimension of public value in post-crisis recovery and built-environment planning.

## How to run locally

```bash
git clone https://github.com/Swastika0710/uk-housing-affordability-explorer.git
cd uk-housing-affordability-explorer
```

Then open `index.html` in a web browser.

## Licence

This project is released under the [MIT Licence](LICENSE).