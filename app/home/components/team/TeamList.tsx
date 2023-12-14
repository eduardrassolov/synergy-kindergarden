import React from 'react'
import Header from '../typography/Header'
import TeamMember from './TeamMember'
import getTeam from './getTeam'

const team = [
    {
        id: "1",
        userName: "Пані Олександра",
        position: "Директор",
        photoUrl: "url"
    },
    {
        id: "2",
        userName: "Пані Світлана",
        position: "Вихователь середньої групи",
        photoUrl: "url"
    }
]

export default async function TeamList() {
    const data = await getTeam();
    console.log(data);

    return (
        <section>
            <Header>Наша команда:</Header>
            <div className="flex gap-8">
                {team.map(teamMember => <TeamMember key={teamMember.id} data={teamMember} />)}
            </div>
        </section>
    )
}
