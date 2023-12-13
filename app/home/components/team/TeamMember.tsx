import React from 'react'
import { ITeamMember } from './lib/definition';

export default function TeamMember({ data }: { data: ITeamMember }) {
    console.log(data);
    return (
        <div>
            <h1>{data.userName}</h1>
            <p>{data.position}</p>
        </div>
    )
}
