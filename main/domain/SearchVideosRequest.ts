import queryString from 'query-string';

interface Payload {
  readonly uid?: string;
  readonly playlistId?: string;
  readonly trending?: boolean;
  readonly followers?: boolean;
}

export interface SearchParams {
  [key: string]: string | string[] | boolean;
}

export class SearchVideosRequest {
  static create(request?: Payload) {
    return new SearchVideosRequest(request || {});
  }

  static extractDataFromQuery(query: any) {
    const formattedQuery = {
      uid: query.uid && (query.uid as string),
      playlistId: query.playlistId && (query.playlistId as string),
      trending: query.trending && (query.trending as string),
      followers: query.followers && (query.followers as string),
    };
    return formattedQuery;
  }

  static queryString(search: SearchVideosRequest) {
    return queryString.stringify(
      {
        uid: search.uid,
        playlistId: search.playlistId,
        trending: search.trending,
        followers: search.followers,
      },
      { skipNull: true },
    );
  }

  readonly uid?: string;
  readonly playlistId?: string;
  readonly trending?: boolean;
  readonly followers?: boolean;

  private constructor({ uid, playlistId, trending, followers }: Payload) {
    if (uid) {
      this.uid = uid;
    }

    if (playlistId) {
      this.playlistId = playlistId;
    }

    if (trending) {
      this.trending = trending;
    }

    if (followers) {
      this.followers = followers;
    }
  }
}
