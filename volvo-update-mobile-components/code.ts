// This plugin updates out of date mobile components with state of the art ones

// Components that use swappable icons
// Icon Button
// Card
// Double Card
// Image Card
// Insight Card 2.0
// List Card 2.0
// Selectable Card
// Selectable Expandable Card
// Action Chip
// Information Box
// List 2.0
// List Header
// Insight List
// Bottom Navigation
// Navigation Bar
// Search
// Feedback Notification

// The node id remains the same after swap, so there is a way to reference it

/////////////////////////////////////////////////////////////////////////////////////
// CODE STARTS HERE
/////////////////////////////////////////////////////////////////////////////////////

// Store a list of components that need to be updated
const outOfDateComponents = [
    "⚡️ Information Card",
    "⚡️ Insight Card",
    "⚡️ List primary",
    "⚡️ List secondary",
    "⚡️ List Card"
];

// Store all keys from components that need to be updated
// Needs to be updated as component versions change!

const componentKeys = {
    // actionChip: "",
    // bottomNavigation: "",
    // button: "",
    // doubleButton: "",
    // card: "",
    // doubleCard: "",
    // feedbackNotification: "",
    fullscreenActionSheet2: "8e9bc7057dc28ecb9ef393ead15a6597dba7903c",
    fullscreenWizardSheet2: "1facb5de8af4f3375f575f85d564e186e85e367b",
    iconButton: "ec66c67b5629e8561cd7924462bbf7574b1a81ad",
    imageCard: "770c7c636d23d1a33575cdff788c09d066d7e0f9",
    // informationBox: "",
    // informationCard: "",
    insightCard2: "3e95e5de03c52a6b6698b572212f0003563945a4",
    insightList: "4692a1415c5b9b38cadeef40c8e3a5ed15a38047",
    list2: "a2dda2278be541720296ad9ffc0b551703b1e54b",
    list2NestedLeading: "4da9a2cde920f33eea943aa155ef3145c5ad215f",
    list2NestedTrailing: "7fa7f828948dd0f05dd5b8dc9ebe1b0dbc51c352",
    listCard2: "ef004093724bb47d6872c631dfb82392a5dd723c",
    // listHeader: "",
    // navigationBar: "",
    // search: "",
    // selectableCard: "",
    // selectableExpandableCard: "",
};

// Store all keys for Volvo Icons lib 2024 icons

// For Mobile icons keys go to the Mobile Icons 2.0 library,
// run Figlet and search for zxL7K-GVUMeIez_H2DYsr in the community,
// and copy the json object from the console
// when the library updates this might need to be refreshed

