// @flow
import { createStore } from 'redux'
import appReducer from './reducer'
import { emptyArray } from './types/ReduxState'
import { actionType as type } from './types/ReduxAction'

import type { Store } from 'redux'
import type { RepositoryList } from './types/APIDataModel'
import type { ReduxState } from './types/ReduxState'
import type { ReduxAction } from './types/ReduxAction'

const repo = {
  id: 1,
  name: 'repo',
  full_name: 'reporepo',
  owner: {
    login: 'monmon',
    id: 1,
    avatar_url: 'url',
    gravatar_id: '1',
    url: 'url',
    html_url: 'url',
    followers_url: 'url',
    following_url: 'url',
    gists_url: 'url',
    starred_url: 'url',
    subscriptions_url: 'url',
    organizations_url: 'url',
    repos_url: 'url',
    events_url: 'url',
    received_events_url: 'url',
    type: 'url',
    site_admin: true
  },
  private: true,
  html_url: 'url',
  description: 'url',
  fork: true,
  url: 'url',
  forks_url: 'url',
  keys_url: 'url',
  collaborators_url: 'url',
  teams_url: 'url',
  hooks_url: 'url',
  issue_events_url: 'url',
  events_url: 'url',
  assignees_url: 'url',
  branches_url: 'url',
  tags_url: 'url',
  blobs_url: 'url',
  git_tags_url: 'url',
  git_refs_url: 'url',
  trees_url: 'url',
  statuses_url: 'url',
  languages_url: 'url',
  stargazers_url: 'url',
  contributors_url: 'url',
  subscribers_url: 'url',
  subscription_url: 'url',
  commits_url: 'url',
  git_commits_url: 'url',
  comments_url: 'url',
  issue_comment_url: 'url',
  contents_url: 'url',
  compare_url: 'url',
  merges_url: 'url',
  archive_url: 'url',
  downloads_url: 'url',
  issues_url: 'url',
  pulls_url: 'url',
  milestones_url: 'url',
  notifications_url: 'url',
  labels_url: 'url',
  releases_url: 'url',
  deployments_url: 'url',
  created_at: 'url',
  updated_at: 'url',
  pushed_at: 'url',
  git_url: 'url',
  ssh_url: 'url',
  clone_url: 'url',
  svn_url: 'url',
  homepage: 'url',
  size: 1,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'url',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: true,
  forks_count: 1,
  mirror_url: null,
  archived: true,
  open_issues_count: 1,
  license: {
    key: 'url',
    name: 'url',
    spdx_id: 'url',
    url: 'url'
  },
  forks: 1,
  open_issues: 1,
  watchers: 1,
  default_branch: 'url',
  score: 1
}

describe('INIT', () => {
  it('should "uninitialized." defined in initialState', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const state: ReduxState = store.getState()

    expect(state.boot).toBe('uninitialized.')
  })

  it('should "initialized by redux." defined in initialState', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    store.dispatch({ type: type.INIT })
    const state: ReduxState = store.getState()

    expect(state.boot).toBe('initialized by redux.')
  })
})

describe('START_LOADING', () => {
  it('should isLoading:false defined in initialState', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const state: ReduxState = store.getState()

    expect(state.isLoading).toBe(false)
  })

  it('should be isLoading:true when dispatched START_LOADING', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    store.dispatch({ type: type.START_ASYNC })
    const state: ReduxState = store.getState()

    expect(state.isLoading).toBe(true)
  })
})

describe('ASYNC_FETCH_REPOSITORY', () => {
  it('should emptyArray defined in initianlState ', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const state: ReduxState = store.getState()

    expect(state.repositoryList).toBe(emptyArray)
  })

  it('should set repositoryList when dispatch', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const repositoryList: RepositoryList = [repo]
    store.dispatch({
      type: type.ASYNC_FETCH_REPOSITORY,
      payload: { repositoryList }
    })
    const state: ReduxState = store.getState()

    expect(state.repositoryList).toBe(repositoryList)
  })

  it('should set isLoading:false when dispatch', () => {
    const store: Store<ReduxState, ReduxAction> = createStore(appReducer)
    const repositoryList: RepositoryList = [repo]

    store.dispatch({ type: type.START_ASYNC })
    store.dispatch({
      type: type.ASYNC_FETCH_REPOSITORY,
      payload: {
        repositoryList
      }
    })
    const state: ReduxState = store.getState()

    expect(state.isLoading).toBe(false)
  })
})
