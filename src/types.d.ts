type Profile = import('./repositories/profile/profile').default;

export type HttpResquest = import('express').Request & {profile: Profile};

export type HttpResponse = import('express').Response;