const iconKeys = {
    lib2024: {
        addressBook: "46a8601c40563ea0e6ea612ee7cfa4a7041c3961",
        iconName: "",
    },
    mobileIcons: {
        "size12": {
            "car": "b73c516ab595d4b2fc20c738e9bdf7c763eb7019",
            "checkmark": "92ce40b56fcd257a39c9acb74495280565e50df1",
            "checkmark filled": "f96b5a3fbdae22c631d87e12aecf28966f9f37d4",
            "chevron down": "cc6cb71db41b40a80090823ee99fd283c81ea5e4",
            "circle": "110b90f82759ef095177685cba6f1bf6f0e41c31",
            "error": "6754287fdfaafb61cd308504d3f2d014d3336a5b",
            "cancel right": "9ce05a4a1a18da972b81cda71ac638c80648c9da",
            "locked": "337dd61775f9862b6def02a10e729ece49b94921",
            "privacy": "2381a9361e0c7367534b0e36823185b53345e046",
            "spinner": "44e6e5df9b3fab6484233e43c2fd11b9e2d26236",
            "taxes filled": "a55be45cc1bb17e3ea092e24186d74698816dfaa",
            "unlocked": "015067998989b71b4ca3ba73ff207caa5b11f056",
            "walk": "5070c7afcd41c9a4d595bfc827bb3ee67753c29c",
            "warning": "1c4d7cb95aedb6a154136038888331229b1cc50b",
            "warning circle": "bad97b5a98e4ea5a159e61c58ddb224584e0f95c",
            "placeholder": "5964040f8649a2055636786908262d38ee518590"
        },
        "size24": {
            "3d": "35411e1465bb53adc6af8a1fcb0c0fa9b707524e",
            "ambient light": "2c21eabf53a7b350dd48a88a1c6a497e3166645b",
            "ar": "8136421d19cdd44de20cda3c4a0626b89e44db89",
            "colour": "eb0960e97fb0617d275778943e1b66491bb02889",
            "comfort": "f84c1274f6e1ae53ae79c530547fad204d206ad2",
            "exterior": "0929dec406bd053577090ee0b3e957db4609c1ba",
            "exterior filled": "4eb74316ddbae2fbe9b3b60d854d7ed3d7bcea54",
            "highlight": "2ef5dd1e13df15a00d86955af26962ead10799c1",
            "highlight filled": "65c78bac9002bcd28e3fbc145d30d3afdd7937b7",
            "interior": "10c962ff13acbc63db6f528533f3636daa0b9d64",
            "premium": "3006fe0bada0e3d21cc74148f0aa5cf8e7ff96e6",
            "safety": "8ac621612c818f5194af1aba936aefbedd60ff47",
            "seat material": "c2d163f631821c6513963a00cb168c2ce62dfcf0",
            "type": "1e53ee879ca7b5ab833e11841620e49419b5f06a",
            "type filled": "28a1a3f03c2c2d8401c44d327383f466a000b708",
            "wheel": "4d6533d878bddc9c38e14f999f0bad2f27827649",
            "action successful": "cc4164933fb9aa79f5ff3a032304ec1eb51c5b38",
            "air cleaning error": "5f9177e0bf0b33c7b64527d7948d0d5a94b3f073",
            "climate error": "a01a5d04e48329d6544d64f03b24dc334ee45b5c",
            "connection error": "ab237cfcb072e44029b25141156c0d05d13c6d32",
            "doors error": "22cc05f5f80bf47810e093964d2e1a4e22905979",
            "queued": "d87e9e70ef9ca55873fa0807f7ddc9b1b257e6fd",
            "timer error": "47f65b55890288da2491150b98de7c9ed1777713",
            "trunk action needed": "a8e5f047abe7939a383fb6cc0a55194a04e61a33",
            "pin car": "933b0bee9b88920b6f9d9987f134fddc9a435847",
            "charging": "df064352eeca30aceaff3d8fef2c052c9b5b2536",
            "current position": "b8fefce880b554d9a2a840859b16c4c079888f2d",
            "empty": "7af65e45bdb29dc7e1cf266932067f5f049396ed",
            "favourite": "f66fa73421e2a99dc4b1f04def0eb023d00fb34d",
            "finish": "a7f0f1807e4db8b914f547e7ebb5180337ad3ee1",
            "fuel": "ea1680ac24c12bcd65b10f2481410b6017fc3499",
            "parking": "3a4c806771ec479b2426fa03d30aa5bf4e49fcea",
            "start": "0a015205ea16f8078d0e8c3d765dff12083a2d08",
            "climate start": "c99635096399bb572f92d05368988d9a14ea0f89",
            "climate stop": "fa8db67b86638ba6141561f9cfe8dda2e665575f",
            "door lock": "ff194cdedbf83dd920e348ba74efc4bb30f34950",
            "door unlock": "5f3d355376576b7e1bcd740bfc9059235e66ab1a",
            "engine start": "f0b32c962b959492ac08f39097ab272b2e2eda4d",
            "engine stop": "e50df541400ee62c8122c4ad42df3dd911b2f55c",
            "flash": "ebd0d75e2aaa006cb0248f5093456270ccd2e901",
            "flash honk": "86e716106964d82422a1b3018b72770e8600717f",
            "remote start": "3127ccf68a77313286f1aa991a5fbc51dcd6d5b5",
            "battery": "f706c05fe8abd16b855316ee5893da8603811903",
            "battery charging": "c80728cd66c4b6f1eeeda7e1bf297ccc753842c3",
            "bluetooth": "79d7dece8f47c00a204901411d08c59364a5c3e6",
            "center": "ce126c7ffc769dae4a7dda1f6a9041b187c42698",
            "fullscreen": "5260ba6a4f2da81481f602681e6bf5c6242a5283",
            "fullscreen exit": "1aac5b870f7ba01d30090306d96bf0889c4448c1",
            "layer": "2d3d6ddbbc45a3f0f7ae2869143c0ad57102f315",
            "car": "6bc917cea6f67397ac7af6eb88b801ad688261f3",
            "car filled": "08346800875510a8ffa621c86287207689208b6c",
            "home": "2559666fa178d4241c919c0f907c781c31747cad",
            "home filled": "ab0ef41f361ef4a465a7737808a75c7b8deda4b4",
            "map": "a597a99bb8bf804e4816c8fbf1e24ef28a423569",
            "map filled": "181e94d7eb258e1072e5333df75e5853a2ead9a5",
            "profile": "4333559f4d7b54ae7807a59b4b7381bf58d8952a",
            "profile filled": "cca4a01cd03d58ccdcdfd9886696388f47d0f4a5",
            "support": "c6311f06bcc21f26f176e916f08459374c062b51",
            "support filled": "35776b7933199401f344cd871e4312518d858333",
            "access lock": "0de19589991ab8daae3043349851b13c4c4c113c",
            "active services": "6e3b2dfb5f15232948c098975af60c6ade0593f1",
            "add car": "7234525221e9a8f141a6113e7e9cb89e1120da7a",
            "amp limit": "5a0ddd59aa7ef3816354eb243a7695848b2fff71",
            "amazon": "687399f1f9613416f0a85812e9fa1810a279d22f",
            "app settings": "18e0b196d8fd78ce16941fecc049c839dc279386",
            "arrow down": "4b7470fa5ce50b9e4b4e60c20baff2855ee179a6",
            "arrow right": "0f0a4997e10a75134d3bc52b9816eedcfdfcfa43",
            "arrow up": "4cd49c42c831e15fca53f2fbfd9e1573cd7a6b85",
            "average": "7944145117a7069a8c0943c1cd1c34b61953b8be",
            "bank": "0d1a988783b4ed861236dbf851703754447e7077",
            "battery charge": "d74dd08dc024edb249a16a93e029fc9d479fa169",
            "battery consumption": "92b68e0dda0ecbcced117ad621020299800caac8",
            "battery level": "5f04b6cbe48a5f9c518a520e3ea7021e42511257",
            "battery level empty": "50474ca1111607d3e7b26f6346c955da7a664c7b",
            "battery regen": "b915fb7b0dcc6acfd7cc785f00a63b316bd2b73b",
            "booking accepted": "15f32583ff9819c60529de79e0e42399258af8af",
            "booking expired": "138221654ed9732fc798f6a2057dfa9c78dbe99e",
            "booking new": "f6f380a9d15fb919d1fcd841c80a7291cfd0f79a",
            "booking started": "b8580dea4ab659e9b89c045b18c5f3158022fe5e",
            "brake fluid": "dad4add0e509fdf7428195231296a7824ecf4a36",
            "bug report": "4da1030020404bbc13924e217ce30c29f36fbdb6",
            "bulb failure": "606bff17e6f581dfa0765dfc083f0c318554864b",
            "calendar": "75fbf09d216579c34e4e9b3735ff6bafd08520c7",
            "car electric": "8cf9838aa7ca7f68ea3498d6af9b9376422d383f",
            "car info": "85d578c25a32bdf5262e59e2b8c01f06a00a7510",
            "car sharing": "d165afa561007ca0482b2b5bd895dba3c264d7dc",
            "car software": "4f36e8b8c7986635dd83cf7beb814a00f6578fc3",
            "car wash": "e7fda02d75ca15a26dce07b3f943cf6275548674",
            "car wash express wash": "fcadc22cb781a3033def2b5fb6177dcf0a5f4bed",
            "car wash showroom detailing": "4768041b1d7b6aeaf9d7557b4a7c129597617597",
            "cars": "81242c7e9542452895e07912fe1ffd966311a50d",
            "category add": "bbc2e8f026c0d103bc32355380ebec3b70367f9c",
            "category home": "959f888199e0b54f8680998541dd183c6a0c3272",
            "category work": "ceb0522fb6e9b1560a42d431043551c22aebec4a",
            "charge location": "e88f388771e0b5fb1061c467576792a49d30bfcb",
            "charger": "2e0f21e0505179899ddbcaab99df99605a994d9e",
            "charging card": "4a388e9800edb00fa22d4c0df213500f3201d936",
            "chat": "fa545d8b0ff516c4e29a291a53636f097700203a",
            "checkmark": "80a228a948cab6d5ba17a125943b311119d30c77",
            "checkmark circled stroke": "8f6b4a3033131cea46c6222bf78bc9da3bdb450f",
            "checkmark circled": "937bfa631d531f985696725155e025313d35d013",
            "cogwheels": "a76cece36640d3d9f7d4622f749aef36a3d0d28a",
            "compass": "b52f66cf0d9e0e184edd149b38e836ce5179d3ea",
            "connected apps": "100349239af02c18ed6849e1a3cad9df8d0d6ba5",
            "connected cars": "0baa0913b2117edd821d45296c50bd27c47a3d1f",
            "consumption": "32ced261f5fea99b32402aca42fe2a6810b06b8e",
            "contact": "397e045db13857edcc9e59687e901ec1353c5364",
            "cost": "55d8b8a595e04fe67cde79759683c4233945fb3b",
            "delivery": "5fba5073203590bc82934f3c662ca882a44f419c",
            "digital key": "5b420ddd3a09fbeb98d985750293fc0f177b5159",
            "distance": "37b4aced041e607338589044adb198f32cb6fbf5",
            "document": "bbfb40670cce211d53222631300287e311b49df8",
            "drivers": "c750fdc93b3c90027ba269ab6d58a55e58f501a5",
            "driving journal": "3ca5e3c80779d960b798d429955fe9d6c9c4ff94",
            "duration": "c330122fe3541ffc05197154bad90c653aa4e090",
            "email": "421f73352c28c7d075048d5ee711413b93c5e0f0",
            "email csv": "0d0c23e50d7f2def22d7c3a4181970041a1efebf",
            "email txt": "7a75caf83ceb30ce35629500baed0ea0c5d9aa1d",
            "email xls": "426819d371d64f02e044bb74df73350e04de3533",
            "engine coolant": "6ef78b0b0122ce230ad6c9d9b4e65e845dda0d42",
            "error": "90320f959fa3e23e150375381119d0eea217ec94",
            "exit": "44890a10a81d29100380e3f3449209e41d6deca6",
            "export": "372e338315c7e03cfab17c6ba3b25b052fe04b1e",
            "external link": "61abc6474e73fb1eb600c12283f205cd92bdeb90",
            "fast charger": "bef4c8eba3efc0c3b06da0eb810d13e220fffefc",
            "favorite": "bba3929aba785827ee147f9710e4ea87b6b79bab",
            "feedback": "b271d6a572752e2dfcd64d11fce421c3a92bd684",
            "fire": "faaba682fd9efc1b8743730d170b52ee3bc1c8d9",
            "flick click": "9d34c889d56fc4cefba63c3c8f080361fd7fddff",
            "flick double click": "d819ca1ee41fa31a80587a992764b7c068561567",
            "flick hold": "8ac71428f10ef2cf93b004db068b6b2278f14e3d",
            "fuel consumption": "163e5c6bae428d7d679c175ac25ce1e44974cd39",
            "fuel level": "3ed53c5ba7f4ae1253a9851b70286083aa643c61",
            "fuel tank volume": "f96ab2a996293ec82f5819fe37ec412740aea2df",
            "fuel up": "60baf4a7ea0243efb70a00d22c66942f3cf817e8",
            "gift": "1058d29ad380e2fe052605a035f0203acb60ca10",
            "glass": "bafa314a84e469c97271a9c1c1c4f7053d33fb2b",
            "google maps": "de6e07758fbe18c09bc9e5231d1d4c73ee26c985",
            "history": "a5521afe3656f340b1f51c79ce39585a29746ef9",
            "hotspot": "44512a5528f5bb84258fa06af080bf3fd2df3af6",
            "hybrid level": "30401ea86e5028e9c8d1f721f33f02fb67257b95",
            "info": "d4d04a5c3b8278983fde0673036df261c6acd3ee",
            "info 2": "26d8f591da8d0d61d7f6123259ae439c91bf829c",
            "insurance": "6fc5e2b4122b9eb7c89950f8eef0f3305a069d8c",
            "legal": "a884ca902f19db4bc822aab4c214d4a006809635",
            "key fob": "3bb7c01d5f30a35df251d5f14254d20845fcb87c",
            "lock": "ed7a72be8aad88bf8e3917452ee27cbb61059873",
            "maintenance status default": "ffb1cae3e8e0ec846f7975cdd0c5bb9eb205997b",
            "maintenance status unknown": "7e391f5ff6fdbbc362420d862e363d1d41dacd7e",
            "maintenance status warning": "35f05b64e401e993d18b8f69fca789c22dc4e579",
            "manual": "3c193c3d3429bf64c0fac138ee036bbdd1c51766",
            "message": "42fed9ec4d509cf7bc99e355247e46e6cd51984b",
            "missing image": "89ad43d6ad411ab046760c8b8693ed60f944c408",
            "more": "de13ffffa426ec2d8cffdbc062ada3180c5f1508",
            "min soc": "56d1bb1a4f776cf40e2481ff9f584685e563efcb",
            "my car": "29ab1b042799805e82a13d070991e82275f6ed50",
            "odo": "de4aa97a6fecc0990d912ef2835c4e859c643b25",
            "nfc card": "b3b5037176f2e24f3d4276a0061a9bb2e6869231",
            "note": "aa6106816d611271adc7daeff685b7d9c4a2803b",
            "notifications": "32a99db5110dc29452bc0a56daed299f37adb1c5",
            "oil level": "5d62fccb7f68e5937683e14d7df0d0951c047a92",
            "oil pressure": "bec2a2f02d4e47f9720c7e3e8854a8ea668466e7",
            "ota": "f0b52065bb514a305a0d22ebaadd075442f5eba7",
            "owners manual": "e02410145e51e928b5c939e25362606b79e0cdd5",
            "payment": "d6fdac65d26d4ac4a2af92fce93ccc07def228c9",
            "payment amex": "de9cb30bd9bbfa294bbd331964d46b33dbb784b2",
            "payment master": "63f8843b42bad985790d050a00e417033d0c3db4",
            "payment visa": "60e039f3f9df078c4cc03c10b625451901ca2168",
            "permission customer": "726af920e7cc59b7d486d4646990ad71847089af",
            "plug and charge": "52b389aebc1310ab62ae8930a6486ca698316e73",
            "permission location": "a246c82583b4e64ab07c51f0a1379ebc4ad73452",
            "permission payment": "7f25b5e4060f2a34efc573a06587f7e03be9eea1",
            "phone": "db50e341c75e2334727631e0b1f11dfaa452b240",
            "pin": "b6cb20c627d375707abab673d4da14ac2a05800b",
            "pin ccp": "18df46865fe82bdeb7010e00231411ad5973d2ce",
            "privacy": "2b9d64387c3285c0e27f36c6e079511badf09212",
            "rate": "816d779433232d99cafec22c87a2d3522cdd4992",
            "remote access": "a2906e6f35c69e4c027213225cf4a833159f10e5",
            "return time": "df491e9c1fb5ee35619043c339d3c511fc8f8b50",
            "roadside assistance": "54b652a519fe70ce25dc42e0c9e7b784998922f6",
            "run diagnostics": "91573025839e1d9ed24ef5512876b68ecba07302",
            "schedule manual": "adcb34041cf9824822da6f0d90ed41325f2c4e1c",
            "schedule smart": "4d08972ed32daa78e2a820b96dcad474651f787d",
            "search": "6e7b358c97872bde7da782272ec36cabd962b64d",
            "smart charging": "2f692d93fdf28d150ddada022af0ca6d2c1f8091",
            "service": "0a44d04f4b3331147b0c6151e0c52dc24af8ad75",
            "settings": "3a298cae5db7596667771d631e9a3e758bd8c102",
            "shop": "37d522081b0ba72e2f9022fd81973b980dedf2d2",
            "smartphone": "a79077fbdbc997aff1d06eef91ff7ab6b1e99b32",
            "spinner": "b73b0138b7411d50f4038f7d644ae1094ebddae7",
            "statistics": "9d88faf62439fc81e9d06114473ec9128e31d63c",
            "status": "90acef628129ad8eb00675499ac39709aa65ee88",
            "subscription": "5ce535df75ce0dae2023c64bde25272b295416d7",
            "support call": "35be8266265fea39d8f0f0474fdbcbd390e7f6e8",
            "support chat": "42873e002985287975c201ba881b9725f7ec8da8",
            "support email": "8f799ceb059ca201349ad88d958bda00227108e1",
            "switch car": "022a7dfe946f65192e4410bb8a0872a94b43a432",
            "terms & conditions": "b67f047ba7b74b3216db2dcf45a23041f7181aa9",
            "timer": "c50f1b95906c3ece2588318c6557310e43c4853c",
            "tire pressure": "7fec22ba6c1f3e11a2c539c2122b75cb4a4a69e7",
            "traffic": "e370a3d880f651cbd99381bb51954cb3c80141a4",
            "trip 1": "d21abf9506d1e9fb00232579828da12b91381064",
            "trip 2": "6349b5d1164272702c77cd4fc46abfb4e631f5ff",
            "trip ta": "fe02c259c3467b4a4e090faa7e28296ba8a4ccf0",
            "trip tm": "d134a8afabdb893a036a5a54589b18c94934b60d",
            "unlocked": "f856dadf8b9eb8acd7155c91b7546463ec62787e",
            "upcoming service": "3b0bc75ec21672d3692c32618123ad9175d24665",
            "vehicle": "b68bdfbba3a3ac1e5f6d634e44a89d1be04f0e32",
            "volvo id": "a73257f30684fb21be26f3e655aa0a5b657a657e",
            "volvo ironmark": "0909c47c69a1cbb827e64b621be8594319d5d995",
            "volvo on call": "998e31133ec0bb9ac6c2fb4a8ae3321d5b0d01eb",
            "wall charger": "f63fb4cb18f3ca8508c5d9a499af1a0977704890",
            "warning error": "524ff7ecc25f5b1c2e47092a3d3f2769fed03407",
            "warning grey": "f8548dce309750151e42d17fff1e64b04514a30b",
            "washer fluid": "1bea856f08a48838c447bc7b8e8980699b44cef3",
            "whatsapp": "6f02bdd2276d46c47b6c46173a3aebde4dda8616",
            "wireless": "926db6891f307e6d835f99119334cff293ed3ae8",
            "address book": "6c81402bd1b5b7888c2e573841bb13e8343e7f2a",
            "arrow left": "3ad495b3c30f9728cd2edfb154679257fcebdbfe",
            "back": "cdc2b9ad23864e7bbe8256f446b16f5cff22bc0a",
            "back overlay": "6cd32828b67b7e6c6ca4c0ef60314d07eacf3045",
            "cancel": "9c3fa6334ea870a64288c5234a95c947cd00b5d8",
            "cancel right": "0b6440b2204d9acf7ae40bb88d2a87ba3daa04f1",
            "charging history": "107527951dfb69ed3c37a7ac66fc2311893e61bb",
            "close overlay": "45006518e160e540bc64cb5a86a157027c8c57d4",
            "delete": "ef0b87f20645b50d8d2afab99af42a4209a4dcaa",
            "deselect all": "3f621c52466c2be2426c1df930167d4ec4968fae",
            "edit": "e4b8900f700e06dc81902a00139d7c04d2002697",
            "filter": "473e2652be9c85a06e8fc91ac453776aa295eb0c",
            "heating": "fa33b46bb430c65e7eccba68b8a8c273a9e206b4",
            "heating level 1": "c4c50c61e9948cb362b7ea943db1df2f8d67885d",
            "heating level 2": "6814050ef89259f1f0693b3e3a1d445e7b9b6fa7",
            "heating level 3": "2fe1b61fb235d54dc713f367f66ad41d3e9a621c",
            "link": "db892a4830382fdacefa29c696c7cd308af1e359",
            "list view": "1021b3b3e646fb1bc3686064fb0d61eff5098228",
            "menu": "bc85922f214b76263ff2856114d122b8760f925a",
            "minus": "72c4fbef44c9251d9fdc25fe384837c6da23992e",
            "notification": "62c8f070f05eb933ae5b59632389471ee7bf4032",
            "parking filled": "26c2bd05dc5b9436d0f3feab3d775ca4fa161f48",
            "plus": "83d44beb68c4e25eb1ebac197918b3f85fe41945",
            "remote start active": "5cbe09c339020022aedda158d3f6fc96dc4c1fef",
            "save": "39be5ac819d3b748c0a73c999a41f2dd58f7dfc3",
            "scan": "64f17d9813475aa907e01e49457017725d6b959d",
            "select all": "017b7f587d9c46be9cc41428cc2497eb0104a856",
            "tag": "bbc371b21050a20725e5184e91c90bd29284138b",
            "task succesful": "6d45a90807dec4621b4c3d878e83a0c6720cadb7",
            "unlink": "a2f595f2f5765921ebf69349a8509453eb076c0d",
            "placeholder": "d7319098d1c71b790650fe9514753cba1891048b"
        },
        "size32": {
            "add car": "d732282871571fe72130513fc773d707cb805ba6",
            "care by volvo": "bb192839e12708edd04cca6d71d5fb87841bdc57",
            "electric guide": "55a895072acf4d611a706005a5f6e149a720ff84",
            "pair car": "412d77bbb2f1c348aabb17c56dc430b4cc2fee10",
            "sharing invite": "3ef5dac694c8374a60524725c0c2cab48892c5d1",
            "air quality": "72190627376438bc1b6190f64ddf41054cbcc0d9",
            "air quality filled": "c186a93e2a833539fe37db738652a338028b1594",
            "air quality value": "8bae0824521ecceb5484a0c9d48ff4af489a0bba",
            "air quality value-filled": "99de13d2af932fcd7462ef0084c8423c30fa76d9",
            "charging": "49c91f3aaa92367d64b3a3ba51cb4cc553ee0f13",
            "charging filled": "8f9761444975c9db942b024914a758357c063ad8",
            "climate": "08f775d71b21570ff2441934a5bc67c50c1a917d",
            "climate filled": "438053ad455d5332e8227f67a02910b3df443a34",
            "lock": "50004e4181f4ce3275979f7bbe97faa6d2f82a3a",
            "lock filled": "51651170d05fdda8de3df6ff85aab96924eb9b96",
            "remote start": "f93ada03db83dfb17f5730214680671afc7aeb5e",
            "remote start filled": "1c3f322f599dd629e3433adc791775c5bd74b360",
            "amazon": "2c6d5a1d28eba431b54d77cf3aeb8f795a3e0b49",
            "app settings": "c922b9de7499f0cd0303244ce8c81d5bca3b185b",
            "bank": "34e0a76283cef362c17a5f55bbb66a6f637c3619",
            "car sharing": "d4fed96564bab3118e9d2a9465e83c39a8da2fab",
            "car software": "d13c53500d768930b5afd5fb572e1dc94cfa8fb9",
            "car electric": "3de16ad734f7b9fd1036ce1931849d979b57478d",
            "cars": "d301e711e0a69ac050493288fd4a1117ff580272",
            "chat": "a6d1182c7e616a75abae1a01052ca8bf400c4564",
            "connected apps": "9c3dcd7a0de87978f3c521b396c46579792f9d91",
            "connected cars": "422262fd9a73fdfc575e7ab7be9ac285f707247a",
            "delivery": "b54629abc9a71753aa6e4a0103c0a7c8dba321a7",
            "digital key": "c3aeed6f8b94dd643d914ff4fa3c5da8673498cc",
            "drivers": "0e541ed394f681845f41fbf1017d769cde556724",
            "driving journal": "0125134cf29e87de6f544c7583299b451a7d247c",
            "email": "02d8146f1a028067b5a4da00174bcea3b33fd1e3",
            "feedback": "0e6cc28e3b61850ac8789af6ab2c4426f7eb1fea",
            "history": "17d202397f941cb591e89863bbcc3d06e8a4f938",
            "hybrid level": "c3c6c74b2b55aea74b85cbcc3234e363f8cca721",
            "info": "32cf2ab613e2977086396be42ebeda1f08eaf1fd",
            "info 2": "58e8d3f71947856b10223c995b95777854fee610",
            "insurance": "ea49f7193f3395a71ac6b59b31c9e65ffc7ce6d2",
            "key fob": "30c6aae5198369c2e052b64a13882cd25e418bb2",
            "maintenance status default": "6aca972c1e307f900086920efd976d1132a35b65",
            "maintenance status unknown": "5917adfb25a7da84353bdb5fa19f2190bf5c42e0",
            "maintenance status warning": "8a483d04d0b43fd6d57582786de77c3fb5ff613c",
            "manual": "ff751562ae961db135bcb1a0e030ce1cc9684b76",
            "nfc card": "0e4e9b912f000f016976720c4cc5136051c717e4",
            "notifications": "5018af5bbda7df2400ba38a3f5a39518d9e9db1e",
            "ota": "faa6e443ae24ac4c861ce4efdb6974c41382dd9e",
            "parking": "337174a46a958ed651ee9ec8d7ef25464678bfd3",
            "payment": "1055daf0b1df6c4362465f0a53c256592c4537aa",
            "phone": "655b685ec571ba0aa4246af26c7bc47e25678661",
            "privacy": "7e7e8dc0b77a1a5524bb8ad4f955f03b5c257298",
            "remote access": "f7e85536dfeaf279a034810718e0767088fff456",
            "roadside assistance": "fc81175411bb44606eb5d209ac7a5a16b8da33a0",
            "service": "7b7f3ad34a16cbf138f55e8efc8fae6cc0dad8b1",
            "settings": "700c262dc9f83416668ed505bd32d82ca9291a5f",
            "smartphone": "e5d297c88f6ba1d657fffd75c27b70f5c08cb980",
            "spinner": "ea9b94791eaa1c92f60fd5a62a9a32c96b0898fc",
            "statistics": "c4bf6e3edc2dd94e413a1c98088d65a86b3a7b0e",
            "subscription": "732ddc3a9475277579e8c11b8d280d64dcdffc1e",
            "support contact": "870cfdb95d4a13be2baf2b33564deacc134c59e1",
            "switch car": "d3ff46afb9dee870c6faa47dd45e15dce76ca835",
            "terms & conditions": "5c941f15243ff799a9cd24b98eaf1d592d9ca2ab",
            "upcoming service": "3a1827f757d5d6315d5d0e650bde7ca2711c4bf3",
            "vehicle": "c3682778c243e86c65f7357434064f25140f6583",
            "volvo id": "45b207d98e791d6c7e53f506b9107504fbe1320e",
            "volvo ironmark": "6f4b63af8dd7ad90ad9da89bd8f5b23a6ee11538",
            "volvo on call": "94e8833227411e89ff460caed4c47f92d740bf09",
            "wall charger": "c4fcdf59fcf34560289d4e5c2d5b2a04e4b366cb",
            "whatsapp": "419d2cc85d30b9a190edeb400b231fc5bb71a651",
            "battery bev-0": "bf2a02eace3dcb7806ae85dd1d88b43a7434f436",
            "battery bev-10": "d6421e51735d3901e984436a4a9c2f695b66e35d",
            "battery bev-20": "f90c868b40f11d83b7cf2781486c213708317614",
            "battery bev-30": "f76c2ecfea96b1fdffd4c5457be93b4799dc99f9",
            "battery bev-40": "0ed2cf4aae2ae4be3d7a4ea59c8b8c79dbf04cb1",
            "battery bev-50": "e9526b3a163f2441eabb4ff3aba9c8fdcde697f0",
            "battery bev-60": "5df0c851e05f7ccf54e31b7c3285371635f6a7a2",
            "battery bev-70": "802cd071bcdc592c8f8c45fefeb8d58e148f8ba8",
            "battery bev-80": "0d2786c024c8d4657d76f44f7db5861d4cc9357d",
            "battery bev-90": "c50d173f3ab030994d5ba96b62ef76747ada3567",
            "battery bev-100": "dcb09f902cb270d49b63b322f8edfb0390479cc2",
            "battery bev-charging": "d8b576c9012f6830c1386b5dc3ecc82ccc1af724",
            "back overlay": "87abf1fc3910f1e027bb366efcaa6fca69e90f3f",
            "close overlay": "5ba93073b76c5cb7560e7e7ecb358e33010a83a1",
            "flash": "e18de38d3910dec3a3a638edbc4b267020f3ebbd",
            "flash & honk": "b0ca38a043b1a5fd84f438fe90d0aea4e703a045",
            "heater": "6b955a39573bdcb022a9a7043420c801a78ed078",
            "honk": "8ffbb41ec3fef54d7e5a48f18a3475a4caa8b88c",
            "notification": "887e8c5b8501a580f9f9ca654b36290b0ccc881a",
            "placeholder": "f4225c782ba931405a6f8b48429c963fe508b324"
        },
        "size40": {
            "cn (dc)": "859bba4941c62678c0ec81dfd5b0fc1ed9633810",
            "cn eu (ac)": "c286c97e22b2fe4a9eefa2a085ae0a65e3e10e1a",
            "eu (dc)": "84667f051c9c3b0cd19a06a38417b4651204b462",
            "jp (dc)": "69f25ff58d73ffda05b6df7b9f05c43caf3e23b5",
            "jp na (ac)": "b425b774c7092a347b2b42735aaedca4f54cda1e",
            "na (dc)": "c36addb9703a9a9924c7c841928853fd89954641",
            "animal": "fe44cb9c195b698f7f273fe2047177afc747ec69",
            "connect": "234294fb7cfafeb4e7fdd44dcec8e2c117530c1b",
            "fallback image": "9103fd9f620a38201ca1a581f54ff8f3994912fc",
            "insurance": "7289adf0f72bf384d54adda61c1e65a10befd0cb",
            "insurance add": "8e9f0a0758bc3ba2f7fa5ea1dc4391214866c1a8",
            "remote start": "7e52473662d744fd8e0adcba06ba9caf08b3fab4",
            "remote start filled": "717e524edbb7ea88da332556d9649508c8aba80a",
            "service plan": "9b8f5df39b416afbce07a64eef9037bd99561565",
            "spinner": "326b822efc7ba7914cf9a5501104ae4cca137f14",
            "warranty": "732dd9402e2ca00413cfba9e68ca5fc7d4338a32",
            "scale smiley good": "2d8ae09939086e1ee762ca397661d6695ad1e1d8",
            "scale smiley good-filled": "584529417512f3b95cb470a6d607a315cdf9c849",
            "scale smiley great": "af877230c2fc00885216d610c8ca12da96aa277d",
            "scale smiley great-filled": "7068a4fdd25bea9df0dd3dad312ad0887db745d7",
            "scale smiley ok": "880f11f13a4c2552ec3ec3dd4f4386a8f1a61620",
            "scale smiley ok-filled": "c34ebad9396cade9f0b1eeb3a193c54082de0353",
            "scale smiley poor": "dc094443d46cc32897d5b90fd19a7bc00432d522",
            "scale smiley poor-filled": "83b4346209bb7caa2366de8a8d80951a9cdb136f",
            "scale smiley very poor": "fe67fa550a4fb47a8c1845f551ba1405455e6b0d",
            "scale smiley very poor-filled": "b30097fdc3caf0310dc9961e0649d3efac042b92",
            "placeholder": "ecbc5585f9276e5af4f9ccc0f43e63edbbe348d9"
        },
        "size48": {
            "add car": "e4a49648c560e4d872111431a8cec448483182fe",
            "adventures": "c100a04e5f28ee88ce7a41f71d8c2964c41f7e97",
            "block delivery": "ff199bb5c9b9366fe43d4da8310e024be39128f3",
            "calendar": "9926c652271c196b16229e964167e65095f105ec",
            "charge": "18a28bd6480952e0eea2aed56edec02836ec65c5",
            "climate start": "95c99b24ffc340965ee6ff95fd677134c3321e24",
            "climate stop": "6bab7977481cdcdb2d12c54f949e5390673c0102",
            "drawer close": "9fb75c3cee45acfcd4d4fcad89c2ef6a719e0c6a",
            "drawer open": "4bfcbb401790d2225a4c453db9fdae76e5f8b3c2",
            "engine start": "c315681b5034f4497ee5868ae807a06c52d8bcc3",
            "engine stop": "20fbde56c0dce535d61a673c19cbed3f2bee9248",
            "filter": "5afa855c9a758f43504898ab0dd7244113ceea36",
            "flash": "acf211c179eeb03b60b3196701b88a453f511201",
            "flash & honk": "c764f039cdcc344f38027c3b0d2150831bbe8af3",
            "fuel": "deefff9e427132f24d73a17e733dc78c88db1365",
            "heater": "8d08ca35c7be998379c64620a52c4787f8acf6be",
            "honk": "8edfcd31e977fdfcaeeceebc646a541a98168c06",
            "hotel": "896602b7f202ae6421777562b653594b446d5fef",
            "owners manual": "38ea89f7dcc66f71150509958b089676943d7b0a",
            "progress done": "6c9c7e2ef0d6a5cbb4a48d8cdc437d241b53cb08",
            "restaurant": "47dd7849c7dc30a486730f464b428275ba3bb1a1",
            "route": "0da57650046de69870344f22ac03ad543e66efc7",
            "route filled": "fd8bf277b47654b66100a03082d5846337a674d2",
            "send destination": "ec206b9b12c11b8ca8f0e92d1aef36069337dc9e",
            "software warning": "29fc2b563bdf08089a8240e1c5a73240e1ccb882",
            "spinner": "f95818fd089889cc23e222eb648a2f6c5472545c",
            "switch car": "6e80a8f3da04adc57bd7848a1ffa1fd57afd0207",
            "placeholder": "b2de366f1dd8aebd9a2f89db09580f17130bf43a"
        },
        "size80": {
            "car": "81a00bb62bdf4661b71e3e2134affc5bb3bbfa3e",
            "car sharing": "e0bbf839c978cfb829ae65312feae87f0cc6167e",
            "electric": "801dec0ed4d73a4fc381fc092e25870693a8bad6",
            "heater": "5f880ebc6b19b9ba5f920c16efb9d648b4573376",
            "invite": "55e68172efca65e0121efe92de4494c5489aaee0",
            "progress done": "39ae4d50df4291486c975836a1fc72504da17b37",
            "progress error": "dd2d95dd75923306cb80974e7ada447386ef44c4",
            "progress warning": "c6c1035b1db5a04288d22739161633491481563a",
            "progress warning-2": "0a31ee4744cdcb9fb85379d3741d249e938b6938",
            "search": "bb30aebb32daa7bc0cc269d06cb8ef441920884a",
            "software update": "d926db669ebaa9cc1030c3444e49f62bb377deb8",
            "software warning default": "ed50f9cf93e05cbb203d18684b4a4a6bf30633e9",
            "software warning warning": "d41cb6f901ee497f387170e6542ed3136b0a1523",
            "spinner": "ce105e657dc59c0a5dcad166459cdeac7a879d16",
            "subscription": "211206869d7002b3b925d839aae8a542400a07a2",
            "terms": "29626603377c42833571162535e85e33289fb5ef",
            "volvo ironmark": "b827ff7a5bd125f0a3b2668510b22e3a6c51c282",
            "volvo ironmark small": "9e4c0398886c4030fab3c160ecf4f522db5cfdf2",
            "placeholder": "931c4139d529e51abdb23c37b9686d81c6a1079a"
        },
        "size192": {
            "account locked": "834f96d1a9fa2599927beaa2297be8051f6f3696",
            "bluetooth": "0c2a14ff14e9e13bb5a2a96747701b0cd4a350a1",
            "calendar unavailable": "d6f152c166c4bd2b1120b980df0e9a7fc6fe1e54",
            "car alarm triggered": "895656d5117fd07aff64b91ec985482ca4c112ee",
            "car factory reset": "2bac8ed3d2677a4666ba2f007e39746d078e06a9",
            "code error": "a0e75dc0ac2b2bcdaa6676e16e2c7599b37d521f",
            "code max": "6e7e2ece733f4114597d4c79ffd1dab2b681dd7b",
            "connection": "7b48bc142d95a791c0040150b53856c3272082a3",
            "done": "b3f97909476f659561b282097fd14a1568705d5e",
            "error": "7422c21f5d861e8860bcc6cf55e6e574303dfd97",
            "find number": "61e773ce094898dfbe9bd2fe5d8e4e0a28741c92",
            "go to car": "cecf4446fbab30d2518b6cffb9b51398312bf95d",
            "how it works": "fa6257a3f028824e4ca2c7c64fafac2489d51593",
            "ignition on": "eb5c3236558b0cd0729ae6bb66507546cea09aaf",
            "location": "481b268dc465d381cf0c2c60cbaf0d1fddbfdc55",
            "locked": "73fa68641358ee8b19acf8a2a7e8c750beb8575f",
            "login multifactor error": "ce08fba63226dadf2f2d4e92b6fa25d0ed657599",
            "login multifactor limit": "17e217800fc4cec941353e3db5f1423824df8c99",
            "nickname failed": "0c41016bf20941bed466a07424a6f6214af4fdc5",
            "no internet connection": "2bb9c32f33cc661ad0465275efce1d5dec91124a",
            "notifications error": "a4429615cae3874314c2579b8ea85470dd3e1905",
            "on call not equipped": "c13a49024d01c331dc58051f9efa8222f6cdaa50",
            "on call timeout": "185091111b1c261af83bdd609499c9b56cec3256",
            "ota": "c56cd57557a687678593ea024951a362c4e2e1b1",
            "ota error": "0dca753effb51f3d9badb021c62c146ad7eca477",
            "pairing cancelled car": "ab2c726ca8181a66bf534f23e6fec4d9a93c4f2d",
            "pairing cancelled device": "45d5cef2d13ddc8f2dbee2ba30083c5e5f772b77",
            "pairing cancelled unknown": "bac894769bb092aeecbf6b099372c57a3ce71c90",
            "payment error": "0ece33fdcc1807fc4d7f2c91284bcc50213f053b",
            "pin": "588090f38bba6db9c98833299f07c1a93352b108",
            "prepare pairing": "057209d77ae032f25e2f0de207b32fc00e9ab445",
            "prepare pairing to cloud": "39d15978348b14e235e813f949b904ddfa72c8b7",
            "qr document": "f75be1c5e8189ce1a04ecd35f20f4ade3260beac",
            "recharge": "87960dba6e613a0d5c0fee91c065b0a3355fe055",
            "recharge error": "b19d1043c2c9baef738da4132f36a82d8ba5be90",
            "search": "301a42778bf421fabbd56dbaef9f8e1f2d933bc6",
            "server down": "c72b8e15385cf44d0f79fb97db2b1e4700d993a3",
            "software warning serious": "fa3f1e97c100415028a12bd645ec21e2aac9b9f4",
            "system failure": "fda33f87ef2ad882d2de4a5721cbd3767ef213b7",
            "test drive": "3d65a50372c5fddd03225652e36b5d895aa9c593",
            "unlocked": "2fc5a92732c3d6e51b9147aaba375458517f2189",
            "update required": "5490c9f7cf8da1be1f21f5ec75893d513a1aa265",
            "wall charger conection": "bd6dcb94ef9233aa734c9b6d145e29e92cc5a40e",
            "wall charger failure": "86287b8b26787efd8af6d570d090c8e5ff46e117",
            "placeholder": "dfbd81877a981ab85bb06b7721a6a228332201d1"
        }
    }
};

