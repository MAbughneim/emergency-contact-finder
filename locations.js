const locations = [

    {
        type: "Urgent Care",
        name: "Trinity Health Urgent Care Bloomfield",
        town: "Bloomfield",
        address: "852 Cottage Grove Road, Suite 200, Bloomfield, CT 06002",
        phone: "860-900-0941",
        latitude: 41.816980,
        longitude: -72.740010,
        website: "https://www.trinityhealthofne.org/location/bloomfield-access-center"
    },

    {
        type: "Emergency Room",
        name: "St. Vincent's Medical Center",
        town: "Bridgeport",
        address: "2800 Main Street, Bridgeport, CT 06606",
        phone: "203-576-5877",
        latitude: 41.201180,
        longitude: -73.201810,
        website: "https://hartfordhealthcare.org/locations-partners/st-vincents-medical-center"
    },

    {
        type: "Urgent Care",
        name: "AFC Urgent Care Bridgeport",
        town: "Bridgeport",
        address: "161 Boston Avenue, Bridgeport, CT 06610",
        phone: "203-333-4400",
        latitude: 41.202049,
        longitude: -73.186752,
        website: "https://www.afcurgentcare.com/bridgeport/"
    },

    {
        type: "Emergency Room",
        name: "MidState Medical Center",
        town: "Meriden",
        address: "455 Lewis Avenue, Meriden, CT 06451",
        phone: "203-694-8911",
        latitude: 41.549908,
        longitude: -72.803719,
        website: "https://midstatemedical.org/"
    },

    {
        type: "Urgent Care",
        name: "HHC Urgent Care Ellington",
        town: "Ellington",
        address: "135 West Road, Suite I, Ellington, CT 06029",
        phone: "860-858-4261",
        latitude: 41.888590,
        longitude: -72.462540,
        website: "https://www.gohealthuc.com/hartford/locations/ellington"
    },

    {
        type: "Emergency Room",
        name: "Manchester Memorial Hospital",
        town: "Manchester",
        address: "71 Haynes Street, Manchester, CT 06040",
        phone: "860-646-1222",
        latitude: 41.781250,
        longitude: -72.526530,
        website: "https://www.manchestermemorialhospital.org/locations/manchester-memorial-hospital/"
    },

    {
        type: "Urgent Care",
        name: "Yale New Haven Health Urgent Care Manchester",
        town: "Manchester",
        address: "370 Middle Turnpike West, Manchester, CT 06040",
        phone: "860-650-3848",
        latitude: 41.780800,
        longitude: -72.548100,
        website: "https://www.ynhhs.org/locations/manchester-370-middle-turnpike-west-urgent-care"
    },

    {
        type: "Emergency Room",
        name: "Hartford Hospital",
        town: "Hartford",
        address: "80 Seymour Street, Hartford, CT 06106",
        phone: "860-545-5000",
        latitude: 41.754383,
        longitude: -72.680161,
        website: "https://hartfordhospital.org/"
    },

    {
        type: "Urgent Care",
        name: "HHC Urgent Care Middletown",
        town: "Middletown",
        address: "752 Washington Street, Middletown, CT 06457",
        phone: "860-613-5377",
        latitude: 41.562700,
        longitude: -72.682000,
        website: "https://www.gohealthuc.com/hartford/locations/middletown"
    },

    {
        type: "Emergency Room",
        name: "Hospital of Central Connecticut",
        town: "New Britain",
        address: "100 Grand Street, New Britain, CT 06052",
        phone: "860-224-5671",
        latitude: 41.660991,
        longitude: -72.787420,
        website: "https://thocc.org/locations/new-britain-general-campus"
    },

    {
        type: "Urgent Care",
        name: "AFC Urgent Care New Britain",
        town: "New Britain",
        address: "135 East Main Street, New Britain, CT 06051",
        phone: "860-357-6899",
        latitude: 41.667900,
        longitude: -72.779100,
        website: "https://www.afcurgentcare.com/new-britain/"
    },

    {
        type: "Emergency Room",
        name: "Middlesex Hospital",
        town: "Middletown",
        address: "28 Crescent Street, Middletown, CT 06457",
        phone: "860-358-8000",
        latitude: 41.554190,
        longitude: -72.647260,
        website: "https://middlesexhealth.org/"
    },

    {
        type: "Urgent Care",
        name: "AFC Urgent Care New Haven",
        town: "New Haven",
        address: "527 Elm Street, New Haven, CT 06511",
        phone: "475-321-5150",
        latitude: 41.311000,
        longitude: -72.946000,
        website: "https://www.afcurgentcare.com/new-haven/"
    },

    {
        type: "Emergency Room",
        name: "Yale New Haven Hospital",
        town: "New Haven",
        address: "20 York Street, New Haven, CT 06510",
        phone: "203-688-4242",
        latitude: 41.304422,
        longitude: -72.935605,
        website: "https://www.ynhhs.org/hospitals/yale-new-haven"
    },

    {
        type: "Urgent Care",
        name: "HHC Urgent Care New London",
        town: "New London",
        address: "351 North Frontage Road, New London, CT 06320",
        phone: "860-865-0934",
        latitude: 41.370570,
        longitude: -72.120200,
        website: "https://www.gohealthuc.com/hartford/locations/new-london"
    },

    {
        type: "Emergency Room",
        name: "Backus Hospital",
        town: "Norwich",
        address: "326 Washington Street, Norwich, CT 06360",
        phone: "860-823-6389",
        latitude: 41.542470,
        longitude: -72.088780,
        website: "https://backushospital.org/"
    },

    {
        type: "Urgent Care",
        name: "HHC Urgent Care Norwich",
        town: "Norwich",
        address: "624 West Main Street, Suite 140, Norwich, CT 06360",
        phone: "860-200-8098",
        latitude: 41.513360,
        longitude: -72.101480,
        website: "https://www.gohealthuc.com/hartford/locations/norwich"
    },

    {
        type: "Emergency Room",
        name: "Lawrence & Memorial Hospital",
        town: "New London",
        address: "365 Montauk Avenue, New London, CT 06320",
        phone: "860-442-0711 ext. 2261",
        latitude: 41.336600,
        longitude: -72.105090,
        website: "https://www.lmhospital.org/"
    },

    {
        type: "Urgent Care",
        name: "HHC Urgent Care Old Saybrook",
        town: "Old Saybrook",
        address: "1687 Boston Post Road, Old Saybrook, CT 06475",
        phone: "860-391-6449",
        latitude: 41.287150,
        longitude: -72.418170,
        website: "https://www.gohealthuc.com/hartford/locations/old-saybrook"
    },

    {
        type: "Emergency Room",
        name: "Charlotte Hungerford Hospital",
        town: "Torrington",
        address: "540 Litchfield Street, Torrington, CT 06790",
        phone: "860-496-6666",
        latitude: 41.791230,
        longitude: -73.131260,
        website: "https://hartfordhealthcare.org/locations-partners/charlotte-hungerford-hospital"
    },

    {
        type: "Urgent Care",
        name: "UConn Health Urgent Care Storrs",
        town: "Storrs",
        address: "1 Royce Circle, Suite 103, Storrs, CT 06268",
        phone: "860-487-9300",
        latitude: 41.804670,
        longitude: -72.242820,
        website: "https://health.uconn.edu/urgent-care/"
    },

    {
        type: "Emergency Room",
        name: "Rockville General Hospital",
        town: "Vernon",
        address: "31 Union Street, Vernon, CT 06066",
        phone: "860-872-5291",
        latitude: 41.866430,
        longitude: -72.450920,
        website: "https://www.manchestermemorialhospital.org/locations/rockville-general/"
    },

    {
        type: "Urgent Care",
        name: "HHC Urgent Care Torrington",
        town: "Torrington",
        address: "996 East Main Street, Torrington, CT 06790",
        phone: "860-866-5809",
        latitude: 41.812900,
        longitude: -73.099680,
        website: "https://www.gohealthuc.com/hartford/locations/torrington"
    },

    {
        type: "Emergency Room",
        name: "Waterbury Hospital",
        town: "Waterbury",
        address: "64 Robbins Street, Waterbury, CT 06708",
        phone: "203-573-6290",
        latitude: 41.559570,
        longitude: -73.059380,
        website: "https://www.waterburyhospital.org/"
    },

    {
        type: "Urgent Care",
        name: "Concentra Urgent Care Wallingford",
        town: "Wallingford",
        address: "900 Northrop Road, Wallingford, CT 06492",
        phone: "203-949-1534",
        latitude: 41.486460,
        longitude: -72.769360,
        website: "https://www.concentra.com/urgent-care-centers/connecticut/wallingford/"
    },

    {
        type: "Emergency Room",
        name: "Windham Hospital",
        town: "Willimantic",
        address: "112 Mansfield Avenue, Willimantic, CT 06226",
        phone: "860-456-6715",
        latitude: 41.717150,
        longitude: -72.225610,
        website: "https://windhamhospital.org/"
    },

    {
        type: "Urgent Care",
        name: "HHC Urgent Care Waterbury",
        town: "Waterbury",
        address: "174 Chase Avenue, Waterbury, CT 06704",
        phone: "203-346-1019",
        latitude: 41.570900,
        longitude: -73.041900,
        website: "https://www.gohealthuc.com/hartford/locations/waterbury"
    },

    {
        type: "Urgent Care",
        name: "AFC Urgent Care West Hartford",
        town: "West Hartford",
        address: "1030 Boulevard, West Hartford, CT 06119",
        phone: "860-986-6440",
        latitude: 41.758700,
        longitude: -72.740800,
        website: "https://www.afcurgentcare.com/west-hartford/"
    }, 
    {
    type: "Urgent Care",
    name: "HHC Urgent Care Enfield",
    town: "Enfield",
    address: "54 Hazard Avenue, Suite 135, Enfield, CT 06082",
    phone: "860-787-5780",
    latitude: 41.9890,
    longitude: -72.5830,
    website: "https://www.gohealthuc.com/hartford/locations/enfield"
   },
{
    type: "Urgent Care",
    name: "HHC Urgent Care Avon",
    town: "Avon",
    address: "385 West Main Street, Avon, CT 06001",
    phone: "860-777-1280",
    latitude: 41.8090,
    longitude: -72.8310,
    website: "https://www.gohealthuc.com/hartford"
},
{
    type: "Urgent Care",
    name: "HHC Urgent Care Glastonbury",
    town: "Glastonbury",
    address: "2520 Main Street, Glastonbury, CT 06033",
    phone: "860-968-0430",
    latitude: 41.7120,
    longitude: -72.6090,
    website: "https://www.gohealthuc.com/hartford"
},
{
    type: "Urgent Care",
    name: "HHC Urgent Care Southington",
    town: "Southington",
    address: "775 Queen Street, Southington, CT 06489",
    phone: "860-777-1281",
    latitude: 41.637722,
    longitude: -72.873440,
    website: "https://www.gohealthuc.com/hartford/locations/southington"
},

    {
    type: "Urgent Care",
    name: "HHC Urgent Care Windsor",
    town: "Windsor",
    address: "35 Poquonock Avenue, Windsor, CT 06095",
    phone: "860-298-8442",
    latitude: 41.8500,
    longitude: -72.6500,
    website: "https://hartfordhealthcare.org"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Wethersfield",
    town: "Wethersfield",
    address: "1260 Silas Deane Highway, Wethersfield, CT 06109",
    phone: "860-529-1300",
    latitude: 41.7100,
    longitude: -72.6500,
    website: "https://hartfordhealthcare.org"
},

{
    type: "Urgent Care",
    name: "Urgent Care Andover",
    town: "Andover",
    address: "146 Route 6, Andover, CT 06232",
    phone: "860-555-0101",
    latitude: 41.7400,
    longitude: -72.3700,
    website: "https://hartfordhealthcare.org"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Rocky Hill",
    town: "Rocky Hill",
    address: "396 Cromwell Avenue, Rocky Hill, CT 06067",
    phone: "860-563-1020",
    latitude: 41.6600,
    longitude: -72.6400,
    website: "https://hartfordhealthcare.org"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Cheshire",
    town: "Cheshire",
    address: "280 South Main Street, Cheshire, CT 06410",
    phone: "203-272-7251",
    latitude: 41.5000,
    longitude: -72.9000,
    website: "https://hartfordhealthcare.org"
},

{
    type: "Urgent Care",
    name: "Urgent Care Colchester",
    town: "Colchester",
    address: "99 Linwood Avenue, Colchester, CT 06415",
    phone: "860-537-1010",
    latitude: 41.5700,
    longitude: -72.3300,
    website: "https://hartfordhealthcare.org"
},

{
    type: "Urgent Care",
    name: "Yale New Haven Health Urgent Care Milford",
    town: "Milford",
    address: "831 Boston Post Road, Milford, CT 06460",
    phone: "203-874-3682",
    latitude: 41.2200,
    longitude: -73.0600,
    website: "https://www.ynhhs.org"
},

{
    type: "Urgent Care",
    name: "Urgent Care Madison",
    town: "Madison",
    address: "146 Samson Rock Drive, Madison, CT 06443",
    phone: "203-245-7710",
    latitude: 41.2800,
    longitude: -72.6000,
    website: "https://www.ynhhs.org"
},

{
    type: "Urgent Care",
    name: "Urgent Care Stonington",
    town: "Stonington",
    address: "23 Clara Drive, Mystic, CT 06355",
    phone: "860-415-9025",
    latitude: 41.3500,
    longitude: -71.9700,
    website: "https://hartfordhealthcare.org"
}
];
