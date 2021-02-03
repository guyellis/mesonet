import { Boolean, Record, Number, Array, String, Static } from 'runtypes';

const QcSummary = Record({
  'PERCENT_OF_TOTAL_OBSERVATIONS_FLAGGED': Number,
  'QC_CHECKS_APPLIED': Array(String),
  'TOTAL_OBSERVATIONS_FLAGGED': Number,
});

const Summary = Record({
  'DATA_PARSING_TIME': String,
  'DATA_QUERY_TIME': String,
  'FUNCTION_USED': String,
  'METADATA_RESPONSE_TIME': String,
  'NUMBER_OF_OBJECTS': Number,
  'RESPONSE_CODE': Number,
  'RESPONSE_MESSAGE': String,
  'TOTAL_DATA_TIME': String,
});

const Units = Record({
  'air_temp': String, // 'Celsius', - Can these be restricted strings?
  'elevation': String, // 'ft', - Can these be restricted strings?
  'position': String, // 'ft', - Can these be restricted strings?
});

const Station = Record({
  'ELEVATION': String,
  'ELEV_DEM': String,
  'ID': String,
  'LATITUDE': String,
  'LONGITUDE': String,
  'MNET_ID': String,
  'NAME': String,
  'OBSERVATIONS': Record({
    'air_temp_set_1': Array(Number),
    'date_time': Array(String),
  }),
  'PERIOD_OF_RECORD': Record({
    'end': String,
    'start': String,
  }),
  'QC_FLAGGED': Boolean,
  'RESTRICTED': Boolean,
  'SENSOR_VARIABLES': Record({
    'air_temp': Record({
      'air_temp_set_1': Record({
        'position': String,
      }),
    }),
    'date_time': Record({
      'date_time': Record({}),
    }),
  }),
  'STATE': String,
  'STATUS': String,
  'STID': String,
  'TIMEZONE': String,
});

export const TimeSeriesAirTemp = Record({
  'QC_SUMMARY': QcSummary,
  'STATION': Array(Station),
  'SUMMARY': Summary,
  'UNITS': Units,
});

export type TimeSeriesAirTempType = Static<typeof TimeSeriesAirTemp>;
