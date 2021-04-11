import queryString from 'query-string';

interface Payload {
  readonly uid?: string;
}

export interface SearchParams {
  [key: string]: string | string[] | boolean;
}

export class SearchMentorshipsRequest {
  static create(request?: Payload) {
    return new SearchMentorshipsRequest(request || {});
  }

  static extractDataFromQuery(query: any) {
    const formattedQuery = {
      uid: query.uid && (query.uid as string),
    };
    return formattedQuery;
  }

  static queryString(search: SearchMentorshipsRequest) {
    return queryString.stringify(
      {
        uid: search.uid,
      },
      { skipNull: true },
    );
  }

  readonly uid?: string;

  private constructor({ uid }: Payload) {
    if (uid) {
      this.uid = uid;
    }
  }
}
