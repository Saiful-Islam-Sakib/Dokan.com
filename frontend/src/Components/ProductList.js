import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Divider,
    FormControl,
    InputBase,
    InputLabel,
    makeStyles,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    TextField,
    Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 10,
        marginBottom: 10,
    },
});

const innerCardStyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        maxWidth: 180,
        margin: 10,
    },
    media: {
        height: 150,
    },
});

const products = [
    {
        id: 1,
        name: "name1",
        brand: "brand1",
        vendor: "vendor1",
        price: 10,
        rating: 5,
    },
    {
        id: 2,
        name: "name2",
        brand: "brand2",
        vendor: "vendor2",
        price: 20,
        rating: 5,
    },
    {
        id: 3,
        name: "name3",
        brand: "brand3",
        vendor: "vendor3",
        price: 30,
        rating: 4,
    },
    {
        id: 4,
        name: "name4",
        brand: "brand4",
        vendor: "vendor4",
        price: 40,
        rating: 4,
    },
    {
        id: 5,
        name: "name5",
        brand: "brand5",
        vendor: "vendor5",
        price: 50,
        rating: 5,
    },
    {
        id: 6,
        name: "name6",
        brand: "brand6",
        vendor: "vendor6",
        price: 60,
        rating: 4,
    },
    {
        id: 7,
        name: "name7",
        brand: "brand7",
        vendor: "vendor7",
        price: 70,
        rating: 0,
    },
    {
        id: 8,
        name: "name8",
        brand: "brand8",
        vendor: "vendor8",
        price: 80,
        rating: 0,
    },
    {
        id: 9,
        name: "name9",
        brand: "brand9",
        vendor: "vendor9",
        price: 90,
        rating: 4,
    },
    {
        id: 10,
        name: "name10",
        brand: "brand10",
        vendor: "vendor10",
        price: 100,
        rating: 2,
    },
    {
        id: 11,
        name: "name11",
        brand: "brand11",
        vendor: "vendor11",
        price: 110,
        rating: 5,
    },
    {
        id: 12,
        name: "name12",
        brand: "brand12",
        vendor: "vendor12",
        price: 120,
        rating: 5,
    },
    {
        id: 13,
        name: "name13",
        brand: "brand13",
        vendor: "vendor13",
        price: 130,
        rating: 1,
    },
    {
        id: 14,
        name: "name14",
        brand: "brand14",
        vendor: "vendor14",
        price: 140,
        rating: 3,
    },
    {
        id: 15,
        name: "name15",
        brand: "brand15",
        vendor: "vendor15",
        price: 150,
        rating: 1,
    },
    {
        id: 16,
        name: "name16",
        brand: "brand16",
        vendor: "vendor16",
        price: 160,
        rating: 5,
    },
    {
        id: 17,
        name: "name17",
        brand: "brand17",
        vendor: "vendor17",
        price: 170,
        rating: 1,
    },
    {
        id: 18,
        name: "name18",
        brand: "brand18",
        vendor: "vendor18",
        price: 180,
        rating: 2,
    },
    {
        id: 19,
        name: "name19",
        brand: "brand19",
        vendor: "vendor19",
        price: 190,
        rating: 3,
    },
    {
        id: 20,
        name: "name20",
        brand: "brand20",
        vendor: "vendor20",
        price: 200,
        rating: 0,
    },
    {
        id: 21,
        name: "name21",
        brand: "brand21",
        vendor: "vendor21",
        price: 210,
        rating: 3,
    },
    {
        id: 22,
        name: "name22",
        brand: "brand22",
        vendor: "vendor22",
        price: 220,
        rating: 0,
    },
    {
        id: 23,
        name: "name23",
        brand: "brand23",
        vendor: "vendor23",
        price: 230,
        rating: 2,
    },
    {
        id: 24,
        name: "name24",
        brand: "brand24",
        vendor: "vendor24",
        price: 240,
        rating: 3,
    },
    {
        id: 25,
        name: "name25",
        brand: "brand25",
        vendor: "vendor25",
        price: 250,
        rating: 4,
    },
    {
        id: 26,
        name: "name26",
        brand: "brand26",
        vendor: "vendor26",
        price: 260,
        rating: 4,
    },
    {
        id: 27,
        name: "name27",
        brand: "brand27",
        vendor: "vendor27",
        price: 270,
        rating: 3,
    },
    {
        id: 28,
        name: "name28",
        brand: "brand28",
        vendor: "vendor28",
        price: 280,
        rating: 2,
    },
    {
        id: 29,
        name: "name29",
        brand: "brand29",
        vendor: "vendor29",
        price: 290,
        rating: 2,
    },
    {
        id: 30,
        name: "name30",
        brand: "brand30",
        vendor: "vendor30",
        price: 300,
        rating: 5,
    },
    {
        id: 31,
        name: "name31",
        brand: "brand31",
        vendor: "vendor31",
        price: 310,
        rating: 5,
    },
    {
        id: 32,
        name: "name32",
        brand: "brand32",
        vendor: "vendor32",
        price: 320,
        rating: 0,
    },
    {
        id: 33,
        name: "name33",
        brand: "brand33",
        vendor: "vendor33",
        price: 330,
        rating: 5,
    },
    {
        id: 34,
        name: "name34",
        brand: "brand34",
        vendor: "vendor34",
        price: 340,
        rating: 0,
    },
    {
        id: 35,
        name: "name35",
        brand: "brand35",
        vendor: "vendor35",
        price: 350,
        rating: 3,
    },
    {
        id: 36,
        name: "name36",
        brand: "brand36",
        vendor: "vendor36",
        price: 360,
        rating: 4,
    },
    {
        id: 37,
        name: "name37",
        brand: "brand37",
        vendor: "vendor37",
        price: 370,
        rating: 5,
    },
    {
        id: 38,
        name: "name38",
        brand: "brand38",
        vendor: "vendor38",
        price: 380,
        rating: 1,
    },
    {
        id: 39,
        name: "name39",
        brand: "brand39",
        vendor: "vendor39",
        price: 390,
        rating: 1,
    },
    {
        id: 40,
        name: "name40",
        brand: "brand40",
        vendor: "vendor40",
        price: 400,
        rating: 0,
    },
    {
        id: 41,
        name: "name41",
        brand: "brand41",
        vendor: "vendor41",
        price: 410,
        rating: 5,
    },
    {
        id: 42,
        name: "name42",
        brand: "brand42",
        vendor: "vendor42",
        price: 420,
        rating: 3,
    },
    {
        id: 43,
        name: "name43",
        brand: "brand43",
        vendor: "vendor43",
        price: 430,
        rating: 2,
    },
    {
        id: 44,
        name: "name44",
        brand: "brand44",
        vendor: "vendor44",
        price: 440,
        rating: 3,
    },
    {
        id: 45,
        name: "name45",
        brand: "brand45",
        vendor: "vendor45",
        price: 450,
        rating: 3,
    },
    {
        id: 46,
        name: "name46",
        brand: "brand46",
        vendor: "vendor46",
        price: 460,
        rating: 2,
    },
    {
        id: 47,
        name: "name47",
        brand: "brand47",
        vendor: "vendor47",
        price: 470,
        rating: 3,
    },
    {
        id: 48,
        name: "name48",
        brand: "brand48",
        vendor: "vendor48",
        price: 480,
        rating: 1,
    },
    {
        id: 49,
        name: "name49",
        brand: "brand49",
        vendor: "vendor49",
        price: 490,
        rating: 5,
    },
    {
        id: 50,
        name: "name50",
        brand: "brand50",
        vendor: "vendor50",
        price: 500,
        rating: 4,
    },
    {
        id: 51,
        name: "name51",
        brand: "brand51",
        vendor: "vendor51",
        price: 510,
        rating: 5,
    },
    {
        id: 52,
        name: "name52",
        brand: "brand52",
        vendor: "vendor52",
        price: 520,
        rating: 2,
    },
    {
        id: 53,
        name: "name53",
        brand: "brand53",
        vendor: "vendor53",
        price: 530,
        rating: 4,
    },
    {
        id: 54,
        name: "name54",
        brand: "brand54",
        vendor: "vendor54",
        price: 540,
        rating: 3,
    },
    {
        id: 55,
        name: "name55",
        brand: "brand55",
        vendor: "vendor55",
        price: 550,
        rating: 3,
    },
    {
        id: 56,
        name: "name56",
        brand: "brand56",
        vendor: "vendor56",
        price: 560,
        rating: 1,
    },
    {
        id: 57,
        name: "name57",
        brand: "brand57",
        vendor: "vendor57",
        price: 570,
        rating: 5,
    },
    {
        id: 58,
        name: "name58",
        brand: "brand58",
        vendor: "vendor58",
        price: 580,
        rating: 3,
    },
    {
        id: 59,
        name: "name59",
        brand: "brand59",
        vendor: "vendor59",
        price: 590,
        rating: 1,
    },
    {
        id: 60,
        name: "name60",
        brand: "brand60",
        vendor: "vendor60",
        price: 600,
        rating: 4,
    },
    {
        id: 61,
        name: "name61",
        brand: "brand61",
        vendor: "vendor61",
        price: 610,
        rating: 4,
    },
    {
        id: 62,
        name: "name62",
        brand: "brand62",
        vendor: "vendor62",
        price: 620,
        rating: 5,
    },
    {
        id: 63,
        name: "name63",
        brand: "brand63",
        vendor: "vendor63",
        price: 630,
        rating: 2,
    },
    {
        id: 64,
        name: "name64",
        brand: "brand64",
        vendor: "vendor64",
        price: 640,
        rating: 0,
    },
    {
        id: 65,
        name: "name65",
        brand: "brand65",
        vendor: "vendor65",
        price: 650,
        rating: 0,
    },
    {
        id: 66,
        name: "name66",
        brand: "brand66",
        vendor: "vendor66",
        price: 660,
        rating: 4,
    },
    {
        id: 67,
        name: "name67",
        brand: "brand67",
        vendor: "vendor67",
        price: 670,
        rating: 4,
    },
    {
        id: 68,
        name: "name68",
        brand: "brand68",
        vendor: "vendor68",
        price: 680,
        rating: 2,
    },
    {
        id: 69,
        name: "name69",
        brand: "brand69",
        vendor: "vendor69",
        price: 690,
        rating: 4,
    },
    {
        id: 70,
        name: "name70",
        brand: "brand70",
        vendor: "vendor70",
        price: 700,
        rating: 4,
    },
    {
        id: 71,
        name: "name71",
        brand: "brand71",
        vendor: "vendor71",
        price: 710,
        rating: 2,
    },
    {
        id: 72,
        name: "name72",
        brand: "brand72",
        vendor: "vendor72",
        price: 720,
        rating: 3,
    },
    {
        id: 73,
        name: "name73",
        brand: "brand73",
        vendor: "vendor73",
        price: 730,
        rating: 2,
    },
    {
        id: 74,
        name: "name74",
        brand: "brand74",
        vendor: "vendor74",
        price: 740,
        rating: 3,
    },
    {
        id: 75,
        name: "name75",
        brand: "brand75",
        vendor: "vendor75",
        price: 750,
        rating: 4,
    },
    {
        id: 76,
        name: "name76",
        brand: "brand76",
        vendor: "vendor76",
        price: 760,
        rating: 2,
    },
    {
        id: 77,
        name: "name77",
        brand: "brand77",
        vendor: "vendor77",
        price: 770,
        rating: 0,
    },
    {
        id: 78,
        name: "name78",
        brand: "brand78",
        vendor: "vendor78",
        price: 780,
        rating: 3,
    },
    {
        id: 79,
        name: "name79",
        brand: "brand79",
        vendor: "vendor79",
        price: 790,
        rating: 3,
    },
    {
        id: 80,
        name: "name80",
        brand: "brand80",
        vendor: "vendor80",
        price: 800,
        rating: 2,
    },
    {
        id: 81,
        name: "name81",
        brand: "brand81",
        vendor: "vendor81",
        price: 810,
        rating: 3,
    },
    {
        id: 82,
        name: "name82",
        brand: "brand82",
        vendor: "vendor82",
        price: 820,
        rating: 5,
    },
    {
        id: 83,
        name: "name83",
        brand: "brand83",
        vendor: "vendor83",
        price: 830,
        rating: 0,
    },
    {
        id: 84,
        name: "name84",
        brand: "brand84",
        vendor: "vendor84",
        price: 840,
        rating: 4,
    },
    {
        id: 85,
        name: "name85",
        brand: "brand85",
        vendor: "vendor85",
        price: 850,
        rating: 0,
    },
    {
        id: 86,
        name: "name86",
        brand: "brand86",
        vendor: "vendor86",
        price: 860,
        rating: 2,
    },
    {
        id: 87,
        name: "name87",
        brand: "brand87",
        vendor: "vendor87",
        price: 870,
        rating: 4,
    },
    {
        id: 88,
        name: "name88",
        brand: "brand88",
        vendor: "vendor88",
        price: 880,
        rating: 2,
    },
    {
        id: 89,
        name: "name89",
        brand: "brand89",
        vendor: "vendor89",
        price: 890,
        rating: 5,
    },
    {
        id: 90,
        name: "name90",
        brand: "brand90",
        vendor: "vendor90",
        price: 900,
        rating: 4,
    },
    {
        id: 91,
        name: "name91",
        brand: "brand91",
        vendor: "vendor91",
        price: 910,
        rating: 0,
    },
    {
        id: 92,
        name: "name92",
        brand: "brand92",
        vendor: "vendor92",
        price: 920,
        rating: 3,
    },
    {
        id: 93,
        name: "name93",
        brand: "brand93",
        vendor: "vendor93",
        price: 930,
        rating: 2,
    },
    {
        id: 94,
        name: "name94",
        brand: "brand94",
        vendor: "vendor94",
        price: 940,
        rating: 1,
    },
    {
        id: 95,
        name: "name95",
        brand: "brand95",
        vendor: "vendor95",
        price: 950,
        rating: 5,
    },
    {
        id: 96,
        name: "name96",
        brand: "brand96",
        vendor: "vendor96",
        price: 960,
        rating: 4,
    },
    {
        id: 97,
        name: "name97",
        brand: "brand97",
        vendor: "vendor97",
        price: 970,
        rating: 2,
    },
    {
        id: 98,
        name: "name98",
        brand: "brand98",
        vendor: "vendor98",
        price: 980,
        rating: 0,
    },
    {
        id: 99,
        name: "name99",
        brand: "brand99",
        vendor: "vendor99",
        price: 990,
        rating: 3,
    },
    {
        id: 100,
        name: "name100",
        brand: "brand100",
        vendor: "vendor100",
        price: 1000,
        rating: 5,
    },
    {
        id: 101,
        name: "name101",
        brand: "brand101",
        vendor: "vendor101",
        price: 1010,
        rating: 3,
    },
    {
        id: 102,
        name: "name102",
        brand: "brand102",
        vendor: "vendor102",
        price: 1020,
        rating: 5,
    },
    {
        id: 103,
        name: "name103",
        brand: "brand103",
        vendor: "vendor103",
        price: 1030,
        rating: 1,
    },
    {
        id: 104,
        name: "name104",
        brand: "brand104",
        vendor: "vendor104",
        price: 1040,
        rating: 0,
    },
    {
        id: 105,
        name: "name105",
        brand: "brand105",
        vendor: "vendor105",
        price: 1050,
        rating: 0,
    },
    {
        id: 106,
        name: "name106",
        brand: "brand106",
        vendor: "vendor106",
        price: 1060,
        rating: 0,
    },
    {
        id: 107,
        name: "name107",
        brand: "brand107",
        vendor: "vendor107",
        price: 1070,
        rating: 3,
    },
    {
        id: 108,
        name: "name108",
        brand: "brand108",
        vendor: "vendor108",
        price: 1080,
        rating: 2,
    },
    {
        id: 109,
        name: "name109",
        brand: "brand109",
        vendor: "vendor109",
        price: 1090,
        rating: 5,
    },
    {
        id: 110,
        name: "name110",
        brand: "brand110",
        vendor: "vendor110",
        price: 1100,
        rating: 0,
    },
    {
        id: 111,
        name: "name111",
        brand: "brand111",
        vendor: "vendor111",
        price: 1110,
        rating: 5,
    },
    {
        id: 112,
        name: "name112",
        brand: "brand112",
        vendor: "vendor112",
        price: 1120,
        rating: 5,
    },
    {
        id: 113,
        name: "name113",
        brand: "brand113",
        vendor: "vendor113",
        price: 1130,
        rating: 2,
    },
    {
        id: 114,
        name: "name114",
        brand: "brand114",
        vendor: "vendor114",
        price: 1140,
        rating: 4,
    },
    {
        id: 115,
        name: "name115",
        brand: "brand115",
        vendor: "vendor115",
        price: 1150,
        rating: 0,
    },
    {
        id: 116,
        name: "name116",
        brand: "brand116",
        vendor: "vendor116",
        price: 1160,
        rating: 3,
    },
    {
        id: 117,
        name: "name117",
        brand: "brand117",
        vendor: "vendor117",
        price: 1170,
        rating: 5,
    },
    {
        id: 118,
        name: "name118",
        brand: "brand118",
        vendor: "vendor118",
        price: 1180,
        rating: 3,
    },
    {
        id: 119,
        name: "name119",
        brand: "brand119",
        vendor: "vendor119",
        price: 1190,
        rating: 3,
    },
    {
        id: 120,
        name: "name120",
        brand: "brand120",
        vendor: "vendor120",
        price: 1200,
        rating: 0,
    },
    {
        id: 121,
        name: "name121",
        brand: "brand121",
        vendor: "vendor121",
        price: 1210,
        rating: 4,
    },
    {
        id: 122,
        name: "name122",
        brand: "brand122",
        vendor: "vendor122",
        price: 1220,
        rating: 0,
    },
    {
        id: 123,
        name: "name123",
        brand: "brand123",
        vendor: "vendor123",
        price: 1230,
        rating: 5,
    },
    {
        id: 124,
        name: "name124",
        brand: "brand124",
        vendor: "vendor124",
        price: 1240,
        rating: 0,
    },
    {
        id: 125,
        name: "name125",
        brand: "brand125",
        vendor: "vendor125",
        price: 1250,
        rating: 5,
    },
    {
        id: 126,
        name: "name126",
        brand: "brand126",
        vendor: "vendor126",
        price: 1260,
        rating: 5,
    },
    {
        id: 127,
        name: "name127",
        brand: "brand127",
        vendor: "vendor127",
        price: 1270,
        rating: 3,
    },
    {
        id: 128,
        name: "name128",
        brand: "brand128",
        vendor: "vendor128",
        price: 1280,
        rating: 4,
    },
    {
        id: 129,
        name: "name129",
        brand: "brand129",
        vendor: "vendor129",
        price: 1290,
        rating: 5,
    },
    {
        id: 130,
        name: "name130",
        brand: "brand130",
        vendor: "vendor130",
        price: 1300,
        rating: 4,
    },
    {
        id: 131,
        name: "name131",
        brand: "brand131",
        vendor: "vendor131",
        price: 1310,
        rating: 2,
    },
    {
        id: 132,
        name: "name132",
        brand: "brand132",
        vendor: "vendor132",
        price: 1320,
        rating: 4,
    },
    {
        id: 133,
        name: "name133",
        brand: "brand133",
        vendor: "vendor133",
        price: 1330,
        rating: 3,
    },
    {
        id: 134,
        name: "name134",
        brand: "brand134",
        vendor: "vendor134",
        price: 1340,
        rating: 4,
    },
    {
        id: 135,
        name: "name135",
        brand: "brand135",
        vendor: "vendor135",
        price: 1350,
        rating: 4,
    },
    {
        id: 136,
        name: "name136",
        brand: "brand136",
        vendor: "vendor136",
        price: 1360,
        rating: 4,
    },
    {
        id: 137,
        name: "name137",
        brand: "brand137",
        vendor: "vendor137",
        price: 1370,
        rating: 3,
    },
    {
        id: 138,
        name: "name138",
        brand: "brand138",
        vendor: "vendor138",
        price: 1380,
        rating: 5,
    },
    {
        id: 139,
        name: "name139",
        brand: "brand139",
        vendor: "vendor139",
        price: 1390,
        rating: 1,
    },
    {
        id: 140,
        name: "name140",
        brand: "brand140",
        vendor: "vendor140",
        price: 1400,
        rating: 3,
    },
    {
        id: 141,
        name: "name141",
        brand: "brand141",
        vendor: "vendor141",
        price: 1410,
        rating: 1,
    },
    {
        id: 142,
        name: "name142",
        brand: "brand142",
        vendor: "vendor142",
        price: 1420,
        rating: 5,
    },
    {
        id: 143,
        name: "name143",
        brand: "brand143",
        vendor: "vendor143",
        price: 1430,
        rating: 3,
    },
    {
        id: 144,
        name: "name144",
        brand: "brand144",
        vendor: "vendor144",
        price: 1440,
        rating: 3,
    },
    {
        id: 145,
        name: "name145",
        brand: "brand145",
        vendor: "vendor145",
        price: 1450,
        rating: 5,
    },
    {
        id: 146,
        name: "name146",
        brand: "brand146",
        vendor: "vendor146",
        price: 1460,
        rating: 5,
    },
    {
        id: 147,
        name: "name147",
        brand: "brand147",
        vendor: "vendor147",
        price: 1470,
        rating: 1,
    },
    {
        id: 148,
        name: "name148",
        brand: "brand148",
        vendor: "vendor148",
        price: 1480,
        rating: 2,
    },
    {
        id: 149,
        name: "name149",
        brand: "brand149",
        vendor: "vendor149",
        price: 1490,
        rating: 5,
    },
    {
        id: 150,
        name: "name150",
        brand: "brand150",
        vendor: "vendor150",
        price: 1500,
        rating: 0,
    },
    {
        id: 151,
        name: "name151",
        brand: "brand151",
        vendor: "vendor151",
        price: 1510,
        rating: 3,
    },
    {
        id: 152,
        name: "name152",
        brand: "brand152",
        vendor: "vendor152",
        price: 1520,
        rating: 4,
    },
];

