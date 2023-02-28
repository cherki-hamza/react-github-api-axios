import React from 'react'

export const RepoItem = ({ repo }) => {
    return (
        <a target='_blink' href={repo.html_url} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{repo.name}</h5>
                <small>{new Date(Date.parse(repo.created_at)).toLocaleDateString()}</small>
            </div>
            <p className="mb-1">{repo.description}</p>
            <small>{repo.html_url}</small>
        </a>
    )
}
