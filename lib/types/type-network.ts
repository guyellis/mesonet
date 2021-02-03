/*
Network Types come from this page:
https://developers.synopticdata.com/about/station-network-type/

Network types categorize the general application or purpose of a network of stations. The values in the ID column can be used when identifying networks/providers.
*/

interface MesoNetworkType {
  ID: number;
  Description: string;
  Name: string;
}

export const mesoNetworkType: MesoNetworkType[] = [{
  Description: 'Agricultural',
  ID: 1,
  Name: 'AG',
}, {
  Description: 'Air Quality',
  ID: 2,
  Name: 'AQ',
}, {
  Description: 'Offshore, CA, MX',
  ID: 3,
  Name: 'EXT',
}, {
  Description: 'Federal and state networks',
  ID: 4,
  Name: 'FED+',
}, {
  Description: 'Hydrological',
  ID: 5,
  Name: 'HYDRO',
}, {
  Description: 'State and Local',
  ID: 6,
  Name: 'LOCAL',
}, {
  Description: 'NWS/FAA',
  ID: 7,
  Name: 'NWS',
}, {
  Description: 'CWOP',
  ID: 8,
  Name: 'PUBLIC',
}, {
  Description: 'Fire weather',
  ID: 9,
  Name: 'RAWS',
}, {
  Description: 'Road and rail weather',
  ID: 10,
  Name: 'TRANS',
}, {
  Description: 'Public Utility',
  ID: 11,
  Name: 'UTILITY',
}, {
  Description: 'Research and Education',
  ID: 12,
  Name: 'RESEARCH',
}, {
  Description: 'Commercial',
  ID: 13,
  Name: 'COMMERCIAL',
}];
