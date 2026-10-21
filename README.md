# Poorna Market Academy: ad landing page

Live site: https://poornachandrawork.github.io/poorna-market-academy/

A single-page landing page for running Meta and Google ads to a stock market course.

## Before running ads

Open `index.html` and edit the `CONFIG` block near the bottom:

| Setting | What to put |
|---|---|
| `phone`, `phoneLabel` | Your WhatsApp number, e.g. `"919876543210"` and `"+91 98765 43210"` |
| `batchStart`, `seatsLeft` | Real next batch date and seats |
| `proof`, `rating` | Real numbers only (students, Google rating). Set `sample:false` |
| `mentor` | Name, photo path, bio, credentials. Set `sample:false` |
| `reviews` | Real student reviews (with permission). Set `sample:false` |
| `gallery` | Paths to classroom photos, e.g. `img/class1.jpg` |
| `plans`, `refund` | Your real fees, EMI and refund terms. Set `sample:false` |
| `metaPixelId` | Meta Pixel ID (fires `PageView`, `Lead`, `Contact`) |
| `googleTagId`, `googleAdsSendTo` | GA4 / Google Ads tag and lead conversion |
| `sheetUrl` | Google Sheet web-app URL. See `leads-to-sheet.gs` |

The yellow "Preview mode" bar and the SAMPLE tags disappear once everything is real.

## Matching the ad headline

Add `?h=` to the ad's link to change the hero headline for that ad:

`https://poornachandrawork.github.io/poorna-market-academy/?h=Learn+option+trading+in+8+weeks`

UTM tags (`utm_source`, `utm_campaign`, …) are saved with each lead.

## Files

- `index.html`: the landing page
- `privacy.html`: privacy policy (required by Meta and Google for lead forms)
- `leads-to-sheet.gs`: Google Apps Script that saves leads to a Google Sheet
