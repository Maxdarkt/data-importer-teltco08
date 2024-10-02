import { importShootingHourScript } from "./scripts/import-shooting-hour.scripts";
import path from 'path';

enum SourceFileType {
  TunnelPaire = 'Tunnel Paire',
  TunnelImpaire = 'Tunnel Impaire',
  Rameau4 = 'Rameau 4',
  Rameau5 = 'Rameau 5'
}

const main = () => {
  console.log('Starting data import...');

  const sourceFiles = [
    {
      name: SourceFileType.TunnelPaire,
      pathFile: path.join(__dirname, './files/shooting-hour-even.txt'),
      workzoneId: 'ad9fb9c4-7aac-ed11-aad0-6045bd886229',
      typeOfSupportClassId: 'a0a09438-7804-ee11-8f6e-6045bd886525'
    },
    {
      name: SourceFileType.TunnelImpaire,
      pathFile: path.join(__dirname, './files/shooting-hour-odd-txt'),
      workzoneId: '20b14bb8-7aac-ed11-aad0-6045bd886229',
      typeOfSupportClassId: 'a0a09438-7804-ee11-8f6e-6045bd886525'
    },
    {
      name: SourceFileType.Rameau4,
      pathFile: path.join(__dirname, './files/shooting-hour-r4.txt'),
      workzoneId: '47744719-861e-4f35-9522-062376a9b858',
      typeOfSupportClassId: '9d5e6841-e88e-42bb-a2b1-6aa3c1426402'
    },
    {
      name: SourceFileType.Rameau5,
      pathFile: path.join(__dirname, './files/shooting-hour-r5.txt'),
      workzoneId: '668b66c6-3a3a-4f5b-a29c-2309dbf852af',
      typeOfSupportClassId: '9d5e6841-e88e-42bb-a2b1-6aa3c1426402'
    }
  ]

  const sourceFile = sourceFiles.find(file => file.name === SourceFileType.Rameau5);

  if(!sourceFile) {
    console.error('Source file not found');
    return;
  }

  // we process to the import of the shooting hour
  // importShootingHourScript(sourceFile, 'update', null);
  
  console.log('Data import completed')
}

main();