// Icon names mapping across libraries
// The first name in the schema is the lib 2024 icon name

const iconNameMapping = {
    addressBook: {
        iconInventoryLib: "",
        mobileIcons: ""
    },
};

// GLOBAL VARIABLES

const selection = figma.currentPage.selection;
const iconMetaPattern = /((\s+)\((\d+)(\w+)\))|((\s+)\{(.*?)\})/g;
const stringUpdateFail = "Ups, I was lost!";

let asyncRunning = 0;
let componentArray: any = [];
let componentNodes: any = [];

// FUNCTIONS

const asyncCalls = async () => {
    // Save a backup point on the version history before the plugin runs
    await figma.saveVersionHistoryAsync("💾 Before the update mobile components plugin ran");

    // Load library fonts
    await figma.loadFontAsync({ family: "Volvo Novum", style: "SemiLight" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Regular" });
    await figma.loadFontAsync({ family: "Volvo Novum", style: "Medium" });

    // Import component nodes from the componentKeys object
    for (const [key, value] of Object.entries(componentKeys)) {
        const importedNode = await figma.importComponentByKeyAsync(value);

        Object.assign(componentNodes, {[key]: importedNode});
    }
};

const getComponentNodeByKey = async (key: string) => {
    asyncRunning++

    const importedNode = await figma.importComponentByKeyAsync(key);

    return importedNode;
};

const checkForAsync = () => {
    // Check if there are async processes running and if not, close the plugin
    if (asyncRunning <= 0) {
        preCloseSave().then(() => {
            figma.closePlugin("Mobile Design System components updated 🎉");
        });
    }
}

const preCloseSave = async () => {
    // Save a backup point on the version history before the plugin closes
    await figma.saveVersionHistoryAsync("💾 After the update mobile components plugin ran");
};

const updateComponents = () => {
    Array.from(componentArray).forEach((component: any) => {
        if (component.name.match("⚡️ Information Card")) {
            updateInformationCard(component);
        }
        else if (component.name.match("⚡️ Insight Card")) {
            updateInsightCard(component);
        }
        else if (component.name.match("⚡️ List primary")) {
            updateListPrimary(component);
        }
        else if (component.name.match("⚡️ List secondary")) {
            updateListSecondary(component);
        }
        else if (component.name.match("⚡️ List Card")) {
            updateListCard(component);
        }
        else if (component.name.match("⚡️ Fullscreen Action Sheet")) {
            updateActionSheet(component);
        }
        else if (component.name.match("⚡️ Fullscreen Wizard Sheet")) {
            updateWizardSheet(component);
        }
        else {
            figma.closePlugin();
            figma.notify("This component is not currently supported by the plugin", {
                error: true,
                timeout: 10000,
            });
        }
    });
};

// COMPONENT UPDATE FUNCTIONS

const updateInformationCard = async (component: any) => {
    // Store the content
    const title = component.findOne(((n: { name: string; }) => n.name === "Title")).characters;
    const message = component.findOne(((n: { name: string; }) => n.name === "Message")).characters;
    
    // Swap the component
    component.swapComponent(componentNodes.imageCard);
    
    // Update swapped component
    component.findOne(((n: { name: string; }) => n.name === "Title")).characters = title;
    component.findOne(((n: { name: string; }) => n.name === "Message")).characters = message;

    // Close plugin
    checkForAsync();
};

const updateInsightCard = async (component: any) => {    
    // Swap the component
    component.swapComponent(componentNodes.insightCard2);

    // Close plugin
    checkForAsync();
};

const updateListPrimary = async (component: any) => {
    // Leading and trailing content
    const leading = component.findOne(((n: { name: string; }) => n.name === "Leading"));
    const leadingComponentProps = leading.componentProperties;
    const leadingIconName = leading.children[0].name.replace(iconMetaPattern, "").toLowerCase();

    const trailing = component.findOne(((n: { name: string; }) => n.name === "Trailing"));
    const trailingComponentProps = trailing.componentProperties;
    const trailingIconName = trailing.children[0].name.replace(iconMetaPattern, "").toLowerCase();

    // Nested detail content
    let detail: string = stringUpdateFail;

    if (component.findOne(((n: { name: string; }) => n.name === "Detail"))) {
        detail = component.findOne(((n: { name: string; }) => n.name === "Detail")).characters;
    }

    // Store the component variant name before swapping
    const rowsVariant = component.variantProperties.Rows;

    // Swap the component
    component.swapComponent(componentNodes.list2);

    // Store the new leading instance after swap
    const newLeadingNode = component.findOne(((n: { name: string; }) => n.name === "-> Leading"));

    // Replace the leading instance
    switch (leadingComponentProps.Type.value) {
        case "Icon":
            newLeadingNode.swapComponent(
                componentNodes.list2NestedLeading.parent.findChild(
                    (n: { name: string }) => n.name.match("Icon")
                )
            );

            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[leadingIconName])
                .then((importedNode) => { 
                    asyncRunning--

                    const icon = newLeadingNode.children[0];

                    icon.swapComponent(importedNode);

                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Radio":
            newLeadingNode.swapComponent(
                componentNodes.list2NestedLeading.parent.findChild((n: { name: string }) => n.name.match("Radio"))
            );
        break;
        case "Checkbox":
            newLeadingNode.swapComponent(
                componentNodes.list2NestedLeading.parent.findChild((n: { name: string }) => n.name.match("Checkbox"))
            );
        break;
    }

    // Replace the trailing instance
    const newTrailingNode = component.findOne(((n: { name: string; }) => n.name === "-> Trailing"));

    switch (trailingComponentProps.Type.value) {
        case "Icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Icon"))
            );

            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[trailingIconName])
                .then((importedNode) => { 
                    asyncRunning--
    
                    const icon = newTrailingNode.children[0];
    
                    icon.swapComponent(importedNode);
    
                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Detail":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail"))
            );

            newTrailingNode.findOne(((n: { name: string; }) => n.name === "Detail")).characters = detail;
        break;
        case "Switch":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Switch"))
            );
        break;
        case "Spinner":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Spinner"))
            );
        break;
        case "Action":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Action"))
            );
        break;
        case "Detail with icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail with icon"))
            );

            newTrailingNode.findOne(((n: { name: string; }) => n.name === "Detail")).characters = detail;
        break;
    }

    // Show/hide content on the swapped content to match the previous list variants
    if (rowsVariant === "5") {
        component.setProperties({
            "Header#47651:29": true,
            "More content#50684:2": true,
            "Title 2#47651:35": true,
            "Message 2#47651:33": true
        });
    }

    if (rowsVariant === "2") {
        component.setProperties({
            "Header#47651:29": true,
            "Message#51818:89": false
        });
    }

    if (rowsVariant === "1") {
        component.setProperties({
            "Message#51818:89": false
        });
    }
    
    // Close plugin
    checkForAsync();
};

