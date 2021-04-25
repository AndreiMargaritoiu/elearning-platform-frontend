import queryString from 'query-string';

interface Payload {
  readonly uid?: string;
  readonly category?: string[];
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
      category: query.category && (query.category as string[]),
    };
    return formattedQuery;
  }

  static queryString(search: SearchMentorshipsRequest) {
    return queryString.stringify(
      {
        uid: search.uid,
        category: search.category,
      },
      { skipNull: true },
    );
  }

  readonly uid?: string;
  readonly category?: string[];

  private constructor({ uid, category }: Payload) {
    if (uid) {
      this.uid = uid;
    }

    if (category) {
      this.category = category;
    }
  }
}
