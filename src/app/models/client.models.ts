export const StateCodeM = new Map<StateCodeT, DisplayNameI>([
    ['AK', {displayName: 'Alaska'}],
    ['AL', {displayName: 'Alabama'}],
    ['AR', {displayName: 'Arkansas'}],
    ['AZ', {displayName: 'Arizona'}],
    ['CA', {displayName: 'California'}],
    ['CO', {displayName: 'Colorado'}],
    ['CT', {displayName: 'Connecticut'}],
    ['DC', {displayName: 'District of Columbia'}],
    ['DE', {displayName: 'Delaware'}],
    ['FL', {displayName: 'Florida'}],
    ['GA', {displayName: 'Georgia'}],
    ['HI', {displayName: 'Hawaii'}],
    ['IA', {displayName: 'Iowa'}],
    ['ID', {displayName: 'Idaho'}],
    ['IL', {displayName: 'Illinois'}],
    ['IN', {displayName: 'Indiana'}],
    ['KS', {displayName: 'Kansas'}],
    ['KY', {displayName: 'Kentucky'}],
    ['LA', {displayName: 'Louisiana'}],
    ['MA', {displayName: 'Massachusetts'}],
    ['MD', {displayName: 'Maryland'}],
    ['ME', {displayName: 'Maine'}],
    ['MI', {displayName: 'Michigan'}],
    ['MN', {displayName: 'Minnesota'}],
    ['MO', {displayName: 'Missouri'}],
    ['MS', {displayName: 'Mississippi'}],
    ['MT', {displayName: 'Montana'}],
    ['NC', {displayName: 'North Carolina'}],
    ['ND', {displayName: 'North Dakota'}],
    ['NE', {displayName: 'Nebraska'}],
    ['NH', {displayName: 'New Hampshire'}],
    ['NJ', {displayName: 'New Jersey'}],
    ['NM', {displayName: 'New Mexico'}],
    ['NV', {displayName: 'Nevada'}],
    ['NY', {displayName: 'New York'}],
    ['OH', {displayName: 'Ohio'}],
    ['OK', {displayName: 'Oklahoma'}],
    ['OR', {displayName: 'Oregon'}],
    ['PA', {displayName: 'Pennsylvania'}],
    ['RI', {displayName: 'Rhode Island'}],
    ['SC', {displayName: 'South Carolina'}],
    ['SD', {displayName: 'South Dakota'}],
    ['TN', {displayName: 'Tennessee'}],
    ['TX', {displayName: 'Texas'}],
    ['UT', {displayName: 'Utah'}],
    ['VA', {displayName: 'Virginia'}],
    ['VT', {displayName: 'Vermont'}],
    ['WA', {displayName: 'Washington'}],
    ['WI', {displayName: 'Wisconsin'}],
    ['WV', {displayName: 'West Virginia'}],
    ['WY', {displayName: 'Wyoming'}]
    ])

export interface DisplayNameI {
    displayName: string;
}

export type StateCodeT = 
    'AK' |
    'AL' |
    'AR' |
    'AZ' |
    'CA' |
    'CO' |
    'CT' |
    'DC' |
    'DE' |
    'FL' |
    'GA' |
    'HI' |
    'IA' |
    'ID' |
    'IL' |
    'IN' |
    'KS' |
    'KY' |
    'LA' |
    'MA' |
    'MD' |
    'ME' |
    'MI' |
    'MN' |
    'MO' |
    'MS' |
    'MT' |
    'NC' |
    'ND' |
    'NE' |
    'NH' |
    'NJ' |
    'NM' |
    'NV' |
    'NY' |
    'OH' |
    'OK' |
    'OR' |
    'PA' |
    'RI' |
    'SC' |
    'SD' |
    'TN' |
    'TX' |
    'UT' |
    'VA' |
    'VT' |
    'WA' |
    'WI' |
    'WV' |
    'WY';

export interface ClientI {
    id?: string;
    isActive: boolean;
    name: string;
    formalName: string;
    address1: string;
    address2?: string;
    city: string;
    state: StateCodeT;
    zipCode: string;
}