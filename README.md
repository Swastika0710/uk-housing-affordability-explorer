# UK Housing Affordability Explorer

An interactive, viewer-friendly research project exploring housing affordability across UK regions.

## Research question

How does housing affordability vary across UK regions, and which areas face the greatest affordability pressure?

## What the project shows

The explorer compares average house prices with average annual earnings using a **price-to-earnings affordability ratio**. A higher ratio means housing is less affordable relative to local earnings.

Users can:

- Select a UK region
- Select a year
- View affordability, average house price and average earnings
- Compare affordability trends over time
- Compare affordability pressure across regions

## Key findings

- London has the highest affordability pressure, with a price-to-earnings ratio above 11 in every year shown.
- The South East, East of England and South West also show high affordability pressure.
- The North East, Scotland and Northern Ireland have comparatively lower affordability ratios.
- Affordability pressure remains materially higher in London and southern England than in northern regions and devolved nations.

## Data note

This project uses **illustrative regional estimates** for demonstration and portfolio purposes. It is not an official statistical release and should not be used for policy, financial or academic decision-making.

A future version can replace the embedded estimates with openly licensed data from sources such as the UK House Price Index and the Annual Survey of Hours and Earnings.

## Methods

The affordability ratio is calculated as:

```text
Affordability ratio = Average house price / Average annual earnings
```

The site presents regional trends and comparisons using interactive charts.

## How to run locally

```bash
git clone https://github.com/Swastika0710/uk-housing-affordability-explorer.git
cd uk-housing-affordability-explorer
```

Then open `index.html` in a web browser.

## Live project

Once GitHub Pages is enabled, the project will be available at:

```text
https://swastika0710.github.io/uk-housing-affordability-explorer/
```

## Licence

This project is released under the [MIT Licence](LICENSE).