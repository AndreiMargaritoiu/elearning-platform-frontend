import queryString from 'query-string';

interface Payload {
  readonly followedBy?: string;
}

export interface SearchParams {
  [key: string]: string | string[] | boolean;
}

export class SearchUsersRequest {
  static create(request?: Payload) {
    return new SearchUsersRequest(request || {});
  }

  static extractDataFromQuery(query: any) {
    const formattedQuery = {
      followedBy: query.followedBy && (query.followedBy as string),
    };
    return formattedQuery;
  }

  static queryString(search: SearchUsersRequest) {
    return queryString.stringify(
      {
        followedBy: search.followedBy,
      },
      { skipNull: true },
    );
  }

  readonly followedBy?: string;

  private constructor({ followedBy }: Payload) {
    if (followedBy) {
      this.followedBy = followedBy;
    }
  }
}
