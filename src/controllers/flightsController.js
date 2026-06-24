const fs = require('fs');
const path = require('path');

exports.getFlights = (req, res) => {
  const dataPath = path.join(__dirname, '../../data/flights.json');
  const flights = JSON.parse(fs.readFileSync(dataPath));

  let tableRows = flights.map(f => `
    <tr>
      <td>${f.flight}</td>
      <td>${f.origin}</td>
      <td>${f.destination}</td>
      <td><span class="status ${f.status.toLowerCase()}">${f.status}</span></td>
    </tr>
  `).join('');

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Flights</title>
      <style>
        body { font-family: Segoe UI, sans-serif; background:#f4f4f4; padding:20px; }
        h1 { text-align:center; margin-bottom:20px; }
        table { width:100%; border-collapse:collapse; background:#fff; box-shadow:0 4px 10px rgba(0,0,0,0.1); }
        th, td { padding:12px; text-align:center; border-bottom:1px solid #ddd; }
        th { background:#203a43; color:#fff; }
        .status.on-time { color:green; font-weight:bold; }
        .status.delayed { color:orange; font-weight:bold; }
        .status.cancelled { color:red; font-weight:bold; }
      </style>
    </head>
    <body>
      <h1>✈️ Flight Status</h1>
      <table>
        <tr><th>Flight</th><th>Origin</th><th>Destination</th><th>Status</th></tr>
        ${tableRows}
      </table>
    </body>
    </html>
  `);
};
