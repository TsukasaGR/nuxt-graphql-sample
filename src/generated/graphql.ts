export type Maybe<T> = T | null

/** A datetime string with format 'Y-m-d H:i:s', e.g. '2018-01-01 13:00:00'. */
export type DateTime = any

export type Users = any

/** A date string with format 'Y-m-d', e.g. '2011-05-23'. */
export type Date = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  users?: Maybe<UserPaginator>

  user?: Maybe<User>

  usersByEmail?: Maybe<UserPaginator>
}

export interface UserPaginator {
  paginatorInfo: PaginatorInfo

  data: User[]
}

export interface PaginatorInfo {
  /** Total count of available items in the page. */
  count: number
  /** Current pagination page. */
  currentPage: number
  /** Index of first item in the current page. */
  firstItem?: Maybe<number>
  /** If collection has more pages. */
  hasMorePages: boolean
  /** Index of last item in the current page. */
  lastItem?: Maybe<number>
  /** Last page number of the collection. */
  lastPage: number
  /** Number of items per page in the collection. */
  perPage: number
  /** Total items available in the collection. */
  total: number
}

export interface User {
  id: string

  name: string

  email: string

  password: string

  avatar: string

  articles?: Maybe<(Maybe<Article>)[]>

  createdAt: DateTime

  updatedAt: DateTime
}

export interface Article {
  id: string

  userId: number

  title: string

  body: string

  createdAt: DateTime

  updatedAt: DateTime
}

export interface Mutation {
  createUser?: Maybe<User>

  updateUser?: Maybe<User>

  deleteUser?: Maybe<User>

  deleteUsersByEmail?: Maybe<DummyResponse>

  createUsers?: Maybe<DummyResponse>
}

export interface DummyResponse {
  res: string
}

export interface PageInfo {
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<string>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<string>
  /** Total number of node in connection. */
  total?: Maybe<number>
  /** Count of nodes in current request. */
  count?: Maybe<number>
  /** Current page of request. */
  currentPage?: Maybe<number>
  /** Last page in connection. */
  lastPage?: Maybe<number>
}

// ====================================================
// Arguments
// ====================================================

export interface UsersQueryArgs {
  count: number

  page?: Maybe<number>
}
export interface UserQueryArgs {
  id?: Maybe<string>
}
export interface UsersByEmailQueryArgs {
  email?: Maybe<string>

  count: number

  page?: Maybe<number>
}
export interface CreateUserMutationArgs {
  name?: Maybe<string>

  email?: Maybe<string>

  password?: Maybe<string>
}
export interface UpdateUserMutationArgs {
  id: string

  name: string

  email: string
}
export interface DeleteUserMutationArgs {
  id: string
}
export interface DeleteUsersByEmailMutationArgs {
  email: string
}
export interface CreateUsersMutationArgs {
  users?: Maybe<Users>
}
