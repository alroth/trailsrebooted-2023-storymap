window.testCallback = () => {
    
    let startTime;
    const duration = 10000;
  
    const frame = (time) => {
      if (!startTime) startTime = time;
      const animationPhase = (time - startTime) / duration;
  
      // Reduce the visible length of the line by using a line-gradient to cutoff the line
      // animationPhase is a value between 0 and 1 that reprents the progress of the animation
      map.setPaintProperty("mplltraverse", "line-gradient", [
        "step",
        ["line-progress"],
        "red",
        animationPhase,
        "rgba(0, 0, 0, 0)"
      ]);
  
      if (animationPhase > 1) {
        return;
      }
      window.requestAnimationFrame(frame);
    };

    window.requestAnimationFrame(frame);
  
  }

var imageRoot = 'https://raw.githubusercontent.com/alroth/trailsrebooted-2023-storymap/main/src/images/'
var config = {
    style: 'mapbox://styles/wta/cleiym1xm001i01nvjkh1dtse',
    accessToken: 'pk.eyJ1Ijoid3RhIiwiYSI6ImNqOXJkbGdlNjY5ajIzM21xNm5uZXk3eWUifQ.padg8NGbni9aK8jaLiuTuA',
    showMarkers: false,
    markerColor: '',
    inset: false,
    theme: 'light',
    use3dTerrain: true,
    auto: false,
    title: '',
    introImageURL: imageRoot + ['TrailsRebootedcover.png'],
    subtitle: '',
    byline: '',
    footer: `Since 2019, WTA's <a href="https://www.wta.org/trailsrebooted">Trails Rebooted campaign</a> has been supporting our most popular recreation areas by improving existing trails, championing the construction of new ones and helping hikers see the role they play in the future of trails. See what we've done so far, and what's on the horizon at wta.org/trailsrebooted.<br>`,
    chapters: [ { 
        id: 'intro',
        alignment: 'fully',
        hidden: false,
        title: "Making Washington's trails the best place to be",
        image: '',
        description: "WTA's Trails Rebooted campaign supports the state's popular recreation areas by improving existing trails, championing the construction of new ones and helping hikers see the role they play in the future of trails. See what that looks like on trails statewide.",
        location: {
            center: [-119.74887, 47.55533],
            zoom: 7.92,
            pitch: 0.00,
            bearing: 0.00
        },
        onChapterEnter: [
            {
                layer: 'spokaneprojects',
                opacity: 0
            },
            {
                layer: 'mplltraverse',
                opacity: 0
            },
            {
                layer: 'salteserr',
                opacity: 0
            },
            {
                layer: 'etterranch',
                opacity: 0
            },
            {
                layer: 'antoinepeak',
                opacity: 0
            },
            {
                layer: 'silver-star-trailheads',
                opacity: 0
            },
            {
                layer: 'wdfwambassadors',
                opacity: 0
            },
            {
                layer: 'norse-peak-wilderness',
                opacity: 0
            },
        ],
        onChapterExit: [
            {
                layer: 'spokaneprojects',
                opacity: 0.5
            },
            {
                layer: 'mplltraverse',
                opacity: 0.5
            },
            {
                layer: 'salteserr',
                opacity: 0.5
            },
            {
                layer: 'etterranch',
                opacity: 0.5
            },
            {
                layer: 'antoinepeak',
                opacity: 0.5
            },
            {
                layer: 'silver-star-trailheads',
                opacity: 0.5
            },
            {
                layer: 'wdfwambassadors',
                opacity: 0.5
            },
            {
                layer: 'norse-peak-wilderness',
                opacity: 0.5
            },
        ],
},
{ 
            id: 'spokaneoverview',
            alignment: 'left',
            title: 'Building A Better Trail Network Near Spokane',
            image: imageRoot + 'stumpremoval.png',
            description: 'For years, WTA has been building new trails near Spokane. Our recent projects include routes on Mica and Antoine Peaks and at the Saltese Uplands. Each trail built creates more opportunity for hikers to connect to greenspaces, like the 11.5 mile trail between Liberty Lake Regional Park and Mica Peak.',
            location: {
                center: [-117.18175, 47.61076],
                zoom: 12.48,
                pitch: 59.00,
                bearing: 29.60
            },
            mapAnimation: 'easeTo',
             onChapterEnter: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.8
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.8
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		        {
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.8
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 0.8
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
    },
    {
            id: 'micapeaktolibertylake',
            alignment: 'left',
            hidden: false,
            title: 'CASE STUDY: Connecting Mica Peak to Liberty Lake',
            image: imageRoot + 'saltesefrommica.png',
            description: `The 11.5-mile California Creek Trail <a href="https://www.wta.org/go-hiking/hikes/mica-peak-to-liberty-lake-traverse">connects Mica Peak to Liberty Lake</a>. Atfter years of hiker advocacy and volunteer trail work, it <a href="https://www.wta.org/news/signpost/a-new-connection-near-spokane">opened in 2020</a>, giving the nearly 1 million people living in the Spokane Valley an opportunity to visit the headwaters of three major creek systems and to experience some rich elk habitat, all just 30 minutes from the city center.`,
            location: {
                center: [-117.11415, 47.59748],
                zoom: 13.04,
                pitch: 46.50,
                bearing: 13.60 
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.8
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		        {
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
    },
    {       id: 'saltese',
            alignment: 'right',
            hidden: false,
            title: 'More to Explore',
            image: imageRoot + 'salteseflatshiker.png',
            description: "Connecting into the California Creek trail is the Saltese Ridge Trail, which joins the Mica Peak Traverse with the <a href='https://www.wta.org/go-hiking/hikes/saltese-uplands'>Saltese Uplands</a> Conservation area, further extending hiking options in Spokane. <br><br>Well-built trail is especially important here, since the high desert is a sensitive environment. The realigned trail (orange zigzag) that WTA built in 2022 will last longer than the original route, and helps visitors coexist with minimal impact with white-tailed deer, badger, coyote, bobcats, and birds of prey who call this area home.",
            location: {
                center: [-117.09623, 47.57889],
                zoom: 13.65,
                pitch: 50.00,
                bearing: 59.99
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0.8
                },
                {
                    layer: 'etterranch',
                    opacity: 0.8
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.8
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		        {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
        },
        {
            id: 'antoinepeak',
            alignment: 'left',
            hidden: false,
            title: '2013 - Today: Creating Trails in a Local Conservation Area',
            image: imageRoot + 'antoinepeakview.jpeg',
            description: 'With fantastic views overlooking Liberty Lake, the Spokane Valley, and north to Mount Spokane and the Selkirks, Antoine Peak boasts a robust trail network thanks to investments here that have been under way since 2013. We started by helping secure Antoine Peak as a place to recreate. Today, there are three different trailheads, each with several hike options stemming from them.',
            location: {
            center: [-117.19218, 47.72051],
            zoom: 13.48,
            pitch: 28.50,
            bearing: 21.60
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter:[
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0.8
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0.0
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ]
        },
        {
            id: 'etterranch',
            alignment: 'right',
            hidden: false,
            title: 'Many Hikes, One Trailhead',
            image: imageRoot + 'etterranch.png',
            description: 'Most recently, WTA has been working on the trails accessed from Brevier Road. Known as Etter Ranch, this Spokane Valley trailhead opened in 2021 and offers access to three trails: the Arrowleaf Trail, which connects to the Emerald Necklace Loop, and the Lost Apple Trail. Emerald Necklace is a great long day hike, while Lost Apple serves as a shorter and lower elevation option for visitors to enjoy year-round.',
            location: {
                center: [-117.16120, 47.71089],
                zoom: 14.51,
                pitch: 68.00,
                bearing: -12.80
            },
            mapAnimation: 'easeTo',
            onChapterEnter:[
               
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.8
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ]
        },
        {
            id: 'transition',
            alignment: 'center',
            hidden: false,
            title: "Let's Connect",
            image: imageRoot + 'silvershadow.png',
            description: `A cost-effective way to enhance a trail network is by <a href='https://www.wta.org/news/signpost/the-power-of-loops-connections'>adding connector trails to already-existing networks</a>. This helps meet Washington's increasing need for recreation options on tight budgets. We've done this on trail networks statewide, from Spokane to <b><a href='https://www.fox13seattle.com/video/1208910'>Little Mountain Park</a></b> in Mount Vernon, <a href='https://www.wta.org/news/signpost/new-loops-new-hikes-new-views-in-the-columbia-river-gorge'>Lyle Cherry Orchard</a> in the Gorge, and at Silver Star Mountain in southwest Washington.`,
            location: {
                center: [-122.23228, 45.85334],
                zoom: 11.56,
                pitch: 4.00,
                bearing: 72.80
            },
            mapAnimation: 'flyTo',
            callback:'',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0.5
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
                    onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
             ],
            },
{
            id: 'silverstarintro',
            alignment: 'left',
            hidden: false,
            title: '1990 - Today: Championining the Silver Star Recreation Area',
            image: imageRoot + 'silver star vista.png',
            description: `Just outside Battle Ground, the Silver Star area provides a fantastic area for hikers to experience wildflowers, a 5-volcano view, and a variety of trails. <br><br>Hikers who understand the value of having robust trail systems have advocated for trails in this area since the 1990s.`,
            location: {
                center: [-122.27163, 45.73335],
                zoom: 12.81,
                pitch: 54.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
        },
        {
            id: 'appaloosa',
            alignment: 'right',
            hidden: false,
            title: '2022: Charting a Bright Future for Silver Star',
            image: imageRoot + 'hidden falls.jpg',
            description: "This year, WTA, in collaboration with tribes, state and federal agencies, hikers, residents and other stakeholders compiled <a href='https://www.wta.org/news/signpost/a-vision-for-the-future-of-silver-star-recreation-area'>an updated vision plan for Silver Star</a>. It takes into consideration a variety of priorities for the land, and will guide management in this area for years to come, while building on goals set by advocates in the past.",
            location: {
                center: [-122.24903, 45.78099],
                zoom: 11.55,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
        },
        {
            id: 'roadcaveat',
            alignment: 'right',
            hidden: false,
            title: 'Fixing the Roads',
            image: imageRoot + 'caron4109.jpg',
            description: `One major issue that has stymied hikers for years are the roads in Silver Star. People approaching from the west or the south report spectacular vehicular acrobatics to reach the trailhead. Alternately, other visitors park miles from the trailhead, opting to roadwalk rather than risk their car's suspension.`,
            location: {
                center: [-122.1910, 45.7423],
                zoom: 11,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],            
        },
        {
            id: 'bellsmountain',
            alignment: 'right',
            hidden: false,
            title: '',
            image: imageRoot + 'bellsmountaintrail.png',
            description: "Luckily, vehicular access is easier from the south. Visit the <a href='https://www.wta.org/go-hiking/hikes/bells-mt'>Bells Mountain Trail</a>, where <b>this spring</b> WTA work parties improved footing through a muddy area crews know as the Slip'N'Slide. <br></br><br></br>The long trail provides access from Moulton Falls County Park and is a crucial connector for people to access the <a href='https://www.wta.org/go-outside/hikes?title=yacolt+burn&region=all&min_rating=0&show_incomplete=on&mileage%3Alist%3Afloat=0.0&mileage%3Alist%3Afloat=25&elevation_gain%3Alist%3Aint=0&elevation_gain%3Alist%3Aint=5000&highpoint=&searchabletext=&sort_on=&filter=Search&_authenticator=f576ccb15ba35cd9d8dbd165d6017d18da3887ac'>Yacolt Burn State Forest</a>, which shares trails with Silver Star.",
            location: {
                center: [-122.39451041131447, 45.83264308646734],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'appaloosa',
            alignment: 'left',
            hidden: false,
            title: 'CASE STUDY: Connect Trails to Create Loops',
            image: imageRoot + 'appaloosatrailbridge.jpeg',
            description: "Also in Yacolt Burn is the <a href='https://www.wta.org/go-hiking/hikes/appaloosa-trail'>Appaloosa Trail</a> to Hidden Falls, a route WTA finished in 2021 with support from Back Country Horsemen of Washington. This trail makes a fantastic six-mile day hike in the forest, and links to the pre-existing Tarbell Trail. <br><br>WTA also built a connector to the Tarbell Trail on the other side of the State Forest called <a href='https://www.wta.org/go-hiking/hikes/silver-shadow-loop'>Silver Shadow</a>. This route created a 4.6-mile loop hike through a lovely open forest.",
            location: {
                center: [-122.32022, 45.76496],
                zoom: 16.15,
                pitch: 79.00,
                bearing: 78.40
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'bluffmountain',
            alignment: 'left',
            hidden: false,
            title: '2020 - 2023: Bluff Mountain Logouts',
            image: imageRoot + 'bluffbeforeandafter.jpg',
            description: "Past the Appaloosa Trail's connection with the Tarbell Trail, hikers can link into the Silver Star trail network. Silver Star is known for its views, as well as its more rugged trails, like Bluff Mountain. <br><br>Bluff Mountain requires plenty of maintenance; crews work on this trail annually so hikers can access the higher levels of the Silver Star area.",
            location: {
                center: [-122.19152, 45.74160],
                zoom: 13.92,
                pitch: 64.89,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'silverstarwrapup',
            alignment: 'left',
            hidden: false,
            title: '',
            image: imageRoot + 'bluffmountainbcrt.png',
            description: "Hundreds of of people have worked to support an extensive trail network in Silver Star. Volunteers work alongside our paid Lost Trails Found crew (above). And in 2023, a journalist for The Columbian <a href='https://www.columbian.com/news/2023/jun/24/washington-trails-association-preserves-connection-in-clark-county-wild-spaces/'>joined a backcountry response team on this trail</a> to get a real taste of what trail work is like. Maintaining clear trails is especially important this year, since <a href='https://www.wta.org/news/signpost/know-before-you-go-trails-that-will-be-closed-this-summer'>construction or road washouts have closed a lot of popular trails throughout Washington</a> for the season.",
            location: {
                center: [-122.30350, 45.78059],
                zoom: 12.42,
                pitch: 0.00,
                bearing: 18.40
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0.5
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'mlh',
            alignment: 'left',
            hidden: false,
            title: '2019 - Today: Focus on the Mountain Loop Highway',
            image: 'dozer.jpeg',
            description: "With the 2020 passage of the Great American Outdoors Act (thanks in part to <a href='https://www.wta.org/news/signpost/gaoa-provides-vital-funding-for-public-lands'>advocacy from hikers like you</a>, the Forest Service began addressing maintenance backlogs statewide! This includes long overdue improvements to many trails on the Mountain Loop Highway. <br>Many popular trails will be closed for some of the summer. Most of them should reopen in time for you to hike them this year, with the notable exception of Mount Pilchuck.",
            location: {
                center: [-121.97977, 48.14008],
                zoom: 10.13,
                pitch: 5.89,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'pilchuck',
            alignment: 'right',
            hidden: false,
            title: 'Fixing the Roads',
            image: '',
            description: "The road to Mount Pilchuck parking area is notoriously awful. It's not unusual for the 7 miles from the Mountain Loop Highway to the trailhead to take 45 minutes or more. <br><br>But this season's hiking closure means next year Forest Road 42 may be unrecognizable to those who have visited before. And that 7-mile drive might not take quite so long.",
            location: {
                center: [-121.75294, 48.06597],
                zoom: 13.10,
                pitch: 5.89,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'ambassadorprograms',
            alignment: 'left',
            hidden: false,
            title: 'Trailhead Ambassadors: Friendly faces helping hikers',
            image: imageRoot + 'wtaselfie.jpg',
            description: "<b>Rebooting Washington's trail system takes more than on-the-ground road and trail maintenance.</b> It's about <a href='https://www.wta.org/go-outside/trail-smarts/nice-people-nice-hikes'>changing how hikers interact with the landscape, too.</a> <br><br>In recent years, ambassadors have been staffing trailheads in popular recreation areas, offering hikers advice about what to expect on trail, information about the area, even suggestions for other places to go if the trailhead is full.",
            location: {
                center: [-120.91816, 47.11753],
                zoom: 12.00,
                pitch: 19.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'mlhambassadors',
            alignment: 'center',
            hidden: false,
            title: 'Helping Hikers be Trail Smart',
            image: '',
            description: "Ambassadors also share our <a href='https://www.wta.org/go-outside/trail-smarts'>Trail Smarts</a> in-person with Washington's hiking community. Trail Smarts is WTA's package detailing hiking etiquette. We incorporate these into all our communications, including social media and newsletters, but one-on-one time with ambassadors is one of the best ways to convey concepts like Leave No Trace and responsible recreation to hikers heading out for the day.",
            location: {
                center: [-120.91816, 47.11753],
                zoom: 12.00,
                pitch: 19.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'wdfwambassadors',
            alignment: 'left',
            hidden: false,
            title: 'CASE STUDY: Past Success Seeds New Partnerships',
            image: imageRoot + 'hikeronpilchuck.png',
            description: "In 2021, we stationed ambassadors <a href='https://www.wta.org/news/signpost/q-a-with-steven-colson-for-trailhead-ambassador-program> at trailheads on the Mountain Loop Highway</a> and in Gothic Basin, as well as at trailheads in the Columbia River Gorge. Building on the success of trailhead ambassador programs in the past, this year we launched a <a href='https://www.wta.org/get-involved/outreach/wdfw-ambassadors'>program with the Washington Department of Fish and Wildlife </a> to staff six trailheads in Central Washington this summer. <br>Ambassador programs are a key part of Trails Rebooted, since they provide hikers with advice from trail pros right at the start of their day. In addition, they help hikers understand how <a href='https://www.wta.org/go-outside/trail-smarts/nice-people-nice-hikes'>they contribute to everyone's experience on trail.</a>",
            location: {
                center: [-121.17165, 47.09298],
                zoom: 9.90,
                pitch: 15.00,
                bearing: -7.20
            },
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0.5
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {     
            id: 'snoquerateanawayintro',
            alignment: 'right',
            hidden: false,
            title: '',
            image: imageRoot + '',
            description: "Our WDFW ambassadors are right in between our last two Trails Rebooted focus areas: Snoquera (outside Mount Rainier) and the Teanaway Community Forest just east of Snoqualmie Pass. Both of these areas are increasing in popularity as Washington's hikers look to increase their connections with trails.",
            location: {
                center: [-120.91816, 47.11753],
                zoom: 9.85,
                pitch: 19.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                },
            ],
        },
        {
            id: 'snoquera',
            alignment: 'left',
            hidden: false,
            title: '2019 - Present: Peering Into A National Park',
            image: imageRoot + 'snoqeracrew.png',
            description: "Crews working in the Snoquera region are restoring access to a network of trails damaged by fire and erosion. <br><br>This summer, volunteers are rerouting the Echo Lake Trail and installing handrails on new bridges across the Greenwater River. <br><br>We're also repairing trails damaged by fire in the Norse Peak wilderness (outlined in orange). The work is all geared towards dispersing use from Mount Rainier; many trails here boast great views of the mountain with fewer people than the park.",
            location: {
                center: [-121.38690325729652, 47.013913665312785],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'teanaway',
            alignment: 'left',
            hidden: false,
            title: '2013 - Today: Striving for Trails in the Teanaway',
            image: imageRoot + 'teanawayhiker.jpg',
            description: "<br><br>Like at Silver Star, the Teanaway is a real-time example of how long it can take to develop a well-thought out trail network. <a href='https://www.wta.org/news/signpost/meet-the-teanaway-community-forest-2'>Originally purchased in 2013</a> the trail plan was approved just <a href='https://www.wta.org/news/signpost/partnership-brings-new-trails-to-the-teanaway-community-forest'>last year</a>. After almost a year of WTA staff advising on the trails plan, we're excited to have a youth volunteer vacation working on the Cheese Rock trail in the summer!",
            location: {
                center: [-120.97528, 47.28061],
                zoom: 11.15,
                pitch: 1.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'frog',
            alignment: 'right',
            hidden: false,
            title: 'CASE STUDY: Frog Mountain',
            image: '',
            description: `Part of rebooting a trail system is pushing for more trails to be built in order to give hikers more places to be outside. This June, the brand new <a href='https://www.wta.org/news/signpost/discover-frog-mountain-trail-a-triumph-of-conservation-and-recreation-in-wild-sky-wilderness/'>Frog Mountain trail</a> opened in Washington's newest wilderness - the Wild Sky Wilderness. <br><br>Having a new trail in a designated wilderness is very rare, so this is a big win for hikers. A new trail here will also help take pressure off other nearby trails like Heybrook Lookout, Evergreen Mountain, and other popular locations off Highway 2.`,
            location: {
                center: [-121.31442, 47.88487],
                zoom: 12,
                pitch: 1.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: 'true',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'stripedpeak',
            alignment: 'right',
            hidden: false,
            title: 'CASE STUDY: Striped Peak',
            image: imageRoot + 'stripedpeak.jpg',
            description: `We can't forget about the Olympic Peninsula! In 2022, <a href='https://www.wta.org/news/signpost/striped-peak-trail-complete'>WTA opened a 3.5-mile trail on Striped Peak</a>, just a few miles outside of Port Angeles. 270 volunteers came together to build this trail during 83 work parties over the course of 3.5 years. It's part of a larger loop on Striped Peak, so hikers can do a 7 mile out-and-back or a 7.5-mile loop. Like the trails in Silver Star, the additional route on Striped Peak will help hikers flow in a loop, and offers a nice, long day hike relatively close to the nearby city.`,
            location: {
                center: [-123.69940, 48.15884],
                zoom: 14.55,
                pitch: 1.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: 'true',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'conclusion',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: "Washington's trail system requires constant focus and attention statewide to keep it top tier. But it's not just about trail work. <b>To truly reboot trails, WTA needs advocates to speak up for areas they want preserved; stewards to volunteer as ambassadors AND trail workers; and hikers like you to see themselves as an active part of making WTA's trails welcoming and a pleasant place to be.</b>",
            location: {
                center: [-120.15288, 46.91053],
                zoom: 8.07,
                pitch: 33.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                },
            ]
        }
    ],
onLoad: () => {
    map.addSource('mplltraverse'), {
        type: 'geojson',
        lineMetrics: true,
        data: 
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
            "coordinates": [
                            [
                              -75.16397984494239,
                              39.951646746011164
                            ],
                            [
                              -75.16523115022339,
                              39.952030438496166
                            ],
                            [
                              -75.16506430951928,
                              39.9535651869125
                            ],
                            [
                              -75.16331248212602,
                              39.95350123974967
                            ],
                            [
                              -75.16239485825321,
                              39.953053607933526
                            ],
                            [
                              -75.16264511930964,
                              39.95171069490789
                            ],
                            [
                              -75.1636461635342,
                              39.95171069490789
                            ],
                            [
                              -75.1653145705751,
                              39.951902541240315
                            ],
                            [
                              -75.16506430951928,
                              39.9535651869125
                            ],
                            [
                              -75.16498088916691,
                              39.95458833339106
                            ],
                            [
                              -75.16639903515203,
                              39.95497200937447
                            ],
                            [
                              -75.17006953064201,
                              39.957657680991076
                            ],
                            [
                              -75.17015295099439,
                              39.958233168329684
                            ],
                            [
                              -75.1712374155713,
                              39.95836105374727
                            ],
                            [
                              -75.17690999951037,
                              39.963028707812896
                            ],
                            [
                              -75.17665973845457,
                              39.964051712707516
                            ],
                            [
                              -75.17699341986274,
                              39.96494682943393
                            ],
                            [
                              -75.17957945077644,
                              39.9673763729015
                            ],
                            [
                              -75.16072645121228,
                              39.96686489724141
                            ],
                            [
                              -75.15780673889037,
                              39.97901141031275
                            ],
                            [
                              -75.17223745203674,
                              39.98061257870182
                            ],
                            [
                              -75.17048562464345,
                              39.979398052993446
                            ],
                            [
                              -75.16548040352008,
                              39.971087561112796
                            ],
                            [
                              -75.16030834169328,
                              39.966740132046965
                            ],
                            [
                              -75.15905703641226,
                              39.96405481714797
                            ],
                            [
                              -75.15755547007548,
                              39.961944852876655
                            ],
                            [
                              -75.15521970021818,
                              39.95861992855268
                            ],
                            [
                              -75.14879633310976,
                              39.95804444446844
                            ],
                            [
                              -75.14203928459376,
                              39.95612612921113
                            ],
                            [
                              -75.14112166072094,
                              39.95503906001247
                            ],
                            [
                              -75.14112166072094,
                              39.95164985101479
                            ],
                            [
                              -75.14203928459376,
                              39.94826047407301
                            ],
                            [
                              -75.16397883718327,
                              39.950754560220105
                            ]
                          ],
                          "type": "LineString"
                        }
                      }
                }
                map.addLayer({
                    id: 'mplltraverse',
                    type: 'line',
                    source: 'mplltraverse', 
                    paint: {
                        'line-color': "rgba(0,0,0,0)",
                        'line-width': 8,
                        'line-opacity': 0.8
                    }
                })
            }
        }