const updateListSecondary = async (component: any) => {
    // Leading and trailing content
    const leading = component.children[0].children[0];
    const leadingIconName = leading.name.replace(iconMetaPattern, "").toLowerCase();

    const trailing = component.findOne(((n: { name: string; }) => n.name === "Trailing"));
    const trailingComponentProps = trailing.componentProperties;
    const trailingIconName = trailing.children[0].name.replace(iconMetaPattern, "").toLowerCase();

    // Store the component variant name before swapping
    const rowsVariant = component.variantProperties.Rows;

    // Store the value text
    let value: string = stringUpdateFail;

    if (rowsVariant === "2 (non-clickable)") {
        value = component.findOne(((n: { name: string; }) => n.name === "Value")).characters;
    }

    // Swap the component
    component.swapComponent(componentNodes.list2);

    // Replace the leading icon
    // @ts-ignore
    getComponentNodeByKey(iconKeys.mobileIcons.size24[leadingIconName])
        .then((importedNode) => { 
            asyncRunning--

            const icon = component.findOne(((n: { name: string; }) => n.name === "-> Leading")).children[0];
            icon.swapComponent(importedNode);

            checkForAsync();
        })
        .catch((error) => {
            console.error(error.message);
        }
    );

    // Replace the trailing instance
    const newTrailingNode = component.findOne(((n: { name: string; }) => n.name === "-> Trailing"));

    switch (trailingComponentProps.Type.value) {
        case "Icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Icon"))
            );

            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[trailingIconName])
                .then((importedNode) => { 
                    asyncRunning--
    
                    const icon = component.findOne(((n: { name: string; }) => n.name === "-> Trailing")).children[0];
    
                    icon.swapComponent(importedNode);
    
                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Detail":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail"))
            );
        break;
        case "Switch":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Switch"))
            );
        break;
        case "Spinner":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Spinner"))
            );
        break;
        case "Action":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Action"))
            );
        break;
        case "Detail with icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Detail with icon"))
            );
        break;
    }

    // Show/hide content on the swapped content to match the previous list variants

    component.setProperties({ Type: "Compact" });

    if (rowsVariant === "5") {
        component.setProperties({
            "Header#47651:29": false,
            "More content#50684:2": true,
            "Title 2#47651:35": false,
            "Message 2#47651:33": true,
            "Message 3#47651:31": true,
            "Message 4#47651:23": true
        });
    }

    if (rowsVariant === "4") {
        component.setProperties({
            "Header#47651:29": false,
            "More content#50684:2": true,
            "Title 2#47651:35": false,
            "Message 2#47651:33": true,
            "Message 3#47651:31": true
        });
    }

    if (rowsVariant === "3") {
        component.setProperties({
            "Header#47651:29": false,
            "More content#50684:2": true,
            "Title 2#47651:35": false,
            "Message 2#47651:33": true
        });
    }

    if (rowsVariant === "2 (non-clickable)") {
        component.setProperties({
            "Header#47651:29": true,
            "Message#51818:89": false
        });

        component.findOne(((n: { name: string; }) => n.name === "Title")).characters = value;
    }

    if (rowsVariant === "1") {
        component.setProperties({
            "Message#51818:89": false
        });
    }
    
    // Close plugin
    checkForAsync();
};

