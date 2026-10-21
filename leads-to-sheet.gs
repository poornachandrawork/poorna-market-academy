/**
 * Saves landing-page demo requests into a Google Sheet.
 *
 * Setup (5 minutes):
 * 1. Create a new Google Sheet. Name the first tab "Leads".
 * 2. Extensions → Apps Script. Delete the sample code and paste this whole file.
 * 3. Click Deploy → New deployment → type "Web app".
 *      Execute as: Me      Who has access: Anyone
 * 4. Click Deploy, allow access, and copy the "Web app URL".
 * 5. Paste that URL into CONFIG.sheetUrl in index.html.
 */
const HEADERS = ['time', 'name', 'phone', 'mode', 'page',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads')
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

  let data = {};
  try { data = JSON.parse(e.postData.contents); } catch (err) { data = {}; }

  sheet.appendRow(HEADERS.map(h => data[h] || ''));
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
