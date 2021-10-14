const teams = [
    {
        name: 'Front End Team'
    },
    {
        name: 'Back End Team'
    },
    {
        name: 'Infrastructure Team'
    },
    {
        name: 'Quality Team'
    },
    {
        name: 'Dev Ops Team'
    },
]

const DOM = {
    teamsContainer: document.querySelector('#data-table tbody'),

    addTeam(team, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTeam(team)

        DOM.teamsContainer.appendChild(tr)
    },

    innerHTMLTeam(team) {
        const html = `
        <td class="name">${team.name}</td>
        `
        return html
    }
}

const App = {
    init() {
        teams.forEach(DOM.addTeam)
        /*
        teams.forEach(function(team) {
            DOM.addTeam(team)
        })*/
    }
}

App.init()