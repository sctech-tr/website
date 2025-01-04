[![Netlify Status](https://api.netlify.com/api/v1/badges/fc1bc6e4-be4c-4a3b-8ac5-5b55c52e409e/deploy-status)](https://app.netlify.com/sites/sctech/deploys)
# welcome to my website!
you will find things here.
## about "today's overview" api
it's a json file that you can use to get today's quick info, like calendars. sample json:
```json
{
  "date": "2024-11-04",
  "name": "Avila",
  "meal": "McSinghs Scotch pie",
  "day": "Monday",
  "quote": "My imagination can picture no fairer happiness than to continue living for art."
}
```
you can access it via `https://sctech.netlify.app/todays-overview.json`
## seasonal buttons!
detect the season and display buttons with the appropriate colors!  
here are the colors for each season:
- spring: `lightgreen`
- summer: `yellow`
- autumn: `orange`
- winter: `white`
### attributes
- `text`: the text to display on the button
- `onclick`: works like normal js onclick
### example
```html
<script src="https://sctech.netlify.app/pkg/seasonal-buttons.js" async defer></script>
<seasonal-button text="click me!" onclick="alert('hello!')"></seasonal-button>
```
you can access it via `https://sctech.netlify.app/pkg/seasonal-buttons.js`
