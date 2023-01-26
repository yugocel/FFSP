const lists = [
    {
        heading: 'mail',
        links: [
            {
                title: 'proton',
                url: 'https://mail.proton.me/u/0/inbox/',
            },
	    {
                title: 'zimbra',
                url: 'https://webmail.th-brandenburg.de/#1',
            },
	    {
                title: 'gmail',
                url: 'https://mail.google.com/mail/u/0/#inbox',
            },
        ],
    },
    {
        heading: 'uni',
        links: [
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
	    {
                title: 'Prüfung',
                url: 'https://www.th-brandenburg.de/studium/pruefungen-und-termine/pruefungsplaene/',
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
        ],
    },
    {
        heading: 'media',
        links: [
            {
                title: 'insta',
                url: 'https://www.instagram.com/',
            },
	    {
                title: 'twitch',
                url: 'https://www.twitch.tv/',
            },
            {
                title: 'youtube',
                url: 'https://www.youtube.com/',
            },
            {
                title: 'amznprime',
                url: 'https://www.amazon.de/Amazon-Video/b/?node=3010075031&ref=atv_surl_aiv&redirectToCMP=1',
            },
		
        ],
    },
    {
        heading: 'research',
        links: [
            {
                title: 'stackX',
                url: 'https://stackexchange.com/',
            },
       	    {
                title: 'JavaForum',
                url: 'https://www.java-forum.org/',
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
