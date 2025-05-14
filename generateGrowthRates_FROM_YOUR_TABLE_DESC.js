const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_experience_type';

// Mapping from Bulbapedia's data-sort-value to your desired curveId
// Your curveId definitions: 0=MedFast, 1=Erratic, 2=Fluctuating, 3=MedSlow, 4=Fast, 5=Slow
const bulbapediaSortValueToUserCurveId = {
    0: 2, // Bulbapedia "Fluctuating" -> Your ID 2
    1: 5, // Bulbapedia "Slow"        -> Your ID 5
    2: 3, // Bulbapedia "Medium Slow" -> Your ID 3
    3: 0, // Bulbapedia "Medium Fast" -> Your ID 0
    4: 4, // Bulbapedia "Fast"        -> Your ID 4
    5: 1  // Bulbapedia "Erratic"     -> Your ID 1
};

async function fetchAndParseGrowthRates() {
    try {
        console.log(`Fetching data from ${url}...`);
        const { data: htmlContent } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        console.log("Data fetched successfully. Parsing...");

        const $ = cheerio.load(htmlContent);
        const speciesGrowthRates = {};

        const table = $('table.roundtable.sortable');
        if (!table.length) {
            console.error("Could not find the main Pokémon data table.");
            return;
        }

        const rows = table.find('tbody > tr');
        if (!rows.length) {
            console.error("No rows found in the table body.");
            return;
        }

        rows.each((index, element) => {
            const columns = $(element).find('td');
            if (columns.length >= 4) {
                const dexNumStr = $(columns[0]).text().trim();
                const speciesId = parseInt(dexNumStr, 10);

                const growthRateCell = $(columns[3]);
                const dataSortValue = growthRateCell.attr('data-sort-value');

                if (dexNumStr && !isNaN(speciesId) && dataSortValue !== undefined) {
                    const bulbapediaSortVal = parseInt(dataSortValue, 10);
                    const userCurveId = bulbapediaSortValueToUserCurveId[bulbapediaSortVal];

                    if (userCurveId !== undefined) {
                        speciesGrowthRates[speciesId] = userCurveId;
                    } else {
                        // This warning is still useful to catch if Bulbapedia changes sort values
                        console.warn(`WARN: Unknown data-sort-value: ${bulbapediaSortVal} for species ID ${speciesId}`);
                    }
                }
            }
        });

        // --- Output for speciesGrowthRates ---
        console.log("\n\n// --- speciesGrowthRates ---");
        console.log("// speciesId: curveId (0=MedFast, 1=Erratic, 2=Fluctuating, 3=MedSlow, 4=Fast, 5=Slow)");
        console.log("const speciesGrowthRates = {");

        // Get sorted keys for consistent output
        const sortedIds = Object.keys(speciesGrowthRates).map(Number).sort((a, b) => a - b);
        
        const entriesPerLine = 10; // Adjust as needed for readability
        let currentLineEntries = [];

        for (let i = 0; i < sortedIds.length; i++) {
            const id = sortedIds[i];
            currentLineEntries.push(`  ${id}: ${speciesGrowthRates[id]}`);
            
            if (currentLineEntries.length === entriesPerLine || i === sortedIds.length - 1) {
                console.log(currentLineEntries.join(", ") + (i === sortedIds.length - 1 ? "" : ","));
                currentLineEntries = [];
            }
        }
        console.log("};");

    } catch (error) {
        console.error('Error fetching or parsing data:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
        }
    }
}

fetchAndParseGrowthRates();