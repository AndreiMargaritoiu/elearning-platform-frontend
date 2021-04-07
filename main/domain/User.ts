export interface CreateUserPayload {
  email: string;
  username: string;
  uid: string;
  following: string[];
  searchIndex: string[];
  profilePictureUrl: string;
}

export class User {
  static create(payload: CreateUserPayload): User {
    return new User(payload);
  }

  readonly uid: string;
  readonly email: string;
  readonly username: string;
  readonly following: string[];
  readonly searchIndex: string[];
  readonly profilePictureUrl: string;

  constructor(payload: CreateUserPayload) {
    const {
      uid,
      email,
      username,
      following,
      searchIndex,
      profilePictureUrl,
    } = payload;

    this.uid = uid;
    this.email = email;
    this.username = username;
    this.following = following;
    this.searchIndex = searchIndex;
    this.profilePictureUrl = profilePictureUrl;
  }
}

export const userConverter = {
  toFirestore: (user: User) => {
    return {
      uid: user.uid,
      email: user.email,
      username: user.username,
      following: user.following,
      searchIndex: user.searchIndex,
      profilePictureUrl: user.profilePictureUrl,
    };
  },
  fromFirestore(snapshot: any, options: any) {
    const data = snapshot.data(options);
    const payload: CreateUserPayload = {
      uid: data.uid,
      email: data.email,
      username: data.username,
      following: data.following,
      searchIndex: data.searchIndex,
      profilePictureUrl: data.profilePictureUrl,
    };
    return new User(payload);
  },
};
