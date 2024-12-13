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
                title: 'timetable',
                url: 'https://informatik.th-brandenburg.de/Stundenplan/Plan.htm',
            },
            {
                title: 'moodle',
                url: 'https://moodle.th-brandenburg.de/my/courses.php',
            },
	    {
                title: 'exams',
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
                title: 'n-tv',
                url: 'https://www.n-tv.de/der_tag/',
            },
            {
                title: 'Golem',
                url: 'https://www.golem.de/',
            },
        ],
    },
    {
        heading: 'media',
        links: [
            {
                title: 'youtube',
                url: 'https://www.youtube.com/',
            },
	    {
                title: 'twitch',
                url: 'https://www.twitch.tv/',
            },
            {
                title: 'printres',
                url: 'https://www.pinterest.de/',
            },
            {
                title: 'amznprime',
                url: 'https://www.amazon.de/Amazon-Video/b/?node=3010075031&ref=atv_surl_aiv&redirectToCMP=1',
            },
		
        ],
    },
    {
        heading: 'misc',
        links: [
            {
                title: 'check24',
                url: 'https://kundenbereich.check24.de/index.html',
            },
       	    {
                title: 'crackmes',
                url: 'https://crackmes.one/user/ygxl',
            },
            {
                title: 'ebayKa',
                url: 'https://www.kleinanzeigen.de/s-14770/l7739',
            },
	    {
                title: 'github',
                url: 'https://github.com/',
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