function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
    };
}

export default function ProductList() {
    const classes = useStyles();
    const classes2 = innerCardStyle();

    const [value, setValue] = React.useState(1);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [sort, setSort] = React.useState("");

    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);

        setStart(newPage * rowsPerPage);
        setEnd(newPage * rowsPerPage + rowsPerPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);

        setStart(0);
        setEnd(page * rowsPerPage + parseInt(event.target.value, 10));
    };

    const handleChange = (event) => {
        let e = event.target.value;
        setSort(e);
        if (e === "priceLH") {
            products.sort(compareValues("price", "asc"));
        } else if (e === "priceHL") {
            products.sort(compareValues("price", "desc"));
        } else if (e === "ratingLH") {
            products.sort(compareValues("rating", "asc"));
        } else if (e === "ratingHL") {
            products.sort(compareValues("rating", "desc"));
        }
    };

    return (
        <Container maxWidth="lg">
            <div style={{ display: "flex" }}>
                <FormControl variant="outlined">
                    <InputLabel id="sortId">Sort</InputLabel>
                    <Select
                        labelId="sortLabel"
                        id="sortId"
                        autoWidth="true"
                        displayEmpty
                        value={sort}
                        onChange={handleChange}
                        label="Sort"
                    >
                        <MenuItem value="">Sort</MenuItem>
                        <MenuItem value="priceHL">
                            {"Price Hight -> Low"}
                        </MenuItem>
                        <MenuItem value="priceLH">
                            {"Price Low -> High"}
                        </MenuItem>
                        <MenuItem value="ratingHL">
                            {"Rating High -> Low"}
                        </MenuItem>
                        <MenuItem value="ratingLH">
                            {"Rating Low -> High"}
                        </MenuItem>
                    </Select>
                </FormControl>
                <div style={{ flexGrow: 1 }}></div>
                <TablePagination
                    component="div"
                    count={products.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
            <div>
                <Paper>
                    <Card className={classes.root} variant="outlined">
                        {products.slice(start, end).map((product) => (
                            <Card
                                key={product.id}
                                className={classes2.root}
                                variant="outlined"
                            >
                                <CardActionArea
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        className={classes2.media}
                                        image="https://image.freepik.com/free-vector/reusable-fabric-eco-friendly-bag-with-groceries-inside-bread-tomatoes-pumpkin_1268-15177.jpg"
                                        title="Contemplative Reptile"
                                        style={{
                                            maxHeight: "20vh",
                                            objectFit: "fill",
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" align="center">
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            component="p"
                                            align="center"
                                        >
                                            {product.vendor}
                                        </Typography>
                                        <Typography align="center">
                                            <Rating
                                                size="small"
                                                readOnly
                                                name="customized-empty"
                                                defaultValue={product.rating}
                                                emptyIcon={
                                                    <StarBorderIcon fontSize="inherit" />
                                                }
                                            />
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                            align="center"
                                        >
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider></Divider>
                                <div
                                    style={{
                                        display: "flex",
                                    }}
                                >
                                    <Button
                                        id="add"
                                        onClick={() => {
                                            setValue(value + 1);
                                        }}
                                    >
                                        +
                                    </Button>
                                    <Divider orientation="vertical" />
                                    <InputBase
                                        value={value}
                                        inputProps={{
                                            "aria-label": "naked",
                                            style: {
                                                textAlign: "center",
                                            },
                                        }}
                                    />
                                    <Divider orientation="vertical" />
                                    <Button
                                        id="sub"
                                        onClick={() => {
                                            if (value > 1) {
                                                setValue(value - 1);
                                            }
                                        }}
                                    >
                                        -
                                    </Button>
                                </div>
                                <Divider></Divider>
                                <Button>Add</Button>
                            </Card>
                        ))}
                    </Card>
                </Paper>
            </div>
        </Container>
    );
}
