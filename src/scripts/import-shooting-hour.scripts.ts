import fs from 'fs';
import readline from 'readline';
import moment from 'moment';
import 'moment/locale/fr';
import { getFlightTMAndMaterialByShootingNumberAndSupportClassAndWorkZoneFromAPI, updateFlightTMAndMaterialByUuidAndShootingDate } from '../utils/dataTunnelFlight.store';
import { delay } from '../utils/delay.utils';

const importShootingHourScript = (sourceFiles: {name: string, pathFile: string, workzoneId: string, typeOfSupportClassId: string}, action: 'read' | 'update', sampleSize:number | null = null) => {
  
  const pathFile = sourceFiles.pathFile;
  const typeOfSupporClassId = sourceFiles.typeOfSupportClassId;
  const workZoneId = sourceFiles.workzoneId;
  let countError = 0;

  const rl = readline.createInterface({
    input: fs.createReadStream(pathFile),
    crlfDelay: Infinity
  });
  
  let lineCount = 0;

  const sampleLines: string[] = [];

  rl.on('line', async (line) => {
    if (sampleSize === null || lineCount < sampleSize) {
      sampleLines.push(line);
    }
    lineCount++;

    if (sampleSize !== null && lineCount === sampleSize) {
      rl.close();
    }
  });

  rl.on('close', async () => {
    for (const line of sampleLines) {
      const lineParts = line.split('\t');
      const shootingDateTime = moment(lineParts[2], 'DD.MM.YY HH:mm').format();
      const shootingNumber = parseInt(lineParts[5]);

      const { data: flightTMAndMaterial, error } = await getFlightTMAndMaterialByShootingNumberAndSupportClassAndWorkZoneFromAPI(shootingNumber, typeOfSupporClassId, workZoneId);

      if (error || !flightTMAndMaterial?.id) {
        countError++;
        console.log(error);
        continue;
      }

      if(action === 'read') {
        console.log(flightTMAndMaterial);
      } else {
        const { data: updateShootingDateData, error: updateShootingDateError } = await updateFlightTMAndMaterialByUuidAndShootingDate(flightTMAndMaterial.id, shootingDateTime);
  
        if (updateShootingDateError) {
          console.log(updateShootingDateError);
          continue;
        }
  
        console.log(updateShootingDateData);
  
        await delay(500);
      }
    }

    console.log(`Lecture des lignes terminée pour ${sourceFiles.name} avec ${countError} erreurs`);
  });
};

export { importShootingHourScript };