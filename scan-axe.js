const fs = require('fs');
const { JSDOM } = require('jsdom');
const axe = require('axe-core');

(async function(){
  try {
    const html = fs.readFileSync('index.html', 'utf8');
    const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    const { window } = dom;
    // Inject axe into the window context
    window.eval(axe.source);

    const options = {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa']
      }
    };

    const results = await new Promise((resolve, reject) => {
      window.axe.run(window.document, options, function(err, results){
        if (err) reject(err);
        else resolve(results);
      });
    });

    fs.writeFileSync('axe-report.json', JSON.stringify(results, null, 2));
    console.log('axe scan complete: issues=', results.violations.length);
  } catch (e) {
    console.error('scan failed', e && e.stack ? e.stack : e);
    process.exit(2);
  }
})();
