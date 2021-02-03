import fetch from 'node-fetch';

import { StationMetadataType } from '../types/type-metadata';

const buildV2StationsMetadataUrl = (token: string, coordinates: string, radius: string): string => {
  // GET https://api.synopticdata.com/v2/stations/metadata?&token=<token-value>&complete=1&sensorvars=1&status=active&radius=32.111,-110.111,5
  const baseUrl = 'https://api.synopticdata.com/v2/stations/metadata';
  return `${baseUrl}?token=${token}&complete=1&sensorvars=1&status=active&radius=${coordinates},${radius}`;
};
  
export const stationFinder = async (token: string, longLat: string, radius: string): Promise<StationMetadataType> => {
  const url = buildV2StationsMetadataUrl(token, longLat, radius);
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error(`For ${url} expected status code 200 but got ${res.status}:`);
  }

  const json = await res.json();
  return json;
};

export interface StationFinderSummary {
  distance: number;
  end: string | null;
  googleMapsLink: string;
  hasAirTemp: boolean;
  id: string;
  name: string;
  nameShort: string;
  start: string | null;
  stid: string;
}

export const stationFinderSummary = async (
  token: string, options: Record<string, string>,
): Promise<StationFinderSummary[]> => {
  const { longLat, radius } = options;
  const stations = await stationFinder(token, longLat, radius);
  const stationSummary = stations.STATION.map((station) => {
    const { LATITUDE, LONGITUDE } = station;
    // The Number + Z at the end of the link is how much to zoom the map in
    const googleMapsLink = `https://www.google.com/maps/@${LATITUDE},${LONGITUDE},20z`;
    return {
      distance: station.DISTANCE,
      end: station.PERIOD_OF_RECORD.end,
      googleMapsLink,
      hasAirTemp: !!station.SENSOR_VARIABLES.air_temp,
      id: station.ID,
      name: station.NAME,
      nameShort: station.SHORTNAME,
      start: station.PERIOD_OF_RECORD.start,
      stid: station.STID,
    };
  });
  return stationSummary.sort((a, b) => {
    if( a.distance === b.distance ) {
      return 0;
    }
    // sort from closest to furthest
    return a.distance > b.distance ? 1 : -1;
  });
};
