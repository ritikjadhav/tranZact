import { atom } from 'recoil'
import { Balance } from '../types'

export const balanceAtom = atom<Balance>({
    key: 'balance',
    default: {
        amount:0,
        locked: 0,
    },
})