const updateListCard = async (component: any) => {
    // Store the text content
    const title = component.findOne(((n: { name: string; }) => n.name === "Title")).characters;
    const message = component.findOne(((n: { name: string; }) => n.name === "Message")).characters;

    // Leading and trailing content
    const leading = component.children[0];
    const leadingKey = leading.mainComponent.key;

    const trailing = component.children[2];
    const trailingComponentProps = trailing.componentProperties;
    const trailingIconName = trailing.children[0].name.replace(iconMetaPattern, "").toLowerCase();

    // Swap the component
    component.swapComponent(componentNodes.listCard2);

    // Update swapped component
    component.findOne(((n: { name: string; }) => n.name === "Title")).characters = title;
    component.findOne(((n: { name: string; }) => n.name === "Message")).characters = message;

    const newLeadingNode = component.findOne(((n: { name: string; }) => n.name === "-> Leading"));

    // Swap the icon in the leading instance
    getComponentNodeByKey(leadingKey)
        .then((importedNode) => { 
            asyncRunning--

            const icon = newLeadingNode.children[0];

            icon.swapComponent(importedNode);

            checkForAsync();
        })
        .catch((error) => {
            console.error(error.message);
        }
    );

    // Replace the trailing instance
    const newTrailingNode = component.findOne(((n: { name: string; }) => n.name === "-> Trailing"));

    switch (trailingComponentProps.Type.value) {
        case "Icon":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Icon"))
            );

            // Swap the icon
            // @ts-ignore
            getComponentNodeByKey(iconKeys.mobileIcons.size24[trailingIconName])
                .then((importedNode) => { 
                    asyncRunning--
    
                    const icon = newTrailingNode.children[0];
    
                    icon.swapComponent(importedNode);
    
                    checkForAsync();
                })
                .catch((error) => {
                    console.error(error.message);
                }
            );
        break;
        case "Switch":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Switch"))
            );
        break;
        case "Spinner":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Spinner"))
            );
        break;
        case "Action":
            newTrailingNode.swapComponent(
                componentNodes.list2NestedTrailing.parent.findChild((n: { name: string }) => n.name.match("Action"))
            );
        break;
    }
    
    // Close plugin
    checkForAsync();
};

