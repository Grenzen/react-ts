export type UserType = {
    id: string
    firstName: string
    lastName: string
    surName: string
    avatar: string
    background: string
    birthDate: string
    city: string
    education: string
    website: string
}

const initialState: UserType = {
    id: 'cscs',
    firstName: 'John',
    lastName: 'Dou',
    surName: '',
    avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
    background: 'https://st.depositphotos.com/1522993/4737/v/950/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg',
    birthDate: '2 January 2000',
    city: 'Minsk',
    education: 'BSU\'11',
    website: 'https://it-kamasutra.com',
}

export const userReducer = (state: UserType = initialState, action: any): UserType => {
    return state
}