import { Partial, Null, Boolean, Number, String, Literal, Array, Record, Union, Static, Dictionary } from 'runtypes';

const PeriodOfRecord = Record({
  end: String.Or(Null),
  start: String.Or(Null),
});

const SensorVariablesItem = Record({
  PERIOD_OF_RECORD: PeriodOfRecord,
  position: String.Or(Null),
});

// Sensor variables look like:
// air_temp: Record({
//   air_temp_1: SensorVariablesItem,
// }),

const SensorVariables = Dictionary(Dictionary(SensorVariablesItem));

const StationMetadataStation = Record({
  COUNTRY: String,
  COUNTY: String,
  CWA: String,
  DISTANCE: Number,
  ELEVATION: String,
  ELEV_DEM: String,
  GACC: String,
  ID: String,
  LATITUDE: String, 
  LONGITUDE: String,
  MNET_ID: String,
  NAME: String,
  NWSFIREZONE: String,
  NWSZONE: String,
  PERIOD_OF_RECORD: PeriodOfRecord,
  RESTRICTED: Boolean,
  SENSOR_VARIABLES: SensorVariables,
  SGID: String,
  SHORTNAME: String,
  STATE: String,
  STATUS: String,
  STID: String,
  TIMEZONE: String,
  WIMS_ID: Null,
}).And(Partial({
  MNET_LONGNAME: String,
  MNET_SHORTNAME: String,
}));

/**
 * Possible response values:
 * 1 = OK
 * 2 = Zero Results
 * 200 = Authentication failure
 * 400 = Violates a rule of the API
 */
const StationMetadataSummaryResponseCode = Union(Literal(1), Literal(2), Literal(200), Literal(400));

const StationMetadataSummary = Record({
  METADATA_RESPONSE_TIME: String,
  NUMBER_OF_OBJECTS: Number,
  RESPONSE_CODE: StationMetadataSummaryResponseCode,
  RESPONSE_MESSAGE: String,
});

export const StationMetadata = Record({
  STATION: Array(StationMetadataStation),
  SUMMARY: StationMetadataSummary,
});

export type StationMetadataType = Static<typeof StationMetadata>;
