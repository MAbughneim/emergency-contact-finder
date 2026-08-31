const locations = [

 {
    type: "Urgent Care",
    name: "Trinity Health Urgent Care Bloomfield",
    town: "Bloomfield",
    address: "852 Cottage Grove Road, Suite 200, Bloomfield, CT 06002",
    phone: "860-900-0941",
    latitude: 41.816980,
    longitude: -72.740010,
    website: "https://www.trinityhealthofne.org/location/bloomfield-access-center",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Emergency Room",
    name: "St. Vincent's Medical Center",
    town: "Bridgeport",
    address: "2800 Main Street, Bridgeport, CT 06606",
    phone: "203-576-5877",
    latitude: 41.201180,
    longitude: -73.201810,
    website: "https://hartfordhealthcare.org/locations-partners/st-vincents-medical-center",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "AFC Urgent Care Bridgeport",
    town: "Bridgeport",
    address: "161 Boston Avenue, Bridgeport, CT 06610",
    phone: "203-333-4400",
    latitude: 41.202049,
    longitude: -73.186752,
    website: "https://www.afcurgentcare.com/bridgeport/",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Emergency Room",
    name: "MidState Medical Center",
    town: "Meriden",
    address: "455 Lewis Avenue, Meriden, CT 06451",
    phone: "203-694-8911",
    latitude: 41.549908,
    longitude: -72.803719,
    website: "https://midstatemedical.org/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Ellington",
    town: "Ellington",
    address: "135 West Road, Suite I, Ellington, CT 06029",
    phone: "860-858-4261",
    latitude: 41.888590,
    longitude: -72.462540,
    website: "https://www.gohealthuc.com/hartford/locations/ellington",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Emergency Room",
    name: "Manchester Memorial Hospital",
    town: "Manchester",
    address: "71 Haynes Street, Manchester, CT 06040",
    phone: "860-646-1222",
    latitude: 41.781250,
    longitude: -72.526530,
    website: "https://www.manchestermemorialhospital.org/locations/manchester-memorial-hospital/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "Yale New Haven Health Urgent Care Manchester",
    town: "Manchester",
    address: "370 Middle Turnpike West, Manchester, CT 06040",
    phone: "860-650-3848",
    latitude: 41.780800,
    longitude: -72.548100,
    website: "https://www.ynhhs.org/locations/manchester-370-middle-turnpike-west-urgent-care",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Emergency Room",
    name: "Hartford Hospital",
    town: "Hartford",
    address: "80 Seymour Street, Hartford, CT 06106",
    phone: "860-545-5000",
    latitude: 41.754383,
    longitude: -72.680161,
    website: "https://hartfordhospital.org/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Middletown",
    town: "Middletown",
    address: "752 Washington Street, Middletown, CT 06457",
    phone: "860-613-5377",
    latitude: 41.562700,
    longitude: -72.682000,
    website: "https://www.gohealthuc.com/hartford/locations/middletown",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Emergency Room",
    name: "Hospital of Central Connecticut",
    town: "New Britain",
    address: "100 Grand Street, New Britain, CT 06052",
    phone: "860-224-5671",
    latitude: 41.660991,
    longitude: -72.787420,
    website: "https://thocc.org/locations/new-britain-general-campus",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "AFC Urgent Care New Britain",
    town: "New Britain",
    address: "135 East Main Street, New Britain, CT 06051",
    phone: "860-357-6899",
    latitude: 41.667900,
    longitude: -72.779100,
    website: "https://www.afcurgentcare.com/new-britain/",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Emergency Room",
    name: "Middlesex Hospital",
    town: "Middletown",
    address: "28 Crescent Street, Middletown, CT 06457",
    phone: "860-358-8000",
    latitude: 41.554190,
    longitude: -72.647260,
    website: "https://middlesexhealth.org/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "AFC Urgent Care New Haven",
    town: "New Haven",
    address: "527 Elm Street, New Haven, CT 06511",
    phone: "475-321-5150",
    latitude: 41.311000,
    longitude: -72.946000,
    website: "https://www.afcurgentcare.com/new-haven/",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Emergency Room",
    name: "Yale New Haven Hospital",
    town: "New Haven",
    address: "20 York Street, New Haven, CT 06510",
    phone: "203-688-4242",
    latitude: 41.304422,
    longitude: -72.935605,
    website: "https://www.ynhhs.org/hospitals/yale-new-haven",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care New London",
    town: "New London",
    address: "351 North Frontage Road, New London, CT 06320",
    phone: "860-865-0934",
    latitude: 41.370570,
    longitude: -72.120200,
    website: "https://www.gohealthuc.com/hartford/locations/new-london",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Emergency Room",
    name: "Backus Hospital",
    town: "Norwich",
    address: "326 Washington Street, Norwich, CT 06360",
    phone: "860-823-6389",
    latitude: 41.542470,
    longitude: -72.088780,
    website: "https://backushospital.org/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Norwich",
    town: "Norwich",
    address: "624 West Main Street, Suite 140, Norwich, CT 06360",
    phone: "860-200-8098",
    latitude: 41.513360,
    longitude: -72.101480,
    website: "https://www.gohealthuc.com/hartford/locations/norwich",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Emergency Room",
    name: "Lawrence & Memorial Hospital",
    town: "New London",
    address: "365 Montauk Avenue, New London, CT 06320",
    phone: "860-442-0711 ext. 2261",
    latitude: 41.336600,
    longitude: -72.105090,
    website: "https://www.lmhospital.org/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Old Saybrook",
    town: "Old Saybrook",
    address: "1687 Boston Post Road, Old Saybrook, CT 06475",
    phone: "860-391-6449",
    latitude: 41.287150,
    longitude: -72.418170,
    website: "https://www.gohealthuc.com/hartford/locations/old-saybrook",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Emergency Room",
    name: "Charlotte Hungerford Hospital",
    town: "Torrington",
    address: "540 Litchfield Street, Torrington, CT 06790",
    phone: "860-496-6666",
    latitude: 41.791230,
    longitude: -73.131260,
    website: "https://hartfordhealthcare.org/locations-partners/charlotte-hungerford-hospital",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

    {
    type: "Urgent Care",
    name: "UConn Health Urgent Care Storrs",
    town: "Storrs",
    address: "1 Royce Circle, Suite 103, Storrs, CT 06268",
    phone: "860-487-9300",
    latitude: 41.804670,
    longitude: -72.242820,
    website: "https://health.uconn.edu/urgent-care/",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Emergency Room",
    name: "Rockville General Hospital",
    town: "Vernon",
    address: "31 Union Street, Vernon, CT 06066",
    phone: "860-872-5291",
    latitude: 41.866430,
    longitude: -72.450920,
    website: "https://www.manchestermemorialhospital.org/locations/rockville-general/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Torrington",
    town: "Torrington",
    address: "996 East Main Street, Torrington, CT 06790",
    phone: "860-866-5809",
    latitude: 41.812900,
    longitude: -73.099680,
    website: "https://www.gohealthuc.com/hartford/locations/torrington",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Emergency Room",
    name: "Waterbury Hospital",
    town: "Waterbury",
    address: "64 Robbins Street, Waterbury, CT 06708",
    phone: "203-573-6290",
    latitude: 41.559570,
    longitude: -73.059380,
    website: "https://www.waterburyhospital.org/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "Concentra Urgent Care Wallingford",
    town: "Wallingford",
    address: "900 Northrop Road, Wallingford, CT 06492",
    phone: "203-949-1534",
    latitude: 41.486460,
    longitude: -72.769360,
    website: "https://www.concentra.com/urgent-care-centers/connecticut/wallingford/",
    weekdayHours: "8:00 am - 5:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Emergency Room",
    name: "Windham Hospital",
    town: "Willimantic",
    address: "112 Mansfield Avenue, Willimantic, CT 06226",
    phone: "860-456-6715",
    latitude: 41.717150,
    longitude: -72.225610,
    website: "https://windhamhospital.org/",
    weekdayHours: "24 hours, 7 days a week",
    saturdayHours: "24 hours, 7 days a week",
    sundayHours: "24 hours, 7 days a week"
},

{
    type: "Urgent Care",
    name: "AFC Urgent Care West Hartford",
    town: "West Hartford",
    address: "1030 Boulevard, West Hartford, CT 06119",
    phone: "860-986-6440",
    latitude: 41.758700,
    longitude: -72.740800,
    website: "https://www.afcurgentcare.com/west-hartford/",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Enfield",
    town: "Enfield",
    address: "54 Hazard Avenue, Suite 135, Enfield, CT 06082",
    phone: "860-787-5780",
    latitude: 41.987687,
    longitude: -72.575932,
    website: "https://www.gohealthuc.com/hartford/locations/enfield",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Avon",
    town: "Avon",
    address: "385 West Main Street, Avon, CT 06001",
    phone: "860-777-1280",
    latitude: 41.815418,
    longitude: -72.863893,
    website: "https://www.gohealthuc.com/hartford/locations/avon",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Glastonbury",
    town: "Glastonbury",
    address: "2520 Main Street, Glastonbury, CT 06033",
    phone: "860-968-0430",
    latitude: 41.714074,
    longitude: -72.609426,
    website: "https://www.gohealthuc.com/hartford/locations/glastonbury",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Southington",
    town: "Southington",
    address: "775 Queen Street, Southington, CT 06489",
    phone: "860-777-1281",
    latitude: 41.637682,
    longitude: -72.873514,
    website: "https://www.gohealthuc.com/hartford/locations/southington",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Windsor",
    town: "Windsor",
    address: "1055 Kennedy Road, Suite D, Windsor, CT 06095",
    phone: "860-787-5786",
    latitude: 41.853399,
    longitude: -72.646185,
    website: "https://www.gohealthuc.com/hartford/locations/windsor",
    weekdayHours: "8:00 am - 10:00 pm",
    saturdayHours: "8:00 am - 10:00 pm",
    sundayHours: "8:00 am - 10:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Wethersfield",
    town: "Wethersfield",
    address: "1025 Silas Deane Highway, Wethersfield, CT 06109",
    phone: "860-787-8775",
    latitude: 41.686767,
    longitude: -72.654545,
    website: "https://www.gohealthuc.com/hartford/locations/wethersfield",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Urgent Care",
    name: "AFC Urgent Care Rocky Hill, CT",
    town: "Rocky Hill",
    address: "396 Cromwell Avenue, Rocky Hill, CT 06067",
    phone: "860-325-3438",
    latitude: 41.660033,
    longitude: -72.677897,
    website: "https://www.afcurgentcare.com/rocky-hill/",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 5:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Cheshire",
    town: "Cheshire",
    address: "280 South Main Street, Cheshire, CT 06410",
    phone: "203-250-0060",
    latitude: 41.494564,
    longitude: -72.903212,
    website: "https://hartfordhealthcaremedicalgroup.org",
    weekdayHours: "8:00 am - 7:00 pm (Fri: 7:00 am - 4:00 pm)",
    saturdayHours: "Closed",
    sundayHours: "Closed"
},

{
    type: "Urgent Care",
    name: "Colchester Urgent Care",
    town: "Colchester",
    address: "100 Linwood Avenue, Colchester, CT 06415",
    phone: "860-531-9749",
    latitude: 41.572656,
    longitude: -72.335293,
    website: "https://www.colchesterurgentcare.com",
    weekdayHours: "10:00 am - 8:00 pm",
    saturdayHours: "9:00 am - 3:00 pm",
    sundayHours: "9:00 am - 3:00 pm"
},

{
    type: "Urgent Care",
    name: "Yale New Haven Health Urgent Care Milford",
    town: "Milford",
    address: "831 Boston Post Road, Milford, CT 06460",
    phone: "203-876-4101",
    latitude: 41.231736,
    longitude: -73.054345,
    website: "https://www.ynhhs.org/locations/milford-urgent-care",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "9:00 am - 5:00 pm",
    sundayHours: "9:00 am - 5:00 pm"
},

{
    type: "Urgent Care",
    name: "HHC Urgent Care Branford",
    town: "Branford",
    address: "1061 West Main Street, Branford, CT 06405",
    phone: "860-207-8942",
    latitude: 41.277730,
    longitude: -72.595276,
    website: "https://www.gohealthuc.com/hartford/locations/branford",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 8:00 pm",
    sundayHours: "8:00 am - 8:00 pm"
},

{
    type: "Urgent Care",
    name: "Urgent Care Stonington",
    town: "Stonington",
    address: "23 Clara Drive, Mystic, CT 06355",
    phone: "860-572-5782",
    latitude: 41.369902,
    longitude: -71.954773,
    website: "https://www.northeastmedicalgroup.org",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "Closed",
    sundayHours: "Closed"
},

{
    type: "Urgent Care",
    name: "Bristol Urgent Care",
    town: "Bristol",
    address: "539 Farmington Avenue, Bristol, CT 06010",
    phone: "860-585-3000",
    latitude: 41.690295,
    longitude: -72.925633,
    website: "https://bristolhospital.org",
    weekdayHours: "8:00 am - 8:00 pm",
    saturdayHours: "8:00 am - 5:00 pm",
    sundayHours: "8:00 am - 2:00 pm"
},

{
    type: "Urgent Care",
    name: "Plainfield Walk-In Medical Center",
    town: "Plainfield",
    address: "558 Norwich Road, Plainfield, CT 06374",
    phone: "860-564-4054",
    latitude: 41.682484,
    longitude: -71.913874,
    website: "https://plainfieldwalkinmedicalcenter.com",
    weekdayHours: "8:00 am - 5:00 pm",
    saturdayHours: "8:00 am - 1:00 pm",
    sundayHours: "Closed"
}
];
