export const USER_ROLE = {
    user: 'customer',
    admin: 'admin',
} as const;

export const user_role = {
    user: 'user',
    admin: 'admin',
}

export type TRoles = 'user' | 'admin'