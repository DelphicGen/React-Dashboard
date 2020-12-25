const config = {
    apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
    spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg",
};

// export const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${process.env.REACT_APP_API_KEY}`

export const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;