export interface CreateUserPayload {
  email: string;
  username: string;
  uid: string;
  following: string[];
  searchIndex: string[];
  photoUrl?: string;
  admin?: boolean;
}

export interface UpdateUserRequest {
  following?: string[];
  photoUrl?: string;
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
  readonly photoUrl?: string;
  readonly admin?: boolean;

  constructor(payload: CreateUserPayload) {
    const {
      uid,
      email,
      username,
      following,
      searchIndex,
      photoUrl,
      admin,
    } = payload;

    this.uid = uid;
    this.email = email;
    this.username = username;
    this.following = following;
    this.searchIndex = searchIndex;
    this.photoUrl = photoUrl;
    this.admin = admin;
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
      photoUrl: user.photoUrl,
      admin: user.admin,
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
      photoUrl: data.photoUrl,
      admin: data.admin,
    };
    return new User(payload);
  },
};
