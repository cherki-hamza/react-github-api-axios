import React from 'react'
import { RepoItem } from './RepoItem'

export const RepoList = () => {
    return (
        repos.map((repo, index) => ui.push(<RepoItem key={index} repo={repo} />))
            (
                <div className="list-group">
                    {ui}
                </div>
            )
    )
}