const updateActionSheet = async (component: any) => {    
    // Store the text content
    const titleWrapper = component.findOne(((n: { name: string; }) => n.name === "Title + Message"));
    const title = titleWrapper.findOne(((n: { name: string; }) => n.name === "Title")).characters;

    // Swap the component
    component.swapComponent(componentNodes.fullscreenActionSheet2);

    // Update swapped component
    component.findOne(((n: { name: string; }) => n.name === "Header")).characters = title;

    // Close plugin
    checkForAsync();
};

const updateWizardSheet = async (component: any) => { 
    // Store the text content
    const titleWrapper = component.findOne(((n: { name: string; }) => n.name === "Title + Message"));
    const title = titleWrapper.findOne(((n: { name: string; }) => n.name === "Title")).characters;

    // Swap the component
    component.swapComponent(componentNodes.fullscreenWizardSheet2);

    // Update swapped component
    component.findOne(((n: { name: string; }) => n.name === "Header")).characters = title;

    // Close plugin
    checkForAsync();
};

// INITIALIZATION

// Listen to the commands from the figma plugin menu

if (figma.command === "page") {
    let allInstances = figma.currentPage.findAllWithCriteria({
        types: ["INSTANCE"],
    });

    Array.from(allInstances).forEach((instance: any) => {
        // Loop through updatable component names
        for (const component of outOfDateComponents) {
            if (instance.name.match(component)) {
                componentArray.push(instance)
            }
        }
    });

    if (componentArray.length >= 1) {
        // Call the async then run the main update function
        asyncCalls().then(() => updateComponents());
    }
    else {
        figma.closePlugin();
        figma.notify("Weird, could not find out of date mobile components found on page 🤔", {error: true, timeout: 10000});
    }
} 

if (figma.command === "selection") {
    // Push only instances inside the selection to the deprecation array
    if (selection.length === 1) {
        // @ts-ignore
        if (selection[0].componentProperties !== undefined) {
            componentArray = selection;

            // Call the async then run the main update function
            asyncCalls().then(() => updateComponents());
        }
        else {
            figma.closePlugin();
            figma.notify("The selection does not include a component instance 😅", {error: true, timeout: 10000});
        }
    } 
    else if (selection.length >= 2) {
        Array.from(selection).forEach((instance: any) => {
            // Loop through updatable component names
            for (const component of outOfDateComponents) {
                if (instance.name.match(component)) {
                    componentArray.push(instance)
                }
            }
        });

        // Call the async then run the main update function
        asyncCalls().then(() => updateComponents());
    } 
    else {
        figma.closePlugin();
        figma.notify("You forgot to select something 😅", {error: true, timeout: 10000});
    }
}