const lists = [
    {
        heading: 'dev',
        links: [
            {
                title: 'github',
                url: 'https://www.github.com/',
            },
            {
                title: 'stackX',
                url: 'https://stackexchange.com/',
            },
            {
                title: 'leetcode',
                url: 'https://www.leetcode.com/',
            },
        ],
    },
    {
        heading: 'uni',
        links: [
            {
                title: 'zimbra',
                url: 'https://webmail.th-brandenburg.de/#1',
            },
            {
                title: 'weekplan',
                url: 'https://informatik.th-brandenburg.de/Stundenplan/Plan.htm',
            },
            {
                title: 'calender',
                url: 'https://calendar.google.com/calendar/u/0/r/week?pli=1',
            },
            {
                title: 'moodle',
                url: 'https://moodle.th-brandenburg.de/course/index.php?categoryid=31',
            },
        ],
    },
    {
        heading: 'news',
        links: [
            {
                title: 'TS',
                url: 'https://www.tagesspiegel.de/',
            },
            {
                title: 'NYT',
                url: 'https://www.nytimes.com/international/section/world',
            },
            {
                title: 'twitter',
                url: 'https://twitter.com/?lang=en',
            },
            {
                title: 'proglib',
                url: 'https://proglib.io/',
            },
        ],
    },
    {
        heading: 'media',
        links: [
            {
                title: 'anime',
                url: 'https://animego.org/',
            },
            {
                title: 'insta',
                url: 'https://www.instagram.com/',
            },
            {
                title: 'youtube',
                url: 'https://www.youtube.com/',
            },
            {
                title: 'amznprime',
                url: 'https://www.amazon.de/Amazon-Video/b/?node=3010075031&ref=atv_surl_aiv&redirectToCMP=1'
            }
        ],
    },
    {
        heading: 'reddit',
        links: [
            {
                title: 'r/unixporn',
                url: 'https://www.reddit.com/r/unixporn/',
            },
            {
                title: 'r/startpages',
                url: 'https://www.reddit.com/r/startpages/',
            },
            {
                title: 'r/linuxmemes',
                url: 'https://www.reddit.com/r/linuxmemes/',
            },
        ],
    },
]

function renderLists() {
    const linksWrapper = document.querySelector('#links')

    lists.forEach(list => {
        const linksTemplate = list.links.map(link => {
            return `
				<li class="links__item">
					<a class="links__link" href="${link.url}">${link.title}</a>
				</li>
			`
        })

        const template = `
			<ul class="links">
				<li class="links__item">
					<span class="links__heading">${list.heading}</span>
				</li>
				${linksTemplate.join('')}
			</ul>
		`

        linksWrapper.insertAdjacentHTML('beforeend', template)
    })
}

renderLists()
