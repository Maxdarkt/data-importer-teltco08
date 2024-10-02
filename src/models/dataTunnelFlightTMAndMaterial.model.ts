// Abstract class for common properties
abstract class BaseDataTunnelFlightTMAndMaterialModel {
  flightNumber!: string;
  lengthTM?: number;
  startTM!: number;
  endTM!: number;
  isFinished!: boolean;
  typeOfDirectionId!: string;
  typeOfWorkZoneId!: string;
  typeOfSupportClassId!: string;
  typeOfCompanyId!: string;
}

// Class for updating shootingDate
export class UpdateShootingDataTunnelFlightTMAndMaterialDTO extends BaseDataTunnelFlightTMAndMaterialModel {
  id?: string;
  shootingNumber?: number | null;
  shootingDate!: Date | string;
}

// class for updating measureDate
export class UpdateMeasureDataTunnelFlightTMAndMaterialDTO extends BaseDataTunnelFlightTMAndMaterialModel {
  id?: string;
  shootingNumber?: number | null;
  measureDate!: Date | string;
}

// class for updating shootingDate
export class UpdateShootingDateDataTunnelFlightTMAndMaterialDTO extends BaseDataTunnelFlightTMAndMaterialModel {
  id?: string;
  shootingNumber?: number | null;
  shootingDate!: Date | string;
}

// Class for creating data
export class CreateDataTunnelFlightTMAndMaterialDTO extends BaseDataTunnelFlightTMAndMaterialModel {
  shootingNumber!: number;
  drillingDate!: Date | string;
  typeOfMaterialClassId?: string | null;
}

//class for updating all
export class UpdateDataTunnelFlightTMAndMaterialDTO extends BaseDataTunnelFlightTMAndMaterialModel {
  shootingNumber?: number | null;
  drillingDate?: Date | string | null;
  measureDate?: Date | string | null;
  typeOfMaterialClassId?: string | null;
}

// Class for the complete data model
export class DataTunnelFlightTMAndMaterialModel extends BaseDataTunnelFlightTMAndMaterialModel {
  id?: string;
  shootingNumber?: number | null;
  shootingDate!: Date | string;
  measureDate?: Date | string | null;
  drillingDate?: Date | string | null;
  typeOfMaterialClassId?: string | null;
  createdAt?: Date;
  modifiedAt?: Date;
  TypeOfDirection?: any;
  TypeOfMaterialClass?: any;
  TypeOfSupportClass?: any;
  TypeOfWorkZone?: any;
  TypeOfCompany?: any;
  DataWorkZoneInfoShifts?: any[];
}
