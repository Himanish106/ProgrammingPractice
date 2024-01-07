import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        let articles = [
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Neha LM Tripathi, Saptarishi Das",
                "title": "Crane causes signal interference, risks fog landings at Delhi airport - Hindustan Times",
                "description": "Instrument landing system (ILS) is an important navigation system during extreme weather conditions where visibility even drops to zero. | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/crane-causes-signal-interference-risks-fog-landings-at-delhi-airport-101704519379446.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/06/1600x900/plane_landing_delhi_airport_amid_foggy_condition_1704519702450_1704519702759.jpg",
                "publishedAt": "2024-01-06T05:45:20Z",
                "content": "A crane being used for construction work of an expressway kept aviation officials on their toes for nearly a week after it caused interference in the signals of the instrument landing system (ILS), r… [+3355 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "Jeffrey Epstein documents name A-list celebrities: Donald Trump, Prince Andrew among names in court records | Full list | Mint - Mint",
                "description": "Jeffrey Epstein court documents: Prince Andrew, Bill Clinton, and Donald Trump are some of the names mentioned in the court records related to Jeffrey Epstein and Ghislaine Maxwell, but they have not been accused of any wrongdoing.",
                "url": "https://www.livemint.com/news/world/jeffrey-epstein-documents-name-a-list-celebrities-bill-clinton-prince-andrew-donald-trump-among-names-in-court-records-11704515265525.html",
                "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/06/1600x900/Jeffrey_epstein_1704518678468_1704518678882.jpg",
                "publishedAt": "2024-01-06T05:32:10Z",
                "content": "Leonardo DiCaprio, Donald Trump, and Michael Jackson are among the high-profile names that emerged in a lawsuit involving Jeffrey Epstein, a late financier who killed himself while awaiting trial on … [+5674 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT News Desk",
                "title": "Jallikattu begins in Tamil Nadu; Sri Lanka hosts bull taming sport for 1st time - Hindustan Times",
                "description": "Jallikattu, the traditional bull-taming sport, kicked off the year in Tamil Nadu with an event in Thachankurichi village featuring 500 bulls and heavy security. | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/jallikattu-kicks-off-in-tamil-nadu-sri-lanka-hosts-bull-taming-sport-for-1st-time-101704516212707.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/06/1600x900/Jallikattu-event-tamil_nadu_1704518656751_1704518656920.jpg",
                "publishedAt": "2024-01-06T05:28:18Z",
                "content": "The fervour of Jallikattu, the traditional bull-taming sport, kicked off the year with a grand spectacle in the Pudukkottai district of Tamil Nadu on Saturday morning. The event in Thachankurichi vil… [+3061 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Apple may launch a new gen AI-powered version of Siri at WWDC 2024: What to expect - Times of India",
                "description": "Apple is rumoured to unveil a major upgrade for Siri at WWDC 2024. The new version of Siri will be powered by advanced artificial intelligence and is",
                "url": "https://timesofindia.indiatimes.com/gadgets-news/apple-may-launch-a-new-gen-ai-powered-version-of-siri-at-wwdc-2024-what-to-expect/articleshow/106583931.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106583929,width-1070,height-580,imgsize-5744,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-06T05:19:51Z",
                "content": "5G smartphones with 10GB or more RAM under Rs 25,000"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "The Indian Express",
                "title": "Japan-led XRISM mission reveals its first X-ray picture of cosmos - The Indian Express",
                "description": "The Japanese-led XRISM (X-ray Imaging and Spectroscopy Mission) on Saturday released a first look at the data that scientists expect it to collect when science operations begin this year.",
                "url": "https://indianexpress.com/article/technology/science/japan-jaxa-xrism-x-ray-universe-images-9097544/",
                "urlToImage": "https://images.indianexpress.com/2024/01/XRISM-featured-20240106.jpg?w=640",
                "publishedAt": "2024-01-06T05:18:25Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "WION"
                },
                "author": "WION Web Team",
                "title": "Want to fly your name to Moon? Here`s how NASA campaign can help - WION",
                "description": "Want to fly your name to Moon? Heres how NASA campaign can help",
                "url": "https://www.wionews.com/science/want-to-fly-your-name-to-moon-heres-how-nasa-campaign-can-help-677100",
                "urlToImage": "https://cdn.wionews.com/sites/default/files/2024/01/06/403973-untitled-design-2024-01-06t112856763.png",
                "publishedAt": "2024-01-06T05:16:57Z",
                "content": "In a rare move, NASA is extending a unique opportunity to the public to have their names fly to the lunar surface aboard the Volatiles Investigating Polar Exploration Rover (VIPER), as per a statemen… [+1844 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Door Blows Out Of Boeing Plane Just After Takeoff, Makes Emergency Landing - NDTV",
                "description": "An Alaska Airlines Boeing 737-9 MAX faced an emergency today after one of its doors blew open mid-air, minutes after take-off.",
                "url": "https://www.ndtv.com/world-news/door-blows-out-of-boeing-plane-just-after-takeoff-makes-emergency-landing-4809779",
                "urlToImage": "https://c.ndtvimg.com/2024-01/cjkggjvg_alaska-airlines_650x400_06_January_24.jpg",
                "publishedAt": "2024-01-06T04:52:13Z",
                "content": "The mid-cabin door of an Alaska Airlines aircraft after it separate from the plane\r\nNew Delhi: An Alaska Airlines Boeing 737-9 MAX faced an emergency today after one of its doors blew open mid-air, m… [+1972 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Abplive.com"
                },
                "author": "ABP News Bureau",
                "title": "Garena Free Fire Max: Exclusive Redeem Codes Unveiled For January 6. Here's How To Use - ABP Live",
                "description": "Garena Free Fire Max redeem codes can unlock a handful of goodies, including weapons and skins.",
                "url": "https://news.abplive.com/gaming/garena-free-fire-max-redeem-codes-jan-6-january-2024-daily-free-rewards-1654633",
                "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/28/ea9091d4dab99068fe8119cef568459a_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
                "publishedAt": "2024-01-06T04:48:54Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Kiara Advani's Roaring Shout Out To Husband Sidharth Malhotra's Indian Police Force Trailer - NDTV Movies",
                "description": "Indian Police Force is an integral part of Rohit Shetty's cop universe, known for its dynamic storytelling.",
                "url": "https://www.ndtv.com/entertainment/kiara-advanis-roaring-shout-out-to-husband-sidharth-malhotras-indian-police-force-trailer-4809678",
                "urlToImage": "https://c.ndtvimg.com/2024-01/40qqhr4g_sidharth_625x300_06_January_24.jpg",
                "publishedAt": "2024-01-06T04:27:07Z",
                "content": "Sidharth Malhotra in a still from the trailer. (courtesy: YouTube)\r\nNew Delhi: The trailer of Rohit Shetty's Indian Police Force released on Friday and it is trending even a day later. The cop drama … [+1546 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "Fog Alert! Cold spell tightens grip on Delhi, low visibility leads to flight delays | Mint - Mint",
                "description": "Delhi and the National Capital Region experienced low visibility and flight delays at the Delhi airport due to dense fog and cold spell.",
                "url": "https://www.livemint.com/news/india/delhi-airport-air-pollution-winter-low-visibility-flight-imd-delhi-weather-trains-delayed-news-punjab-ncr-region-11704512252814.html",
                "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/06/1600x900/Morning-Chill-Fog-23_1704513597336_1704513704268.jpg",
                "publishedAt": "2024-01-06T04:22:41Z",
                "content": "Delhi and the National Capital Region remained in the clutches of a persistent cold spell on Saturday morning, causing low visibility and subsequent flight delays at the Delhi airport due to dense fo… [+2509 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Adda247.com"
                },
                "author": "Sumit Arora",
                "title": "T20 World Cup Schedule 2024: Complete List of Matches, Venues, and Stadiums - Adda247",
                "description": "The ICC T20 World Cup 2024 schedule announced on 05 January, with the first game on June 1 and final on June 29 in Barbados, where final played. Indian Team is schedule to play against Pakistan in New York, USA on June 9. T20 World Cup Winners List from 2007 …",
                "url": "https://currentaffairs.adda247.com/icc-mens-t20-world-cup-schedule-2024/",
                "urlToImage": "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2024/01/05211943/T20-Mens-World-Cup-Schedule-2024.png",
                "publishedAt": "2024-01-06T03:56:53Z",
                "content": "When does the ICC T20 World Cup 2024 commence?\r\nThe T20 World Cup 2024 starts on June 1, with the final scheduled for June 29.\r\nWhere will the final match of the T20 World Cup 2024 be played?\r\nThe fi… [+1556 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "NDTV Sports Desk",
                "title": "India Squad For T20Is vs Afghanistan, Live Updates: Not Hardik Pandya, Rohit Sharma To Lead India In T20 World Cup? - NDTV Sports",
                "description": "Live Updates: Team India's squad for the upcoming three-match T20I series against Afghanistan is likely to be announced on Saturday",
                "url": "https://sports.ndtv.com/india-vs-afghanistan-t20i-2024/indias-squad-for-t20is-vs-afghanistan-live-updates-4804718",
                "urlToImage": "https://c.ndtvimg.com/2023-12/1lu5tjv8_rohit-sharma-and-hardik-pandya-bcci_625x300_10_December_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2024-01-06T03:54:46Z",
                "content": "Live Updates: Team India's squad for the upcoming three-match T20I series against Afghanistan is likely to be announced on Saturday. Earlier on Friday, the much-awaited fixtures for the T20 World Cup… [+409 chars]"
            },
            {
                "source": {
                    "id": "the-hindu",
                    "name": "The Hindu"
                },
                "author": "The Hindu",
                "title": "Four dead in fire on a passenger train in Bangladesh, BNP demands UN probe - The Hindu",
                "description": "Bangladesh’s main opposition BNP has demanded a UN-supervised investigation into a fire on a passenger train that killed four persons, calling it a “pre-planned” act of sabotage ahead of the general elections being boycotted by the party.",
                "url": "https://www.thehindu.com/news/international/at-least-four-dead-in-suspected-train-arson-in-bangladesh-on-election-eve/article67712328.ece",
                "urlToImage": "https://th-i.thgim.com/public/incoming/44vlh6/article67712332.ece/alternates/LANDSCAPE_1200/AP01_06_2024_000003B.jpg",
                "publishedAt": "2024-01-06T03:51:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Shobhit Gupta",
                "title": "'Kim Jong Un's rule in West Bengal': Union minister after ED officials attacked - Hindustan Times",
                "description": "A team of the probe agency was attacked and its vehicles damaged in Sandeshkhali village of North 24 Parganas district | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/kim-jong-uns-rule-in-west-bengal-union-minister-giriraj-singh-after-ed-officials-attacked-101704507571117.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/06/1600x900/ANI-20231212061-0_1704508904287_1704508960454.jpg",
                "publishedAt": "2024-01-06T03:48:55Z",
                "content": "Union minister Giriraj Singh on Friday lashed out at the Trinamool Congress and West Bengal chief minister Mamata Banerjee over the attack on an Enforcement Directorate (ED) team in the state. He all… [+2527 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TOI Sports Desk",
                "title": "3rd Test: David Warner bids adieu with a flourish as Australia sweep series against Pakistan - Times of India",
                "description": "Cricket News: David Warner's 57-run innings led Australia to a comprehensive eight-wicket victory over Pakistan, securing a 3-0 series sweep. Despite being denied t",
                "url": "https://timesofindia.indiatimes.com/sports/cricket/news/3rd-test-david-warner-bids-adieu-with-a-flourish-as-australia-sweep-series-against-pakistan/articleshow/106588595.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-106588694,width-1070,height-580,imgsize-46484,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-06T03:44:35Z",
                "content": "Wisden picks 2023 mens ODI team of the year, includes 7 Indians in the XI"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Big Day For India's Sun Mission, Aditya-L1 To Enter Final Orbit Today - NDTV",
                "description": "In another historic moment for India in space, Aditya-L1 -- the country's first mission to study the sun -- has reached its final destination.",
                "url": "https://families.google.com/service-restricted",
                "urlToImage": "https://c.ndtvimg.com/2023-12/63k32ij4_india-solar-mission-aditya-l1-isro-solar-mission-ani_625x300_23_December_23.jpeg?im=FeatureCrop,algorithm=dnn,width=650,height=400",
                "publishedAt": "2024-01-06T03:42:58Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Entertainment Desk",
                "title": "Fardeen Khan responds to Zeenat Aman's claim of his father Feroz Khan deducting her salary during Qurbani - Hindustan Times",
                "description": "Qurbani, released in 1980, was directed by Feroz Khan. He acted in the film alongside Vinod Khanna, Zeenat Aman, Amjad Khan and others. | Bollywood",
                "url": "https://www.hindustantimes.com/entertainment/bollywood/fardeen-khan-responds-to-zeenat-amans-claim-of-his-father-feroz-khan-deducting-her-salary-during-qurbani-101704507551101.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/06/1600x900/fardeen_khan_1704510080091_1704510091719.jpg",
                "publishedAt": "2024-01-06T03:14:01Z",
                "content": "Veteran actor Zeenat Aman recently shared a post on Instagram where she recalled how late director Feroz Khan cut her pay on the Qurbani set. Now, Feroz's son, Fardeen Khan, has reacted to the post. … [+2995 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Education Diary"
                },
                "author": "iednewsdesk",
                "title": "Surge in Covid, flu cases in US brings back mask mandates in hospitals - India Education Diary",
                "description": "Many hospitals across several US states have brought back the mask mandates, even as the country is seeing a fresh wave of Covid-19 cases, driven by the highly transmissible JN.1 variant, as well as flu. The Centers for Disease Control and Preve",
                "url": "https://indiaeducationdiary.in/surge-in-covid-flu-cases-in-us-brings-back-mask-mandates-in-hospitals/",
                "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2024/01/202401043101768.png",
                "publishedAt": "2024-01-06T03:09:46Z",
                "content": "Many hospitals across several US states have brought back the mask mandates, even as the country is seeing a fresh wave of Covid-19 cases, driven by the highly transmissible JN.1 variant, as well as … [+2758 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Chaitanya Deshpande",
                "title": "20 from city JN.1 +ve, all recovering well - Times of India",
                "description": "The JN.1 sub-variant of Omicron is spreading rapidly in Nagpur, with 20 out of 44 recent Covid-19 samples testing positive. However, it is not causing serious illness in most cases, particularly among the vaccinated.",
                "url": "https://timesofindia.indiatimes.com/city/nagpur/rapid-spread-of-jn1-sub-variant-of-omicron-in-nagpur/articleshow/106587632.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2024-01-06T02:58:08Z",
                "content": "Superfood Moringa Soup which can fix a number of deficiencies"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Tsunami: Central Japan earthquake's death toll rises to 92, 242 missing - Times of India",
                "description": "The central Japan earthquake's death toll rises to 92, with 242 missing and fading hopes for survivors. In Wajima, two elderly women are rescued after 72 hours, aided by a sniffer dog named Jennifer. Destruction, soot, and a massive fire mark the aft",
                "url": "https://timesofindia.indiatimes.com/videos/toi-original/tsunami-central-japan-earthquakes-death-toll-rises-to-92-242-missing/videoshow/106587589.cms",
                "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106587589,imgsize-79056.cms",
                "publishedAt": "2024-01-06T02:56:40Z",
                "content": "Jan 06, 2024, 08:26AM ISTSource: TOI.inThe central Japan earthquake's death toll rises to 92, with 242 missing and fading hopes for survivors. In Wajima, two elderly women are rescued after 72 hours,… [+181 chars]"
            }
        ]
        super(); // super constructor i.e. the constructor of component class needs to be called first before using the constructor of the derived class.
        this.state = {
            articles: articles,
            loading: false,
        }
        console.log("Constructor from class News")
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='my-3'>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url} ><NewsItem title={element.title.slice(0,57)+"..."} description={element.description.slice(0,80)+"..."} imageUrl={element.urlToImage} newsURL={element.url} /></div>
                    })}

                </div>
            </div>

        )
    }
}

export default News
