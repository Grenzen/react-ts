import { UsersType } from './users'
import * as actions from '../actions/users'
import { usersReducer } from './users'

const userId1 = 'sdfghj'
const userId2 = 'sdfgfghjfdhj'
const userId3 = 'sddgffs'
// const testState: UsersType[] = [
//     {
//         userId: userId1,
//         userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
//         userFullName: 'Joan One',
//         userStatus: 'Hi there',
//         userLocation: {
//             country: 'Belarus',
//             city: 'Minsk',
//         },
//         followed: true,
//     },
//     {
//         userId: userId2,
//         userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
//         userFullName: 'Joan Two',
//         userStatus: 'Hi there',
//         userLocation: {
//             country: 'Russia',
//             city: 'Moscow',
//         },
//         followed: false,
//     },
//     {
//         userId: userId3,
//         userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
//         userFullName: 'Joan Three',
//         userStatus: 'Hi there',
//         userLocation: {
//             country: 'Poland',
//             city: 'Warshaw',
//         },
//         followed: true,
//     },
// ]
//
// test('should change follow in correct object', () => {
//     const endState = usersReducer(testState, actions.changeFollow(userId1, testState[ 0 ].followed))
//
//     expect(testState).not.toBe(endState)
//     expect(testState[ 0 ].followed).toBe(true)
//     expect(endState[ 0 ].followed).toBe(false)
// })
//
// test('should add new users to array', () => {
//     const newUsers: UsersType[] = [
//         {
//             userId: 'dfhgf',
//             userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
//             userFullName: 'Joan Four',
//             userStatus: 'Hi there',
//             userLocation: {
//                 country: 'Ukraine',
//                 city: 'Kiyv',
//             },
//             followed: true,
//         },
//         {
//             userId: 'dghtrw',
//             userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
//             userFullName: 'Joan Five',
//             userStatus: 'Hi there',
//             userLocation: {
//                 country: 'Latvia',
//                 city: 'Riga',
//             },
//             followed: false,
//         },
//     ]
//     const endState = usersReducer(testState, actions.setUsers(newUsers))
//
//     expect(testState).not.toBe(endState)
//     expect(testState).toHaveLength(3)
//     expect(endState).toHaveLength(5)
// })